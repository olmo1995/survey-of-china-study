// Study Guide Knowledge Base - Survey of China (Fall 2025 Edition)
// Expanded to maximize training. Includes comprehensive feedback for every question.

const knowledgeBase = {
    tf: [
       // --- GEOGRAPHY, DEMOGRAPHICS & BASIC FACTS ---
    { ref: "[Point 1]", q: "China's terrain is characterized by a 'staircase' topography where the highest step is located in the east and the lowest step is in the west.", a: false, exp: "It is the exact opposite. The terrain descends from west to east. The highest step is in the west (Qinghai-Tibet Plateau) and the lowest step is in the east (broad plains and low hills)." },
    { ref: "[Point 1]", q: "The lowest step of China's terrain, located in the east, is where most of the population and agriculture are concentrated.", a: true, exp: "This eastern region consists of broad plains and low hills, making it highly suitable for agriculture and human settlement." },
    { ref: "[Point 2]", q: "China is the largest country in the world by total land area.", a: false, exp: "China has a land area of approximately 9.6 million square kilometers, making it the third or fourth largest country in the world, not the first." },
    { ref: "[Point 4]", q: "China's administrative division includes 4 direct-controlled municipalities: Beijing, Shanghai, Tianjin, and Chongqing.", a: true, exp: "These four cities are under direct administration of the central government, existing alongside 23 provinces, 5 autonomous regions, and 2 SARs." },
    { ref: "[Point 5]", q: "Mount Everest (Qomolangma) is located entirely within China's borders.", a: false, exp: "Mount Everest is located on the border between China (Tibet Autonomous Region) and Nepal." },
    { ref: "[Point 8]", q: "The People's Republic of China was officially founded on October 1, 1949.", a: true, exp: "October 1 is celebrated annually as China's National Day to mark the founding of the PRC." },
    { ref: "[Point 9]", q: "Sichuan province is located in Southeastern China and its primary dialect is Cantonese.", a: false, exp: "Sichuan is located in Southwestern China, its capital is Chengdu, and the local dialect is Sichuanese (a variant of Southwestern Mandarin)." },

    // --- PHILOSOPHY, RELIGION & ANCIENT HISTORY ---
    { ref: "[Point 10]", q: "Confucianism emphasizes 'Ren' (benevolence), 'Li' (proper rites), filial piety, and social harmony through strict moral hierarchies.", a: true, exp: "These are the core tenets of Confucianism, founded by Confucius, which heavily influenced Chinese social structures." },
    { ref: "[Point 10]", q: "Laozi, the founder of Daoism, advocated for taking aggressive action and establishing strict laws to govern society.", a: false, exp: "Laozi emphasized the 'Dao' (the natural order) and 'Wuwei' (action through non-action, naturalness, and simplicity), not strict laws." },
    { ref: "[Point 11]", q: "During the 'Hundred Schools of Thought' period, the Legalism school advocated for universal love and utilitarianism.", a: false, exp: "Legalism advocated for strict law and state control. It was the Mohism school that advocated for universal love and utilitarianism." },
    { ref: "[Point 12]", q: "There are 56 officially recognized ethnic groups in China, with the Han Chinese making up over 90% of the population.", a: true, exp: "The Han are the vast majority, while the other 55 groups are officially recognized ethnic minorities." },
    { ref: "[Point 13]", q: "The Liangzhu Site is an ancient civilization located in the Yellow River basin.", a: false, exp: "The Liangzhu Site (5300-4300 years ago) is located in the Yangtze River Delta, not the Yellow River basin." },
    { ref: "[Point 14]", q: "The Xia Dynasty is recognized as the first major dynasty in Chinese history.", a: true, exp: "The Xia Dynasty is the first, followed by Shang, Zhou, Qin, Han, Tang, Song, Yuan, Ming, and Qing." },
    { ref: "[Point 16]", q: "Zheng He was a famous fleet admiral during the Qing Dynasty who commanded seven voyages to the Americas.", a: false, exp: "Zheng He served during the early Ming Dynasty (1371-1433), and his seven monumental voyages went to Southeast Asia, South Asia, the Middle East, and East Africa (the 'Western Seas')." },
    { ref: "[Point 17]", q: "Oracle Bone Script (Jiaguwen) was primarily used for divination purposes during the Shang Dynasty.", a: true, exp: "Carved on turtle shells and animal bones, it is the earliest known form of Chinese character." },

    // --- ARTS, LITERATURE, ARCHITECTURE & CULTURE ---
    { ref: "[Point 15]", q: "In traditional Chinese architecture, the principle of 'Heaven-Human Unity' dictates that buildings must aggressively stand out against nature.", a: false, exp: "The principle of 'Heaven-Human Unity' dictates that buildings must coexist harmoniously with nature, not oppose it." },
    { ref: "[Point 15]", q: "The architectural principle of 'Ritual Hierarchy' refers to encoding social rank through strict design rules such as roof style, color, and column numbers.", a: true, exp: "This is why certain colors (like yellow) and roof styles were exclusively reserved for imperial use." },
    { ref: "[Point 18]", q: "Xu Shen compiled 'Shuowen Jiezi', China's first systematic dictionary, and is known as the Chinese character sage.", a: true, exp: "He analyzed 9,353 characters and established 540 radicals. Cang Jie is known as the legendary 'creator' of characters." },
    { ref: "[Point 20]", q: "Ouyang Xun and Zhao Mengfu are recognized among the top five representative calligraphers of ancient China.", a: true, exp: "They are listed alongside Wang Xizhi (Sage of Calligraphy), Yan Zhenqing, and Liu Gongquan." },
    { ref: "[Point 21]", q: "The main principle of traditional Chinese Shanshui (mountain and water) painting is to achieve exact, hyper-realistic visual representation of landscapes.", a: false, exp: "Shanshui painting explicitly avoids exact realistic representation. Its goal is to capture the inner spirit, energy, and harmony of nature, heavily utilizing blank space." },
    { ref: "[Point 22]", q: "A traditional Chinese painting masterpiece integrates four elements: Poetry, Calligraphy, Painting, and the Seal.", a: true, exp: "These four elements are considered the essential components of classical Chinese artwork." },
    { ref: "[Point 23]", q: "The 'Four Arts' expected of an ancient Chinese scholar were riding, archery, mathematics, and singing.", a: false, exp: "The 'Four Arts' (Siyi) were Qin (stringed instrument), Qi (Go board game), Shu (calligraphy), and Hua (painting)." },
    { ref: "[Point 24]", q: "The Mogao Caves, a UNESCO World Heritage site known for its grottoes and frescos, are located in Dunhuang.", a: true, exp: "They are also known as the Caves of the Thousand Buddhas." },
    { ref: "[Point 25]", q: "Traditional Hanfu clothing features a cross-collared right lapel, loose wide sleeves, and uses fabric ties instead of buttons.", a: true, exp: "Hanfu was the traditional clothing of the Han Chinese people from ancient times up to the late Ming Dynasty." },
    { ref: "[Point 26]", q: "In Beijing Opera, the 'Chou' role represents a painted-face male warrior.", a: false, exp: "The 'Chou' is the male clown role. The painted-face male role is called 'Jing'." },
    { ref: "[Point 27]", q: "Face-changing (Bian Lian) and fire-breathing are famous stunts traditionally belonging to Sichuan Opera.", a: true, exp: "These dramatic skills are used uniquely in Sichuan Opera to express sudden changes in emotion." },
    { ref: "[Point 28]", q: "In Tang Dynasty poetry, Du Fu is known as the 'Poet Immortal' due to his heroic imagination, while Li Bai is the 'Poet Sage'.", a: false, exp: "The titles are reversed. Du Fu is the 'Poet Sage' (serious, patriotic), and Li Bai is the 'Poet Immortal' (heroic, romantic, bold)." },
    { ref: "[Point 30]", q: "The Erhu is a four-stringed lute, while the Pipa is a two-stringed bowed fiddle.", a: false, exp: "It is the other way around. The Erhu is a two-stringed bowed fiddle, and the Pipa is a four-stringed lute." },

    // --- EMPERORS, CAPITALS & MONUMENTS ---
    { ref: "[Point 31]", q: "Qin Shi Huang, the First Emperor of a unified China, standardized writing, weights, measures, and currency.", a: true, exp: "In addition to these unifications, he began the Great Wall and commissioned the Terracotta Army." },
    { ref: "[Point 32]", q: "Wu Zetian, who ruled during the Tang/Wu Zhou Dynasty, is the only officially recognized female sovereign in Chinese history.", a: true, exp: "She is the only woman in Chinese history to officially take the title of Emperor." },
    { ref: "[Point 34]", q: "Anyang served as the capital during the Shang Dynasty.", a: true, exp: "Anyang is recognized as one of the major ancient capitals and the site of Shang Dynasty ruins (Yinxu)." },
    { ref: "[Point 51]", q: "The Great Wall of China was primarily built to serve as a scenic tourist attraction and an aqueduct for water transport.", a: false, exp: "Its historical functions were military defense against nomadic invasions, border governance, economic protection (Silk Road), and cultural division." },

    // --- CALENDARS, FESTIVALS & TRADITIONAL MEDICINE ---
    { ref: "[Point 37]", q: "The Heavenly Stems and Earthly Branches (H&T chronology) is a sexagenary (60-year) cycle system used in the lunar calendar.", a: true, exp: "It is a traditional system used for calculating years, months, days, and hours." },
    { ref: "[Point 38]", q: "There are 12 'Jieqi' (solar terms) in one traditional Chinese lunar year.", a: false, exp: "There are 24 'Jieqi' (solar terms) in one year, used to mark astronomical events and guide agriculture." },
    { ref: "[Point 39]", q: "Eating Zongzi (sticky rice dumplings) and racing dragon boats are traditional customs of the Qingming Festival.", a: false, exp: "These are customs of the Dragon Boat Festival. The Qingming Festival involves tomb-sweeping and honoring the dead." },
    { ref: "[Point 42]", q: "In Traditional Chinese Medicine (TCM), the four diagnosis methods are Observation, Auscultation/Olfaction, Interrogation, and Palpation.", a: true, exp: "These four methods (looking, listening/smelling, asking, touching/pulse-taking) are the foundation of TCM diagnostics." },
    { ref: "[Point 43]", q: "Zhang Zhongjing is revered as the Medicine Sage for writing the 'Treatise on Cold Pathogenic and Miscellaneous Diseases' during the Eastern Han dynasty.", a: true, exp: "He established foundational medication principles for TCM that are still used today." },

    // --- SCIENCE, MATH & INVENTIONS ---
    { ref: "[Point 40]", q: "The 'Four Great Inventions' of ancient China are Papermaking, Printing, Gunpowder, and the Compass.", a: true, exp: "These four inventions had a profound impact on global civilization and technological development." },
    { ref: "[Point 41]", q: "China's current progress in 5G, high-speed rail, and space exploration is driven by massive government R&D investment and STEM education.", a: true, exp: "Other factors include policies opening up to global markets and a vast domestic consumer market driving innovation." },
    { ref: "[Point 44]", q: "In ancient China, the mathematician Zu Chongzhi invented the cyclotomic method, while Liu Hui calculated the most accurate value of pi.", a: false, exp: "The achievements are swapped. Liu Hui invented the cyclotomic method, while Zu Chongzhi calculated the most accurate value of pi in the ancient world." },
    { ref: "[Point 44]", q: "The mathematician Qin Jiushao is famous for developing the Chinese Remainder Theorem.", a: true, exp: "Qin Jiushao was a brilliant mathematician who made major contributions to numerical solutions." },
    { ref: "[Point 45]", q: "The Shoushi Calendar compiled by Guo Shoujing in the Yuan Dynasty was nearly identical to the modern Gregorian calendar but was created 300 years earlier.", a: true, exp: "This represents a massive astronomical achievement, making it the most accurate calendar in the world at its time." },

    // --- FOREIGN EXCHANGE, HISTORY & OPIUM WARS ---
    { ref: "[Point 46]", q: "Matteo Ricci was a 13th-century Venetian traveler who served in Kublai Khan's court.", a: false, exp: "Marco Polo was the Venetian traveler in Kublai Khan's court (Yuan Dynasty). Matteo Ricci was an Italian Jesuit missionary in the late Ming Dynasty." },
    { ref: "[Point 47]", q: "Catholicism was prohibited in late-Ming dynasty China (the 1616 Nanjing Incident) solely because foreign missionaries refused to learn the Chinese language.", a: false, exp: "It was prohibited due to a combination of cultural conflicts (clashing with Confucian ancestor worship), political fears of rebellion/foreign collusion, intellectual opposition, and social backlash over land." },
    { ref: "[Point 48]", q: "Wei Yuan authored the 'Illustrated Survey of Foreign Nations' (Hai Guo Tu Zhi) as an initial response to the First Opium War.", a: true, exp: "It was the first significant Chinese work analyzing the West, aiming to understand foreign geography and strategy." },
    { ref: "[Point 50]", q: "The Imperial Examination (Keju) had the merit of allowing fair social mobility but the demerit of stifling creativity due to rigid eight-legged essays.", a: true, exp: "Started in the Sui Dynasty (605 AD), it replaced noble birth with written exams but eventually caused social conservatism before being abolished in 1905." },
    { ref: "[Point 52]", q: "Chinese Dark tea, such as Pu'er, is categorized as a completely unfermented tea.", a: false, exp: "Green tea is unfermented. Dark tea (Pu'er) is categorized as a fully/post-fermented tea." },
    { ref: "[Point 53]", q: "The First Opium War (1840-1842) was triggered because China was illegally smuggling opium into Britain.", a: false, exp: "It was triggered because Britain smuggled opium into China. The resulting Treaty of Nanjing forced China to open ports and cede Hong Kong, turning it into a semi-colonial society." },
    { ref: "[Point 53]", q: "During the Second Opium War (1856-1860), Anglo-French forces invaded Beijing and burned down the Old Summer Palace.", a: true, exp: "This traumatic historical event resulted in treaties that further damaged China's sovereignty." },

    // --- EDUCATION & SOCIETY ---
    { ref: "[Point 54]", q: "Favorable policies for minority ethnic group students in China include bonus points on the Gaokao, specialized university quotas, and funding for bilingual education.", a: true, exp: "These policies are designed to promote educational equity and protect minority languages and cultures." },
    { ref: "[Point 55]", q: "The 'Project 985', initiated in 2015, is China's newest educational initiative to develop world-class universities by the year 2050.", a: false, exp: "Project 985 was initiated in May 1998 to create elite universities. The initiative started in 2015 aiming for 2050 is the 'Double First-Class' project." },
    { ref: "[Point 69]", q: "China's family planning policy has strictly remained a 'one-child' policy since 1982 with no adaptations.", a: false, exp: "The policy evolved from controlling population in 1982 to a 'three-child' policy in 2021, reflecting pragmatic governance and respect for changing demographic laws (like an aging population)." },

    // --- POLITICS, ECONOMY & GLOBAL INITIATIVES ---
    { ref: "[Point 56]", q: "China's political party system is characterized by the CPC acting as the ruling party while eight democratic parties act as opposing parties to challenge them.", a: false, exp: "The eight democratic parties are 'participating parties', not opposing parties. The system focuses on multi-party cooperation and political consultation, not confrontation." },
    { ref: "[Point 57]", q: "According to the study guide, an advantage of China's whole-process people's democracy is stable, long-term policy planning without short-term election-driven disruptions.", a: true, exp: "It also highlights efficient governance, reduced partisan strife, and people-centered governance not influenced by capital/interest groups." },
    { ref: "[Point 58]", q: "China's environmental protection measures include strictly increasing smog output and completely deforesting rural areas to build factories.", a: false, exp: "The measures include the exact opposite: cutting smog, planting forests (ecological restoration), green/low-carbon development, and international climate cooperation." },
    { ref: "[Point 59]", q: "The 'Five Principles of Peaceful Coexistence' includes mutual respect for sovereignty, mutual non-aggression, and non-interference in internal affairs.", a: true, exp: "Established in the 1950s, these principles form the cornerstone of China's foreign policy." },
    { ref: "[Point 60]", q: "The 'Reform and Opening-up' policy is listed as the primary reason for China eliminating extreme poverty and becoming the world's second-largest economy after 1978.", a: true, exp: "Other reasons include market-oriented reforms, social stability, and the introduction of foreign capital." },
    { ref: "[Point 61]", q: "Chinese Modernization is a universal model that China explicitly demands all other developing nations to copy completely.", a: false, exp: "The document notes that Chinese modernization is suited to China's specific national conditions and is 'not fully copyable' by others, though it provides valuable lessons." },
    { ref: "[Point 62]", q: "The 'Reform and Opening-up' policy involved domestic market mechanism reforms starting in rural areas, and opening coastal cities to foreign capital.", a: true, exp: "Launched in 1978, its goal was to improve living standards and realize national modernization." },
    { ref: "[Point 64]", q: "The 'One Belt and One Road' Initiative (BRI) is a military alliance designed to counter Western naval powers in the Pacific.", a: false, exp: "The BRI is a massive global infrastructure and economic development strategy aimed at connecting Asia with Africa and Europe via land and maritime networks, not a military alliance." },
    { ref: "[Point 65]", q: "The concept of a 'Community with a Shared Future for Mankind' aims to balance legitimate concerns of other countries while pursuing common development and world peace.", a: true, exp: "Proposed by President Xi in 2013, it emphasizes global interdependence and win-win cooperation." },
    { ref: "[Point 66]", q: "The 'System of Regional Ethnic Autonomy' means that minority areas become independent countries completely separated from the Chinese state.", a: false, exp: "Autonomous organs exercise self-governance rights *under the unified leadership of the state*, protecting minority rights while maintaining national unity." },
    { ref: "[Point 67]", q: "Socialism with Chinese characteristics combines scientific socialism with China’s specific national conditions, featuring CPC leadership and a socialist market economy.", a: true, exp: "It is a unique development model tailored to China's history and reality." },
    { ref: "[Point 68]", q: "China contributes to world peace by actively participating in UN peacekeeping, pursuing peaceful development without expansion, and settling disputes through dialogue.", a: true, exp: "China adheres to an independent, peaceful foreign policy and opposes hegemonism." }
    ],
    mc: [
    // --- GEOGRAPHY, DEMOGRAPHICS & BASIC FACTS ---
    { ref: "[Point 1]", q: "Which of the following accurately describes the 'three-step' descending topography of China's terrain?", options: [
        "The highest step is in the east (plains), middle step in the center, and lowest step in the west (mountains).",
        "The highest step is in the west (Qinghai-Tibet Plateau), the middle step consists of basins/plateaus, and the lowest step is in the east (plains/low hills).",
        "The terrain is perfectly flat across the entire country, except for Mount Everest in the north.",
        "The highest step is in the south (tropical rainforests) and descends towards the north (desert regions)."
    ], answer: 1, exp: "China's terrain descends like a staircase from west to east. The west contains the massive Qinghai-Tibet Plateau, while the east consists of broad plains and hills where most of the agriculture and population are concentrated." },
    
    { ref: "[Point 4]", q: "What is the exact administrative division of the People's Republic of China according to the study guide?", options: [
        "30 provinces, 2 autonomous regions, and 1 federal district.",
        "50 states, 5 territories, and 2 Special Economic Zones.",
        "23 provinces, 5 autonomous regions, 4 direct-controlled municipalities, and 2 Special Administrative Regions.",
        "22 provinces, 4 autonomous regions, 5 direct-controlled municipalities, and 3 SARs."
    ], answer: 2, exp: "China has 23 provinces, 5 autonomous regions (Tibet, Xinjiang, Inner Mongolia, Ningxia, Guangxi), 4 direct municipalities (Beijing, Shanghai, Tianjin, Chongqing), and 2 SARs (Hong Kong, Macau)." },

    { ref: "[Point 9]", q: "Which of the following statements about Sichuan province is TRUE?", options: [
        "Its capital is Chongqing, and it is located in Eastern China.",
        "Its capital is Chengdu, it is located in Southwestern China, and it is home to Mount Emei and giant panda reserves.",
        "Its primary dialect is Cantonese, and it is famous for the Mogao Caves.",
        "It is an autonomous region located on the highest step of China's topography."
    ], answer: 1, exp: "Sichuan's capital is Chengdu. It is in Southwest China, speaks Sichuanese, and features landmarks like Mt. Emei, Jiuzhaigou Valley, the Leshan Giant Buddha, and panda reserves." },

    // --- PHILOSOPHY, RELIGION & ANCIENT HISTORY ---
    { ref: "[Point 10]", q: "Which ancient philosopher founded Daoism (Taoism) and emphasized the 'Dao' and 'Wuwei' (action through non-action)?", options: [
        "Confucius",
        "Han Feizi",
        "Laozi",
        "Mozi"
    ], answer: 2, exp: "Laozi founded Daoism, focusing on naturalness and simplicity. Confucius founded Confucianism (emphasizing Ren, Li, and filial piety)." },

    { ref: "[Point 11]", q: "During the 'Hundred Schools of Thought' period, which ideological school advocated for strict law and state control?", options: [
        "Confucianism",
        "Legalism",
        "Mohism",
        "Daoism"
    ], answer: 1, exp: "Legalism believed in strict laws to control society. Mohism advocated for universal love, Confucianism for moral hierarchies, and Daoism for natural simplicity." },

    { ref: "[Point 13]", q: "What does the Liangzhu Site (5300–4300 years ago) located in the Yangtze River Delta represent in Chinese history?", options: [
        "The capital of the Qing Dynasty.",
        "The site where the Terracotta Warriors were buried.",
        "An early state civilization indicated by a highly stratified Neolithic jade culture with a clear division of social classes.",
        "The exact location where the First Opium War began."
    ], answer: 2, exp: "The Liangzhu Site provides crucial archaeological evidence of an early Chinese state through its stratified jade and pottery burials." },

    { ref: "[Point 17]", q: "What is the earliest known form of Chinese character, carved on turtle shells and animal bones for divination during the Shang Dynasty?", options: [
        "Shuowen Jiezi",
        "Oracle Bone Script (Jiaguwen)",
        "Regular Script (Kaishu)",
        "Cursive Script (Caoshu)"
    ], answer: 1, exp: "Oracle Bone Script (Jiaguwen) is the oldest verified form of Chinese writing, primarily used by diviners." },

    // --- ARTS, LITERATURE, ARCHITECTURE & CULTURE ---
    { ref: "[Point 15]", q: "In traditional Chinese architecture, what does the principle of 'Central Axis Symmetry' represent?", options: [
        "Coexisting harmoniously with the surrounding mountains and water.",
        "Encoding social rank through roof styles, colors, and column numbers.",
        "A layout centered on a north-south axis with mirror-image balance, representing central respect and cosmic balance.",
        "Using fabric ties instead of modern buttons on structural pillars."
    ], answer: 2, exp: "Central Axis Symmetry represents cosmic balance and central respect. Coexisting with nature is 'Heaven-Human Unity', and encoding social rank is 'Ritual Hierarchy'." },

    { ref: "[Point 18]", q: "Who compiled 'Shuowen Jiezi', China's first systematic dictionary that analyzed 9,353 characters, earning him the title of 'Chinese character sage'?", options: [
        "Cang Jie",
        "Wang Xizhi",
        "Xu Shen",
        "Du Fu"
    ], answer: 2, exp: "Xu Shen compiled this foundational dictionary. Cang Jie is the legendary 'creator' of characters, while Wang Xizhi is the Sage of Calligraphy." },

    { ref: "[Point 21]", q: "What is the main principle of traditional Chinese Shanshui (mountain and water) painting?", options: [
        "To achieve a hyper-realistic, photograph-like visual representation of a landscape.",
        "To capture the inner spirit, energy, and harmony of nature, utilizing blank space to stimulate the viewer's imagination.",
        "To exclusively use bright oil paints to depict historical battles.",
        "To completely fill the canvas with no negative space left behind."
    ], answer: 1, exp: "Shanshui emphasizes the philosophical concept of capturing the 'spirit' or 'energy' of nature, using negative space heavily." },

    { ref: "[Point 23]", q: "What were the 'Four Arts' (Siyi) expected to be mastered by an ancient Chinese scholar?", options: [
        "Archery, Charioteering, Calligraphy, and Mathematics",
        "Poetry, Calligraphy, Painting, and the Seal",
        "Qin (stringed instrument), Qi (Go board game), Shu (calligraphy), and Hua (painting)",
        "Face-changing, fire-breathing, dancing, and singing"
    ], answer: 2, exp: "Qin, Qi, Shu, and Hua were the four basic skills required of a refined literati in ancient China. (Poetry, Calligraphy, Painting, and the Seal are the four elements of a masterpiece painting)." },

    { ref: "[Point 25]", q: "Which of the following describes traditional 'Hanfu' clothing?", options: [
        "A fitted dress developed by the Manchu people in the Qing dynasty.",
        "A cross-collared right lapel, loose wide sleeves, layered construction, and fabric ties instead of buttons.",
        "A modernized suit created by Sun Yat-sen featuring numerous pockets.",
        "A military uniform characterized by heavy metal zippers and a left lapel."
    ], answer: 1, exp: "Hanfu is the traditional clothing system of the Han Chinese, easily recognizable by its 'Jiaoling Youren' (cross-collared right lapel) and lack of buttons." },

    { ref: "[Point 26]", q: "In Beijing Opera, what does the 'Jing' role specifically represent?", options: [
        "The standard female role",
        "The painted-face male role",
        "The male clown role",
        "The standard male role"
    ], answer: 1, exp: "The four roles are Sheng (male), Dan (female), Jing (painted face male), and Chou (male clown)." },

    { ref: "[Point 27]", q: "Face-changing (Bian Lian) and fire-breathing are spectacular stunts belonging uniquely to which art form?", options: [
        "Beijing Opera",
        "Sichuan Opera",
        "Shaolin Kung Fu",
        "Shanshui Painting"
    ], answer: 1, exp: "These stunts are the hallmark of Sichuan Opera, historically used to dramatically represent sudden emotional shifts." },

    { ref: "[Point 28]", q: "Which two poets represent the peak of Tang Dynasty poetry, earning the titles 'Poetry Sage' and 'Poet Immortal' respectively?", options: [
        "Li Bai (Sage) and Bai Juyi (Immortal)",
        "Du Fu (Sage) and Li Bai (Immortal)",
        "Wang Wei (Sage) and Du Fu (Immortal)",
        "Zhang Zeduan (Sage) and Ouyang Xun (Immortal)"
    ], answer: 1, exp: "Du Fu is the Poetry Sage (serious, patriotic, historical). Li Bai is the Poet Immortal (heroic, romantic, bold imagination)." },

    // --- EMPERORS, CAPITALS & MONUMENTS ---
    { ref: "[Point 31]", q: "Which emperor standardized writing, weights, measures, and currency, began the Great Wall, and commissioned the Terracotta Warriors?", options: [
        "Emperor Wu of Han",
        "Kublai Khan",
        "Qin Shi Huang",
        "Wu Zetian"
    ], answer: 2, exp: "Qin Shi Huang was the First Emperor of a unified China, responsible for these massive standardization policies and building projects." },

    { ref: "[Point 32]", q: "Who was the only officially recognized female sovereign (emperor) in Chinese history?", options: [
        "Empress Dowager Cixi",
        "Yang Guifei",
        "Hua Mulan",
        "Wu Zetian"
    ], answer: 3, exp: "Wu Zetian ruled during the Tang Dynasty (establishing her own Wu Zhou Dynasty) and is the only recognized female emperor." },

    { ref: "[Point 34]", q: "Which city is highly celebrated in Chinese history for serving as the capital of 13 major dynasties, including the Qin, Han, and Tang?", options: [
        "Beijing",
        "Nanjing",
        "Xi'an (Chang'an)",
        "Luoyang"
    ], answer: 2, exp: "Xi'an is one of China's oldest and most prestigious ancient capitals, and is the resting place of the Terracotta Army." },

    { ref: "[Point 51]", q: "According to the study guide, which of the following was NOT a historical function of the Great Wall?", options: [
        "Military defense against northern invasions.",
        "Border governance and cultural division/communication.",
        "Serving as a massive inland waterway to transport crops to Beijing.",
        "Economic protection for the Silk Road trade route."
    ], answer: 2, exp: "The Great Wall was for defense, border control, and trade protection. Transporting crops by waterway was the function of the Grand Canal." },

    // --- SCIENCE, MATH, MEDICINE & INVENTIONS ---
    { ref: "[Point 40]", q: "Which group of technological achievements is famously known as the 'Four Great Inventions' of ancient China?", options: [
        "Silk, Porcelain, Iron Casting, and Tea",
        "Papermaking, Printing, Gunpowder, and the Compass",
        "Acupuncture, the Abacus, Shanshui painting, and the Seismograph",
        "The Crossbow, Paper money, Movable type, and Bronze chariots"
    ], answer: 1, exp: "These four inventions heavily influenced the development of global civilization and technology." },

    { ref: "[Point 42]", q: "In Traditional Chinese Medicine (TCM), what are the four fundamental diagnostic methods?", options: [
        "Observation, Auscultation/Olfaction, Interrogation, and Palpation",
        "Acupuncture, Herbal medicine, Cupping, and Massage (Tui Na)",
        "Blood testing, X-rays, Surgery, and Dietary therapy",
        "Meditation, Fasting, Tai Chi, and Divination"
    ], answer: 0, exp: "The four diagnostic methods are looking, listening/smelling, asking, and touching (pulse-taking). The second option lists the 'curing ways' (treatments)." },

    { ref: "[Point 43]", q: "Who is known as the 'Medicine sage' of TCM for writing the 'Treatise on Cold Pathogenic and Miscellaneous Diseases' during the Eastern Han dynasty?", options: [
        "Hua Tuo",
        "Li Shizhen",
        "Zhang Zhongjing",
        "Sun Simiao"
    ], answer: 2, exp: "Zhang Zhongjing established foundational medication principles for TCM that are still heavily studied and applied today." },

    { ref: "[Point 44]", q: "Which ancient Chinese mathematician calculated the most accurate value of pi in the ancient world (to 7 decimal places)?", options: [
        "Zhang Cang",
        "Liu Hui",
        "Zu Chongzhi",
        "Qin Jiushao"
    ], answer: 2, exp: "Zu Chongzhi made this incredible calculation. Liu Hui invented the cyclotomic method, Zhang Cang compiled 'The Nine Chapters', and Qin Jiushao developed the Chinese Remainder Theorem." },

    { ref: "[Point 45]", q: "Compiled by Guo Shoujing in the Yuan Dynasty, the 'Shoushi Calendar' was historically significant because:", options: [
        "It was the first calendar to perfectly predict earthquakes.",
        "It was entirely written in Western Latin by Jesuit missionaries.",
        "It was nearly identical in accuracy to the modern Gregorian calendar but created 300 years earlier.",
        "It reduced the lunar year to exactly 300 days to simplify farming."
    ], answer: 2, exp: "The Shoushi (Season-Granting) Calendar was the pinnacle of ancient Chinese astronomy, rivaling modern calendar accuracy centuries ahead of Europe." },

    // --- FOREIGN EXCHANGE & HISTORY (OPIUM WARS) ---
    { ref: "[Point 46]", q: "Which statement accurately describes the historical figures Marco Polo and Matteo Ricci?", options: [
        "Marco Polo brought Western science to China in the Ming Dynasty; Matteo Ricci served Kublai Khan in the Yuan Dynasty.",
        "Both were British diplomats who initiated the Opium Wars.",
        "Marco Polo was a 13th-century traveler in the Yuan Dynasty; Matteo Ricci was a Jesuit missionary who brought Western science to the Ming Dynasty.",
        "Marco Polo invented the Silk Road; Matteo Ricci was a Portuguese explorer who conquered Macau."
    ], answer: 2, exp: "Marco Polo introduced China to Europe via his travels in the Yuan Dynasty. Matteo Ricci was a key figure in Sino-Western scientific and cultural exchange in the late Ming Dynasty." },

    { ref: "[Point 47]", q: "What was a primary cause of the prohibition of Catholicism in China during the late-Ming dynasty (the 1616 Nanjing Incident)?", options: [
        "Catholic missionaries refused to pay taxes to the Emperor.",
        "A combination of cultural/ethical clashes (like ancestor worship), political security fears, and intellectual resistance to Western science.",
        "The Jesuits organized a massive peasant rebellion that burned down Nanjing.",
        "The Vatican officially declared war on the Ming Dynasty."
    ], answer: 1, exp: "The prohibition was a complex result of cultural misunderstandings, intellectual rivalry, and political fears of foreign collusion." },

    { ref: "[Point 48]", q: "Who authored the 'Illustrated Survey of Foreign Nations' (Hai Guo Tu Zhi) as an initial Chinese response to the First Opium War?", options: [
        "Lin Zexu",
        "Zheng He",
        "Wei Yuan",
        "Sun Yat-sen"
    ], answer: 2, exp: "Wei Yuan wrote this significant work to help China understand the geography, technology, and strategy of Western nations after their shocking defeat in the Opium War." },

    { ref: "[Point 50]", q: "Which of the following was a major DEMERIT of the Imperial Examination system (Keju) before it was abolished in 1905?", options: [
        "It provided fair social mobility for commoners.",
        "It established unified cultural and stable governance.",
        "It relied on rigid writing rules (eight-legged essays) and was limited to Confucian classics, which stifled creativity.",
        "It heavily prioritized advanced physics and mathematics over moral philosophy."
    ], answer: 2, exp: "While it had merits like social mobility, its rigid format and focus on ancient classics over practical sciences stifled innovation and caused social conservatism in later dynasties." },

    { ref: "[Point 53]", q: "What were the immediate consequences of the First Opium War (1840-1842)?", options: [
        "Anglo-French forces burned down the Old Summer Palace.",
        "Britain smuggled opium out of China, forcing the Qing dynasty to close all borders.",
        "China signed the Treaty of Nanjing, opened ports, ceded Hong Kong, and became a semi-colonial society.",
        "The Qing Dynasty immediately collapsed, and the Republic of China was founded."
    ], answer: 2, exp: "The First Opium War resulted in the Treaty of Nanjing. The burning of the Old Summer Palace happened later, during the Second Opium War (1856-1860)." },

    // --- MODERN SOCIETY, EDUCATION & POLICIES ---
    { ref: "[Point 54]", q: "Which of the following is traditionally an example of favorable policies implemented for minority ethnic group students in China?", options: [
        "They are permanently exempt from attending university.",
        "They receive bonus points on the Gaokao, specialized university quotas, and funding for bilingual education.",
        "They are required to take the college entrance exam entirely in English.",
        "They are only allowed to study agriculture or traditional medicine."
    ], answer: 1, exp: "These policies aim to promote educational equity, protect ethnic cultures, and ensure minority representation in higher education." },

    { ref: "[Point 55]", q: "What is the primary goal of the 'Double First-Class' initiative started in 2015?", options: [
        "To build world-class universities and first-class academic disciplines by the end of 2050.",
        "To merge all high schools with local universities.",
        "To create exactly 100 top universities, replacing the older Project 211.",
        "To guarantee two university degrees for every Chinese citizen."
    ], answer: 0, exp: "It is a modern initiative aiming to elevate China's higher education system to the very top tier globally by 2050." },

    { ref: "[Point 69]", q: "How has China's family planning policy evolved over the decades?", options: [
        "It began as a three-child policy in 1982 and evolved into a strict one-child policy in 2021.",
        "It has remained exactly the same since 1982 to maintain strict population control.",
        "It began in 1982 to control population growth, and evolved to a three-child policy in 2021, reflecting a pragmatic, people-centered approach to demographic changes.",
        "It was entirely abolished in 2000, allowing unlimited children without state guidelines."
    ], answer: 2, exp: "The policy evolved pragmatically to address demographic shifts, such as an aging population, demonstrating the principle of 'seeking truth from facts'." },

    // --- POLITICS, ECONOMY & GLOBAL GOVERNANCE ---
    { ref: "[Point 56]", q: "According to the document, what is the official political party system of China?", options: [
        "A two-party democratic system where parties rotate power every four years.",
        "A single-party absolute dictatorship with no public consultation.",
        "A system of multi-party cooperation and political consultation under the leadership of the Communist Party of China.",
        "A constitutional monarchy with the CPC acting as the parliament."
    ], answer: 2, exp: "The CPC is the ruling party, and eight democratic parties are 'participating parties'. It focuses on cooperation and broad consultation rather than opposition." },

    { ref: "[Point 57]", q: "What does the study guide list as an advantage of the Chinese political system over Western-style democracy?", options: [
        "It relies heavily on capital and powerful interest groups to fund elections.",
        "It allows for stable, long-term policy planning without short-term election-driven disruptions, reducing unnecessary partisan strife.",
        "It guarantees that a completely new government will take over every five years to reverse previous policies.",
        "It encourages endless parliamentary debates that halt governance efficiency."
    ], answer: 1, exp: "The document highlights stable, long-term planning, high governance efficiency, and people-centered unified mobilization as key advantages." },

    { ref: "[Point 60]", q: "What is cited as the primary reason for China becoming the world's second-largest economy and eliminating extreme poverty after 1978?", options: [
        "The invention of the high-speed rail system.",
        "The outcome of the Opium Wars.",
        "The Reform and Opening-up policy, combined with market-oriented reforms and social stability.",
        "The complete isolation of the Chinese market from foreign capital."
    ], answer: 2, exp: "Launched by Deng Xiaoping in 1978, the Reform and Opening-up policy introduced market mechanisms domestically and opened coastal cities to global trade." },

    { ref: "[Point 61]", q: "Which of the following is a defined feature of 'Chinese Modernization'?", options: [
        "It strictly requires military expansion and colonization of neighboring territories.",
        "It features modernization of a huge population, common prosperity for all, harmony with nature, and peaceful development.",
        "It demands that all other developing nations exactly copy the Chinese model without alterations.",
        "It completely abandons all traditional culture in favor of total Westernization."
    ], answer: 1, exp: "Chinese modernization differs from historical Western models by explicitly pursuing peaceful development and common prosperity, and it acknowledges that it is a unique path not fully copyable by others." },

    { ref: "[Point 64]", q: "What is the primary objective of the 'One Belt and One Road' Initiative (BRI) adopted in 2013?", options: [
        "To build a physical defensive wall around the entire Asian continent.",
        "To create a massive global infrastructure development strategy aiming to connect Asia with Africa and Europe via land and maritime networks.",
        "To restrict all international trade strictly to countries within Asia.",
        "To establish a single global currency controlled by the Chinese government."
    ], answer: 1, exp: "The BRI involves investing in nearly 150 countries to enhance global connectivity, trade, and economic cooperation." },

    { ref: "[Point 65]", q: "The foreign policy concept of a 'Community with a Shared Future for Mankind' proposes that:", options: [
        "All nations should isolate themselves to prevent global conflicts.",
        "Only wealthy superpower nations should dictate the rules of global governance.",
        "The world should balance legitimate concerns of other countries while pursuing its own interests, promoting common development and world peace.",
        "All countries must be united under a single, centralized global government."
    ], answer: 2, exp: "Proposed by President Xi in 2013, it advocates for international interdependence, equity, and win-win cooperation to solve global challenges." },

    { ref: "[Point 66]", q: "What is the 'System of Regional Ethnic Autonomy' in China?", options: [
        "A system where ethnic minority regions become entirely independent, sovereign nations.",
        "A system that forcibly assimilates all minorities into Han culture.",
        "A system where autonomous organs are established in minority communities to exercise self-governance rights under the unified leadership of the state.",
        "A system that bans minorities from managing local educational and cultural affairs."
    ], answer: 2, exp: "This basic political system protects minority rights and promotes ethnic equality while maintaining national territorial integrity." },

    { ref: "[Point 59]", q: "Which of the following is NOT one of the 'Five Principles of Peaceful Coexistence' established by China in the 1950s?", options: [
        "Mutual respect for territorial integrity and sovereignty.",
        "Mutual non-aggression and non-interference in internal affairs.",
        "Equality and cooperation for mutual benefit.",
        "Preemptive military intervention in neighboring disputes."
    ], answer: 3, exp: "The five principles focus strictly on peaceful coexistence, respect, and non-interference. Preemptive military intervention contradicts this entirely." }        
    ], 
    def: [
         // --- GEOGRAPHY & SYMBOLS ---
    { ref: "[Point 1]", term: "Three-step altitude gradient (Staircase Topography)", def: "The characteristic of China's terrain which descends from west to east. The highest step is the Qinghai-Tibet Plateau in the west, the middle consists of basins/plateaus, and the lowest step consists of broad plains and low hills in the east." },
    { ref: "[Point 6]", term: "March of the Volunteers (义勇军进行曲)", def: "The official national anthem of the People's Republic of China." },
    { ref: "[Point 7]", term: "Five-Starred Red Flag", def: "The national flag of China." },
    
    // --- PHILOSOPHY, RELIGION & ANCIENT HISTORY ---
    { ref: "[Point 10]", term: "Confucianism (Confucius)", def: "A philosophy that emphasizes 'Ren' (benevolence/humaneness), 'Li' (proper rites/etiquette), filial piety, and social harmony through strict moral and social hierarchies." },
    { ref: "[Point 10]", term: "Daoism (Laozi)", def: "A philosophy that emphasizes the 'Dao' (the Way/natural order of the universe) and 'Wuwei' (action through non-action, naturalness, and simplicity)." },
    { ref: "[Point 11]", term: "Hundred Schools of Thought (百家争鸣)", def: "A golden age of Chinese philosophy during the Spring/Autumn and Warring States periods featuring ideological schools like Confucianism, Daoism, Legalism, and Mohism." },
    { ref: "[Point 11]", term: "Legalism", def: "An ancient philosophical school that advocated for strict law and state control to govern society." },
    { ref: "[Point 13]", term: "Liangzhu Site (良渚遗址)", def: "The site of the earliest Chinese civilization (5300-4300 years ago) in the Yangtze River Delta, indicating an early state with a clear division of social classes through stratified Neolithic jade culture." },
    { ref: "[Point 16]", term: "Zheng He", def: "A famous mariner and fleet admiral during the early Ming Dynasty who commanded seven monumental expeditionary 'Voyages to the Western Seas' (Southeast Asia, Middle East, East Africa)." },
    { ref: "[Point 17]", term: "Oracle Bone Script (Jiaguwen)", def: "The earliest known form of Chinese character, carved on turtle shells and animal bones for divination during the Shang Dynasty." },

    // --- ARCHITECTURE, ARTS & LITERATURE ---
    { ref: "[Point 15]", term: "Heaven-Human Unity (天人合一)", def: "An architectural principle dictating that buildings must coexist harmoniously with nature." },
    { ref: "[Point 15]", term: "Central Axis Symmetry (中轴对称)", def: "An architectural layout centering on a north-south axis with mirror-image balance, representing central respect and cosmic balance." },
    { ref: "[Point 15]", term: "Ritual Hierarchy (礼制秩序)", def: "An architectural principle that encodes social rank through strict design rules such as roof style, color, and column numbers." },
    { ref: "[Point 18]", term: "Xu Shen & Shuowen Jiezi", def: "Xu Shen is the 'Chinese character sage' who compiled Shuowen Jiezi, China's first systematic dictionary that analyzed 9,353 characters and established 540 radicals." },
    { ref: "[Point 19]", term: "Four Great Classical Novels", def: "Romance of the Three Kingdoms, Water Margin, Journey to the West, and Dream of the Red Chamber." },
    { ref: "[Point 21]", term: "Shanshui Painting Principle", def: "Translates to 'mountain and water'. The main principle is to capture the inner spirit, energy, and harmony of nature rather than exact realism, heavily utilizing blank space." },
    { ref: "[Point 22]", term: "Four Elements of Chinese Painting", def: "Poetry, Calligraphy, Painting, and the Seal (stamping)." },
    { ref: "[Point 23]", term: "The Four Arts (Siyi)", def: "The four basic skills expected of an ancient Chinese scholar: Qin (stringed instrument), Qi (Go board game), Shu (calligraphy), and Hua (painting)." },
    { ref: "[Point 24]", term: "Mogao Caves", def: "A UNESCO World Heritage site located in Dunhuang, famous for its massive collection of Buddhist grottoes and frescos." },
    { ref: "[Point 25]", term: "Hanfu (汉服)", def: "The traditional clothing system of the Han Chinese up to the Ming Dynasty, characterized by a cross-collared right lapel, wide sleeves, and fabric ties instead of buttons." },
    { ref: "[Point 26]", term: "Four Roles of Beijing Opera", def: "Sheng (male), Dan (female), Jing (painted face male), and Chou (male clown)." },
    { ref: "[Point 27]", term: "Sichuan Opera Stunts", def: "Famous for Face-changing (Bian Lian) and fire-breathing." },
    { ref: "[Point 28]", term: "Poetry Sage (Du Fu)", def: "A Tang Dynasty poet known for his serious, patriotic poetry that meticulously recorded historical events." },
    { ref: "[Point 28]", term: "Poet Immortal (Li Bai)", def: "A Tang Dynasty poet known for his heroic, romantic style and bold imagination." },
    
    // --- EMPERORS, HISTORY & MONUMENTS ---
    { ref: "[Point 31]", term: "Qin Shi Huang", def: "The First Emperor of a unified China. He standardized writing, weights, and currency, began the Great Wall, and commissioned the Terracotta Warriors in Xi'an." },
    { ref: "[Point 32]", term: "Wu Zetian", def: "The only officially recognized female sovereign (emperor) in Chinese history, ruling during the Tang/Wu Zhou Dynasty." },
    { ref: "[Point 51]", term: "Functions of the Great Wall", def: "Military defense, border governance, economic protection for the Silk Road, and cultural division/communication." },

    // --- CALENDARS, MEDICINE & SCIENCE ---
    { ref: "[Point 37]", term: "H&T Chronology (干支纪年法)", def: "The Heavenly Stems and Earthly Branches. A traditional Chinese sexagenary (60-year) cycle system used for calculating lunar years, months, days, and hours." },
    { ref: "[Point 38]", term: "Jieqi (Solar Terms)", def: "24 specific points on the lunisolar calendar marking astronomical events and seasons, traditionally used to guide agriculture." },
    { ref: "[Point 40]", term: "Four Great Inventions", def: "Papermaking, Printing (woodblock and movable type), Gunpowder, and the Compass." },
    { ref: "[Point 42]", term: "Four Diagnosis Methods (TCM)", def: "Observation (looking), Auscultation and Olfaction (listening/smelling), Interrogation (asking), and Palpation (touching/pulse-taking)." },
    { ref: "[Point 43]", term: "Zhang Zhongjing", def: "The 'Medicine Sage' of the Eastern Han dynasty who wrote the 'Treatise on Cold Pathogenic and Miscellaneous Diseases'." },
    { ref: "[Point 44]", term: "Liu Hui & Zu Chongzhi", def: "Liu Hui invented the cyclotomic method to calculate pi. Zu Chongzhi used it to calculate the most accurate value of pi in the ancient world." },
    { ref: "[Point 45]", term: "Guo Shoujing & Shoushi Calendar", def: "A Yuan Dynasty astronomer who compiled the Shoushi Calendar, which was nearly identical to the modern Gregorian calendar but created 300 years earlier." },

    // --- FOREIGN EXCHANGE & OPIUM WARS ---
    { ref: "[Point 46]", term: "Marco Polo", def: "A 13th-century Venetian traveler who served in Kublai Khan's court (Yuan Dynasty) and introduced China to Europe through his book." },
    { ref: "[Point 46]", term: "Matteo Ricci", def: "An Italian Jesuit missionary in the late Ming Dynasty who brought Western science to China and shared Chinese culture with Europe." },
    { ref: "[Point 48]", term: "Hai Guo Tu Zhi (Illustrated Survey of Foreign Nations)", def: "Authored by Wei Yuan, it was the first significant Chinese work on the West, written as a response to the First Opium War." },
    { ref: "[Point 50]", term: "Keju (Imperial Examination)", def: "Started in the Sui Dynasty to select officials via written exams (merit) rather than noble birth. It was abolished in 1905 due to rigid rules (eight-legged essays) stifling creativity." },
    { ref: "[Point 53]", term: "First Opium War (1840-1842)", def: "Triggered by British opium smuggling. Resulted in the Treaty of Nanjing, opening ports, ceding Hong Kong, and making China a semi-colonial society." },
    { ref: "[Point 53]", term: "Second Opium War (1856-1860)", def: "Anglo-French forces invaded and burned down the Old Summer Palace, forcing treaties that further damaged China's sovereignty." },

    // --- MODERN SOCIETY, EDUCATION & POLITICS ---
    { ref: "[Point 55]", term: "Double First-Class Initiative", def: "A modern government initiative (started in 2015) aiming to develop world-class universities and first-class academic disciplines by the end of 2050." },
    { ref: "[Point 56]", term: "China's Political Party System", def: "A system of multi-party cooperation and political consultation under the leadership of the Communist Party of China (CPC), with eight democratic participating parties." },
    { ref: "[Point 57]", term: "Advantages of Chinese Political System", def: "Practices whole-process people's democracy. Advantages include stable and long-term policy planning, efficient governance, and people-centered governance not influenced by capital/interest groups." },
    { ref: "[Point 59]", term: "Five Principles of Peaceful Coexistence", def: "1) Mutual respect for territorial integrity/sovereignty, 2) Mutual non-aggression, 3) Non-interference in internal affairs, 4) Equality/mutual benefit, 5) Peaceful co-existence." },
    { ref: "[Point 61]", term: "Chinese Modernization", def: "A development path featuring a huge population, common prosperity, balanced material/cultural progress, harmony with nature, and peaceful development." },
    { ref: "[Point 62]", term: "Reform and Opening-up Policy", def: "Launched in 1978. 'Reform' broke the planned economy and introduced market mechanisms. 'Opening-up' opened coastal cities to attract foreign capital." },
    { ref: "[Point 64]", term: "One Belt and One Road Initiative (BRI)", def: "A massive global infrastructure development strategy adopted in 2013 to connect Asia with Africa and Europe via land and maritime networks." },
    { ref: "[Point 65]", term: "Community with a Shared Future for Mankind", def: "Proposed in 2013 by President Xi, it aims to balance legitimate concerns of other countries while pursuing common development, global interdependence, and world peace." },
    { ref: "[Point 66]", term: "System of Regional Ethnic Autonomy", def: "A basic political system where ethnic minority communities establish autonomous organs to exercise self-governance rights under the unified leadership of the state." },
    { ref: "[Point 67]", term: "Socialism with Chinese characteristics", def: "A development model combining scientific socialism with China’s specific national conditions, history, and reality, featuring CPC leadership and a socialist market economy." }
    ],
    exp: [
        // --- ARCHITECTURE, ARTS & CULTURE ---
    { ref: "[Point 15]", q: "Traditionally, when planning buildings and architecture, what three foundational principles are observed in China? Explain each.", ans: "1) Heaven-Human Unity (天人合一): Coexisting harmoniously with nature. 2) Central Axis Symmetry (中轴对称): Layout centers on a north-south axis with mirror-image balance (representing central respect and cosmic balance). 3) Ritual Hierarchy (礼制秩序): Architecture encodes social rank through strict design rules (roof style, color, column numbers)." },
    { ref: "[Point 28]", q: "Identify the 'Poetry Sage' and the 'Poet Immortal' of the Tang Dynasty, and briefly describe their respective poetic styles.", ans: "1) Poetry Sage (Du Fu): Known for serious, patriotic poetry that meticulously recorded historical events and social realities. 2) Poet Immortal (Li Bai): Known for his heroic, romantic style, and bold, free-spirited imagination." },
    { ref: "[Point 39]", q: "Name four important traditional festivals in China and list their typical customs.", ans: "1) Chinese New Year (Spring Festival): Family reunions, giving red envelopes, setting off firecrackers, eating dumplings. 2) Mid-Autumn Festival: Moon gazing, eating mooncakes. 3) Dragon Boat Festival: Racing dragon boats, eating Zongzi. 4) Qingming Festival (Tomb-Sweeping Day): Cleaning ancestors' tombs and honoring the dead." },
    { ref: "[Point 52]", q: "Describe Chinese tea in terms of its history, classification by fermentation, and overall value.", ans: "History: Over 5,000 years, prospered in Tang/Song, perfected in Ming/Qing. Classification (by fermentation): Green (unfermented), White, Yellow, Oolong (semi), Black (fully), and Dark/Pu'er (post-fermented). Value: Health benefits, Cultural (ceremonies/harmony), and Economic (trade)." },

    // --- SCIENCE, MATH & MEDICINE ---
    { ref: "[Point 41]", q: "Outline China's science and technology progress today and analyze the main reasons behind this rapid advancement.", ans: "Progress: Global leadership in 5G telecommunications, high-speed rail, artificial intelligence, e-commerce, and space exploration (lunar/Mars missions). Reasons: Massive government investment in R&D, a strong emphasis on STEM education, policies opening up to global markets, and a vast domestic consumer market driving innovation." },
    { ref: "[Point 42]", q: "In traditional Chinese medicine (TCM), what are the four diagnosis methods and the primary curing ways?", ans: "Four Diagnosis Methods: Observation (looking), Auscultation and Olfaction (listening and smelling), Interrogation (asking), and Palpation (touching/pulse-taking). Curing Ways: Acupuncture, herbal medicine, cupping, massage (Tui Na), and dietary therapy." },
    { ref: "[Point 44]", q: "Name five famous ancient Chinese math achievements and the mathematicians associated with them.", ans: "1) The Nine Chapters on the Mathematical Art (compiled by Zhang Cang). 2) Cyclotomic method to calculate pi (invented by Liu Hui). 3) Calculating the most accurate value of pi in the ancient world (Zu Chongzhi). 4) Solving cubic equations (Wang Xiaotong). 5) The Chinese Remainder Theorem (Qin Jiushao)." },

    // --- HISTORY, EXAMS & OPIUM WARS ---
    { ref: "[Point 47]", q: "Why was Catholicism in China prohibited in the late-Ming dynasty (the 1616 Nanjing Incident)? Provide the four main reasons.", ans: "1) Cultural/Ethical conflict (clashes with Confucian ancestor worship). 2) Political/Security concerns (fears of rebellion and collusion with foreign powers). 3) Intellectual/Ritual opposition (resistance to Western scientific methods and perceived heresy). 4) Social backlash (local conflicts over land and religious practices)." },
    { ref: "[Point 50]", q: "Describe the Imperial Examination (Keju) system, including its origin, merits, and demerits.", ans: "Origin: Started in the Sui Dynasty (605 AD) to select officials through written exams rather than noble birth. Merits: Provided fair social mobility, stable governance, and cultural unity. Demerits: Limited to Confucian classics, used rigid writing rules (eight-legged essays) which stifled creativity and caused social conservatism. It was abolished in 1905." },
    { ref: "[Point 51]", q: "Explain the origin and historical functions of the Great Wall of China.", ans: "Origin: Started in the Warring States Period, unified by Qin Shi Huang, with current structures mostly dating back to the Ming Dynasty. Functions: Military defense against northern invasions, border governance, economic protection (for the Silk Road), and cultural division/communication." },
    { ref: "[Point 53]", q: "What were the First and Second Opium Wars, and what were their specific consequences for China?", ans: "First Opium War (1840-1842): Britain smuggled opium into China. Resulted in the Treaty of Nanjing; China opened ports, ceded Hong Kong, and became a semi-colonial society. Second Opium War (1856-1860): Anglo-French forces invaded, burning the Old Summer Palace. Resulted in treaties opening more cities to foreign trade and further damaging China's sovereignty." },

    // --- POLITICS, GOVERNANCE & SOCIETY ---
    { ref: "[Point 56]", q: "Describe the name, characteristics, and advantages of the political party system of China.", ans: "Name: The system of multi-party cooperation and political consultation under the leadership of the Communist Party of China. Characteristics: The CPC is the ruling party; eight democratic parties are participating (not opposing) parties, focusing on cooperation. Advantages: Long-term political stability, high governance efficiency, broad representation, social harmony, and people-oriented development." },
    { ref: "[Point 57]", q: "What are the advantages of the Chinese political system over the western-style democracy system as outlined in the study guide?", ans: "China practices whole-process people’s democracy. Advantages include: stable and long-term policy planning (no short-term election-driven policies), efficient governance/unified mobilization, people-centered governance (not influenced by capital/interest groups), maintaining national unity/social stability, and reducing unnecessary partisan strife." },
    { ref: "[Point 58]", q: "What specific environmental protection measures have been taken in China?", ans: "Strict laws and rules, pollution control (cutting smog, cleaning rivers), ecological protection and restoration (planting forests), green/low-carbon development (wind/solar/hydro energy), and international cooperation on climate." },
    { ref: "[Point 60]", q: "What are China’s economic achievements after 1978, and what are the main reasons behind this success?", ans: "Achievements: World's second-largest economy, largest manufacturing country, eliminated extreme poverty, and built advanced infrastructure (high-speed rail). Reasons: The Reform and Opening-up policy, market-oriented reforms, social stability, introduction of foreign capital, rich labor resources, and continuous investment." },
    { ref: "[Point 61]", q: "What is 'Chinese modernization' and what are its key features?", ans: "It is a unique development path suited to China’s national conditions. Features include: modernization of a huge population, common prosperity for all, balanced material and cultural progress, harmonious coexistence with nature, and peaceful development. (It provides lessons but is not fully copyable by others)." },
    { ref: "[Point 62]", q: "Explain the 'Reform and Opening-up' policy of China, breaking down what 'domestic reform' and 'opening to the outside world' specifically involved.", ans: "Launched in 1978. 'Domestic reform' broke the rigid planned economy and introduced market mechanisms (starting in rural areas). 'Opening to the outside world' involved opening coastal cities and attracting foreign capital. The ultimate goal was to improve living standards and realize national modernization." },
    { ref: "[Point 68]", q: "What contributions has China made to maintain world peace?", ans: "Adhering to a peaceful foreign policy, actively participating in UN peacekeeping, settling disputes through dialogue, pursuing peaceful development (no expansion), fighting global threats, promoting common development, and advocating fair global governance." },
    { ref: "[Point 69]", q: "Describe the evolution of China’s family planning policy from 1982 to 2021 and the principles it upholds.", ans: "Evolution: Began as a basic state policy in 1982 to control population (late marriage, fewer births) and evolved to the 2021 policy allowing three children to address aging demographics. Principles upheld: People-centered philosophy, seeking truth from facts, respecting objective laws, balanced development, and pragmatic governance." },
    
    // --- ESSAY FRAMEWORK ---
    { ref: "[Point 70]", q: "Based on the study guide framework, how would you answer the essay question: 'Which aspect of China do you find most impressive?'", ans: "A strong framework focuses on China's rapid infrastructural and technological development over the last four decades. Key points: Moving from an agrarian society to a global leader in high-speed rail and 5G, unprecedented poverty eradication in a short historical timeframe, and the unique ability to modernize megacities while simultaneously preserving 5,000 years of rich cultural traditions and festivals." }
        
    ]
};
