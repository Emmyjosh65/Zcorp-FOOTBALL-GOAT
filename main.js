/*
==========================================================
ZCORP FOOTBALL HALL OF FAME — MAIN APPLICATION
==========================================================
v2.0 — 39 RONALDO REELS + MESSI + NEYMAR
         CUSTOM PLAY BUTTON + SOUND + FAQ AI

HOW TO ADD A NEW REEL
==========================================================
Find the player's array in the PLAYER_REELS section.
Add a new object with url, title, description, likes, views.
Ranking updates AUTOMATICALLY.

HOW TO ADD PLAYER IMAGES
==========================================================
Find PLAYER_IMAGES. Add image URL inside quotes.
Leave empty ("") for a beautiful placeholder.
==========================================================
*/

// =====================================
// CONFIGURATION
// =====================================
const TOP_10_GOAT_FOOTBALLERS = [
    "Cristiano Ronaldo",
    "Lionel Messi",
    "Neymar Jr",
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
const PLAYER_IMAGES = {
    "Cristiano Ronaldo": "",
    "Lionel Messi": "",
    "Neymar Jr": "",
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
    "Cristiano Ronaldo": {
        position: "Forward",
        nationality: "🇵🇹 Portugal",
        era: "2002 – Present",
        clubs: "Sporting CP, Manchester United, Real Madrid, Juventus, Al Nassr",
        nationalTeam: "Portugal (200+ caps)",
        worldCups: "2016 Euro winner, 2019 Nations League winner",
        ballonDors: 5,
        description: "Cristiano Ronaldo is a goal-scoring phenomenon with 5 Ballon d'Or awards and the most goals in men's international football. His athleticism, power, and clutch performances have made him a global icon."
    },
    "Lionel Messi": {
        position: "Forward / Winger",
        nationality: "🇦🇷 Argentina",
        era: "2004 – Present",
        clubs: "Barcelona, Paris Saint-Germain, Inter Miami",
        nationalTeam: "Argentina (180+ caps)",
        worldCups: "2022 FIFA World Cup winner",
        ballonDors: 8,
        description: "Lionel Messi is widely regarded as one of the greatest footballers of all time. With 8 Ballon d'Or awards, a FIFA World Cup title, and countless records, his blend of dribbling, vision, and finishing has defined an era."
    },
    "Neymar Jr": {
        position: "Forward / Winger",
        nationality: "🇧🇷 Brazil",
        era: "2009 – Present",
        clubs: "Santos, Barcelona, Paris Saint-Germain, Al Hilal",
        nationalTeam: "Brazil (120+ caps)",
        worldCups: "2013 Confederations Cup winner, Olympic Gold 2016",
        ballonDors: 0,
        description: "Neymar Jr is one of the most skillful and entertaining players in modern football. Known for his flair, dribbling, and creativity, he has been a key figure for Brazil and every club he has represented."
    },
    "Diego Maradona": {
        position: "Attacking Midfielder / Second Striker",
        nationality: "🇦🇷 Argentina",
        era: "1976 – 1997",
        clubs: "Argentinos Juniors, Boca Juniors, Barcelona, Napoli, Sevilla, Newell's Old Boys",
        nationalTeam: "Argentina (91 caps)",
        worldCups: "1986 FIFA World Cup winner",
        ballonDors: 0,
        description: "Diego Maradona was a genius of the game, leading Argentina to World Cup glory in 1986 with one of the greatest individual tournament performances ever. His dribbling, creativity, and passion made him a legend."
    },
    "Pelé": {
        position: "Forward",
        nationality: "🇧🇷 Brazil",
        era: "1956 – 1977",
        clubs: "Santos, New York Cosmos",
        nationalTeam: "Brazil (92 caps)",
        worldCups: "1958, 1962, 1970 FIFA World Cup winner",
        ballonDors: 0,
        description: "Pelé is the only player to win three FIFA World Cups. With over 1,000 career goals, his scoring ability, athleticism, and charisma made him the first global football superstar."
    },
    "Johan Cruyff": {
        position: "Attacking Midfielder / Forward",
        nationality: "🇳🇱 Netherlands",
        era: "1964 – 1984",
        clubs: "Ajax, Barcelona, Los Angeles Aztecs, Washington Diplomats, Levante, Feyenoord",
        nationalTeam: "Netherlands (48 caps)",
        worldCups: "1974 FIFA World Cup runner-up, 3 Ballon d'Or",
        ballonDors: 3,
        description: "Johan Cruyff was the architect of Total Football. A 3-time Ballon d'Or winner, his vision, technique, and football philosophy shaped modern football at Ajax and Barcelona."
    },
    "Zinedine Zidane": {
        position: "Attacking Midfielder",
        nationality: "🇫🇷 France",
        era: "1989 – 2006",
        clubs: "Cannes, Bordeaux, Juventus, Real Madrid",
        nationalTeam: "France (108 caps)",
        worldCups: "1998 FIFA World Cup winner, 2006 runner-up, Euro 2000 winner",
        ballonDors: 1,
        description: "Zinedine Zidane was elegance personified on the pitch. With his sublime touch, vision, and big-game brilliance, he led France to World Cup glory in 1998."
    },
    "Ronaldinho": {
        position: "Attacking Midfielder / Winger",
        nationality: "🇧🇷 Brazil",
        era: "1998 – 2015",
        clubs: "Grêmio, Paris Saint-Germain, Barcelona, Milan, Flamengo, Atlético Mineiro, Querétaro, Fluminense",
        nationalTeam: "Brazil (97 caps)",
        worldCups: "2002 FIFA World Cup winner, 2005 Confederations Cup winner",
        ballonDors: 1,
        description: "Ronaldinho brought joy and flair to football. The 2005 Ballon d'Or winner and 2002 World Champion, his trickery, no-look passes, and free kicks made him one of the most entertaining players ever."
    },
    "Ronaldo Nazário": {
        position: "Forward",
        nationality: "🇧🇷 Brazil",
        era: "1993 – 2011",
        clubs: "Cruzeiro, PSV, Barcelona, Inter Milan, Real Madrid, Milan, Corinthians",
        nationalTeam: "Brazil (98 caps)",
        worldCups: "1994, 2002 FIFA World Cup winner; 1998 runner-up",
        ballonDors: 2,
        description: "Ronaldo Nazário, 'O Fenômeno', was a complete striker with blistering pace and clinical finishing. A two-time Ballon d'Or winner and two-time World Cup champion."
    },
    "Franz Beckenbauer": {
        position: "Libero / Defender / Midfielder",
        nationality: "🇩🇪 Germany (West Germany)",
        era: "1964 – 1983",
        clubs: "Bayern Munich, New York Cosmos, Hamburger SV",
        nationalTeam: "West Germany (103 caps)",
        worldCups: "1974 FIFA World Cup winner (captain), 1966 runner-up",
        ballonDors: 2,
        description: "Franz Beckenbauer invented the modern sweeper role. A two-time Ballon d'Or winner who captained West Germany to World Cup glory in 1974."
    },
    "Alfredo Di Stéfano": {
        position: "Forward / Attacking Midfielder",
        nationality: "🇦🇷 Argentina / 🇪🇸 Spain",
        era: "1945 – 1966",
        clubs: "River Plate, Huracán, Millonarios, Real Madrid, Español",
        nationalTeam: "Argentina (6 caps), Spain (31 caps)",
        worldCups: "1947 South American Championship winner (Argentina)",
        ballonDors: 2,
        description: "Alfredo Di Stéfano was the driving force behind Real Madrid's five consecutive European Cup titles. His versatility, stamina, and intelligence made him a complete footballer."
    }
};

// =====================================
// VIDEO URL POOL (free, working Pexels URLs)
// =====================================
const VIDEO_POOL = [
    "https://videos.pexels.com/video-files/2759474/2759474-hd_1920_1080_25fps.mp4",
    "https://videos.pexels.com/video-files/853905/853905-hd_1920_1080_30fps.mp4",
    "https://videos.pexels.com/video-files/2631763/2631763-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/3067024/3067024-hd_1920_1080_30fps.mp4",
    "https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_30fps.mp4",
    "https://videos.pexels.com/video-files/3067028/3067028-hd_1920_1080_30fps.mp4",
    "https://videos.pexels.com/video-files/2759472/2759472-hd_1920_1080_25fps.mp4",
    "https://videos.pexels.com/video-files/3067030/3067030-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/3067026/3067026-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/2760254/2760254-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/2760252/2760252-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/855562/855562-hd_1920_1080_30fps.mp4",
    "https://videos.pexels.com/video-files/2631760/2631760-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/2631758/2631758-hd_1920_1080_25fps.mp4",
    "https://videos.pexels.com/video-files/855556/855556-hd_1920_1080_30fps.mp4"
];

// =====================================
// 39 REELS FOR CRISTIANO RONALDO
// =====================================
const CRISTIANO_REEL_TITLES = [
    "The Jump — CR7 Header", "Free Kick Mastery", "Goal Celebration SIUUU",
    "Champions League Final Goal", "Hat-trick vs Atletico", "Bicycle Kick vs Juventus",
    "Long Range Rocket", "Solo Run and Finish", "Last Minute Winner",
    "CR7 Elastico Dribble", "Power Shot from Outside", "Penalty under Pressure",
    "Assist King", "Captain Leading the Team", "Champions League Record",
    "Euro 2016 Final Moment", "Ronaldo Free Kick Wall", "Header from Corner",
    "Clutch Penalty Kick", "Step Over Masterclass", "Volley Goal Technique",
    "CR7 Speed Run", "Backheel Assist", "Rain Match Heroics",
    "Stunning Curved Shot", "Perfect Hat-trick", "No-Look Pass",
    "Overhead Kick Attempt", "Training Ground Skills", "Ronaldo Ronaldo Chop",
    "Last Gasp Equalizer", "Knuckleball Free Kick", "CR7 Champions League",
    "World Cup Strike", "Al Nassr First Goal", "500 Club Goals",
    "CR7 Iconic Celebration", "MUFC Return Goal", "Portugal Captain Goal"
];

const CRISTIANO_REEL_DESCS = [
    "Cristiano Ronaldo's iconic header showing his incredible 2.5m leap",
    "A perfectly placed free kick curling over the wall into the top corner",
    "The famous SIUUU celebration after scoring another vital goal",
    "Decisive goal in the Champions League final under immense pressure",
    "Ronaldo scores a stunning hat-trick to single-handedly knock out Atletico",
    "The legendary bicycle kick against Juventus — goal of the decade",
    "A thunderous strike from 35 yards that left the keeper rooted",
    "Solo run past four defenders before slotting home with composure",
    "Dramatic 90th minute winner sending the fans into absolute frenzy",
    "CR7 shows his skills with a beautiful elastico to beat the defender",
    "Unstoppable power shot from distance that rippled the net",
    "Ice cold penalty conversion in a high-stakes knockout match",
    "Perfectly weighted through ball for a crucial assist",
    "Ronaldo commanding the team and leading from the front",
    "Becoming the all-time Champions League top scorer with this goal",
    "The moment Portugal won Euro 2016 — Ronaldo's emotional leadership",
    "A curling free kick that bent around the wall and nestled in",
    "Powerful header from a corner kick, outjumping everyone",
    "Calmly slots the penalty in the dying minutes to win the game",
    "Stepover followed by a clinical finish — vintage Ronaldo",
    "Perfect technique on this volley — the ball flew into the net",
    "Ronaldo shows his blistering pace on a counter-attack goal",
    "Unselfish backheel assist for a teammate in front of goal",
    "Battle through heavy rain and still delivers a world-class performance",
    "Curled shot with the inside of the foot into the far corner",
    "Three different types of goals — left foot, right foot, header",
    "Deceptive no-look pass that set up a vital goal",
    "Dramatic overhead kick that just missed the target by inches",
    "Behind-the-scenes training with incredible finishing drills",
    "The Ronaldo chop move to escape pressure in the box",
    "Equalizer in the last minute of stoppage time — pure drama",
    "Knuckleball free kick that swerved unpredictably past the keeper",
    "Another Champions League masterclass performance",
    "Ronaldo scores for Portugal at the FIFA World Cup",
    "First goal for Al Nassr in front of a packed stadium",
    "Reaching 500 career club goals with a trademark finish",
    "The iconic celebration after breaking yet another record",
    "Goal on his return to Manchester United — emotional moment",
    "Captain's goal to lead Portugal to victory"
];

// =====================================
// PLAYER REELS DATA
// =====================================
const PLAYER_REELS = {
    "Cristiano Ronaldo": Array.from({ length: 39 }, (_, i) => ({
        url: VIDEO_POOL[i % VIDEO_POOL.length],
        title: CRISTIANO_REEL_TITLES[i % CRISTIANO_REEL_TITLES.length],
        description: CRISTIANO_REEL_DESCS[i % CRISTIANO_REEL_DESCS.length],
        likes: Math.floor(8000 + Math.random() * 20000),
        views: Math.floor(40000 + Math.random() * 120000)
    })),

    "Lionel Messi": [
        { url: VIDEO_POOL[3], title: "Messi Magic Dribble", description: "Incredible solo run through the defense leaving five players behind", likes: 18200, views: 101200 },
        { url: VIDEO_POOL[4], title: "World Cup Glory", description: "Messi at the FIFA World Cup, pure brilliance", likes: 21400, views: 134500 },
        { url: VIDEO_POOL[5], title: "Messi Free Kick", description: "A perfect free kick into the top corner", likes: 16700, views: 92300 },
        { url: VIDEO_POOL[6], title: "La Liga Record", description: "Messi breaks the all-time scoring record with this goal", likes: 19800, views: 112000 },
        { url: VIDEO_POOL[7], title: "Ballon d'Or Magic", description: "Messi's best moments from his Ballon d'Or winning seasons", likes: 22300, views: 141000 }
    ],

    "Neymar Jr": [
        { url: VIDEO_POOL[8], title: "Neymar Skills Compilation", description: "Unreal dribbling and flair from the Brazilian magician", likes: 15600, views: 89000 },
        { url: VIDEO_POOL[9], title: "Rainbow Flick Goal", description: "Neymar pulls off a rainbow flick before scoring", likes: 13400, views: 76500 },
        { url: VIDEO_POOL[10], title: "Champions League Hero", description: "Neymar's decisive goal in the Champions League", likes: 12300, views: 70200 },
        { url: VIDEO_POOL[11], title: "Brazilian Flair", description: "Samba skills on display for the national team", likes: 14500, views: 83400 }
    ]
};

// Empty arrays for remaining players
TOP_10_GOAT_FOOTBALLERS.forEach(name => {
    if (!PLAYER_REELS[name]) {
        PLAYER_REELS[name] = [];
    
    }
});
// =====================================
// STATE
// =====================================
let currentPage = 'home';
let currentPlayerReels = 'Cristiano Ronaldo';
let likedReels = new Set(JSON.parse(localStorage.getItem('zcorp_liked') || '[]'));

function toggleLike(idx) {
    if (likedReels.has(idx)) likedReels.delete(idx);
    else likedReels.add(idx);
    localStorage.setItem('zcorp_liked', JSON.stringify([...likedReels]));
    return likedReels.has(idx);
}

function getPlayerReelCount(playerName) {
    return (PLAYER_REELS[playerName] || []).length;
}

function getRankings() {
    const playersWithReels = TOP_10_GOAT_FOOTBALLERS.map(name => ({
        name,
        reelCount: getPlayerReelCount(name)
    }));
    playersWithReels.sort((a, b) => b.reelCount - a.reelCount);
    let currentRank = 1;
    return playersWithReels.map((player, idx, arr) => {
        if (idx > 0 && player.reelCount < arr[idx - 1].reelCount) {
            currentRank = idx + 1;
        }
        const isTie = idx > 0 && player.reelCount === arr[idx - 1].reelCount;
        return { ...player, rank: currentRank, isTie };
    });
}

function getTotalReels() {
    return TOP_10_GOAT_FOOTBALLERS.reduce((sum, name) => sum + getPlayerReelCount(name), 0);
}

function getTopPlayer() {
    const rankings = getRankings();
    return rankings.length > 0 ? rankings[0] : null;
}

function esc(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function formatNumber(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return n.toString();
}

function getGlobalReelIndex(playerName, localIdx) {
    let count = 0;
    for (const name of TOP_10_GOAT_FOOTBALLERS) {
        if (name === playerName) return count + localIdx;
        count += (PLAYER_REELS[name] || []).length;
    }
    return localIdx;
}

// =====================================
// HOME / HERO STATS
// =====================================
function renderHomeStats() {
    document.getElementById('totalLegends').textContent = TOP_10_GOAT_FOOTBALLERS.length;
    document.getElementById('totalReelsCount').textContent = getTotalReels();
    const top = getTopPlayer();
    if (top) {
        document.getElementById('currentGoat').textContent = top.name;
        document.getElementById('mostFeatured').textContent = top.name;
    }
    const rankings = getRankings();
    const medals = ['🥇', '🥈', '🥉'];
    const top3Container = document.getElementById('top3Container');
    if (top3Container) {
        top3Container.innerHTML = rankings.slice(0, 3).map((player, idx) => {
            const imgUrl = PLAYER_IMAGES[player.name];
            const bio = PLAYER_BIOGRAPHIES[player.name] || {};
            const initial = player.name.charAt(0);
            const safeName = esc(player.name);
            const avatarHtml = imgUrl
                ? `<img src="${imgUrl}" alt="${safeName}" onerror="this.outerHTML='<div class=\\'top3-placeholder\\'>${initial}</div>'">`
                : `<div class="top3-placeholder">${initial}</div>`;
            return `
                <div class="top3-card glass-card" onclick="showPlayerModal('${safeName.replace(/'/g, "\\'")}')" style="cursor:pointer;">
                    <div class="top3-medal">${medals[idx]}</div>
                    <div class="top3-rank">#${player.rank}</div>
                    <div class="top3-avatar">${avatarHtml}</div>
                    <div class="top3-name">${safeName}</div>
                    <div class="top3-detail">${esc(bio.nationality || '')} • ${esc(bio.position || '')}</div>
                    <div class="top3-reels">🎬 ${player.reelCount} REELS</div>
                    <div class="top3-goat">⭐ GOAT SCORE: ${player.reelCount}</div>
                </div>`;
        }).join('');
    }
}

// =====================================
// RENDER REELS — WITH PLAY BUTTON & SOUND
// =====================================
function renderReels() {
    const container = document.getElementById('reelsContainer');
    const emptyDb = document.getElementById('emptyDatabase');
    const playerName = currentPlayerReels || 'Cristiano Ronaldo';
    const reels = PLAYER_REELS[playerName] || [];

    if (reels.length === 0) {
        container.innerHTML = '';
        emptyDb.style.display = 'block';
        emptyDb.querySelector('.empty-state-title').textContent = 'No reels yet';
        emptyDb.querySelector('.empty-state-text').textContent = `${playerName} doesn't have any reels yet.`;
        return;
    }

    emptyDb.style.display = 'none';
    const safePlayer = esc(playerName);

    container.innerHTML = reels.map((reel, idx) => {
        const hasUrl = reel.url && reel.url.trim() !== '';
        const globalIdx = getGlobalReelIndex(playerName, idx);
        const isLiked = likedReels.has(globalIdx);
        const videoUrl = esc(reel.url || '');
        const safeTitle = esc(reel.title || 'Untitled');
        const safeDesc = esc(reel.description || '');

        return `
            <div class="reel-card glass-card" data-player="${safePlayer}" data-reel-index="${idx}">
                <div class="reel-count">#${idx + 1}</div>
                <div class="reel-video-wrapper">
                    <video src="${videoUrl}" class="reel-video" data-reel-url="${videoUrl}"
                        data-player="${safePlayer}" data-reel-idx="${idx}"
                        playsinline preload="metadata" muted loop></video>

                    <!-- CUSTOM PLAY BUTTON OVERLAY -->
                    <div class="reel-play-overlay" onclick="handlePlayToggle(this)">
                        <div class="reel-play-btn">
                            <svg viewBox="0 0 24 24" width="48" height="48" fill="white">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                    </div>

                    <!-- SOUND TOGGLE -->
                    <button class="reel-sound-btn" onclick="handleSoundToggle(this)" title="Toggle sound">
                        <svg class="sound-on-icon" viewBox="0 0 24 24" width="20" height="20" fill="white">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 8.5v7a4.47 4.47 0 002.5-3.5zm2.5 0A7.5 7.5 0 0016 5.5v2a5.42 5.42 0 012.5 4.5 5.42 5.42 0 01-2.5 4.5v2A7.5 7.5 0 0019 12z"/>
                        </svg>
                        <svg class="sound-off-icon" viewBox="0 0 24 24" width="20" height="20" fill="white" style="display:none;">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 8.5v7a4.47 4.47 0 002.5-3.5zm2.5 0A7.5 7.5 0 0016 5.5v2a5.42 5.42 0 012.5 4.5 5.42 5.42 0 01-2.5 4.5v2A7.5 7.5 0 0019 12z"/>
                            <line x1="3" y1="3" x2="21" y2="21" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>

                <div class="reel-info">
                    <div class="reel-title">${safeTitle}</div>
                    <div class="reel-desc">${safeDesc}</div>
                    <div class="reel-meta">
                        <span>👁️ ${formatNumber(reel.views || 0)}</span>
                        <span>❤️ ${formatNumber(reel.likes || 0)}</span>
                    </div>
                </div>

                <div class="reel-actions">
                    <button class="reel-action-btn ${isLiked ? 'liked' : ''}" onclick="handleLike(${globalIdx}, this)">
                        ${isLiked ? '❤️ <span>Liked</span>' : '🤍 <span>Like</span>'}
                    </button>
                    <button class="reel-action-btn" onclick="handleShare('${safePlayer}', '${safeDesc.replace(/'/g, "\\'")}', '${videoUrl}')">📤 Share</button>
                    ${hasUrl ? `<a href="${videoUrl}" download class="reel-action-btn" style="text-decoration:none;">📥 Download</a>` : `<button class="reel-action-btn" disabled style="opacity:0.4;cursor:not-allowed;">📥 Download</button>`}
                    ${hasUrl ? `<button class="reel-action-btn" onclick="handleFullscreen(this)">⛶ Fullscreen</button>` : ''}
                </div>
            </div>`;
    }).join('');

    setupReelAutoplay();
}

// =====================================
// PLAY TOGGLE — unmutes on click for sound
// =====================================
function handlePlayToggle(overlay) {
    const wrapper = overlay.closest('.reel-video-wrapper');
    const video = wrapper.querySelector('video');
    const playBtn = overlay.querySelector('.reel-play-btn');
    if (!video) return;

    if (video.paused) {
        video.muted = false;
        video.play().catch(() => { video.muted = true; video.play().catch(() => {}); });
        playBtn.style.display = 'none';
        overlay.classList.add('playing');
        const soundBtn = wrapper.querySelector('.reel-sound-btn');
        if (soundBtn) {
            soundBtn.querySelector('.sound-on-icon').style.display = 'block';
            soundBtn.querySelector('.sound-off-icon').style.display = 'none';
        }
    } else {
        video.pause();
        playBtn.style.display = 'flex';
        overlay.classList.remove('playing');
    }

    video.addEventListener('ended', function onEnd() {
        playBtn.style.display = 'flex';
        overlay.classList.remove('playing');
        video.removeEventListener('ended', onEnd);
    }, { once: true });
}

// =====================================
// SOUND TOGGLE
// =====================================
function handleSoundToggle(btn) {
    const wrapper = btn.closest('.reel-video-wrapper');
    const video = wrapper.querySelector('video');
    if (!video) return;
    video.muted = !video.muted;
    const onIcon = btn.querySelector('.sound-on-icon');
    const offIcon = btn.querySelector('.sound-off-icon');
    if (onIcon) onIcon.style.display = video.muted ? 'none' : 'block';
    if (offIcon) offIcon.style.display = video.muted ? 'block' : 'none';
    showToast(video.muted ? 'Sound muted' : 'Sound on');
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
            const wrapper = video.closest('.reel-video-wrapper');
            const overlay = wrapper ? wrapper.querySelector('.reel-play-overlay') : null;
            const playBtn = overlay ? overlay.querySelector('.reel-play-btn') : null;

            if (entry.isIntersecting) {
                video.muted = true;
                video.play().catch(() => {});
                if (playBtn) playBtn.style.display = 'none';
                if (overlay) overlay.classList.add('playing');
                const soundBtn = wrapper ? wrapper.querySelector('.reel-sound-btn') : null;
                if (soundBtn) {
                    if (soundBtn.querySelector('.sound-on-icon')) soundBtn.querySelector('.sound-on-icon').style.display = 'none';
                    if (soundBtn.querySelector('.sound-off-icon')) soundBtn.querySelector('.sound-off-icon').style.display = 'block';
                }
            } else {
                video.pause();
                if (playBtn) playBtn.style.display = 'flex';
                if (overlay) overlay.classList.remove('playing');
            }
        });
    }, { threshold: 0.5 });

    videos.forEach(v => observer.observe(v));
    window._reelObserver = observer;
    videos.forEach(v => { v.addEventListener('error', () => handleVideoError(v)); });
}

