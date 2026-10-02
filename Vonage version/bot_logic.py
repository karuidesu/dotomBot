from typing import Dict, List, Optional
from dataclasses import dataclass, field
from datetime import datetime, timedelta
import re


WELCOME_MESSAGES = {
    "fr": (
        "  *Bienvenue sur Doto'm !*\n\n"
        "Doto'm est ta plateforme jeunesse pour la Paix, la Sécurité et la lutte contre les Violences Basées sur le Genre (VBG).\n\n"
        "Choisis ta langue pour commencer :\n\n"
        "1 - *Français*\n"
        "2 - *Éwé*\n"
        "3 - *Kabyè*\n"
        "4️⃣ *English*\n\n"
        "_Réponds avec le numéro ou le nom de ta langue._"
    ),
    "ew": (
        "  *Miawoe ɖe Doto'm dzi !*\n\n"
        "Doto'm nye wò platform si le dzidzime, ƒoƒo kple VBG si me.\n\n"
        "Tia gɔmedzedze be mi gblɔ wò ƒe gbe :\n\n"
        "1 - *Français*\n"
        "2 - *Éwé*\n"
        "3 - *Kabyè*\n"
        "4️⃣ *English*\n\n"
        "_Ŋlɔ nɔmawoe alo gbe ŋkɔ._"
    ),
    "kb": (
        "  *Kɩ-welisi Doto'm pɔ !*\n\n"
        "Doto'm kɛ-yɔ kʋdɔmʋ tɛ alaɣa tɛ taa kɛ VBG.\n\n"
        "Pɩzɩɣ ña yɔɔdɩ ɖɛ-ɖɔm pʋ-ñɩnʋ :\n\n"
        "1 - *Français*\n"
        "2 - *Éwé*\n"
        "3 - *Kabyè*\n"
        "4️⃣ *English*\n\n"
        "_Pɩsɩ taa ñʋʋ mʋ gbe._"
    ),
    "en": (
        "  *Welcome to Doto'm !*\n\n"
        "Doto'm is your youth platform for Peace, Security and the fight against Gender-Based Violence (GBV).\n\n"
        "Choose your language to start :\n\n"
        "1 - *Français*\n"
        "2 - *Éwé*\n"
        "3 - *Kabyè*\n"
        "4️⃣ *English*\n\n"
        "_Reply with the number or language name._"
    ),
}

MAIN_MENU = {
    "fr": (
        "✅ *Langue sélectionnée : Français*\n\n"
        "Que veux-tu faire aujourd'hui ? \n\n"
        "1 - *Défi Ambassadeur JPS* – Le Quiz\n"
        "2 - *Besoin d'Aide / Urgence* – Protection & VBG\n"
        "3 - *Écouter Doto'm* – Accès aux podcasts\n\n"
        "_Réponds avec 1, 2 ou 3._"
    ),
    "en": (
        "✅ *Language selected: English*\n\n"
        "What do you want to do today? \n\n"
        "1 - *JPS Ambassador Challenge* – The Quiz\n"
        "2 - *Need Help / Emergency* – Protection & GBV\n"
        "3 - *Listen to Doto'm* – Podcast access\n\n"
        "_Reply with 1, 2 or 3._"
    ),
    "ew": (
        "✅ *Gbe si wò tia : Éwé*\n\n"
        "Etɔ̃ wò jɔm gbɔ hafi? \n\n"
        "1 - *JPS Dzremanɔ Ɖeɖe* – Tia ŋkɔ\n"
        "2 - *Kpe ɖe ŋuwɔla me* – VBG\n"
        "3 - *Ɖo nusrɔ̃ Doto'm* – Podcast\n\n"
        "_Ŋlɔ 1, 2 alo 3._"
    ),
    "kb": (
        "✅ *Gɔm yɔɔdʋ : Kabyè*\n\n"
        "Ɛzɩma pɩwɛ sɔnɔ? \n\n"
        "1 - *JPS Ɛnʋ Hʋyʋʋ* – Quiz\n"
        "2 - *Sɔɔlɩ kɩ-sɛtʋ* – VBG\n"
        "3 - *Kelisi Doto'm* – Podcast\n\n"
        "_Pɩsɩ 1, 2 yaa 3._"
    ),
}

# Quiz JPS

