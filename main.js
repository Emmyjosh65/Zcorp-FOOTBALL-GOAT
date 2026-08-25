/*
==========================================================
ZCORP FOOTBALL HALL OF FAME — MAIN APPLICATION
==========================================================

HOW TO ADD A NEW REEL
==========================================================
Find the player's array in the PLAYER_REELS section below.

Example:
    "Lionel Messi": [
        {
            url: "https://example.com/video.mp4",
            title: "Messi Magic",
            description: "Amazing Messi moment",
            likes: 0,
            views: 0
        }
    ]

Just copy another object and change the URL/title/description.
The ranking updates AUTOMATICALLY. No manual score needed.

HOW TO ADD PLAYER IMAGES
==========================================================
Find the PLAYER_IMAGES section below.
Add an image URL inside the quotes for each player.
Leave empty ("") to show a beautiful placeholder.

==========================================================
*/

// =====================================
// CONFIGURATION
// =====================================
// No backend required. All data lives here for easy editing.
// Future: connect to Firebase by replacing these arrays with Firestore calls.

// =====================================
// TOP 10 PLAYERS
// =====================================
const TOP_10_GOAT_FOOTBALLERS = [
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Diego Maradona",
    "Pelé",
    "Johan Cruyff",
    "Zinedine Zidane",
    "Ronaldinho",
    "Ronaldo Nazário",
    "Franz Beckenbauer",
    "Alfredo Di Stéfano"
];

// =====================================
// PLAYER IMAGES
// =====================================
// Add image URLs here. Leave empty for placeholder.
const PLAYER_IMAGES = {
    "Lionel Messi": "",
    "Cristiano Ronaldo": "",
    "Diego Maradona": "",
    "Pelé": "",
    "Johan Cruyff": "",
    "Zinedine Zidane": "",
    "Ronaldinho": "",
    "Ronaldo Nazário": "",
    "Franz Beckenbauer": "",
    "Alfredo Di Stéfano": ""
};