function handleVideoError(videoEl) {
    const wrapper = videoEl.closest('.reel-video-wrapper');
    if (!wrapper) return;
    videoEl.style.display = 'none';
    if (wrapper.querySelector('.reel-error-overlay')) return;
    const overlay = document.createElement('div');
    overlay.className = 'reel-error-overlay';
    overlay.innerHTML = `<span class="error-icon">⚠️</span><span class="error-text">Video unavailable</span><span style="font-size:0.75rem;color:var(--muted);">Failed to load</span><button class="retry-btn" onclick="retryVideo(this)">Retry</button>`;
    wrapper.appendChild(overlay);
}

function retryVideo(btn) {
    const overlay = btn.closest('.reel-error-overlay');
    const wrapper = overlay.closest('.reel-video-wrapper');
    const video = wrapper.querySelector('video');
    if (video) { video.style.display = ''; video.load(); overlay.remove(); video.play().catch(() => {}); }
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
    const shareData = { title: `ZCORP Hall of Fame — ${playerName}`, text: `Check out ${playerName} on ZCORP! ${description}`, url: url || window.location.href };
    if (navigator.share) { navigator.share(shareData).catch(() => {}); }
    else { navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`).then(() => showToast('Link copied!')).catch(() => showToast('Copy failed')); }
}

function handleDownload(event, url) { showToast('Browser may open video instead of downloading.'); }

function handleFullscreen(btn) {
    const video = btn.closest('.reel-card').querySelector('video');
    if (!video) return;
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// =====================================
// RANKINGS
// =====================================
function renderRankings() {
    const container = document.getElementById('rankingsLeaderboard');
    const emptyDb = document.getElementById('emptyDatabase');
    const rankings = getRankings();
    const totalReels = getTotalReels();
    if (totalReels === 0) { container.innerHTML = ''; emptyDb.style.display = 'block'; return; }
    emptyDb.style.display = 'none';
    const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '11️⃣'];
    container.innerHTML = rankings.map((player, idx) => {
        const medal = idx < medals.length ? medals[idx] : `#${idx + 1}`;
        const imgUrl = PLAYER_IMAGES[player.name];
        const tieBadge = player.isTie ? '<span class="rank-tie-badge">TIED</span>' : '';
        const safeName = player.name.replace(/'/g, "\\'");
        const avatarHtml = imgUrl ? `<img src="${imgUrl}" alt="${player.name}" onerror="this.outerHTML='<div class=\\'player-placeholder\\'>${player.name.charAt(0)}</div>'">` : `<div class="player-placeholder">${player.name.charAt(0)}</div>`;
        return `<div class="rank-card" onclick="showPlayerModal('${safeName}')" style="cursor:pointer;" role="button" tabindex="0" onkeydown="if(event.key==='Enter')showPlayerModal('${safeName}')">
            <div class="rank-medal">${medal}</div>
            <div class="rank-position">#${player.rank}</div>
            <div class="rank-avatar">${avatarHtml}</div>
            <div class="rank-info"><div class="rank-name">${player.name} ${tieBadge}</div><div class="rank-detail">${PLAYER_BIOGRAPHIES[player.name]?.nationality || ''} • ${PLAYER_BIOGRAPHIES[player.name]?.position || ''}</div></div>
            <div style="text-align:right;flex-shrink:0;"><div class="rank-reels">${player.reelCount} REELS</div><div class="rank-goat-score">⭐ GOAT: ${player.reelCount}</div></div>
        </div>`;
    }).join('');
}

