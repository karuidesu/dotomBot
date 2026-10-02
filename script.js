
const LANGS = {

  /*  fr  */
  fr: {
    welcome: "Bonjour ! Je suis Doto'm 🕊️\nLe bot de la jeunesse togolaise pour la paix.\n\nComment puis-je vous aider aujourd'hui ?",
    menu: ["📅 Agenda JPS", "🆘 Ressources VBG", "🎙️ Écouter les podcasts", "💬 Témoignages", "❓ Quiz Paix", "🚨 SOS / Urgence"],

    jps: "L'Agenda Jeunesse, Paix et Sécurité (Résolutions 2250, 2419, 2535) reconnaît le rôle central des jeunes dans la prévention des conflits.\n\nSes 5 piliers :\n• Participation\n• Protection\n• Prévention\n• Partenariats\n• Désengagement & réintégration",
    jps_menu: ["En savoir plus", "Quiz sur le JPS", "Retour au menu"],
    jps_deep: "La Résolution 2250 a été adoptée le 9 décembre 2015.\nElle est la première résolution du Conseil de sécurité de l'ONU à reconnaître officiellement les jeunes comme acteurs de paix.\n\nRenforcée par :\n• Résolution 2419 (2018) : rôle des femmes et jeunes\n• Résolution 2535 (2020) : engagement et inclusion",

    vbg: "Si vous ou quelqu'un près de vous est en danger, voici les ressources disponibles au Togo :",
    resources: [
      { title: "Police Nationale",                        num: "117",              desc: "Urgences & sécurité" },
      { title: "UNFPA Togo",                              num: "+228 22 61 26 00", desc: "Santé reproductive & VBG" },
      { title: "Ligne verte VBG",                         num: "08 08 08",         desc: "Écoute & orientation 24h/7j" },
      { title: "Ligne d'assistance",                      num: "8284",             desc: "Aider les victimes à se faire entendre" },
      { title: "Centre Fezireda (Fécondes) - Bafilo",     num: "90 31 84 72",      desc: "Centre d'écoute et d'assistance juridique VBG" },
      { title: "Centre d'écoute VBG - Sokodé",            num: "90 83 21 22",      desc: "Quartier Tchalo, à côté d'AGAIB Centrale" },
      { title: "Centre d'écoute VBG - Kara",              num: "92 67 56 86",      desc: "À l'intérieur de la direction régionale de l'action sociale" },
      { title: "Clinique ATBEF Grand Nord - Kara",        num: "26 60 05 80",      desc: "Quartier Tchintchinda derrière l'Église Catholique" },
      { title: "Clinique ATBEF - Sokodé",                 num: "25 50 02 46",      desc: "Rue de la Cathédrale, derrière la gare routière" },
      { title: "Centre d'écoute VBG - Kante",             num: "90 98 30 19",      desc: "Dans l'enceinte de la Direction préfectorale de l'action sociale" },
      { title: "Centre d'écoute VBG - Dankpen",           num: "91 91 11 60",      desc: "Direction préfectorale de l'action sociale de Dankpen" },
      { title: "Centre d'écoute VBG - Dapaong",           num: "90 31 32 52",      desc: "Centre d'écoute et d'assistance aux victimes" },
      { title: "Centre d'écoute VBG - Naki-Est",          num: "92 19 69 49",      desc: "Non loin des locaux de la préfecture" },
      { title: "Maison de la Femme - Cinkassé",           num: "90 11 24 15",      desc: "Accompagnement et écoute des victimes" }
    ],

    podcast_intro: "Bienvenue dans l'espace d'écoute Doto'm ! 🎧\n\nVoici 4 émissions à écouter. Appuyez sur ▶ pour lancer.",
    podcasts: [
      { ep: "Épisode 01", title: "C'est quoi l'Agenda JPS ?",             desc: "Introduction aux Résolutions 2250, 2419 et 2535 pour les jeunes.",        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
      { ep: "Épisode 02", title: "Les jeunes et la paix au Togo",         desc: "Témoignages de militants de Kara et Lomé sur leur engagement.",            src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
      { ep: "Épisode 03", title: "Violences basées sur le genre",         desc: "Comment reconnaître, prévenir et réagir face aux VBG.",                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
      { ep: "Épisode 04", title: "Région des Savanes : jeunesse & sécu.", desc: "Rôle des jeunes face à la menace extrémiste dans le nord.",                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
    ],
    podcast_all_label: "🔗 Voir tous les podcasts",
    podcast_all_url: "https://dotom.vercel.app/",

    quizz: [
      { q: "En quelle année a été adoptée la Résolution 2250 sur la Jeunesse, Paix et Sécurité ?",    choices: ["2013","2015","2018","2020"],                                  correct: 1 },
      { q: "Combien de piliers compte l'Agenda JPS ?",                                                 choices: ["3","4","5","6"],                                              correct: 2 },
      { q: "Quel pourcentage de la population togolaise représente la jeunesse ?",                     choices: ["40%","50%","60%","70%"],                                      correct: 2 },
      { q: "Dans quelle ville s'est tenue la Consultation Nationale des Jeunes JPS (nov. 2025) ?",     choices: ["Kara","Sokodé","Lomé","Atakpamé"],                            correct: 2 },
      { q: "Quel pilier vise à soutenir activement les initiatives de paix portées par les jeunes ?",  choices: ["Protection","Participation","Prévention","Partenariat"],      correct: 1 },
      { q: "Quelle ville du nord a accueilli l'atelier de restitution JPS en janvier 2026 ?",          choices: ["Dapaong","Mango","Cinkassé","Bafilo"],                        correct: 0 },
      { q: "Quel organisme ONU est impliqué avec le PNUD pour l'agenda JPS au Togo ?",                 choices: ["L'UNESCO","L'UNFPA","L'OMS","Le PAM"],                        correct: 1 },
      { q: "Quel réseau d'ONG africaines est partenaire clé de l'État togolais pour la paix ?",        choices: ["WANEP-Togo","Amnesty International","MSF","Greenpeace"],      correct: 0 },
      { q: "Face à quelle menace l'engagement des jeunes dans les Savanes est-il crucial ?",           choices: ["La piraterie","L'extrémisme violent","La cybercriminalité","Le trafic de faune"], correct: 1 },
      { q: "Quel est l'objectif du pilier 'Protection' de l'Agenda JPS ?",                             choices: ["Financer des projets économiques","Garantir la sécurité des jeunes civils","Créer des clubs de sport","Construire des écoles"], correct: 1 }
    ],
    badges:    ["Apprenti·e de la Paix 🌱", "Ambassadeur·rice JPS 🏅", "Champion·ne de la Paix 🏆"],
    badge_msg: (name) => `Félicitations ! Vous avez obtenu le badge "${name}" !`,
    wrong:     "❌ Pas tout à fait. La bonne réponse était : ",
    correct:   "✅ Exact ! Bien joué.",
    score:     (s, t) => `Quiz terminé ! Votre score : ${s}/${t}`,
    quiz_start:"🧠 Début du quiz ! Appuyez sur les boutons pour répondre.",

    emergency: "🚨 Mode Urgence activé.\nVos données ne sont pas enregistrées.\n\nVoici les contacts d'aide immédiats :",
    emergency_banner: "🚨 MODE URGENCE",

    temoignage: "🎤 Témoignage d'Essolaba, 19 ans, militante pour la paix à Kara :\n\n« Quand j'ai rejoint le mouvement citoyen, je ne savais pas que ma voix pouvait changer quelque chose. Doto'm m'a appris que la paix commence par écouter l'autre. »",

    about: "Doto'm (« Écoute-moi » en Éwé) est un podcast quadrilingue créé par Cynel de Souza et Diane Adonsou.\n\n🎯 Mission : vulgariser l'Agenda JPS et donner la parole aux jeunes Togolais pour construire la paix.\n\n🌍 Langues : Français · English · Éwé · Kabyè",

    menu_prompt: "Que souhaitez-vous faire ?",
    back:        "⬅️ Retour au menu",
    greet_prompts: ["Menu principal", "À propos de Doto'm"],
    fallback:    "Je n'ai pas bien compris 🤔\nTapez : JPS, VBG, Podcast, Quiz, Témoignage ou AIDE",
    input_placeholder: "Tapez votre message...",
  },

  /*  eng  */
  en: {
    welcome: "Hello! I'm Doto'm 🕊️\nThe Togolese youth bot for peace.\n\nHow can I help you today?",
    menu: ["📅 JPS Agenda", "🆘 GBV Resources", "🎙️ Listen to podcasts", "💬 Testimonies", "❓ Peace Quiz", "🚨 HELP / Emergency"],

    jps: "The Youth, Peace and Security Agenda (Resolutions 2250, 2419, 2535) recognizes the central role of young people in conflict prevention.\n\nIts 5 pillars:\n• Participation\n• Protection\n• Prevention\n• Partnerships\n• Disengagement & reintegration",
    jps_menu: ["Learn more", "JPS Quiz", "Back to menu"],
    jps_deep: "Resolution 2250 was adopted on December 9, 2015.\nIt is the first UN Security Council resolution to officially recognize youth as peace actors.\n\nStrengthened by:\n• Resolution 2419 (2018): role of women and youth\n• Resolution 2535 (2020): engagement and inclusion",

    vbg: "If you or someone near you is in danger, here are available resources in Togo:",
    resources: [
      { title: "National Police",                         num: "117",              desc: "Emergencies & security" },
      { title: "UNFPA Togo",                              num: "+228 22 61 26 00", desc: "Reproductive health & GBV" },
      { title: "GBV Green Line",                          num: "08 08 08",         desc: "Listening & guidance 24/7" },
      { title: "Assistance Helpline",                     num: "8284",             desc: "Help victims be heard" },
      { title: "Fezireda Centre (Fécondes) - Bafilo",     num: "90 31 84 72",      desc: "GBV listening & legal assistance" },
      { title: "GBV Listening Centre - Sokodé",           num: "90 83 21 22",      desc: "Tchalo district, near AGAIB Centrale" },
      { title: "GBV Listening Centre - Kara",             num: "92 67 56 86",      desc: "Inside the regional social action directorate" },
      { title: "ATBEF Clinic North - Kara",               num: "26 60 05 80",      desc: "Tchintchinda district behind Catholic Church" },
      { title: "ATBEF Clinic - Sokodé",                   num: "25 50 02 46",      desc: "Cathedral Street, behind the bus station" },
      { title: "GBV Listening Centre - Kante",            num: "90 98 30 19",      desc: "Inside the prefectural social action office" },
      { title: "GBV Listening Centre - Dankpen",          num: "91 91 11 60",      desc: "Prefectural social action directorate" },
      { title: "GBV Listening Centre - Dapaong",          num: "90 31 32 52",      desc: "Listening & victim assistance centre" },
      { title: "GBV Listening Centre - Naki-Est",         num: "92 19 69 49",      desc: "Near the prefecture buildings" },
      { title: "Women's House - Cinkassé",                num: "90 11 24 15",      desc: "Support and listening for victims" }
    ],

    podcast_intro: "Welcome to the Doto'm listening space! 🎧\n\nHere are 4 episodes to listen to. Press ▶ to play.",
    podcasts: [
      { ep: "Episode 01", title: "What is the YPS Agenda?",                desc: "Introduction to Resolutions 2250, 2419 and 2535 for youth.",              src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
      { ep: "Episode 02", title: "Youth and peace in Togo",                desc: "Testimonies from activists in Kara and Lomé on their commitment.",        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
      { ep: "Episode 03", title: "Gender-based violence",                  desc: "How to recognize, prevent and respond to GBV.",                           src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
      { ep: "Episode 04", title: "Savanes Region: youth & security",       desc: "Role of youth against extremist threat in the north.",                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
    ],
    podcast_all_label: "🔗 See all podcasts",
    podcast_all_url: "https://dotom.vercel.app/",

    quizz: [
      { q: "In which year was Resolution 2250 on Youth, Peace and Security adopted?",    choices: ["2013","2015","2018","2020"],                                                  correct: 1 },
      { q: "How many pillars does the YPS Agenda have?",                                 choices: ["3","4","5","6"],                                                              correct: 2 },
      { q: "What percentage of Togo's population is youth?",                             choices: ["40%","50%","60%","70%"],                                                      correct: 2 },
      { q: "Which city hosted the National Youth Consultation on YPS in November 2025?", choices: ["Kara","Sokodé","Lomé","Atakpamé"],                                            correct: 2 },
      { q: "Which pillar actively supports youth-led peace initiatives?",                choices: ["Protection","Participation","Prevention","Partnership"],                      correct: 1 },
      { q: "Which northern city hosted the JPS regional workshop in January 2026?",      choices: ["Dapaong","Mango","Cinkassé","Bafilo"],                                        correct: 0 },
      { q: "Which UN body works alongside UNDP for the JPS agenda in Togo?",             choices: ["UNESCO","UNFPA","WHO","WFP"],                                                 correct: 1 },
      { q: "Which African NGO network is a key state partner for peace in Togo?",        choices: ["WANEP-Togo","Amnesty International","MSF","Greenpeace"],                     correct: 0 },
      { q: "Which major security threat makes youth engagement crucial in the Savanes?", choices: ["Maritime piracy","Violent extremism","Cybercrime","Wildlife trafficking"],   correct: 1 },
      { q: "What is the goal of the 'Protection' pillar of the YPS Agenda?",             choices: ["Fund youth economic projects","Ensure safety of young civilians","Create sports clubs","Build schools"], correct: 1 }
    ],
    badges:    ["Peace Apprentice 🌱", "YPS Ambassador 🏅", "Peace Champion 🏆"],
    badge_msg: (name) => `Congratulations! You earned the "${name}" badge!`,
    wrong:     "❌ Not quite. The correct answer was: ",
    correct:   "✅ Correct! Well done.",
    score:     (s, t) => `Quiz done! Your score: ${s}/${t}`,
    quiz_start:"🧠 Quiz starting! Press the buttons to answer.",

    emergency: "🚨 Emergency mode activated.\nYour data is not recorded.\n\nHere are immediate help contacts:",
    emergency_banner: "🚨 EMERGENCY MODE",

    temoignage: "🎤 Kekeli's story, 24, peace activist in Kara:\n\n« When I joined the civic movement, I didn't know my voice could change anything. Doto'm taught me that peace starts with listening to each other. »",

    about: "Doto'm (\"Listen to me\" in Ewe) is a quadrilingual podcast created by Cynel de Souza and Diane Adonsou.\n\n🎯 Mission: popularize the YPS Agenda and give voice to young Togolese people to build peace.\n\n🌍 Languages: Français · English · Éwé · Kabyè",

    menu_prompt: "What would you like to do?",
    back:        "⬅️ Back to menu",
    greet_prompts: ["Main menu", "About Doto'm"],
    fallback:    "I didn't quite understand 🤔\nType: JPS, GBV, Podcast, Quiz, Testimony or HELP",
    input_placeholder: "Type your message...",
  },

  /*  exwe  */
  ewe: {
    welcome: "Woézon na mi! Nye Doto'm 🕊️\nBot ya tso wogble ame nyuie kple agbenono.\n\nNugbo da mi fia nusi mi hia?",
    menu: ["📅 JPS Agenda", "🆘 VBG Kpekpeɖeŋu", "🎙️ Nusrɔ̃ Yia Yi", "💬 Gblɔgblɔwo", "❓ Wezãwezã", "🚨 DƆWƆNU / Gakaka"],

    jps: "JPS Agenda (Nusrɔ̃ 2250, 2419, 2535) fia be viovio siwo le ŋu agbe dzi wɔm agbenono gɔme.\n\nÐomenyawo atõ:\n• Tso ŋu dze ŋu\n• Ɖoɖo\n• Wɔm vevie\n• Dzidzɔ\n• Dze ŋu megbe",
    jps_menu: ["Kpɔ gede", "Quiz JPS", "Dzo egbe"],
    jps_deep: "Nusrɔ̃ 2250 woe ɖe 9 December 2015.\nEya nye ONU Kɔmite ƒe nusrɔ̃ gbãtɔ siwo tso viovio fia be dziɣɔɣlɔ ame siwo.\n\nDzi doo:\n• Nusrɔ̃ 2419 (2018): nyɔnuwo kple viovio\n• Nusrɔ̃ 2535 (2020): tso ŋu",

    vbg: "Ne mia abe mi ana ahã ame o, kpɔ nu siwo le Togo me:",
    resources: [
      { title: "Xexeme Kpekpeɖeŋu",                      num: "117",              desc: "Gakaka kple agbenono" },
      { title: "UNFPA Togo",                              num: "+228 22 61 26 00", desc: "VBG kpekpeɖeŋu kple gbãgbã" },
      { title: "VBG Kpekpeɖeŋu (Nudzodzoe)",             num: "08 08 08",         desc: "Gblɔ ame nyuie 24/7" },
      { title: "Kpekpeɖeŋu Nuɖoɖo",                      num: "8284",             desc: "Dea dzigbe na ame siwo le dɔ me" },
      { title: "Centre Fezireda - Bafilo",                num: "90 31 84 72",      desc: "VBG ʋoʋoɖiɖi kpekpeɖeŋu" },
      { title: "VBG Kpekpeɖeŋu - Sokodé",                num: "90 83 21 22",      desc: "Tchalo, ɖa AGAIB Centrale gã" },
      { title: "VBG Kpekpeɖeŋu - Kara",                  num: "92 67 56 86",      desc: "Tso action sociale kpɔ ʋe" },
      { title: "Klinik ATBEF - Kara",                     num: "26 60 05 80",      desc: "Tchintchinda, Katɔlik Hadzigbe megbe" },
      { title: "Klinik ATBEF - Sokodé",                   num: "25 50 02 46",      desc: "Cathédrale ŋɔ, taxi kpekpe megbe" },
      { title: "VBG Kpekpeɖeŋu - Kante",                 num: "90 98 30 19",      desc: "Action sociale ƒe dziɣɔɣlɔ me" },
      { title: "VBG Kpekpeɖeŋu - Dankpen",               num: "91 91 11 60",      desc: "Action sociale Dankpen ƒe ɣlɔ me" },
      { title: "VBG Kpekpeɖeŋu - Dapaong",               num: "90 31 32 52",      desc: "Kpekpeɖeŋu na ame siwo le dɔ me" },
      { title: "VBG Kpekpeɖeŋu - Naki-Est",              num: "92 19 69 49",      desc: "Préfecture ƒe ɣlɔ ŋutɔ ŋu" },
      { title: "Nyɔnuwo Ƒe Ʋu - Cinkassé",               num: "90 11 24 15",      desc: "Kpekpeɖeŋu na nyɔnuwo siwo le dɔ me" }
    ],

    podcast_intro: "Woézon! Kpɔ Doto'm ƒe nusrɔ̃ ŋutɔ me! 🎧\n\nNusrɔ̃ ene le afisia. Dze ▶ eye u.",
    podcasts: [
      { ep: "Nusrɔ̃ 01", title: "JPS Agenda nye ehe?",                    desc: "Nusrɔ̃ 2250, 2419 kple 2535 ƒe ɣlɔɣlɔ viovio na.",                       src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
      { ep: "Nusrɔ̃ 02", title: "Viovio kple dziɣɔɣlɔ Togo me",          desc: "Kara kple Lomé ƒe ame siwo le dɔ wɔm ƒe gbɔdzedzi.",                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
      { ep: "Nusrɔ̃ 03", title: "VBG: Wɔm le ʋoʋoɖiɖi ŋu",              desc: "Egbɔ wò te VBG gɔme, wɔm ke vevie, eye dea wo kpekpe.",                 src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
      { ep: "Nusrɔ̃ 04", title: "Savanes: Viovio kple ɖoɖo",              desc: "Viovio ƒe nu le akɔŋkɔŋ dzidzɔ wɔm ŋu dzidzi dzi.",                    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
    ],
    podcast_all_label: "🔗 Kpɔ nusrɔ̃ bubuwo katã",
    podcast_all_url: "https://dotom.vercel.app/",

    quizz: [
      { q: "Afe ɖeka ka woe Nusrɔ̃ 2250?",                                choices: ["2013","2015","2018","2020"],                        correct: 1 },
      { q: "Bɔbɔwo ɛnɛ ka le JPS Agenda me?",                             choices: ["3","4","5","6"],                                   correct: 2 },
      { q: "Viovio bubu ka le Togo?",                                      choices: ["40%","50%","60%","70%"],                           correct: 2 },
      { q: "Togbe ɖeka ka wɔ JPS Dzodede November 2025?",                 choices: ["Kara","Sokodé","Lomé","Atakpamé"],                 correct: 2 },
      { q: "Bɔbɔ ka dea dzidzɔ wɔm tso viovio gbɔ?",                     choices: ["Ɖoɖo","Tso ŋu","Vevie","Dzeŋu"],                  correct: 1 },
      { q: "Togbe ɖeka ka wɔ JPS workshop January 2026?",                 choices: ["Dapaong","Mango","Cinkassé","Bafilo"],             correct: 0 },
      { q: "ONU ƒe ɣlɔ ka le PNUD kple Togo dome JPS na?",               choices: ["UNESCO","UNFPA","OMS","PAM"],                      correct: 1 },
      { q: "Africa ONG network ka le Togo dziɣɔɣlɔ ŋu?",                 choices: ["WANEP-Togo","Amnesty","MSF","Greenpeace"],         correct: 0 },
      { q: "Dzodede ka le Savanes me si esia dea viovio kpekpeɖeŋu hia?", choices: ["Avu le xa me","Akɔŋkɔŋ vevie","Cyber","Lãmea"],  correct: 1 },
      { q: "'Ɖoɖo' bɔbɔ ƒe dɔwɔwɔ sɔgbe?",                              choices: ["Dze viovio ŋu kaba","Ɖe ɖoɖo na viovio le akɔŋkɔŋ me","Wɔ spor","Tsɔ sukuu"], correct: 1 }
    ],
    badges:    ["Dziɣɔɣlɔ Vovitoto 🌱", "JPS Dua 🏅", "Dziɣɔɣlɔ Tɔ 🏆"],
    badge_msg: (name) => `Akpe na wo! Wo je badge "${name}"!`,
    wrong:     "❌ Mado o. Nyatefe la nye: ",
    correct:   "✅ Nyuie! Akpe.",
    score:     (s, t) => `Quiz foa! Fife: ${s}/${t}`,
    quiz_start:"🧠 Quiz doa! Dze bɔtɔwo ŋu.",

    emergency: "🚨 Gakaka nu fia.\nWò ŋuti nudodo meli registration me o.\n\nKpɔ ame siwo ate ŋu dea wo kpekpe:",
    emergency_banner: "🚨 GAKAKA",

    temoignage: "🎤 Essolaba ƒe gblɔ, afe 19, Kara dziɣɔɣlɔ tɔ:\n\n« Megake yewɔm citoyenne la, mekse be ma gble ame nyuie o. Doto'm kplɔe be dziɣɔɣlɔ doa gɔme eye ame ɖeka le ŋu sroe. »",

    about: "Doto'm nye quadrilingual podcast tia Cynel de Souza kple Diane Adonsou.\n\n🎯 Nudoadoa: vulgariser JPS Agenda eye wɔ vovito be viovio Togo gble ame nyuie.\n\n🌍 Gblɔgblɔwo: Français · English · Éwé · Kabyè",

    menu_prompt: "Nusi mi hia?",
    back:        "⬅️ Dzo egbe",
    greet_prompts: ["Menu nyuitɔ", "Doto'm tso fie"],
    fallback:    "Medá ŋlɔ o 🤔\nŊlɔ: JPS, VBG, Podcast, Quiz, Gblɔgblɔ ke DƆWƆNU",
    input_placeholder: "Ŋlɔ nusrɔ̃ wo...",
  },

  /*  kabye  */
  kab: {
    welcome: "Warabi! Mam tɔŋ Doto'm 🕊️\nMɔɔlʋ taa Togolɛ pɛpɛnaa ɖoŋ.\n\nAna ɩzʋ mɛ ŋ pa?",
    menu: ["📅 JPS Agenda", "🆘 VBG Hʋlʋ", "🎙️ Ɔdɔŋ Yõ", "💬 Kɔŋkɔŋ", "❓ Quiz Ɖoŋ", "🚨 SAƔIM / Hʋlʋ"],

    jps: "JPS Agenda (2250, 2419, 2535) yele be pɛɛlaa waa hʋlʋ ɖɔŋ kɛɛ taa, akɔ tɛŋ siɣi nɩ.\n\nÑɩŋ atɔ:\n• Tɔcɛ\n• Laafɩ\n• Taɣɩsɩ\n• Kʋzɔŋ\n• Tɩyɛ pɛ",
    jps_menu: ["Na ŋ kɛ", "Quiz JPS", "Pʋpʋ"],
    jps_deep: "Nusrɔ̃ 2250 wɔ 9 December 2015.\nONU Kɔmite nusrɔ̃ gbãtɔ sɔ pɛɛlaa ɖɔŋ ɖɩ laafɩ.\n\nDzi doo:\n• Nusrɔ̃ 2419 (2018): halɩsɩ kple pɛɛlaa\n• Nusrɔ̃ 2535 (2020): tɔcɛ",

    vbg: "Ɩzʋ mʋ pa ŋ pa hʋlʋ taa Togo:",
    resources: [
      { title: "Poliisi",                                 num: "117",              desc: "Saɣim & ɖɔŋ hʋlʋ" },
      { title: "UNFPA Togo",                              num: "+228 22 61 26 00", desc: "VBG kpɛlɩ" },
      { title: "VBG Kɔŋ (Nuɖoɖo)",                       num: "08 08 08",         desc: "Kɔŋ kpɛlɩ 24/7" },
      { title: "Kpɛlɩ Nuɖoɖo",                           num: "8284",             desc: "Hʋlʋ ɖaŋdɩ" },
      { title: "Centre Fezireda - Bafilo",                num: "90 31 84 72",      desc: "VBG kpɛlɩ cɩŋ" },
      { title: "VBG Kpɛlɩ - Sokodé",                     num: "90 83 21 22",      desc: "Tchalo, AGAIB Centrale cɩŋ" },
      { title: "VBG Kpɛlɩ - Kara",                       num: "92 67 56 86",      desc: "Action sociale ɣɔlʋ taa" },
      { title: "ATBEF Yɔɔlʋ - Kara",                     num: "26 60 05 80",      desc: "Tchintchinda, katɔlɩkɩ cɩnɩ wɛŋ" },
      { title: "ATBEF Yɔɔlʋ - Sokodé",                   num: "25 50 02 46",      desc: "Cathédrale ɣɔŋ, taksɩ cɩnɩ wɛŋ" },
      { title: "VBG Kpɛlɩ - Kante",                      num: "90 98 30 19",      desc: "Action sociale ɣɔlʋ taa" },
      { title: "VBG Kpɛlɩ - Dankpen",                    num: "91 91 11 60",      desc: "Action sociale Dankpen taa" },
      { title: "VBG Kpɛlɩ - Dapaong",                    num: "90 31 32 52",      desc: "Kpɛlɩ cɩŋ" },
      { title: "VBG Kpɛlɩ - Naki-Est",                   num: "92 19 69 49",      desc: "Préfecture cɩnɩ wɛŋ" },
      { title: "Halɩsɩ Ñɩnɩ - Cinkassé",                 num: "90 11 24 15",      desc: "Kpɛlɩ hʋlʋ" }
    ],

    podcast_intro: "Kʋm Doto'm ɔdɔŋ tɛŋ taa! 🎧\n\nÑɩŋ naa ɔdɔŋ tɔ. Dze ▶ ŋ yõ.",
    podcasts: [
      { ep: "Ɔdɔŋ 01", title: "JPS Agenda ye nɩ?",                       desc: "Nusrɔ̃ 2250, 2419 kple 2535 ɖɩ ɩɖɛ.",                                   src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
      { ep: "Ɔdɔŋ 02", title: "Pɛɛlaa kple ɖɔŋ Togo taa",               desc: "Kara kple Lomé taa ɖɔŋ cɩŋ kɔŋkɔŋ.",                                   src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
      { ep: "Ɔdɔŋ 03", title: "VBG: Taɣɩsɩ & hʋlʋ",                    desc: "Egbɔ wò te VBG ɖɩ nɩ, taɣɩ, saɣɩm.",                                  src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
      { ep: "Ɔdɔŋ 04", title: "Savanes: Pɛɛlaa & laafɩ",                desc: "Pɛɛlaa tɩŋ ekstremism ɖɩ taɣɩsɩ taa.",                                 src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
    ],
    podcast_all_label: "🔗 Kpɔ ɔdɔŋ katã",
    podcast_all_url: "https://dotom.vercel.app/",

    quizz: [
      { q: "Sɔŋ hɛ wɔ Nusrɔ̃ 2250?",                                     choices: ["2013","2015","2018","2020"],                        correct: 1 },
      { q: "Kɛɛ JPS Agenda taa pilier?",                                  choices: ["3","4","5","6"],                                   correct: 2 },
      { q: "Pɛɛlaa Togo taa ŋa?",                                         choices: ["40%","50%","60%","70%"],                           correct: 2 },
      { q: "Tɛŋ ɖeka ka Togo taa November 2025 JPS Dzodede?",             choices: ["Kara","Sokodé","Lomé","Atakpamé"],                 correct: 2 },
      { q: "Ñɩŋ ka dea pɛɛlaa ɖɔŋ wɔm kpɛlɩ?",                          choices: ["Laafɩ","Tɔcɛ","Taɣɩsɩ","Kʋzɔŋ"],                 correct: 1 },
      { q: "Tɛŋ ɖeka ka January 2026 JPS atelier?",                       choices: ["Dapaong","Mango","Cinkassé","Bafilo"],             correct: 0 },
      { q: "ONU cɩŋ ka le PNUD kple Togo JPS?",                           choices: ["UNESCO","UNFPA","OMS","PAM"],                      correct: 1 },
      { q: "Africa ONG ka Togo ɖɔŋ wɔm taa?",                             choices: ["WANEP-Togo","Amnesty","MSF","Greenpeace"],         correct: 0 },
      { q: "Tɩŋ ka Savanes pɛɛlaa laafɩ hia?",                            choices: ["Piraterie","Ekstremism","Cyber","Faune"],          correct: 1 },
      { q: "'Laafɩ' ñɩŋ dɔwɔŋ sɔgbe?",                                   choices: ["Pɛɛlaa sɔŋ kpɛlɩ","Pɛɛlaa laafɩ akɔ tɛŋ taa","Sport","Sukuu"], correct: 1 }
    ],
    badges:    ["Ɖɔŋ Tʋ 🌱", "JPS Sɛɣʋ 🏅", "Ɖɔŋ Naa 🏆"],
    badge_msg: (name) => `Ɩzʋ! Badge "${name}" taa!`,
    wrong:     "❌ Kɛɛ. Yele: ",
    correct:   "✅ Yɔ! Ŋ la!",
    score:     (s, t) => `Quiz! Fife: ${s}/${t}`,
    quiz_start:"🧠 Quiz! Dze bɔtɔwo.",

    emergency: "🚨 Saɣim. Ŋ data mɛ registration o.\n\nHʋlʋ taa:",
    emergency_banner: "🚨 SAƔIM",

    temoignage: "🎤 Essolaba kɔŋ, afe 24, Kara ɖɔŋ wɔm:\n\n« Ŋ wɔ citoyenne la, mɛ cɛ ŋ yele hʋlʋ. Doto'm kplɔ ŋ be ɖɔŋ doa gɔme. »",

    about: "Doto'm nye quadrilingual podcast taa Cynel de Souza & Diane Adonsou.\n\n🎯 JPS Agenda vulgariser & pɛɛlaa kɔŋ.\n\n🌍 Kɔŋ: Français · English · Éwé · Kabyè",

    menu_prompt: "Ana ɩzʋ?",
    back:        "⬅️ Pʋpʋ",
    greet_prompts: ["Menu", "Doto'm kɛɛ"],
    fallback:    "Mɛ cɛ o 🤔\nŊlɔ: JPS, VBG, Podcast, Quiz, Kɔŋ ke SAƔIM",
    input_placeholder: "Ŋlɔ ŋa...",
  },
};


let lang = null;          // null = pas encore choisi
let quizIdx   = 0;
let quizScore = 0;
let awaitingQuizAnswer = false;


const msgs = document.getElementById('dotom-messages');
const inp  = document.getElementById('dotom-input');

// pour défiler la zone de messages vers le bas
function scrollBot() {
  setTimeout(() => { msgs.scrollTop = msgs.scrollHeight; }, 80);
}

//Ajoute une bulle de message (reçu ou envoyé)
function addMsg(text, side, extraHtml) {
  const wrap = document.createElement('div');
  wrap.className = 'msg-wrap ' + side;

  const bub = document.createElement('div');
  bub.className = 'bubble ' + side;
  bub.style.whiteSpace = 'pre-wrap';
  if (extraHtml) bub.innerHTML = extraHtml;
  else           bub.textContent = text;

  const time = document.createElement('div');
  time.className = 'msg-time';
  time.textContent = getTime();

  wrap.appendChild(bub);
  wrap.appendChild(time);
  msgs.appendChild(wrap);
  scrollBot();
  return wrap;
}

//indicateur de frappe 
function addTyping() {
  const wrap = document.createElement('div');
  wrap.className = 'msg-wrap recv';
  wrap.id = 'typing-indicator';
  const bub = document.createElement('div');
  bub.className = 'bubble recv typing';
  bub.innerHTML = '<span></span><span></span><span></span>';
  wrap.appendChild(bub);
  msgs.appendChild(wrap);
  scrollBot();
}

function removeTyping() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

//boutons de réponse rapide 
function addQuickReplies(options, callback) {
  const qr = document.createElement('div');
  qr.className = 'quick-replies';
  qr.id = 'current-qr';

  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'qr-btn';
    btn.textContent = opt;
    btn.onclick = () => {

      document.querySelectorAll('#current-qr').forEach(el => {
        el.querySelectorAll('.qr-btn').forEach(b => b.disabled = true);
        el.style.opacity = '0.5';
      });
      addMsg(opt, 'sent');
      callback(opt);
    };
    qr.appendChild(btn);
  });

  msgs.appendChild(qr);
  scrollBot();
}

function removeQR() {
  document.querySelectorAll('.quick-replies').forEach(el => el.remove());
}

//Envoie un message du bot après un délai
function botReply(text, delay, qr, qrCallback) {
  addTyping();
  setTimeout(() => {
    removeTyping();
    addMsg(text, 'recv');
    if (qr && qrCallback) addQuickReplies(qr, qrCallback);
    scrollBot();
  }, delay || 900);
}

//heure actuelle formatée HH:MM 
function getTime() {
  const now = new Date();
  return now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
}

//lire les textes de la langue active
function t() { return LANGS[lang]; }




const WELCOME_MULTILANG =
  "🕊️ Bonjour · Hello · N'di · Warabi !\n\n" +
  "Je suis Doto'm, le bot de la jeunesse togolaise pour la paix.\n" +
  "Choisissez votre langue :";

setTimeout(() => {
  addTyping();
  setTimeout(() => {
    removeTyping();
    addMsg(WELCOME_MULTILANG, 'recv');
    askLang();
  }, 1200);
}, 400);


// langue */
function askLang() {
  addQuickReplies(
    ["🇫🇷 Français", "🇬🇧 English", "🌍 Éwé", "🌍 Kabyè"],
    handleLangChoice
  );
}

//Appelé quand l'utilisateur choisit une langue
function handleLangChoice(choice) {
  if      (choice.includes("Français")) lang = 'fr';
  else if (choice.includes("English"))  lang = 'en';
  else if (choice.includes("Éwé"))      lang = 'ewe';
  else if (choice.includes("Kabyè"))   lang = 'kab';
  else { askLang(); return; }   // sécurité : relance si texte inconnu

  // Met à jour le placeholder de la saisie
  inp.placeholder = t().input_placeholder;

  // Message de bienvenue dans la langue choisie + menu d'accueil
  const L = t();
  botReply(L.welcome, 900, L.greet_prompts, handleMenu);
}


/* ════════════════════════════════════════════════════════════
   6. MENU PRINCIPAL
   ════════════════════════════════════════════════════════════ */

function showMenu() {
  const L = t();
  botReply(L.menu_prompt, 600, L.menu, handleMenu);
}

//Routeur central : redirige vers la bonne section selon le choix */
function handleMenu(choice) {
  const L = t();
  if      (choice === L.menu[0])         showJPS();
  else if (choice === L.menu[1])         showVBG();
  else if (choice === L.menu[2])         showPodcasts();
  else if (choice === L.menu[3])         showTemoignage();
  else if (choice === L.menu[4])         startQuiz();
  else if (choice === L.menu[5])         showEmergency();
  else if (choice === L.back)            showMenu();
  else if (choice === L.greet_prompts[0]) showMenu();
  else if (choice === L.greet_prompts[1]) showAbout();
  else if (choice === L.jps_menu[0])    showJPSDeep();
  else if (choice === L.jps_menu[1])    startQuiz();
  else if (choice === L.jps_menu[2])    showMenu();
}


/* ════════════════════════════════════════════════════════════
   7. SECTION JPS
   ════════════════════════════════════════════════════════════ */

function showJPS() {
  const L = t();
  botReply(L.jps, 900, L.jps_menu, handleMenu);
}

function showJPSDeep() {
  const L = t();
  botReply(L.jps_deep, 1000, [L.back], handleMenu);
}


/* ════════════════════════════════════════════════════════════
   8. SECTION VBG (ressources)
   ════════════════════════════════════════════════════════════ */

function showVBG() {
  const L = t();
  removeQR();
  addTyping();
  setTimeout(() => {
    removeTyping();
    addMsg(L.vbg, 'recv');

    // Une carte par ressource
    L.resources.forEach(r => {
      const w = document.createElement('div');
      w.className = 'msg-wrap recv';
      w.style.maxWidth = '85%';

      const card = document.createElement('div');
      card.className = 'resource-card';
      card.innerHTML = `
        <strong style="font-size:13px">${r.title}</strong>
        <div class="rc-num">${r.num}</div>
        <div class="rc-desc">${r.desc}</div>
      `;
      w.appendChild(card);
      msgs.appendChild(w);
    });

    addQuickReplies([L.back], handleMenu);
    scrollBot();
  }, 900);
}


/* ════════════════════════════════════════════════════════════
   9. SECTION PODCASTS
   ════════════════════════════════════════════════════════════ */

function showPodcasts() {
  const L = t();
  removeQR();
  addTyping();

  setTimeout(() => {
    removeTyping();
    addMsg(L.podcast_intro, 'recv');

    // Les cartes s'affichent en cascade (délai de 350ms entre chacune)
    L.podcasts.forEach((pod, i) => {
      setTimeout(() => {
        const w = document.createElement('div');
        w.className = 'msg-wrap recv';
        w.style.maxWidth = '90%';

        const card = document.createElement('div');
        card.className = 'podcast-card';
        card.innerHTML = `
          <div class="pod-ep">${pod.ep}</div>
          <div class="pod-title">🎧 ${pod.title}</div>
          <div class="pod-desc">${pod.desc}</div>
          <audio controls preload="none">
            <source src="${pod.src}" type="audio/mpeg">
          </audio>
        `;
        w.appendChild(card);
        msgs.appendChild(w);
        scrollBot();

        // Après la dernière carte : lien "voir tous" + bouton retour
        if (i === L.podcasts.length - 1) {
          setTimeout(() => {
            const wLink = document.createElement('div');
            wLink.className = 'msg-wrap recv';
            const wrap = document.createElement('div');
            wrap.style.padding = '4px 0 8px';

            const a = document.createElement('a');
            a.href = L.podcast_all_url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.className = 'see-all-link';
            a.textContent = L.podcast_all_label;

            wrap.appendChild(a);
            wLink.appendChild(wrap);
            msgs.appendChild(wLink);
            addQuickReplies([L.back], handleMenu);
            scrollBot();
          }, 300);
        }
      }, i * 350);
    });
  }, 900);
}


/* ════════════════════════════════════════════════════════════
   10. MODE URGENCE
   ════════════════════════════════════════════════════════════ */

function showEmergency() {
  const L = t();
  removeQR();

  // Bandeau rouge clignotant en haut des messages
  const banner = document.createElement('div');
  banner.className = 'emergency-header';
  banner.textContent = L.emergency_banner;
  msgs.appendChild(banner);

  addTyping();
  setTimeout(() => {
    removeTyping();
    addMsg(L.emergency, 'recv');

    // Cartes urgence (rouge)
    L.resources.forEach(r => {
      const w = document.createElement('div');
      w.className = 'msg-wrap recv';
      w.style.maxWidth = '85%';

      const card = document.createElement('div');
      card.style.cssText = 'background:#FFEBEE;border-left:3px solid #D32F2F;border-radius:10px;padding:10px 13px;font-size:13px;margin-top:5px;line-height:1.5';
      card.innerHTML = `
        <strong>${r.title}</strong>
        <div style="font-size:16px;font-weight:800;color:#C62828;font-family:monospace">${r.num}</div>
        <div style="color:#555;font-size:12px">${r.desc}</div>
      `;
      w.appendChild(card);
      msgs.appendChild(w);
    });

    addQuickReplies([L.back], handleMenu);
    scrollBot();
  }, 700);
}


function showAbout() {
  const L = t();
  botReply(L.about, 800, [L.back], handleMenu);
}

//Quiz
function startQuiz() {
  const L = t();
  quizIdx   = 0;
  quizScore = 0;
  awaitingQuizAnswer = true;
  removeQR();
  botReply(L.quiz_start, 700, null, null);
  setTimeout(() => askQuestion(), 1200);
}

function askQuestion() {
  const L = t();
  const qList = L.quizz;

  if (quizIdx >= qList.length) {
    awaitingQuizAnswer = false;
    endQuiz();
    return;
  }

  const q = qList[quizIdx];
  removeQR();
  const qtext = `Q${quizIdx + 1}/${qList.length} :\n\n${q.q}`;

  addTyping();
  setTimeout(() => {
    removeTyping();
    addMsg(qtext, 'recv');
    addQuickReplies(q.choices, (choice) => {
      awaitingQuizAnswer = false;
      handleQuizAnswer(q.choices.indexOf(choice));
    });
    awaitingQuizAnswer = true;
  }, 800);
}

function handleQuizAnswer(chosen) {
  const L = t();
  const q = L.quizz[quizIdx];

  if (chosen === q.correct) {
    quizScore++;
    botReply(L.correct, 600, null, null);
  } else {
    botReply(L.wrong + q.choices[q.correct], 600, null, null);
  }

  quizIdx++;
  setTimeout(() => askQuestion(), 1200);
}

function endQuiz() {
  const L = t();
  const total = L.quizz.length;
  botReply(L.score(quizScore, total), 800, null, null);

  // Calcul du badge
  let badge = L.badges[0];
  if      (quizScore === total)                    badge = L.badges[2];
  else if (quizScore >= Math.ceil(total / 2))      badge = L.badges[1];

  setTimeout(() => {
    removeQR();
    const w = document.createElement('div');
    w.className = 'msg-wrap recv';

    const card = document.createElement('div');
    card.className = 'badge-card';
    card.innerHTML = `
      <div class="badge-title">${badge}</div>
      <div style="font-size:12px;color:#795548;margin-top:5px">${L.badge_msg(badge)}</div>
    `;
    w.appendChild(card);
    msgs.appendChild(w);
    addQuickReplies([L.back], handleMenu);
    scrollBot();
  }, 1000);
}


//Analyse le texte tapé et redirige vers la bonne section */
function handleTextInput(text) {
  // Si la langue n'est pas encore choisie, ignorer la saisie
  if (!lang) return;

  const L = t();
  const lower = text.toLowerCase();

  // Réponse pendant le quiz (1, 2, 3 ou 4)
  if (awaitingQuizAnswer) {
    const numMap = { '1': 0, '2': 1, '3': 2, '4': 3 };
    if (numMap[text.trim()] !== undefined) {
      awaitingQuizAnswer = false;
      removeQR();
      handleQuizAnswer(numMap[text.trim()]);
      return;
    }
  }

  // Mots-clés (toutes langues)
  const emergencyKw = ['aide', 'urgence', 'sos', 'help', 'danger', 'emergency', 'dɔwɔnu', 'saɣim', 'gakaka', 'viol'];
  if (emergencyKw.some(k => lower.includes(k))) { showEmergency(); return; }

  if (['jps','agenda','resolution','2250','pilier'].some(k => lower.includes(k))) { showJPS(); return; }

  if (['vbg','violence','femme','genre','gbv','contact','ressource'].some(k => lower.includes(k))) { showVBG(); return; }

  if (['podcast','audio','écoute','ecoute','émission','emission','listen','ɔdɔŋ','nusrɔ̃'].some(k => lower.includes(k))) { showPodcasts(); return; }

  if (['quiz','question','test','wezã'].some(k => lower.includes(k))) { startQuiz(); return; }

  if (['menu','retour','back','dzo','pʋpʋ'].some(k => lower.includes(k))) { showMenu(); return; }

  if (['propos','about','cynel','doto'].some(k => lower.includes(k))) { showAbout(); return; }

  // Message non compris
  botReply(L.fallback, 700, [L.back], handleMenu);
}

//envoyer par la touche Entrée */
function sendMsg() {
  const val = inp.value.trim();
  if (!val) return;
  addMsg(val, 'sent');
  inp.value = '';
  handleTextInput(val);
}