QUIZ_QUESTIONS = [
    {
        "id": 1,
        "question": (
            "❓ *Question 1/5*\n\n"
            "Selon l'ONU, quel est le rôle principal des jeunes dans l'Agenda JPS ?\n\n"
            "🅰️ Attendre les ordres des aînés.\n"
            "🅱️ Être des acteurs clés de la prévention des conflits et de la paix."
        ),
        "correct": "b",
        "explanation": (
            "✅ *Bonne réponse !*\n"
            "La résolution 2250 de l'ONU reconnaît les jeunes comme acteurs *essentiels* "
            "de la paix — pas seulement comme bénéficiaires. 💪"
        ),
        "wrong_explanation": (
            "❌ *Pas tout à fait !*\n"
            "La résolution 2250 de l'ONU reconnaît les jeunes comme acteurs *essentiels* "
            "de la paix — pas seulement comme bénéficiaires. 💪"
        ),
    },
    {
        "id": 2,
        "question": (
            "❓ *Question 2/5*\n\n"
            "Si tu es témoin d'un discours de haine en ligne, que fais-tu ?\n\n"
            "🅰️ Je le partage pour rigoler.\n"
            "🅱️ Je ne le relaie pas et je partage un contre-narratif de paix."
        ),
        "correct": "b",
        "explanation": (
            "✅ *Parfait !*\n"
            "Partager des discours haineux les amplifie. Un *contre-narratif* "
            "de paix est beaucoup plus puissant ! 🕊️"
        ),
        "wrong_explanation": (
            "❌ *Oups !*\n"
            "Partager des discours haineux les amplifie. Un *contre-narratif* "
            "de paix est beaucoup plus puissant ! 🕊️"
        ),
    },
    {
        "id": 3,
        "question": (
            "❓ *Question 3/5*\n\n"
            "Les VBG (Violences Basées sur le Genre) touchent principalement :\n\n"
            "🅰️ Uniquement les femmes adultes.\n"
            "🅱️ Toutes les personnes, sans distinction d'âge ni de genre."
        ),
        "correct": "b",
        "explanation": (
            "✅ *Exact !*\n"
            "Les VBG touchent femmes, hommes, filles et garçons. "
            "Personne n'est à l'abri — c'est un problème de société. 🤝"
        ),
        "wrong_explanation": (
            "❌ *Incomplet !*\n"
            "Les VBG touchent femmes, hommes, filles et garçons. "
            "Personne n'est à l'abri — c'est un problème de société. 🤝"
        ),
    },
    {
        "id": 4,
        "question": (
            "❓ *Question 4/5*\n\n"
            "Qu'est-ce que la consolidation de la paix ?\n\n"
            "🅰️ Signer un accord de paix entre deux pays.\n"
            "🅱️ Un processus long visant à prévenir la reprise des conflits et bâtir une paix durable."
        ),
        "correct": "b",
        "explanation": (
            "✅ *Très bien !*\n"
            "La consolidation de la paix est un *processus* qui implique "
            "gouvernance, justice, réconciliation et développement. ⚖️"
        ),
        "wrong_explanation": (
            "❌ *Presque !*\n"
            "La consolidation de la paix est un *processus* qui implique "
            "gouvernance, justice, réconciliation et développement. ⚖️"
        ),
    },
    {
        "id": 5,
        "question": (
            "❓ *Question 5/5 — Dernière question !*\n\n"
            "Quel geste concret peux-tu faire AUJOURD'HUI pour la paix ?\n\n"
            "🅰️ Rien, c'est le rôle des gouvernements.\n"
            "🅱️ Écouter sans juger, refuser la haine, soutenir une victime."
        ),
        "correct": "b",
        "explanation": (
            "✅ *Champion(ne) ! 🏆*\n"
            "Chaque geste compte. La paix commence dans nos interactions "
            "quotidiennes — et ça commence *maintenant*. ✨"
        ),
        "wrong_explanation": (
            "❌ *On peut tous agir !*\n"
            "Chaque geste compte. La paix commence dans nos interactions "
            "quotidiennes — et ça commence *maintenant*. ✨"
        ),
    },
]