// =====================================
// PLAYER MODAL
// =====================================
function showPlayerModal(playerName) {
    const modal = document.getElementById('playerModal');
    const body = document.getElementById('modalBody');
    const bio = PLAYER_BIOGRAPHIES[playerName];
    const reels = PLAYER_REELS[playerName] || [];
    const imgUrl = PLAYER_IMAGES[playerName];
    const initial = playerName.charAt(0);
    if (!bio) { body.innerHTML = '<div class="modal-loading">Player data not found</div>'; modal.style.display = 'flex'; return; }
    const avatarHtml = imgUrl ? `<img src="${imgUrl}" alt="${playerName}" class="modal-player-image" onerror="this.outerHTML='<div class=\\'modal-player-placeholder\\'>${initial}</div>'">` : `<div class="modal-player-placeholder">${initial}</div>`;
    let achievementsHtml = '';
    const achievements = [];
    if (bio.worldCups) achievements.push(`🏆 ${bio.worldCups}`);
    if (bio.ballonDors > 0) achievements.push(`⚽ ${bio.ballonDors}x Ballon d'Or`);
    if (bio.nationalTeam) achievements.push(`🇺🇳 ${bio.nationalTeam}`);
    if (achievements.length > 0) achievementsHtml = `<div class="modal-section"><h3>🏅 Achievements</h3><ul>${achievements.map(a => `<li>${esc(a)}</li>`).join('')}</ul></div>`;
    body.innerHTML = `<div class="modal-player-header">${avatarHtml}<div class="modal-player-info"><h2 class="modal-player-name">${esc(playerName)}</h2><p class="modal-player-position">${esc(bio.position || '')}</p><p class="modal-player-nationality">${bio.nationality || ''} • ${bio.era || ''}</p></div></div>
        <div class="modal-section"><h3>📖 Biography</h3><p>${esc(bio.description || '')}</p></div>
        <div class="modal-section"><h3>🏛️ Career</h3><p><strong>Clubs:</strong> ${esc(bio.clubs || '')}</p></div>
        ${achievementsHtml}
        <div class="modal-section"><h3>🎬 Reels (${reels.length})</h3><p>${reels.length > 0 ? `${reels.length} video moment${reels.length > 1 ? 's' : ''} available.` : 'No reels yet.'}</p></div>
        <div class="modal-player-footer"><button class="btn-primary" onclick="navigateToReels('${playerName.replace(/'/g, "\\'")}')">🎬 View Reels</button><button class="btn-secondary" onclick="closeModal()">Close</button></div>`;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('playerModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function navigateToReels(playerName) {
    closeModal();
    currentPlayerReels = playerName;
    switchPage('reels');
    updateReelFilterButtons(playerName);
}

// =====================================
// NAVIGATION
// =====================================
function switchPage(pageId) {
    currentPage = pageId;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(`page-${pageId}`);
    if (target) target.classList.add('active');
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(btn => { btn.classList.toggle('active', btn.dataset.page === pageId); });
    switch (pageId) {
        case 'home': renderHomeStats(); break;
        case 'reels': renderReels(); break;
        case 'rankings': renderRankings(); break;
        case 'about': break;
        case 'support': break;
    }
}

function updateReelFilterButtons(activePlayer) {
    document.querySelectorAll('.reel-filter').forEach(btn => { btn.classList.toggle('active', btn.dataset.player === activePlayer); });
    currentPlayerReels = activePlayer;
    renderReels();
}

// =====================================
// SEARCH
// =====================================
function handleSearch(input) {
    const query = input.value.toLowerCase().trim();
    const playerGrid = document.getElementById('playerGrid');
    if (!query) { renderPlayerGrid(playerGrid, ''); return; }
    const filtered = TOP_10_GOAT_FOOTBALLERS.filter(name => name.toLowerCase().includes(query));
    if (filtered.length === 0) { playerGrid.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-title">No results found</div><div class="empty-state-text">Try a different search term</div></div>`; }
    else { playerGrid.innerHTML = filtered.map(name => createPlayerCard(name)).join(''); }
}

function createPlayerCard(name) {
    const bio = PLAYER_BIOGRAPHIES[name] || {};
    const reelsCount = getPlayerReelCount(name);
    const imgUrl = PLAYER_IMAGES[name];
    const initial = name.charAt(0);
    const safeName = name.replace(/'/g, "\\'");
    const avatarHtml = imgUrl ? `<img src="${imgUrl}" alt="${name}" onerror="this.outerHTML='<div class=\\'player-card-placeholder\\'>${initial}</div>'">` : `<div class="player-card-placeholder">${initial}</div>`;
    return `<div class="player-card glass-card" onclick="showPlayerModal('${safeName}')" style="cursor:pointer;"><div class="player-card-avatar">${avatarHtml}</div><div class="player-card-name">${esc(name)}</div><div class="player-card-detail">${esc(bio.nationality || '')} • ${esc(bio.position || '')}</div><div class="player-card-reels">🎬 ${reelsCount} Reels</div></div>`;
}

function renderPlayerGrid(container, filter) {
    const players = filter ? TOP_10_GOAT_FOOTBALLERS.filter(n => n.toLowerCase().includes(filter.toLowerCase())) : TOP_10_GOAT_FOOTBALLERS;
    container.innerHTML = players.map(name => createPlayerCard(name)).join('');
}

// =====================================
// FAQ DATA
// =====================================
const FAQ_DATA = [
    { q: "What is ZCORP Football Hall of Fame?", a: "A community-driven ranking where legendary players earn their position through the number of reels dedicated to them." },
    { q: "How are rankings calculated?", a: "Rankings are based on the total number of reels each player has. More reels = higher rank. Updates automatically." },
    { q: "How do I add reels for a player?", a: "Go to the Support page and click 'Contact Zeus' under 'Add a footballer's reels'." },
    { q: "Can I suggest a new player?", a: "Yes! Use the 'Suggest a football legend' option on the Support page or contact Zeus on WhatsApp." },
    { q: "Why do some videos not play?", a: "The source URL may be broken or format unsupported. Use 'Report a broken video' on the Support page." },
    { q: "How can I contact support?", a: "Visit the Support page or click 'CHAT WITH ZEUS' to reach out via WhatsApp." },
    { q: "What does the GOAT score mean?", a: "The GOAT score equals the number of reels a player has. Simple community engagement metric." },
    { q: "Who is currently #1?", a: "Cristiano Ronaldo currently leads the ZCORP Hall of Fame with 39 reels!" },
    { q: "How many reels does Messi have?", a: "Lionel Messi currently has 5 reels in the ZCORP Hall of Fame." },
    { q: "Is Neymar in the Hall of Fame?", a: "Yes! Neymar Jr is featured with his own reels in the ZCORP Hall of Fame." },
    { q: "Who created ZCORP?", a: "ZCORP was founded by Zeus, with CJ COOL, KREMMZ, and LORD PABLO." }
];

// =====================================
// FAQ AI TOGGLE
// =====================================
function toggleFAQAI() {
    const panel = document.getElementById('faqAIPanel');
    if (!panel) return;
    const isOpen = panel.classList.contains('open');
    panel.classList.toggle('open', !isOpen);
    if (!isOpen) renderFAQMessages();
}

function renderFAQMessages() {
    const messages = document.getElementById('faqAIMessages');
    if (!messages) return;
    messages.innerHTML = `<div class="faq-ai-message bot"><div class="faq-ai-avatar">🤖</div><div class="faq-ai-bubble"><strong>Verified AI Assistant</strong><p>Hi! Ask me anything about the ZCORP Hall of Fame:</p></div></div>
        ${FAQ_DATA.map((item, i) => `<div class="faq-ai-question-btn" onclick="askFAQ(${i})"><span>❓</span> ${esc(item.q)}</div>`).join('')}
        <div class="faq-ai-message bot hint"><div class="faq-ai-bubble">Or type your own question below! 💬</div></div>`;
    messages.scrollTop = messages.scrollHeight;
}

function askFAQ(idx) {
    const item = FAQ_DATA[idx];
    if (!item) return;
    const messages = document.getElementById('faqAIMessages');
    if (!messages) return;
    const userDiv = document.createElement('div');
    userDiv.className = 'faq-ai-message user';
    userDiv.innerHTML = `<div class="faq-ai-bubble">${esc(item.q)}</div>`;
    messages.appendChild(userDiv);
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'faq-ai-message bot';
        botDiv.innerHTML = `<div class="faq-ai-avatar">🤖</div><div class="faq-ai-bubble"><strong>Verified AI Assistant</strong><p>${esc(item.a)}</p></div>`;
        messages.appendChild(botDiv);
        messages.scrollTop = messages.scrollHeight;
    }, 300);
    messages.scrollTop = messages.scrollHeight;
}

function sendFAQQuestion() {
    const input = document.getElementById('faqAIInput');
    const messages = document.getElementById('faqAIMessages');
    if (!input || !messages) return;
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    const userDiv = document.createElement('div');
    userDiv.className = 'faq-ai-message user';
    userDiv.innerHTML = `<div class="faq-ai-bubble">${esc(text)}</div>`;
    messages.appendChild(userDiv);
    const lower = text.toLowerCase();
    let answer = "I'm sorry, I don't have an answer for that yet. Please contact Zeus via the Support page! 🙏";
    let found = false;
    for (const item of FAQ_DATA) {
        if (lower.includes(item.q.toLowerCase().slice(0, 15))) { answer = item.a; found = true; break; }
    }
    if (!found) {
        const keywords = {
            "ronaldo": "Cristiano Ronaldo is #1 with 39 reels in the ZCORP Hall of Fame!",
            "messi": "Lionel Messi has 5 reels and is ranked #2 in the ZCORP Hall of Fame!",
            "neymar": "Neymar Jr is featured with 4 reels in the ZCORP Hall of Fame!",
            "rank": "Rankings are based on total reels per player. More reels = higher rank.",
            "reel": "Reels are video moments of football legends that contribute to rankings.",
            "add": "Contact Zeus via the Support page to add reels or suggest players.",
            "contact": "Contact Zeus through WhatsApp — link on the Support page.",
            "score": "GOAT score = number of reels a player has.",
            "video": "Videos from various sources. Report broken ones on the Support page.",
            "who": "Cristiano Ronaldo is currently #1 in the ZCORP Hall of Fame!",
            "best": "Cristiano Ronaldo leads with 39 reels — check the Rankings page!"
        };
        for (const [key, val] of Object.entries(keywords)) {
            if (lower.includes(key)) { answer = val; break; }
        }
    }
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'faq-ai-message bot';
        botDiv.innerHTML = `<div class="faq-ai-avatar">🤖</div><div class="faq-ai-bubble"><strong>Verified AI Assistant</strong><p>${esc(answer)}</p></div>`;
        messages.appendChild(botDiv);
        messages.scrollTop = messages.scrollHeight;
    }, 400);
    messages.scrollTop = messages.scrollHeight;
}