// =====================================
// PLAYER BIOGRAPHIES
// =====================================
const PLAYER_BIOGRAPHIES = {
    "Lionel Messi": {
        position: "Forward / Winger",
        nationality: "🇦🇷 Argentina",
        era: "2004 – Present",
        clubs: "Barcelona, Paris Saint-Germain, Inter Miami",
        nationalTeam: "Argentina — World Cup winner (2022), Copa América winner (2021, 2024)",
        trophies: "10× La Liga, 4× Champions League, 7× Copa del Rey, 1× World Cup, 2× Copa América, 3× Club World Cup",
        awards: "8× Ballon d'Or, 6× European Golden Shoe, 8× FIFA World Player of the Year",
        records: "All-time top scorer for Barcelona (672 goals), most Ballons d'Or (8), most goals in a calendar year (91 in 2012), most assists in football history",
        bio: "Lionel Messi is widely regarded as one of the greatest footballers of all time. His extraordinary dribbling, vision, and goal-scoring ability defined an era at Barcelona where he won 35 trophies. After a brief spell at PSG, he joined Inter Miami and led them to their first trophy. He captained Argentina to World Cup glory in 2022, cementing his legacy as a true legend of the game."
    },
    "Cristiano Ronaldo": {
        position: "Forward / Winger",
        nationality: "🇵🇹 Portugal",
        era: "2002 – Present",
        clubs: "Sporting CP, Manchester United, Real Madrid, Juventus, Al Nassr",
        nationalTeam: "Portugal — European Championship winner (2016), Nations League winner (2019)",
        trophies: "5× Champions League, 7× League Titles (ENG/ESP/ITA), 4× Club World Cup, 1× Euro, 1× Nations League",
        awards: "5× Ballon d'Or, 4× European Golden Shoe, 3× FIFA World Player of the Year",
        records: "All-time top scorer in football history (900+ goals), most Champions League goals (140+), most international goals (130+), most goals in a single Champions League season (17)",
        bio: "Cristiano Ronaldo is one of the most complete footballers ever. Known for his incredible athleticism, goal-scoring instinct, and relentless work ethic, he conquered every major league he played in. He is the all-time leading goalscorer in football history and led Portugal to their first major trophy at Euro 2016."
    },
    "Diego Maradona": {
        position: "Attacking Midfielder / Playmaker",
        nationality: "🇦🇷 Argentina",
        era: "1976 – 1997",
        clubs: "Argentinos Juniors, Boca Juniors, Barcelona, Napoli, Sevilla, Newell's Old Boys",
        nationalTeam: "Argentina — World Cup winner (1986), World Cup runner-up (1990)",
        trophies: "2× Serie A (Napoli), 1× Copa del Rey, 1× Coppa Italia, 1× UEFA Cup",
        awards: "FIFA Player of the Century (joint), Golden Ball 1986 World Cup",
        records: "Captained Argentina to 1986 World Cup glory, Napoli's all-time leading scorer before Hamsik, legendary 'Hand of God' and 'Goal of the Century' goals",
        bio: "Diego Maradona was a genius of football. A mesmerizing dribbler with incredible close control, he single-handedly led Argentina to World Cup victory in 1986 and transformed Napoli from a small club into Serie A champions. His impact on football transcends statistics — he was an icon, a rebel, and an artist."
    },
    "Pelé": {
        position: "Forward",
        nationality: "🇧🇷 Brazil",
        era: "1956 – 1977",
        clubs: "Santos, New York Cosmos",
        nationalTeam: "Brazil — World Cup winner (1958, 1962, 1970)",
        trophies: "3× World Cup, 2× Copa Libertadores, 2× Intercontinental Cup, 6× Brazilian League",
        awards: "FIFA Player of the Century (joint), Athlete of the Century (IOC)",
        records: "Only player to win three World Cups, youngest World Cup winner at 17, all-time top scorer for Santos (643 goals), over 1,000 career goals",
        bio: "Pelé is often called the greatest footballer of all time. His extraordinary talent, athleticism, and goal-scoring ability made him a global icon. He won three World Cups — an unmatched achievement — and scored over 1,000 goals in his career. He popularized football worldwide and remains the standard by which all greats are measured."
    },
    "Johan Cruyff": {
        position: "Forward / Attacking Midfielder",
        nationality: "🇳🇱 Netherlands",
        era: "1964 – 1984",
        clubs: "Ajax, Barcelona, LA Aztecs, Washington Diplomats, Levante, Feyenoord",
        nationalTeam: "Netherlands — World Cup runner-up (1974)",
        trophies: "3× European Cup (Ajax), 8× Eredivisie, 1× La Liga, 1× Copa del Rey",
        awards: "3× Ballon d'Or (1971, 1973, 1974)",
        records: "Led Ajax to three consecutive European Cups, pioneered 'Total Football' philosophy, revolutionized Barcelona as both player and manager",
        bio: "Johan Cruyff was more than a player — he was a football philosopher. The architect of Total Football, he revolutionized the game with his intelligence, technique, and tactical vision. As a player, he won three Ballons d'Or and three European Cups. As a manager, he built the foundation of modern Barcelona."
    },
    "Zinedine Zidane": {
        position: "Attacking Midfielder",
        nationality: "🇫🇷 France",
        era: "1989 – 2006",
        clubs: "Cannes, Bordeaux, Juventus, Real Madrid",
        nationalTeam: "France — World Cup winner (1998), Euro winner (2000)",
        trophies: "1× World Cup, 1× Euro, 1× Champions League (2002), 2× Serie A, 1× La Liga, 1× Intercontinental Cup",
        awards: "Ballon d'Or (1998), FIFA World Player of the Year (1998, 2000, 2003)",
        records: "World Cup Golden Ball 2006, UEFA Golden Jubilee Poll — Best European Player of the Past 50 Years (2004), legendary volley in 2002 Champions League final",
        bio: "Zinedine Zidane was elegance personified. His first touch, vision, and grace on the ball made him one of the most beautiful players to watch. He scored two goals in the 1998 World Cup final to win France its first title, and his volley in the 2002 Champions League final is one of the greatest goals ever."
    },
    "Ronaldinho": {
        position: "Attacking Midfielder / Forward",
        nationality: "🇧🇷 Brazil",
        era: "1998 – 2015",
        clubs: "Grêmio, Paris Saint-Germain, Barcelona, AC Milan, Flamengo, Atlético Mineiro, Querétaro",
        nationalTeam: "Brazil — World Cup winner (2002), Copa América winner (1999)",
        trophies: "1× World Cup, 1× Copa América, 1× Champions League, 2× La Liga, 1× Serie A",
        awards: "Ballon d'Or (2005), FIFA World Player of the Year (2004, 2005)",
        records: "FIFA World Player of the Year two years running, known for his signature 'elastico' and no-look passes, brought joy and creativity back to football",
        bio: "Ronaldinho was football's greatest entertainer. With his infectious smile, incredible technical skills, and audacious tricks, he brought pure joy to the game. He led Barcelona to their 2006 Champions League title and won the World Cup with Brazil in 2002. His creativity and flair made him one of the most beloved players in history."
    },
    "Ronaldo Nazário": {
        position: "Forward / Striker",
        nationality: "🇧🇷 Brazil",
        era: "1993 – 2011",
        clubs: "Cruzeiro, PSV, Barcelona, Inter Milan, Real Madrid, AC Milan, Corinthians",
        nationalTeam: "Brazil — World Cup winner (1994, 2002)",
        trophies: "2× World Cup, 1× Copa América, 1× La Liga, 1× UEFA Cup, 1× Copa do Brasil",
        awards: "Ballon d'Or (1997, 2002), FIFA World Player of the Year (1996, 1997, 2002)",
        records: "Youngest Ballon d'Or winner at 21, World Cup Golden Boot 2002 (8 goals), all-time top scorer in World Cups at the time (15 goals), FIFA World Player of the Year three times",
        bio: "Ronaldo Nazário, 'O Fenômeno,' was the most devastating striker of his generation. With blistering pace, incredible dribbling, and clinical finishing, he terrorized defenses worldwide. Despite catastrophic knee injuries, he came back to win the 2002 World Cup Golden Boot and his second Ballon d'Or, cementing his legendary status."
    },
    "Franz Beckenbauer": {
        position: "Sweeper / Libero / Defender",
        nationality: "🇩🇪 Germany (West Germany)",
        era: "1964 – 1983",
        clubs: "Bayern Munich, New York Cosmos, Hamburger SV",
        nationalTeam: "West Germany — World Cup winner (1974), Euro winner (1972)",
        trophies: "1× World Cup, 1× Euro, 3× European Cup, 4× Bundesliga, 4× DFB-Pokal",
        awards: "Ballon d'Or (1972, 1976)",
        records: "Pioneered the sweeper/libero role, one of only three players to win the World Cup as both player and manager, German Footballer of the Year 4 times",
        bio: "Franz Beckenbauer, 'Der Kaiser,' redefined defending. As a sweeper/libero, he combined elegant ball-playing ability with tactical intelligence, revolutionizing the defender's role. He captained West Germany to World Cup victory in 1974 and later managed them to another title in 1990. He won the Ballon d'Or twice and led Bayern Munich to three consecutive European Cups."
    },
    "Alfredo Di Stéfano": {
        position: "Forward / Attacking Midfielder",
        nationality: "🇦🇷 Argentina / 🇪🇸 Spain",
        era: "1945 – 1966",
        clubs: "River Plate, Huracán, Millonarios, Real Madrid, Español",
        nationalTeam: "Argentina, Colombia, Spain",
        trophies: "5× European Cup (Real Madrid), 8× La Liga, 2× Copa América (with Argentina)",
        awards: "Ballon d'Or (1957, 1959), Super Ballon d'Or (1989)",
        records: "Five consecutive European Cup titles with Real Madrid (1956-1960), Real Madrid's all-time top scorer for decades, only player to play for Argentina and Spain",
        bio: "Alfredo Di Stéfano was the complete footballer — capable of playing in every outfield position. He was the driving force behind Real Madrid's five consecutive European Cup triumphs, scoring in all five finals. His versatility, stamina, and intelligence made him one of the most influential players in football history."
    }
};