def get_quiz_score_message(score: int, total: int, lang: str = "fr") -> str:
    """Génère le message de fin de quiz selon le score."""
    percentage = (score / total) * 100

    if lang == "fr":
        if percentage == 100:
            return (
                f"*SCORE PARFAIT ! {score}/{total}*\n\n"
                "Félicitations ! Tu es un(e) véritable *Ambassadeur(rice) JPS* ! 🌟\n"
                "Partage ce quiz avec tes amis pour les sensibiliser !\n\n"
                "👉 Tape *MENU* pour revenir au menu principal."
            )
        elif percentage >= 60:
            return (
                f"👍 *Bon score ! {score}/{total}*\n\n"
                "Tu es sur la bonne voie pour devenir Ambassadeur(rice) JPS ! "
                "Continue à apprendre et partager. 💪\n\n"
                "👉 Tape *QUIZ* pour recommencer ou *MENU* pour le menu principal."
            )
        else:
            return (
                f"📚 *Score : {score}/{total}*\n\n"
                "Continue d'apprendre sur la JPS et les VBG ! "
                "Écoute nos podcasts pour approfondir tes connaissances.  \n\n"
                "👉 Tape *QUIZ* pour recommencer ou *MENU* pour le menu principal."
            )
    else:
        if percentage == 100:
            return f"*PERFECT SCORE! {score}/{total}*\n\nYou're a true JPS Ambassador! 🌟\n\n👉 Type *MENU* to go back."
        elif percentage >= 60:
            return f"👍 *Good score! {score}/{total}*\n\nKeep learning and sharing. 💪\n\n👉 Type *QUIZ* to retry or *MENU* for main menu."
        else:
            return f"📚 *Score: {score}/{total}*\n\nKeep learning about JPS and GBV!  \n\n👉 Type *QUIZ* to retry or *MENU* for main menu."


# Messages VBG / Aide 

VBG_MENU = {
    "fr": (
        " *Aide & Protection - VBG*\n\n"
        "Tu n'es pas seul(e). Doto'm est là pour t'accompagner. 💙\n\n"
        "Choisis une option ou envoie directement un mot-clé :\n\n"
        "🆘 *AIDE* – Je cherche de l'aide générale\n"
        "🔴 *URGENCE* – Je suis en danger immédiat\n"
        "💜 *VBG* – J'ai subi ou je subis des violences\n"
        "📞 *SOS* – Numéros d'urgence\n\n"
        "_Tout reste confidentiel. Tape le mot-clé ou décris ta situation._"
    ),
    "en": (
        " *Help & Protection - GBV*\n\n"
        "You're not alone. Doto'm is here for you. 💙\n\n"
        "Choose an option or send a keyword:\n\n"
        "🆘 *HELP* – I need general help\n"
        "🔴 *EMERGENCY* – I'm in immediate danger\n"
        "💜 *GBV* – I've experienced violence\n"
        "📞 *SOS* – Emergency numbers\n\n"
        "_Everything stays confidential. Type the keyword or describe your situation._"
    ),
}

VBG_RESPONSES = {
    "aide": {
        "fr": (
            "💙 *Je suis là pour t'aider.*\n\n"
            "Tu peux me parler de ta situation en toute confiance.\n\n"
            "Des ressources disponibles au Togo :\n"
            "📞 *Ligne d'écoute VBG* : 116\n"
            "🏥 *CNSS / Services sociaux* : 22 21 09 81\n"
            "👮 *Police secours* : 117\n\n"
            "Tu peux aussi contacter nos partenaires :\n"
            "• ASVITTO – Association de Soutien aux Victimes\n"
            "• WILDAF Togo – Droits des femmes\n\n"
            "👉 Tape *SOS* pour plus de numéros ou *MENU* pour revenir."
        ),
    },
    "urgence": {
        "fr": (
            "🔴 *URGENCE — Ton sécurité est la priorité absolue.*\n\n"
            "Si tu es en *danger immédiat* :\n\n"
            "📞 *Appelle immédiatement :*\n"
            "• Police : *117*\n"
            "• Gendarmerie : *172*\n"
            "• Pompiers/SAMU : *118*\n"
            "• Ligne VBG : *116*\n\n"
            "Si tu ne peux pas appeler, envoie ta localisation à un proche de confiance.\n\n"
            "💙 _Tu as du courage de demander de l'aide. Tu n'es pas seul(e)._"
        ),
    },
    "vbg": {
        "fr": (
            "💜 *Merci de me faire confiance.*\n\n"
            "Ce que tu vis ou as vécu n'est *jamais* de ta faute. 💙\n\n"
            "Les VBG incluent :\n"
            "• Violences physiques, sexuelles ou psychologiques\n"
            "• Mariage forcé ou précoce\n"
            "• Harcèlement sexuel\n"
            "• Mutilations génitales féminines (MGF)\n\n"
            "📞 *Pour parler à quelqu'un maintenant :*\n"
            "• Ligne VBG : *116* (gratuit, confidentiel)\n"
            "• Croix-Rouge Togo : 22 21 30 71\n\n"
            "  *Écoute aussi :* Notre podcast 'Comment surmonter des VBG' – tape *PODCAST*\n\n"
            "👉 Tape *MENU* pour revenir au menu principal."
        ),
    },
    "sos": {
        "fr": (
            "📞 *Numéros d'urgence — Togo*\n\n"
            " *Urgences vitales :*\n"
            "• Police secours : *117*\n"
            "• Gendarmerie : *172*\n"
            "• Pompiers / SAMU : *118*\n\n"
            "💜 *Violences et protection :*\n"
            "• Ligne VBG (gratuite) : *116*\n"
            "• Direction de la Protection de l'Enfant : 22 26 37 67\n\n"
            "🏥 *Soutien psychologique :*\n"
            "• CHU Sylvanus Olympio : 22 21 25 01\n"
            "• Croix-Rouge Togo : 22 21 30 71\n\n"
            "🤝 *ONG partenaires :*\n"
            "• ASVITTO : 90 03 14 80\n"
            "• WILDAF Togo : 22 22 69 05\n\n"
            "👉 Tape *MENU* pour revenir."
        ),
    },
}