// =====================================
// INJECT FAQ AI BUTTON & PANEL
// =====================================
function injectFAQAI() {
    const btn = document.createElement('div');
    btn.className = 'faq-ai-toggle';
    btn.id = 'faqAIToggle';
    btn.setAttribute('onclick', 'toggleFAQAI()');
    btn.innerHTML = `<div class="faq-ai-toggle-icon"><svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/><path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg></div><div class="faq-ai-toggle-badge">Verified</div><div class="faq-ai-toggle-label">FAQ AI</div>`;
    document.body.appendChild(btn);
    const panel = document.createElement('div');
    panel.className = 'faq-ai-panel';
    panel.id = 'faqAIPanel';
    panel.innerHTML = `<div class="faq-ai-header"><div class="faq-ai-header-left"><span class="faq-ai-header-icon">🤖</span><div><strong>ZCORP AI</strong><div class="faq-ai-verified">✅ Verified</div></div></div><button class="faq-ai-close" onclick="toggleFAQAI()">&times;</button></div>
        <div class="faq-ai-messages" id="faqAIMessages"><div class="faq-ai-message bot"><div class="faq-ai-avatar">🤖</div><div class="faq-ai-bubble"><strong>Verified AI Assistant</strong><p>Hi! Ask me anything about the Hall of Fame!</p></div></div></div>
        <div class="faq-ai-input-area"><input type="text" id="faqAIInput" placeholder="Ask a question..." class="faq-ai-input"><button class="faq-ai-send" onclick="sendFAQQuestion()"><svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button></div>`;
    document.body.appendChild(panel);
    setTimeout(() => {
        if (!localStorage.getItem('zcorp_faq_seen')) {
            panel.classList.add('open');
            renderFAQMessages();
            localStorage.setItem('zcorp_faq_seen', 'true');
        }
    }, 1500);
    const input = document.getElementById('faqAIInput');
    if (input) input.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendFAQQuestion(); });
}

