from vonage import Auth, Vonage
from vonage_messages import Sms

client = Vonage(
    Auth(
        api_key="a741921b",
        api_secret="VOTRE_SECRET_VONAGE_ICI",
    )
)

response = client.messages.send(
    Sms(
        to="22892590009",
        from_="Vonage APIs", 
        text="This is an SMS text message sent using the Vonage Messages API.",
    )
)

print(response)