# Podcasts

PODCAST_MENU = {
    "fr": (
        "  *Que veux-tu écouter aujourd'hui ?*\n\n"
        "Choisis parmi nos dernières productions :\n\n"
        "1 - 🎙️ *Dernier épisode*\n"
        "   _'Comment surmonter des VBG : Essolaba nous raconte son expérience'_\n\n"
        "2 - 🔍 *Rechercher par thématique*\n"
        "   _(Piliers JPS, Témoignages, Lutte VBG, etc.)_\n\n"
        "3 - 🌐 *Notre bibliothèque complète*\n"
        "   _Tous les épisodes, transcriptions et téléchargements_\n\n"
        "_Réponds avec 1, 2 ou 3._"
    ),
    "en": (
        "  *What do you want to listen to today?*\n\n"
        "1 - 🎙️ *Latest episode*\n"
        "   _'How to overcome GBV: Essolaba shares her experience'_\n\n"
        "2 - 🔍 *Search by theme*\n"
        "   _(JPS Pillars, Testimonies, GBV, etc.)_\n\n"
        "3 - 🌐 *Full library*\n"
        "   _All episodes, transcripts and downloads_\n\n"
        "_Reply with 1, 2 or 3._"
    ),
}

PODCAST_LATEST = {
    "fr": (
        "🎙️ *Dernier épisode Doto'm*\n\n"
        "📻 *'Comment surmonter des VBG : Essolaba nous raconte son expérience'*\n\n"
        "Dans cet épisode poignant, Essolaba partage son parcours "
        "de survivante et de militante. Un témoignage fort sur la résilience "
        "et le soutien communautaire.\n\n"
        "▶️ *Écouter :* dotom.com/podcasts/essolaba\n"
        "📄 *Transcription :* dotom.com/podcasts/essolaba/transcript\n\n"
        "👉 Tape *MENU* pour revenir ou *PODCAST* pour les autres épisodes."
    ),
}

PODCAST_THEMES = {
    "fr": (
        "🔍 *Rechercher par thématique*\n\n"
        "Choisis une catégorie :\n\n"
        "🕊️ *A* – Piliers JPS (Paix, Sécurité, Prévention des conflits)\n"
        "💜 *B* – Témoignages de victimes & survivants\n"
        "✊ *C* – Lutte contre les VBG\n"
        "🌍 *D* – Engagement citoyen & Leadership jeune\n"
        "🎓 *E* – Éducation aux droits humains\n\n"
        "_Réponds avec la lettre (A, B, C, D ou E)._"
    ),
}