// =====================================
// PLAYER REELS
// =====================================
// Add new video objects inside each player's array.
// Each object needs: url, title, description, likes, views
// Use .mp4 or .mov URLs. Invalid videos will show a retry option.
//
// =========================================
// ADD MORE MESSI REELS HERE — Just copy the object pattern below
// =========================================
const PLAYER_REELS = {
    "Lionel Messi": [
        {
            url: "https://videotourl.com/videos/1787672196993-99c86659-7db2-4033-b6b7-f8dc8337cc7e.mp4",
            title: "Lionel Messi",
            description: "Messi magic — dribbling and brilliance",
            likes: 0,
            views: 0
        },
        {
            url: "https://videotourl.com/videos/1787673486899-5697046e-3dd7-4b39-9d4e-73280349c693.mp4",
            title: "Messi & Ronaldo",
            description: "Messi and Ronaldo — two legends",
            likes: 0,
            views: 0
        }
    ],

    // =========================================
    // CRISTIANO RONALDO — 39 REELS
    // ADD MORE RONALDO REELS HERE
    // =========================================
    "Cristiano Ronaldo": [
        // --- RONALDO REEL 1 ---
        {
            url: "https://videotourl.com/videos/1787672301508-b100fdc6-64f1-4ed7-bb56-dbd9e2900f61.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo greatness — power and precision",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 2 ---
        {
            url: "https://videotourl.com/videos/1787672325208-a255be43-623f-41a8-bfd9-2e317202f349.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — unstoppable force",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 3 ---
        {
            url: "https://videotourl.com/videos/1787672347860-49fa231a-43f7-44dd-b33e-554e4a89fee7.mp4",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — clinical finishing",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 4 ---
        {
            url: "https://videotourl.com/videos/1787672368929-3115557e-c04c-46a1-a56b-c826eabe2c27.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — aerial dominance",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 5 ---
        {
            url: "https://videotourl.com/videos/1787672386510-f2fba2ca-12fd-41dc-ad9f-43c516280ab2.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — signature celebration",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 6 ---
        {
            url: "https://videotourl.com/videos/1787672409353-60285af5-8ad1-41b3-beb3-4aba009f8cc7.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — big game player",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 7 ---
        {
            url: "https://videotourl.com/videos/1787672445230-f6991749-12a8-439f-9671-f0d30da41e6e.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — free kick master",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 8 ---
        {
            url: "https://videotourl.com/videos/1787672466012-66aed74a-0c6f-49fc-a65f-0692c3d451f0.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — Champions League hero",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 9 ---
        {
            url: "https://videotourl.com/videos/1787672484761-cc5b0e91-2dc3-4f11-bc20-c53764560e43.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — speed and skill",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 10 ---
        {
            url: "https://videotourl.com/videos/1787672520625-3e9b9b03-33bf-4222-a8d1-744b1e1e4c97.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — goal machine",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 11 ---
        {
            url: "https://videotourl.com/videos/1787672567733-124aad5e-7876-4723-978e-bd06ba4e1087.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — legendary moments",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 12 ---
        {
            url: "https://videotourl.com/videos/1787672586679-67e871a8-6aa5-43b5-afc1-9295d9d2e591.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — technique and power",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 13 ---
        {
            url: "https://videotourl.com/videos/1787672604409-92c7e0a4-b20b-4e23-a2a7-37654bd82d6d.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — the icon",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 14 ---
        {
            url: "https://videotourl.com/videos/1787672621310-57ea0347-c06f-4302-9426-8e8949e86b6d.mp4",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — World Cup moments",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 15 ---
        {
            url: "https://videotourl.com/videos/1787672656278-5b17b6e3-696e-41c8-a106-85b90bd74717.mp4",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — record breaker",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 16 ---
        {
            url: "https://videotourl.com/videos/1787672678228-8f1dac15-c273-4427-a8d2-248aba5138c3.mp4",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — hat-trick hero",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 17 ---
        {
            url: "https://videotourl.com/videos/1787672696943-d8d30570-b35c-4589-bcf4-51a420642986.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — SIUUU celebration",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 18 ---
        {
            url: "https://videotourl.com/videos/1787672719518-e8409e5f-247f-482f-b841-d6b9bd262ca1.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — clutch moments",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 19 ---
        {
            url: "https://videotourl.com/videos/1787672737860-4aea1b7b-a0e2-4817-a755-32952fabb5e1.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — legendary career",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 20 ---
        {
            url: "https://videotourl.com/videos/1787672759809-d8ce84fc-fdbe-411d-b3ad-eda552b7a181.mp4",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — the phenomenon",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 21 ---
        {
            url: "https://videotourl.com/videos/1787672815637-7b0b6265-a9c6-44d2-950c-f0beeb9e4386.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — European glory",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 22 ---
        {
            url: "https://videotourl.com/videos/1787672854431-50305396-b367-4014-95fc-c76826084126.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — skill and flair",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 23 ---
        {
            url: "https://videotourl.com/videos/1787672887890-78495782-1c29-450e-979c-c16d59bed4da.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — international star",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 24 ---
        {
            url: "https://videotourl.com/videos/1787672904813-13ee64f1-23c9-40cd-8f5b-cadda3495b70.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — Manchester United days",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 25 ---
        {
            url: "https://videotourl.com/videos/1787672921557-77faac1f-0253-403a-a5d6-91978f3a7c7f.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — Real Madrid legend",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 26 ---
        {
            url: "https://videotourl.com/videos/1787672942386-cb427c77-868e-486a-a188-dc6d4dfd8e1f.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — Juventus journey",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 27 ---
        {
            url: "https://videotourl.com/videos/1787672961768-5027058a-61e2-40aa-a0a4-efc3c3ddbc26.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — Portugal captain",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 28 ---
        {
            url: "https://videotourl.com/videos/1787672984746-d1ac7c6a-b196-4bd6-856b-0f501d6e724d.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — Euro champion",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 29 ---
        {
            url: "https://videotourl.com/videos/1787673248969-8856f1d6-5d77-40a3-9c4d-fa19da4413b6.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — Al Nassr era",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 30 ---
        {
            url: "https://videotourl.com/videos/1787673277788-cef2a7dd-6a95-425d-af7e-eca0dd15c9f2.mp4",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — goal-scoring record",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 31 ---
        {
            url: "https://videotourl.com/videos/1787673296977-d598fb8c-29d8-46c3-b030-ba927083c72f.mp4",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — the competitor",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 32 ---
        {
            url: "https://videotourl.com/videos/1787673327850-144c0fab-4606-485f-ab00-b1610d4b9e9c.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — five-time Ballon d'Or",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 33 ---
        {
            url: "https://videotourl.com/videos/1787673347917-a2f619f9-975d-43d3-bb6c-b89aa6bf0811.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — the athlete",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 34 ---
        {
            url: "https://videotourl.com/videos/1787673364961-9aaa5831-66a4-4a3c-b8c2-f8c293cf840c.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — impossible angles",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 35 ---
        {
            url: "https://videotourl.com/videos/1787673383248-e53013fc-e3e6-46c9-ac62-e370fb41fbf2.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — clutch headers",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 36 ---
        {
            url: "https://videotourl.com/videos/1787673401200-8a977c39-c296-4905-942f-8aebefa0b150.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — long-range strikes",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 37 ---
        {
            url: "https://videotourl.com/videos/1787673424360-3673c2f1-7f70-4866-9d72-d513f01f381c.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — leadership and passion",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 38 ---
        {
            url: "https://videotourl.com/videos/1787673439807-8bdc3988-6316-4ec1-8ed5-16693af49f3a.mov",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — the greatest stage",
            likes: 0,
            views: 0
        },
        // --- RONALDO REEL 39 ---
        {
            url: "https://videotourl.com/videos/1787673461889-be79e1ae-6750-478a-8f9c-1cb13c31cb27.mp4",
            title: "Cristiano Ronaldo",
            description: "Ronaldo — legacy of a GOAT",
            likes: 0,
            views: 0
        }
    ],

    // =========================================
    // ADD MORE MARADONA REELS HERE
    // =========================================
    "Diego Maradona": [],

    // =========================================
    // ADD MORE PELÉ REELS HERE
    // =========================================
    "Pelé": [],

    // =========================================
    // ADD MORE CRUYFF REELS HERE
    // =========================================
    "Johan Cruyff": [],

    // =========================================
    // ADD MORE ZIDANE REELS HERE
    // =========================================
    "Zinedine Zidane": [],

    // =========================================
    // ADD MORE RONALDINHO REELS HERE
    // =========================================
    "Ronaldinho": [],

    // =========================================
    // ADD MORE RONALDO NAZÁRIO REELS HERE
    // =========================================
    "Ronaldo Nazário": [],

    // =========================================
    // ADD MORE BECKENBAUER REELS HERE
    // =========================================
    "Franz Beckenbauer": [],

    // =========================================
    // ADD MORE DI STÉFANO REELS HERE
    // =========================================
    "Alfredo Di Stéfano": []
};

// =====================================
// SPECIAL / FEATURED REELS
// =====================================
// These players are NOT in the official Top 10.
// They appear under "FEATURED" filter without affecting rankings.
// =========================================
// ADD MORE SPECIAL REELS HERE
// =========================================
const SPECIAL_REELS = {
    // Neymar — not in official Top 10, shown as Featured / Community player
    "Neymar Jr": [
        {
            url: "https://videotourl.com/videos/1787672229711-87e84e3b-a72b-4f72-99c2-5a4d64343de9.mp4",
            title: "Neymar Jr",
            description: "Neymar flair and skill",
            likes: 0,
            views: 0
        },
        {
            url: "https://videotourl.com/videos/1787672251038-b0403fbe-dadf-4914-9542-8849b3f7d76a.mp4",
            title: "Neymar Jr",
            description: "Neymar creativity in action",
            likes: 0,
            views: 0
        }
    ]
};

// =====================================
// RANKING ENGINE
// =====================================

/**
 * Returns the number of reels for a given Hall of Fame player.
 * @param {string} playerName
 * @returns {number}
 */
function getGoatScore(playerName) {
    return PLAYER_REELS[playerName]?.length || 0;
}

/**
 * Builds and sorts the ranking array by reel count (descending),
 * then alphabetically (ascending) for ties.
 * @returns {Array<{name: string, reelCount: number, rank: number, isTie: boolean}>}
 */
function getRankings() {
    const ranked = TOP_10_GOAT_FOOTBALLERS
        .map(player => ({
            name: player,
            reelCount: PLAYER_REELS[player]?.length || 0
        }))
        .sort((a, b) => {
            if (b.reelCount !== a.reelCount) return b.reelCount - a.reelCount;
            return a.name.localeCompare(b.name);
        });

    // Assign ranks with tie handling
    let currentRank = 1;
    for (let i = 0; i < ranked.length; i++) {
        if (i > 0 && ranked[i].reelCount === ranked[i-1].reelCount) {
            ranked[i].rank = ranked[i-1].rank;
            ranked[i].isTie = true;
            ranked[i-1].isTie = true;
        } else {
            ranked[i].rank = currentRank;
            ranked[i].isTie = false;
        }
        currentRank++;
    }
    return ranked;
}

/**
 * Gets the total number of reels across all Hall of Fame players.
 * @returns {number}
 */
function getTotalReels() {
    return TOP_10_GOAT_FOOTBALLERS.reduce(
        (sum, name) => sum + (PLAYER_REELS[name]?.length || 0), 0
    );
}

/**
 * Gets the current #1 player.
 * @returns {{name: string, reelCount: number}|null}
 */
function getCurrentNumberOne() {
    const rankings = getRankings();
    return rankings.length > 0 ? rankings[0] : null;
}

/**
 * Gets the most featured player (most reels).
 * @returns {{name: string, reelCount: number}|null}
 */
function getMostFeatured() {
    const rankings = getRankings();
    return rankings.length > 0 && rankings[0].reelCount > 0 ? rankings[0] : null;
}

// =====================================
// LOCAL STORAGE
// =====================================
const LS_KEY_LIKES    = 'zcorp_liked_reels';
const LS_KEY_VIEWED   = 'zcorp_viewed_reels';
const LS_KEY_RECENT   = 'zcorp_recent_reels';

function getLikedReels() {
    try { return JSON.parse(localStorage.getItem(LS_KEY_LIKES)) || []; }
    catch { return []; }
}

function isReelLiked(reelIndex) {
    return getLikedReels().includes(reelIndex);
}

function toggleLike(reelIndex) {
    let liked = getLikedReels();
    if (liked.includes(reelIndex)) {
        liked = liked.filter(i => i !== reelIndex);
    } else {
        liked.push(reelIndex);
    }
    localStorage.setItem(LS_KEY_LIKES, JSON.stringify(liked));
    return liked.includes(reelIndex);
}

function getViewedReels() {
    try { return JSON.parse(localStorage.getItem(LS_KEY_VIEWED)) || []; }
    catch { return []; }
}

function markReelViewed(reelIndex) {
    let viewed = getViewedReels();
    if (!viewed.includes(reelIndex)) {
        viewed.push(reelIndex);
        localStorage.setItem(LS_KEY_VIEWED, JSON.stringify(viewed));
    }
}

function getRecentReels() {
    try { return JSON.parse(localStorage.getItem(LS_KEY_RECENT)) || []; }
    catch { return []; }
}

function addRecentReel(reelData) {
    let recent = getRecentReels();
    recent = [reelData, ...recent.filter(r => r.url !== reelData.url)].slice(0, 20);
    localStorage.setItem(LS_KEY_RECENT, JSON.stringify(recent));
}

// =====================================
// NAVIGATION
// =====================================
let currentPage = 'home';

function navigateTo(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Show target page
    const targetPage = document.getElementById(`page-${pageName}`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
    }

    // Update nav links
    document.querySelectorAll('.nav-link, .bottom-nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.page === pageName);
        if (btn.dataset.page === pageName) {
            btn.setAttribute('aria-current', 'page');
        } else {
            btn.removeAttribute('aria-current');
        }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Render page content
    if (pageName === 'home')    renderHome();
    if (pageName === 'reels')   renderReels();
    if (pageName === 'ranks')   renderRankings();

    // Close search results
    document.getElementById('searchResults').classList.remove('active');
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Nav clicks
    document.querySelectorAll('.nav-link, .bottom-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => navigateTo(btn.dataset.page));
    });

    // Modal close
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('playerModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('playerModal')) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'Enter') {
            const focused = document.activeElement;
            if (focused?.classList.contains('search-result-item')) focused.click();
        }
    });

    // Search
    const searchInput = document.getElementById('globalSearchInput');
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('blur', () => {
        setTimeout(() => document.getElementById('searchResults').classList.remove('active'), 200);
    });
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length > 0) handleSearch();
    });

    // Initial render
    renderHome();
});

// =====================================
// SEARCH
// =====================================
function handleSearch() {
    const query = document.getElementById('globalSearchInput').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('searchResults');

    if (!query) {
        resultsContainer.classList.remove('active');
        resultsContainer.innerHTML = '';
        return;
    }

    const results = [];

    TOP_10_GOAT_FOOTBALLERS.forEach(name => {
        if (name.toLowerCase().includes(query)) {
            results.push({ type: 'player', name, label: name, sub: `${getGoatScore(name)} Reels` });
        }
        const bio = PLAYER_BIOGRAPHIES[name];
        if (bio && (bio.nationality.toLowerCase().includes(query) || bio.position.toLowerCase().includes(query))) {
            if (!results.find(r => r.name === name)) {
                results.push({ type: 'player', name, label: name, sub: bio.position });
            }
        }
    });

    TOP_10_GOAT_FOOTBALLERS.forEach(player => {
        (PLAYER_REELS[player] || []).forEach(reel => {
            if ((reel.title && reel.title.toLowerCase().includes(query)) ||
                (reel.description && reel.description.toLowerCase().includes(query))) {
                results.push({ type: 'reel', player, label: reel.title, sub: reel.description, url: reel.url });
            }
        });
    });

    Object.keys(SPECIAL_REELS).forEach(player => {
        if (player.toLowerCase().includes(query)) {
            results.push({ type: 'player', name: player, label: player, sub: 'Featured Player' });
        }
        SPECIAL_REELS[player].forEach(reel => {
            if ((reel.title && reel.title.toLowerCase().includes(query)) ||
                (reel.description && reel.description.toLowerCase().includes(query))) {
                results.push({ type: 'reel', player, label: reel.title, sub: reel.description, url: reel.url });
            }
        });
    });

    if (results.length === 0) {
        resultsContainer.innerHTML = `<div class="search-result-item" style="color:var(--muted);pointer-events:none;">No results found</div>`;
    } else {
        resultsContainer.innerHTML = results.slice(0, 10).map(r => {
            const safeName = r.name.replace(/'/g, "\\'");
            if (r.type === 'player') {
                return `<div class="search-result-item" tabindex="0" onclick="navigateTo('home'); showPlayerModal('${safeName}')">
                    ⚽ <span><strong>${r.label}</strong><br><small>${r.sub}</small></span>
                </div>`;
            } else {
                return `<div class="search-result-item" tabindex="0" onclick="navigateTo('reels')">
                    🎬 <span><strong>${r.label}</strong><br><small>${r.sub}</small></span>
                </div>`;
            }
        }).join('');
    }

    resultsContainer.classList.add('active');
}

// =====================================
// HOME PAGE
// =====================================
function renderHome() {
    const rankings = getRankings();

    for (let i = 0; i < 3; i++) {
        const card = document.getElementById(`top3-${i + 1}`);
        if (rankings[i]) {
            card.querySelector('.top3-name').textContent = rankings[i].name;
            card.querySelector('.top3-reels').textContent = `${rankings[i].reelCount} Reels`;
            const avatar = card.querySelector('.top3-avatar');
            const imgUrl = PLAYER_IMAGES[rankings[i].name];
            if (imgUrl) {
                avatar.innerHTML = `<img src="${imgUrl}" alt="${rankings[i].name}" onerror="this.innerHTML='<div class=\\'player-placeholder\\'>${rankings[i].name.charAt(0)}</div>'">`;
            } else {
                avatar.innerHTML = `<div class="player-placeholder">${rankings[i].name.charAt(0)}</div>`;
            }
        }
    }

    const goat = getCurrentNumberOne();
    const goatSection = document.getElementById('goatMomentSection');
    if (goat && goat.reelCount > 0) {
        document.getElementById('goatMomentName').textContent = goat.name.toUpperCase();
        document.getElementById('goatMomentReels').textContent = `${goat.reelCount} REELS`;
        goatSection.style.display = '';
    } else {
        goatSection.style.display = 'none';
    }

    document.getElementById('statTotalReels').textContent = getTotalReels();
    const no1 = getCurrentNumberOne();
    document.getElementById('statCurrentNo1').textContent = (no1 && no1.reelCount > 0) ? no1.name : '—';
    const featured = getMostFeatured();
    document.getElementById('statMostFeatured').textContent = (featured && featured.reelCount > 0) ? featured.name : '—';

    renderPlayerGrid();
}

function renderPlayerGrid() {
    const grid = document.getElementById('playerGrid');
    const rankings = getRankings();
    const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

    grid.innerHTML = rankings.map((player, idx) => {
        const bio = PLAYER_BIOGRAPHIES[player.name] || {};
        const imgUrl = PLAYER_IMAGES[player.name];
        const rankDisplay = player.isTie ? `TIED #${player.rank}` : `#${player.rank}`;
        const medal = idx < medals.length ? medals[idx] : `#${idx + 1}`;
        const safeName = player.name.replace(/'/g, "\\'");

        const imageHtml = imgUrl
            ? `<img src="${imgUrl}" alt="${player.name}" class="player-card-image" onerror="this.outerHTML='<div class=\\'player-card-image player-placeholder\\'>${player.name.charAt(0)}</div>'">`
            : `<div class="player-card-image player-placeholder">${player.name.charAt(0)}</div>`;

        return `
            <div class="player-card" style="animation:rankSlideIn 0.4s ease ${idx * 0.08}s both;">
                ${imageHtml}
                <div class="player-card-body">
                    <span class="player-rank-badge">${medal} ${rankDisplay}</span>
                    <h3 class="player-card-name">${player.name}</h3>
                    <div class="player-card-meta">
                        ${bio.nationality || ''}
                        ${bio.era ? `• ${bio.era}` : ''}
                    </div>
                    <div class="player-card-reels">🎬 ${player.reelCount} REELS</div>
                    <div class="player-card-goat">⭐ GOAT SCORE: ${player.reelCount}</div>
                    <div class="player-card-actions">
                        <button class="btn-primary" onclick="showPlayerModal('${safeName}')">👁 View Legend</button>
                        <button class="btn-secondary" onclick="navigateTo('reels'); setTimeout(() => filterReels('${safeName}'), 150)">🎬 Watch Reels</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// =====================================
// PLAYER MODALS
// =====================================
function showPlayerModal(playerName) {
    const modal = document.getElementById('playerModal');
    const body = document.getElementById('modalBody');
    const bio = PLAYER_BIOGRAPHIES[playerName];
    const reelCount = getGoatScore(playerName);
    const rankings = getRankings();
    const rankData = rankings.find(r => r.name === playerName);
    const rank = rankData ? (rankData.isTie ? `TIED #${rankData.rank}` : `#${rankData.rank}`) : '—';
    const imgUrl = PLAYER_IMAGES[playerName];
    const safeName = playerName.replace(/'/g, "\\'");

    if (!bio) {
        body.innerHTML = `<div class="modal-loading">Player information not available.</div>`;
        modal.classList.add('open');
        modal.focus();
        document.body.style.overflow = 'hidden';
        return;
    }

    const imageHtml = imgUrl
        ? `<img src="${imgUrl}" alt="${playerName}" class="modal-player-image" onerror="this.outerHTML='<div class=\\'modal-player-image player-placeholder\\' style=\\'border-radius:50%;width:150px;height:150px;\\'>${playerName.charAt(0)}</div>'">`
        : `<div class="modal-player-image player-placeholder" style="border-radius:50%;width:150px;height:150px;">${playerName.charAt(0)}</div>`;

    body.innerHTML = `
        <div class="modal-player-header">
            ${imageHtml}
            <h2 class="modal-player-name">${playerName}</h2>
            <span class="modal-player-badge">${rank} • ${reelCount} Reels • GOAT: ${reelCount}</span>
        </div>
        <div class="modal-section">
            <h3>📋 Biography</h3>
            <p>${bio.bio}</p>
        </div>
        <div class="modal-section">
            <h3>🎯 Position</h3>
            <p>${bio.position}</p>
        </div>
        <div class="modal-section">
            <h3>🌍 Nationality</h3>
            <p>${bio.nationality}</p>
        </div>
        <div class="modal-section">
            <h3>📅 Era</h3>
            <p>${bio.era}</p>
        </div>
        <div class="modal-section">
            <h3>🏟️ Clubs</h3>
            <p>${bio.clubs}</p>
        </div>
        <div class="modal-section">
            <h3>🇺🇳 National Team</h3>
            <p>${bio.nationalTeam}</p>
        </div>
        <div class="modal-section">
            <h3>🏆 Major Trophies</h3>
            <p>${bio.trophies}</p>
        </div>
        <div class="modal-section">
            <h3>⭐ Individual Awards</h3>
            <p>${bio.awards}</p>
        </div>
        <div class="modal-section">
            <h3>📊 Records</h3>
            <p>${bio.records}</p>
        </div>
        <div class="modal-player-footer">
            <button class="btn-primary" onclick="navigateTo('reels'); setTimeout(() => filterReels('${safeName}'), 150); closeModal();">🎬 Watch Reels (${reelCount})</button>
            <button class="btn-secondary" onclick="closeModal()">Close</button>
        </div>
    `;

    modal.classList.add('open');
    modal.focus();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('playerModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

// =====================================
// REELS PAGE
// =====================================
let currentReelFilter = 'all';

function renderReels() {
    const filters = document.getElementById('reelFilters');

    let filterHtml = '<button class="reel-filter active" data-filter="all" role="tab" aria-selected="true">ALL</button>';
    TOP_10_GOAT_FOOTBALLERS.forEach(name => {
        filterHtml += `<button class="reel-filter" data-filter="${name}" role="tab">${name.toUpperCase()}</button>`;
    });
    filterHtml += '<button class="reel-filter" data-filter="featured" role="tab">FEATURED</button>';
    filters.innerHTML = filterHtml;

    filters.querySelectorAll('.reel-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            filters.querySelectorAll('.reel-filter').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            currentReelFilter = btn.dataset.filter;
            renderReelFeed();
        });
    });

    renderReelFeed();
}

function filterReels(playerName) {
    navigateTo('reels');
    setTimeout(() => {
        const filterBtns = document.querySelectorAll('#reelFilters .reel-filter');
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
            if (btn.dataset.filter === playerName) {
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                currentReelFilter = playerName;
            }
        });
        renderReelFeed();
    }, 150);
}

function renderReelFeed() {
    const container = document.getElementById('reelsContainer');
    let reels = [];
    let globalIdx = 0;

    if (currentReelFilter === 'all') {
        TOP_10_GOAT_FOOTBALLERS.forEach(player => {
            (PLAYER_REELS[player] || []).forEach(reel => {
                reels.push({ ...reel, player, _globalIdx: globalIdx++, isSpecial: false });
            });
        });
        Object.keys(SPECIAL_REELS).forEach(player => {
            SPECIAL_REELS[player].forEach(reel => {
                reels.push({ ...reel, player, _globalIdx: globalIdx++, isSpecial: true });
            });
        });
    } else if (currentReelFilter === 'featured') {
        Object.keys(SPECIAL_REELS).forEach(player => {
            SPECIAL_REELS[player].forEach(reel => {
                reels.push({ ...reel, player, _globalIdx: globalIdx++, isSpecial: true });
            });
        });
    } else {
        (PLAYER_REELS[currentReelFilter] || []).forEach(reel => {
            reels.push({ ...reel, player: currentReelFilter, _globalIdx: globalIdx++, isSpecial: false });
        });
    }

    if (reels.length === 0) {
        const filterForWa = currentReelFilter !== 'all' ? currentReelFilter : 'a player';
        container.innerHTML = `
            <div class="empty-state" style="grid-column:1/-1;">
                <div class="empty-state-icon">⚽</div>
                <div class="empty-state-title">LOADING LEGEND...</div>
                <div class="empty-state-text">No reels have been added yet.<br>Want to add this GOAT's moments?</div>
                <a href="https://wa.me/2349066760078?text=Hello%20Zeus%2C%20I%20want%20to%20add%20reels%20for%20${encodeURIComponent(filterForWa)}%20to%20the%20ZCORP%20Football%20Hall%20of%20Fame." target="_blank" rel="noopener" class="btn-primary">CONTACT ZEUS</a>
            </div>
        `;
        return;
    }

    container.innerHTML = reels.map((reel, idx) => {
        const isLiked = isReelLiked(reel._globalIdx);
        const hasUrl = reel.url && reel.url.trim().length > 0;
        const safePlayer = reel.player.replace(/'/g, "\\'");
        const safeDesc = (reel.description || '').replace(/'/g, "\\'");

        return `
            <div class="reel-card" data-reel-idx="${reel._globalIdx}">
                <div class="reel-video-wrapper">
                    ${hasUrl ? `
                        <video
                            src="${reel.url}"
                            playsinline
                            preload="metadata"
                            muted
                            loop
                            data-reel-url="${reel.url}"
                            data-reel-idx="${reel._globalIdx}"
                        ></video>
                    ` : `
                        <div class="reel-error-overlay">
                            <span class="error-icon">⚽</span>
                            <span class="error-text">Video unavailable</span>
                            <span style="font-size:0.75rem;color:var(--muted);">No video URL provided</span>
                        </div>
                    `}
                </div>
                <div class="reel-info">
                    <div class="reel-player-name">${reel.player} ${reel.isSpecial ? '⭐' : ''}</div>
                    <div class="reel-description">${reel.description || ''}</div>
                    <div class="reel-stats">
                        <span>🎬 Reel #${idx + 1}</span>
                        <span>⭐ GOAT: ${getGoatScore(reel.player)}</span>
                        <span>👁 ${reel.views || 0} views</span>
                    </div>
                </div>
                <div class="reel-actions">
                    <button class="reel-action-btn ${isLiked ? 'liked' : ''}" onclick="handleLike(${reel._globalIdx}, this)">
                        ${isLiked ? '❤️' : '🤍'} <span>${isLiked ? 'Liked' : 'Like'}</span>
                    </button>
                    <button class="reel-action-btn" onclick="handleShare('${safePlayer}', '${safeDesc}', '${reel.url || ''}')">
                        📤 Share
                    </button>
                    ${hasUrl ? `
                        <a href="${reel.url}" download class="reel-action-btn" style="text-decoration:none;" onclick="handleDownload(event, '${reel.url}')">
                            📥 Download
                        </a>
                    ` : `
                        <button class="reel-action-btn" disabled style="opacity:0.4;cursor:not-allowed;">📥 Download</button>
                    `}
                    ${hasUrl ? `
                        <button class="reel-action-btn" onclick="handleFullscreen(this)">⛶ Fullscreen</button>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');

    setupReelAutoplay();
}

// =====================================
// REEL AUTO-PLAY (IntersectionObserver)
// =====================================
function setupReelAutoplay() {
    if (window._reelObserver) window._reelObserver.disconnect();

    const videos = document.querySelectorAll('.reel-video-wrapper video');
    if (videos.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });

    videos.forEach(v => observer.observe(v));
    window._reelObserver = observer;

    videos.forEach(v => {
        v.addEventListener('error', () => handleVideoError(v));
    });
}

function handleVideoError(videoEl) {
    const url = videoEl.dataset.reelUrl || 'unknown';
    console.warn(`[ZCORP] Video failed to load: ${url}`);

    const wrapper = videoEl.closest('.reel-video-wrapper');
    if (!wrapper) return;

    videoEl.style.display = 'none';
    if (wrapper.querySelector('.reel-error-overlay')) return;

    const overlay = document.createElement('div');
    overlay.className = 'reel-error-overlay';
    overlay.innerHTML = `
        <span class="error-icon">⚠️</span>
        <span class="error-text">Video unavailable</span>
        <span style="font-size:0.75rem;color:var(--muted);">Failed to load video</span>
        <button class="retry-btn" onclick="retryVideo(this)">Retry</button>
    `;
    wrapper.appendChild(overlay);
}

function retryVideo(btn) {
    const overlay = btn.closest('.reel-error-overlay');
    const wrapper = overlay.closest('.reel-video-wrapper');
    const video = wrapper.querySelector('video');
    if (video) {
        video.style.display = '';
        video.load();
        overlay.remove();
        video.play().catch(() => {});
    }
}

// =====================================
// REEL ACTIONS
// =====================================
function handleLike(idx, btn) {
    const nowLiked = toggleLike(idx);
    btn.classList.toggle('liked', nowLiked);
    btn.innerHTML = nowLiked ? '❤️ <span>Liked</span>' : '🤍 <span>Like</span>';
}

function handleShare(playerName, description, url) {
    const shareData = {
        title: `ZCORP Hall of Fame — ${playerName}`,
        text: `Check out ${playerName} on ZCORP Football Hall of Fame! ${description}`,
        url: url || window.location.href
    };
    if (navigator.share) {
        navigator.share(shareData).catch(() => {});
    } else {
        const text = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
        navigator.clipboard.writeText(text).then(() => showToast('Link copied!'))
            .catch(() => showToast('Copy to clipboard failed'));
    }
}

function handleDownload(event, url) {
    showToast('Your browser may open the video instead of downloading it.');
}

function handleFullscreen(btn) {
    const video = btn.closest('.reel-card').querySelector('video');
    if (!video) return;
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
}

// =====================================
// TOAST NOTIFICATION
// =====================================
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// =====================================
// RANKINGS PAGE
// =====================================
function renderRankings() {
    const container = document.getElementById('rankingsLeaderboard');
    const emptyDb = document.getElementById('emptyDatabase');
    const rankings = getRankings();
    const totalReels = getTotalReels();

    if (totalReels === 0) {
        container.innerHTML = '';
        emptyDb.style.display = 'block';
        return;
    }

    emptyDb.style.display = 'none';

    const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

    container.innerHTML = rankings.map((player, idx) => {
        const medal = idx < medals.length ? medals[idx] : `#${idx + 1}`;
        const imgUrl = PLAYER_IMAGES[player.name];
        const tieBadge = player.isTie ? '<span class="rank-tie-badge">TIED</span>' : '';
        const safeName = player.name.replace(/'/g, "\\'");

        const avatarHtml = imgUrl
            ? `<img src="${imgUrl}" alt="${player.name}" onerror="this.outerHTML='<div class=\\'player-placeholder\\'>${player.name.charAt(0)}</div>'">`
            : `<div class="player-placeholder">${player.name.charAt(0)}</div>`;

        return `
            <div class="rank-card" onclick="showPlayerModal('${safeName}')" style="cursor:pointer;"
                 role="button" tabindex="0"
                 onkeydown="if(event.key==='Enter')showPlayerModal('${safeName}')">
                <div class="rank-medal">${medal}</div>
                <div class="rank-position">#${player.rank}</div>
                <div class="rank-avatar">${avatarHtml}</div>
                <div class="rank-info">
                    <div class="rank-name">${player.name} ${tieBadge}</div>
                    <div class="rank-detail">${PLAYER_BIOGRAPHIES[player.name]?.nationality || ''} • ${PLAYER_BIOGRAPHIES[player.name]?.position || ''}</div>
                </div>
                <div style="text-align:right;flex-shrink:0;">
                    <div class="rank-reels">${player.reelCount} REELS</div>
                    <div class="rank-goat-score">⭐ GOAT: ${player.reelCount}</div>
                </div>
            </div>
        `;
    }).join('');
}
