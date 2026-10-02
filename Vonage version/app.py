import json
import os
from dotenv import load_dotenv
from flask import Flask, jsonify, request

from vonage import Auth, Vonage
from vonage_messages import WhatsappText

from bot_logic import DotomBot

load_dotenv("dotom.env")

app = Flask(__name__)

auth = Auth(
    application_id=os.getenv("VONAGE_APPLICATION_ID"),
    private_key=os.getenv("VONAGE_PRIVATE_KEY_PATH", "private.key"),
)
client = Vonage(auth=auth)

# gère les sessions utilisateurs)
bot = DotomBot()


def send_whatsapp_message(to: str, text: str):
    """Envoie un message WhatsApp via le nouveau SDK Vonage Messages."""
    try:
        from_number = os.getenv("VONAGE_WHATSAPP_NUMBER", "").strip()

        clean_to = to.replace("+", "").strip()

        whatsapp_message = WhatsappText(
            to=clean_to,
            from_=from_number,
            text=text,
        )

        response = client.messages.send(whatsapp_message)
        print(f"[OK] Message envoyé à {clean_to}: {response}")
        return response

    except Exception as e:
        print(f"[ERREUR] Vonage: {e}")
        return None

@app.route("/webhooks/inbound", methods=["POST"])
def inbound_message():
    """Reçoit les messages entrants WhatsApp."""
    data = request.get_json(force=True)
    print(f"[ENTRANT] {json.dumps(data, indent=2, ensure_ascii=False)}")

    try:
        channel = data.get("channel", "")
        if channel != "whatsapp":
            return jsonify({"status": "ignored"}), 200

        from_number = data.get("from", "")
        message_type = data.get("message_type", "")

        # Vonage envoie 'text' directement sous forme de chaîne de caractères
        if message_type == "text":
            user_text = data.get("text", "")
            if isinstance(user_text, str):
                user_text = user_text.strip()
        else:
            user_text = ""

        if not from_number or not user_text:
            return jsonify({"status": "no content"}), 200

        print(f"[MESSAGE] De {from_number}: '{user_text}'")

        responses = bot.process_message(from_number, user_text)

        for resp in responses:
            send_whatsapp_message(from_number, resp)

    except Exception as e:
        print(f"[ERREUR] inbound_message: {e}")

    return jsonify({"status": "ok"}), 200


@app.route("/webhooks/status", methods=["POST"])
def message_status():
    """Reçoit les statuts de livraison des messages."""
    data = request.get_json()
    print(f"[STATUT] {json.dumps(data, indent=2, ensure_ascii=False)}")
    return jsonify({"status": "ok"}), 200


@app.route("/health", methods=["GET"])
def health_check():
    """Endpoint de santé pour vérifier que le serveur tourne."""
    return jsonify({
        "status": "ok",
        "bot": "Doto'm WhatsApp Bot",
        "version": "1.0.0",
        "active_sessions": len(bot.sessions),
    }), 200


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    debug = os.getenv("DEBUG", "true").lower() == "true"
    print(f"  Doto'm Bot démarré sur le port {port}")
    app.run(host="0.0.0.0", port=port, debug=debug)