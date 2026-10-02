import requests
import json

URL = "http://127.0.0.1:5000/webhooks/inbound"

payload = {
    "entry": [
        {
            "changes": [
                {
                    "value": {
                        "messages": [
                            {
                                "from": "22892590009",
                                "type": "text",
                                "text": {
                                    "body": "Salut" 
                                }
                            }
                        ]
                    },
                    "field": "messages"
                }
            ]
        }
    ]
}

print(" Envoi d'un faux message 'Salut' mon bot...")
response = requests.post(URL, json=payload)

print(f"Statut de la réponse : {response.status_code}")
print(f"Retour du serveur : {response.text}")