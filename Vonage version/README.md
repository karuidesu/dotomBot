#   Première tebtative avec Vonage


## Installation

### 1. Prérequis

- Python 3.8+
- Un compte [Vonage](https://dashboard.nexmo.com)
- [ngrok](https://ngrok.com/download) installé

```bash
pip install -r requirements.txt
```

### 2. Configuration Vonage

#### a) Créer une Application Vonage
1. Sur [dashboard.nexmo.com/applications](https://dashboard.nexmo.com/applications)
2. **Create a new application**
3. Donnez lui un nom 
4. Activez la capacité **Messages**
5. Pour les webhooks, mettz temporairement :
   - Inbound URL : `https://exemple.com/webhooks/inbound`
   - Status URL : `https://exemple.com/webhooks/status`
6. **Generate new application**
7. **Téléchargez le fichier `private.key`** et placez-le dans le dossier

#### b) Lier le numéro WhatsApp
1. Dans l'application Vonage> **Linked numbers**
2. Lie ton numéro WhatsApp Sandbox ou production

---

## Démarrage

### Terminal 1 Vscode — Démarrage de ngrok
```bash
ngrok http 5000
```
Copiez l'URL HTTPS affichée (ex: `https://abc123.ngrok.io...........`)

### Terminal 2 — Configuration des webhooks
```bash
python setup_ngrok.py
```
Ce script récupère automatiquement l'URL ngrok et affiche les URLs à configurer dans Vonage.

### Terminal 3 — Démarrer le bot
```bash
python app.py
```

### Terminal 4 — Mettre à jour les webhooks Vonage
Dans le dashboard Vonage > ton application > Edit :
- **Inbound URL** : `https://(url de ngrok).ngrok.io/webhooks/inbound`
- **Status URL** : `https://(url de ngrok).ngrok.io/webhooks/status`

---

## Utilisation

Envoie un WhatsApp au numéro Vonage configuré (il commence normalement par +1 4....). Le bot démarre automatiquement.


### Flux principal
```
Utilisateur → "Bonjour"
Bot → Message d'accueil + sélection de langue

Utilisateur → "1" (Français)
Bot → Menu principal

Utilisateur → "1" → Quiz JPS (5 questions A/B)
Utilisateur → "2" → Aide VBG (mots-clés : AIDE, URGENCE, VBG, SOS)
Utilisateur → "3" → Podcasts
```

## 🔧 Vérification

```bash
# Tester que le serveur tourne
curl http://localhost:5000/health

# Réponse attendue
{
  "status": "ok",
  "bot": "Doto'm WhatsApp Bot",
  "version": "1.0.0",
  "active_sessions": 0
}
```