PODCAST_THEMES_CONTENT = {
    "a": {
        "fr": (
            "🕊️ *Piliers JPS — Nos épisodes*\n\n"
            "• 🎙️ Ep.12 : _'La résolution 2250 expliquée aux jeunes'_\n"
            "• 🎙️ Ep.08 : _'Prévention des conflits au Togo : que peut-on faire ?'_\n"
            "• 🎙️ Ep.05 : _'Comprendre les 5 piliers de l'Agenda JPS'_\n\n"
            "🌐 Tous les épisodes : *dotom.com/podcasts/jps*\n\n"
            "👉 Tape *PODCAST* pour revenir ou *MENU* pour le menu."
        ),
    },
    "b": {
        "fr": (
            "💜 *Témoignages — Nos épisodes*\n\n"
            "• 🎙️ Ep.15 : _'Essolaba : survivante et militante'_\n"
            "• 🎙️ Ep.11 : _'Koffi : reconstruire sa vie après le conflit'_\n"
            "• 🎙️ Ep.07 : _'Aminata : de victime à leader communautaire'_\n\n"
            "🌐 Tous les témoignages : *dotom.com/podcasts/temoignages*\n\n"
            "👉 Tape *PODCAST* pour revenir ou *MENU* pour le menu."
        ),
    },
    "c": {
        "fr": (
            "✊ *Lutte VBG — Nos épisodes*\n\n"
            "• 🎙️ Ep.14 : _'Comment surmonter des VBG : le cas d'Essolaba'_\n"
            "• 🎙️ Ep.10 : _'Les MGF : comprendre pour agir'_\n"
            "• 🎙️ Ep.06 : _'Harcèlement en ligne : comment se protéger ?'_\n\n"
            "🌐 Tous les épisodes : *dotom.com/podcasts/vbg*\n\n"
            "👉 Tape *PODCAST* pour revenir ou *MENU* pour le menu."
        ),
    },
    "d": {
        "fr": (
            "🌍 *Engagement jeune — Nos épisodes*\n\n"
            "• 🎙️ Ep.13 : _'Comment devenir Ambassadeur JPS dans ta communauté ?'_\n"
            "• 🎙️ Ep.09 : _'Jeunes et politique : pourquoi s'engager ?'_\n"
            "• 🎙️ Ep.04 : _'Leadership féminin au Togo'_\n\n"
            "🌐 Tous les épisodes : *dotom.com/podcasts/engagement*\n\n"
            "👉 Tape *PODCAST* pour revenir ou *MENU* pour le menu."
        ),
    },
    "e": {
        "fr": (
            "🎓 *Droits humains — Nos épisodes*\n\n"
            "• 🎙️ Ep.16 : _'Mes droits, je les connais : guide pratique'_\n"
            "• 🎙️ Ep.12 : _'Justice et accès au droit pour les jeunes'_\n"
            "• 🎙️ Ep.03 : _'La CEDAW et les droits des femmes en Afrique'_\n\n"
            "🌐 Tous les épisodes : *dotom.com/podcasts/droits*\n\n"
            "👉 Tape *PODCAST* pour revenir ou *MENU* pour le menu."
        ),
    },
}

PODCAST_LIBRARY = {
    "fr": (
        "🌐 *Bibliothèque complète Doto'm*\n\n"
        "Accède à l'intégralité de nos ressources :\n\n"
        "📻 *Tous les podcasts :* dotom.com/podcasts\n"
        "📄 *Transcriptions écrites :* dotom.com/podcasts/transcriptions\n"
        "⬇️ *Télécharger pour hors-ligne :* dotom.com/podcasts/download\n"
        "♿ *Version accessibilité :* dotom.com/podcasts/accessibilite\n\n"
        "💡 _Les transcriptions permettent une écoute accessible aux personnes malentendantes._\n\n"
        "👉 Tape *MENU* pour revenir au menu principal."
    ),
}

# Gestion des sessions 

@dataclass
class UserSession:
    """Représente l'état d'une session utilisateur."""
    phone: str
    lang: str = "fr"
    state: str = "welcome"       
    quiz_index: int = 0
    quiz_score: int = 0
    podcast_state: str = ""
    last_activity: datetime = field(default_factory=datetime.now)

    def reset_quiz(self):
        self.quiz_index = 0
        self.quiz_score = 0

    def touch(self):
        self.last_activity = datetime.now()


