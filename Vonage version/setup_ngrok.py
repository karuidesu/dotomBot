"""
Script utilitaire pour configurer automatiquement ngrok + Vonage webhooks
Usage: python setup_ngrok.py
"""

import requests
import os
import sys
import json
import time
from dotenv import load_dotenv

load_dotenv()


def get_ngrok_url(max_retries: int = 10, wait: float = 1.0) -> str:
    """Récupère l'URL publique ngrok depuis l'API locale."""
    for attempt in range(max_retries):
        try:
            resp = requests.get("http://localhost:4040/api/tunnels", timeout=2)
            tunnels = resp.json().get("tunnels", [])
            for tunnel in tunnels:
                if tunnel.get("proto") == "https":
                    return tunnel["public_url"]
            print(f"[{attempt+1}/{max_retries}] En attente du tunnel ngrok...")
        except requests.ConnectionError:
            print(f"[{attempt+1}/{max_retries}] ngrok pas encore démarré...")
        time.sleep(wait)
    raise RuntimeError("Impossible de récupérer l'URL ngrok. Vérifie que ngrok est bien lancé.")


def update_vonage_webhooks(ngrok_url: str):
    """Met à jour les webhooks de l'application Vonage."""
    app_id = os.getenv("VONAGE_APPLICATION_ID")
    api_key = os.getenv("VONAGE_API_KEY")
    api_secret = os.getenv("VONAGE_API_SECRET")

    if not all([app_id, api_key, api_secret]):
        print("\n⚠️  Variables manquantes pour la mise à jour automatique Vonage.")
        print("   Ajoute VONAGE_API_KEY et VONAGE_API_SECRET dans ton .env")
        print("\n📋 Configure manuellement dans le dashboard Vonage :")
        print(f"   Inbound : {ngrok_url}/webhooks/inbound")
        print(f"   Status  : {ngrok_url}/webhooks/status")
        return

    payload = {
        "name": "Doto'm WhatsApp Bot",
        "capabilities": {
            "messages": {
                "webhooks": {
                    "inbound_url": {
                        "address": f"{ngrok_url}/webhooks/inbound",
                        "http_method": "POST"
                    },
                    "status_url": {
                        "address": f"{ngrok_url}/webhooks/status",
                        "http_method": "POST"
                    }
                }
            }
        }
    }

    try:
        resp = requests.put(
            f"https://api.nexmo.com/v2/applications/{app_id}",
            auth=(api_key, api_secret),
            json=payload,
            timeout=10
        )
        if resp.status_code == 200:
            print("✅ Webhooks Vonage mis à jour avec succès !")
        else:
            print(f"⚠️  Erreur Vonage API: {resp.status_code} — {resp.text}")
            print("\n📋 Configure manuellement dans le dashboard Vonage :")
            print(f"   Inbound : {ngrok_url}/webhooks/inbound")
            print(f"   Status  : {ngrok_url}/webhooks/status")
    except Exception as e:
        print(f"⚠️  Erreur lors de la mise à jour : {e}")


def main():
    print("  Doto'm Bot — Configuration ngrok + Vonage")
    print("=" * 50)

    print("\n⏳ Récupération de l'URL ngrok...")
    try:
        ngrok_url = get_ngrok_url()
    except RuntimeError as e:
        print(f"\n❌ {e}")
        print("\nAssure-toi que ngrok est lancé avec :")
        print("  ngrok http 5000")
        sys.exit(1)

    print(f"\n✅ URL ngrok détectée : {ngrok_url}")
    print(f"\n📡 Webhooks configurés :")
    print(f"   POST {ngrok_url}/webhooks/inbound")
    print(f"   POST {ngrok_url}/webhooks/status")
    print(f"   GET  {ngrok_url}/health")

    update_vonage_webhooks(ngrok_url)

    print("\n" + "=" * 50)
    print("🚀 Configuration terminée !")
    print("\n📋 Prochaines étapes :")
    print("1. Démarre le bot    : python app.py")
    print("2. Dans le dashboard Vonage > Applications > Ton App > Edit")
    print(f"   → Inbound URL : {ngrok_url}/webhooks/inbound")
    print(f"   → Status URL  : {ngrok_url}/webhooks/status")
    print("3. Envoie 'Bonjour' sur WhatsApp pour tester !")


if __name__ == "__main__":
    main()