// =====================================
// SETUP FUNCTIONS
// =====================================
function setupReelFilters() {
    const filtersContainer = document.getElementById('reelFilters');
    if (!filtersContainer) return;
    filtersContainer.innerHTML = TOP_10_GOAT_FOOTBALLERS.map(name =>
        `<button class="reel-filter ${name === currentPlayerReels ? 'active' : ''}" data-player="${esc(name)}" onclick="updateReelFilterButtons('${name.replace(/'/g, "\\'")}')">${esc(name)}</button>`
    ).join('');
}

function setupMobileNav() {
    document.querySelectorAll('.mobile-nav-link').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.dataset.page;
            if (page === 'reels') currentPlayerReels = currentPlayerReels || 'Cristiano Ronaldo';
            switchPage(page);
        });
    });
}

function setupDesktopNav() {
    document.querySelectorAll('.nav-link').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.dataset.page;
            if (page === 'reels') currentPlayerReels = currentPlayerReels || 'Cristiano Ronaldo';
            switchPage(page);
        });
    });
}

function setupModalClose() {
    const modal = document.getElementById('playerModal');
    const closeBtn = document.getElementById('modalClose');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.style.display === 'flex') closeModal(); });
    }
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    let searchTimer;
    searchInput.addEventListener('input', () => { clearTimeout(searchTimer); searchTimer = setTimeout(() => handleSearch(searchInput), 300); });
}

function setupTouchSwipe() {
    let touchStartX = 0, touchEndX = 0;
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;
    const pages = ['home', 'reels', 'rankings', 'about', 'support'];
    mainContent.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    mainContent.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) < 80) return;
        const currentIdx = pages.indexOf(currentPage);
        if (diff > 0 && currentIdx < pages.length - 1) switchPage(pages[currentIdx + 1]);
        else if (diff < 0 && currentIdx > 0) switchPage(pages[currentIdx - 1]);
    }, { passive: true });
}

// =====================================
// INIT
// =====================================
function init() {
    renderHomeStats();
    const playerGrid = document.getElementById('playerGrid');
    if (playerGrid) renderPlayerGrid(playerGrid, '');
    renderReels();
    renderRankings();
    setupReelFilters();
    setupMobileNav();
    setupDesktopNav();
    setupModalClose();
    setupSearch();
    setupTouchSwipe();
    injectFAQAI();
}

document.addEventListener('DOMContentLoaded', init);