class DotomBot:
    """Bot principal Doto'm avec gestion des sessions."""

    SESSION_TIMEOUT = timedelta(hours=2)

    def __init__(self):
        self.sessions: Dict[str, UserSession] = {}

    def get_session(self, phone: str) -> UserSession:
        """Récupère ou crée une session utilisateur."""
        # Nettoyage des sessions expirées
        expired = [
            p for p, s in self.sessions.items()
            if datetime.now() - s.last_activity > self.SESSION_TIMEOUT
        ]
        for p in expired:
            del self.sessions[p]

        if phone not in self.sessions:
            self.sessions[phone] = UserSession(phone=phone)
        return self.sessions[phone]

    def process_message(self, phone: str, text: str) -> List[str]:
        """
        Point d'entrée principal : traite un message et retourne les réponses.
        """
        session = self.get_session(phone)
        session.touch()

        text_lower = text.lower().strip()

        # commandes globales
        if text_lower in ("menu", "accueil", "home", "start", "restart", "bonjour", "hi", "hello", "salut"):
            session.state = "main_menu"
            return [MAIN_MENU.get(session.lang, MAIN_MENU["fr"])]

        if text_lower in ("quiz", "défi", "defi"):
            session.reset_quiz()
            session.state = "quiz"
            return self._send_quiz_question(session)

        if text_lower in ("podcast", "podcasts", "écouter", "ecouter", "listen"):
            session.state = "podcast_menu"
            return [PODCAST_MENU.get(session.lang, PODCAST_MENU["fr"])]

        if text_lower in ("aide", "help", "urgence", "emergency", "sos", "vbg", "gbv"):
            return self._handle_vbg_keyword(session, text_lower)
        
        state = session.state

        if state == "welcome":
            return self._handle_welcome(session, text_lower)

        elif state == "language_select":
            return self._handle_language_select(session, text_lower)

        elif state == "main_menu":
            return self._handle_main_menu(session, text_lower)

        elif state == "quiz":
            return self._handle_quiz(session, text_lower)

        elif state == "vbg_menu":
            return self._handle_vbg_menu(session, text_lower)

        elif state == "podcast_menu":
            return self._handle_podcast_menu(session, text_lower)

        elif state == "podcast_themes":
            return self._handle_podcast_themes(session, text_lower)

        else:
            # État inconnu → retour au menu
            session.state = "main_menu"
            return [MAIN_MENU.get(session.lang, MAIN_MENU["fr"])]

    #  Gestionnaires d'état 
    def _handle_welcome(self, session: UserSession, text: str) -> List[str]:
        session.state = "language_select"
        return [WELCOME_MESSAGES["fr"]]

    def _handle_language_select(self, session: UserSession, text: str) -> List[str]:
        lang_map = {
            "1": "fr", "français": "fr", "francais": "fr", "french": "fr", "fr": "fr",
            "2": "ew", "éwé": "ew", "ewe": "ew", "ewé": "ew",
            "3": "kb", "kabyè": "kb", "kabiye": "kb", "kabye": "kb",
            "4": "en", "english": "en", "anglais": "en", "en": "en",
        }
        lang = lang_map.get(text)
        if lang:
            session.lang = lang
            session.state = "main_menu"
            return [MAIN_MENU.get(lang, MAIN_MENU["fr"])]
        else:
            return [
                "🤔 Je n'ai pas compris ta langue.\n\n"
                "Réponds avec :\n1 - Français\n2 - Éwé\n3 - Kabyè\n4️⃣ English"
            ]

    def _handle_main_menu(self, session: UserSession, text: str) -> List[str]:
        if text in ("1", "quiz", "défi", "defi", "jps"):
            session.reset_quiz()
            session.state = "quiz"
            intro = (
                "*Défi Ambassadeur JPS — Le Quiz !*\n\n"
                "Tu vas répondre à 5 questions sur la Jeunesse, la Paix et la Sécurité (JPS).\n"
                "Pour chaque question, réponds avec *A* ou *B*.\n\n"
                "C'est parti ! 🚀"
            )
            return [intro] + self._send_quiz_question(session)

        elif text in ("2", "aide", "urgence", "vbg", "help"):
            session.state = "vbg_menu"
            return [VBG_MENU.get(session.lang, VBG_MENU["fr"])]

        elif text in ("3", "podcast", "écouter", "ecouter", "listen"):
            session.state = "podcast_menu"
            return [PODCAST_MENU.get(session.lang, PODCAST_MENU["fr"])]

        else:
            return [
                "🤔 Je n'ai pas compris ton choix.\n\n"
                + MAIN_MENU.get(session.lang, MAIN_MENU["fr"])
            ]

    def _send_quiz_question(self, session: UserSession) -> List[str]:
        if session.quiz_index < len(QUIZ_QUESTIONS):
            q = QUIZ_QUESTIONS[session.quiz_index]
            return [q["question"]]
        else:
            return [self._finish_quiz(session)]

    def _handle_quiz(self, session: UserSession, text: str) -> List[str]:
        if session.quiz_index >= len(QUIZ_QUESTIONS):
            return [self._finish_quiz(session)]

        answer = text.lower().strip()
        if answer not in ("a", "b"):
            return ["⚠️ Réponds avec *A* ou *B* s'il te plaît."]

        q = QUIZ_QUESTIONS[session.quiz_index]
        responses = []

        if answer == q["correct"]:
            session.quiz_score += 1
            responses.append(q["explanation"])
        else:
            responses.append(q["wrong_explanation"])

        session.quiz_index += 1

        if session.quiz_index < len(QUIZ_QUESTIONS):
            responses += self._send_quiz_question(session)
        else:
            responses.append(self._finish_quiz(session))

        return responses

    def _finish_quiz(self, session: UserSession) -> str:
        score = session.quiz_score
        total = len(QUIZ_QUESTIONS)
        session.state = "main_menu"
        return get_quiz_score_message(score, total, session.lang)

    def _handle_vbg_keyword(self, session: UserSession, keyword: str) -> List[str]:
        keyword_map = {
            "aide": "aide", "help": "aide",
            "urgence": "urgence", "emergency": "urgence",
            "vbg": "vbg", "gbv": "vbg",
            "sos": "sos",
        }
        key = keyword_map.get(keyword, "aide")
        content = VBG_RESPONSES.get(key, {}).get(session.lang)
        if not content:
            content = VBG_RESPONSES.get(key, {}).get("fr", "")
        session.state = "vbg_menu"
        return [content] if content else [VBG_MENU.get(session.lang, VBG_MENU["fr"])]

    def _handle_vbg_menu(self, session: UserSession, text: str) -> List[str]:
        keyword_map = {
            "aide": "aide", "help": "aide", "1": "aide",
            "urgence": "urgence", "emergency": "urgence", "2": "urgence",
            "vbg": "vbg", "gbv": "vbg", "3": "vbg",
            "sos": "sos", "4": "sos",
        }
        key = keyword_map.get(text)
        if key:
            content = VBG_RESPONSES.get(key, {}).get(session.lang) or VBG_RESPONSES.get(key, {}).get("fr", "")
            return [content]
        else:
            return [
                "🤔 Réponds avec : *AIDE*, *URGENCE*, *VBG* ou *SOS*\n"
                "ou tape *MENU* pour revenir au menu principal."
            ]

    def _handle_podcast_menu(self, session: UserSession, text: str) -> List[str]:
        if text in ("1", "dernier", "latest", "episode"):
            content = PODCAST_LATEST.get(session.lang) or PODCAST_LATEST.get("fr", "")
            session.state = "main_menu"
            return [content]

        elif text in ("2", "thématique", "thematique", "theme", "rechercher"):
            session.state = "podcast_themes"
            return [PODCAST_THEMES.get(session.lang, PODCAST_THEMES["fr"])]

        elif text in ("3", "bibliothèque", "bibliotheque", "library", "tous", "all", "site"):
            content = PODCAST_LIBRARY.get(session.lang) or PODCAST_LIBRARY.get("fr", "")
            session.state = "main_menu"
            return [content]

        else:
            return [
                "🤔 Réponds avec *1*, *2* ou *3*.\n\n"
                + PODCAST_MENU.get(session.lang, PODCAST_MENU["fr"])
            ]

    def _handle_podcast_themes(self, session: UserSession, text: str) -> List[str]:
        theme_key = text.lower().strip()
        content_dict = PODCAST_THEMES_CONTENT.get(theme_key)
        if content_dict:
            content = content_dict.get(session.lang) or content_dict.get("fr", "")
            session.state = "podcast_menu"
            return [content]
        else:
            return [
                "🤔 Réponds avec *A*, *B*, *C*, *D* ou *E*.\n\n"
                + PODCAST_THEMES.get(session.lang, PODCAST_THEMES["fr"])
            ]
