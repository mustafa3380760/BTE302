// 1. DERS İÇERİKLERİ VE VERİ SETLERİ
const dersIcerikleri = {
    colors: { 
        title: "Colors", 
        questions: [
            { q: "What color is the sun?", opts: ["Yellow", "Blue", "Red"], a: "Yellow" },
            { q: "What color is an orange?", opts: ["Purple", "Orange", "Green"], a: "Orange" },
            { q: "What color is the sky?", opts: ["Pink", "Blue", "Black"], a: "Blue" },
            { q: "What color is a strawberry?", opts: ["Red", "White", "Grey"], a: "Red" },
            { q: "What color is grass?", opts: ["Brown", "Green", "Yellow"], a: "Green" },
            { q: "What color is coal?", opts: ["Black", "White", "Blue"], a: "Black" },
            { q: "What color is snow?", opts: ["Black", "White", "Red"], a: "White" },
            { q: "What color is a pig?", opts: ["Pink", "Green", "Blue"], a: "Pink" },
            { q: "What color is chocolate?", opts: ["Yellow", "Brown", "White"], a: "Brown" },
            { q: "What color is an eggplant?", opts: ["Purple", "Red", "Yellow"], a: "Purple" }
        ],
        matching: [
            { en: "Red", tr: "Kırmızı" }, { en: "Blue", tr: "Mavi" }, { en: "Green", tr: "Yeşil" },
            { en: "Yellow", tr: "Sarı" }, { en: "Orange", tr: "Turuncu" }, { en: "Purple", tr: "Mor" }, 
            { en: "Pink", tr: "Pembe" }, { en: "Black", tr: "Siyah" }, { en: "White", tr: "Beyaz" }, { en: "Brown", tr: "Kahverengi" }
        ] 
    },
    animals: { 
        title: "Animals", 
        questions: [
            { q: "Which animal says 'Meow'?", opts: ["Dog", "Cat", "Bird"], a: "Cat" },
            { q: "Which animal is the king of the jungle?", opts: ["Lion", "Tiger", "Bear"], a: "Lion" },
            { q: "Which animal has a long neck?", opts: ["Giraffe", "Elephant", "Zebra"], a: "Giraffe" },
            { q: "Which animal gives us milk?", opts: ["Cow", "Lion", "Snake"], a: "Cow" },
            { q: "Which animal is very slow?", opts: ["Cheetah", "Turtle", "Rabbit"], a: "Turtle" },
            { q: "Which animal says 'Woof'?", opts: ["Cat", "Dog", "Fish"], a: "Dog" },
            { q: "Which animal has stripes?", opts: ["Zebra", "Lion", "Elephant"], a: "Zebra" },
            { q: "Which animal can fly?", opts: ["Fish", "Bird", "Turtle"], a: "Bird" },
            { q: "Which animal has a trunk?", opts: ["Monkey", "Elephant", "Cat"], a: "Elephant" },
            { q: "Which animal eats bananas?", opts: ["Lion", "Monkey", "Dog"], a: "Monkey" }
        ],
        matching: [
            { en: "Dog", tr: "Köpek" }, { en: "Cat", tr: "Kedi" }, { en: "Lion", tr: "Aslan" }, { en: "Bird", tr: "Kuş" }, { en: "Fish", tr: "Balık" },
            { en: "Elephant", tr: "Fil" }, { en: "Giraffe", tr: "Zürafa" }, { en: "Cow", tr: "İnek" }, { en: "Turtle", tr: "Kaplumbağa" }, { en: "Monkey", tr: "Maymun" },
            { en: "Zebra", tr: "Zebra" }, { en: "Cheetah", tr: "Çita" }, { en: "Kangaroo", tr: "Kanguru" }, { en: "Bee", tr: "Arı" }, { en: "Snail", tr: "Salyangoz" },
            { en: "Ostrich", tr: "Devekuşu" }, { en: "Camel", tr: "Deve" }, { en: "Bear", tr: "Ayı" }, { en: "Chicken", tr: "Tavuk" }, { en: "Spider", tr: "Örümcek" },
            { en: "Snake", tr: "Yılan" }, { en: "Rabbit", tr: "Tavşan" }, { en: "Fox", tr: "Tilki" }, { en: "Duck", tr: "Ördek" }, { en: "Dolphin", tr: "Yunus" }
        ] 
    },
    numbers: { 
        title: "Numbers", 
        questions: [
            { q: "What is 2 + 2?", opts: ["3", "4", "5"], a: "4" },
            { q: "What is 10 - 5?", opts: ["5", "6", "4"], a: "5" },
            { q: "How many days in a week?", opts: ["5", "7", "10"], a: "7" },
            { q: "How many fingers on one hand?", opts: ["4", "5", "6"], a: "5" },
            { q: "What is 3 x 3?", opts: ["6", "9", "12"], a: "9" },
            { q: "What is 8 / 2?", opts: ["4", "2", "6"], a: "4" },
            { q: "How many months in a year?", opts: ["10", "12", "14"], a: "12" },
            { q: "Number after nine?", opts: ["Eight", "Ten", "Eleven"], a: "Ten" },
            { q: "What is 0 + 1?", opts: ["0", "1", "2"], a: "1" },
            { q: "What is half of 20?", opts: ["5", "10", "15"], a: "10" }
        ],
        matching: [
            { en: "One", tr: "Bir" }, { en: "Two", tr: "İki" }, { en: "Three", tr: "Üç" }, { en: "Four", tr: "Dört" }, { en: "Five", tr: "Beş" },
            { en: "Six", tr: "Altı" }, { en: "Seven", tr: "Yedi" }, { en: "Eight", tr: "Sekiz" }, { en: "Nine", tr: "Dokuz" }, { en: "Ten", tr: "On" },
            { en: "Eleven", tr: "On bir" }, { en: "Twelve", tr: "On iki" }, { en: "Thirteen", tr: "On üç" }, { en: "Fourteen", tr: "On dört" }, { en: "Fifteen", tr: "On beş" },
            { en: "Sixteen", tr: "On altı" }, { en: "Seventeen", tr: "On yedi" }, { en: "Eighteen", tr: "On sekiz" }, { en: "Nineteen", tr: "On dokuz" }, { en: "Twenty", tr: "Yirmi" },
            { en: "Twenty-one", tr: "Yirmi bir" }, { en: "Twenty-two", tr: "Yirmi iki" }, { en: "Twenty-three", tr: "Yirmi üç" }, { en: "Twenty-four", tr: "Yirmi dört" }, { en: "Twenty-five", tr: "Yirmi beş" }
        ] 
    }
};

const maratonSorulari = {
    colors: [
        { q: "The grass is ____.", a: "green" }, { q: "The sky is ____.", a: "blue" }, { q: "Strawberries are ____.", a: "red" },
        { q: "Bananas are ____.", a: "yellow" }, { q: "Oranges are ____.", a: "orange" }, { q: "Coal is ____.", a: "black" },
        { q: "Snow is ____.", a: "white" }, { q: "Chocolate is ____.", a: "brown" }, { q: "Sun is ____.", a: "yellow" },
        { q: "Piglets are ____.", a: "pink" }, { q: "Violets are ____.", a: "purple" }, { q: "Silver is ____.", a: "grey" },
        { q: "Lemon is ____.", a: "yellow" }, { q: "Night is ____.", a: "black" }, { q: "Clouds are ____.", a: "white" },
        { q: "Carrot is ____.", a: "orange" }, { q: "Ocean is ____.", a: "blue" }, { q: "Cherries are ____.", a: "red" },
        { q: "Broccoli is ____.", a: "green" }, { q: "Eggplant is ____.", a: "purple" }, { q: "Milk is ____.", a: "white" },
        { q: "Flamingos are ____.", a: "pink" }, { q: "Tires are ____.", a: "black" }, { q: "Paper is ____.", a: "white" }, { q: "Forest is ____.", a: "green" }
    ],
    animals: [
        { q: "Dog says ____.", a: "woof" }, { q: "Cat says ____.", a: "meow" }, { q: "Lion is the ____.", a: "king" },
        { q: "Big animal with trunk: ____.", a: "elephant" }, { q: "Long neck: ____.", a: "giraffe" }, { q: "Cow gives ____.", a: "milk" },
        { q: "Birds can ____.", a: "fly" }, { q: "Fish can ____.", a: "swim" }, { q: "Slow animal: ____.", a: "turtle" },
        { q: "Monkey eats ____.", a: "banana" }, { q: "Zebra is black and ____.", a: "white" }, { q: "Fastest cat: ____.", a: "cheetah" },
        { q: "Kangaroo carries its ____.", a: "baby" }, { q: "Bees make ____.", a: "honey" }, { q: "Snail is ____.", a: "slow" },
        { q: "Ostrich cannot ____.", a: "fly" }, { q: "Camel lives in ____.", a: "desert" }, { q: "Polar ____ is white.", a: "bear" },
        { q: "Chicken gives ____.", a: "egg" }, { q: "Spider has 8 ____.", a: "legs" }, { q: "Snake is a ____.", a: "reptile" },
        { q: "Rabbit eats ____.", a: "carrot" }, { q: "Fox is ____.", a: "clever" }, { q: "Duck says ____.", a: "quack" }, { q: "Dolphin is in ____.", a: "sea" }
    ],
    numbers: [
        { q: "1 + 1 = ____.", a: "two" }, { q: "3 - 1 = ____.", a: "two" }, { q: "12 months in a ____.", a: "year" },
        { q: "5 fingers on a ____.", a: "hand" }, { q: "7 days in a ____.", a: "week" }, { q: "10 - 5 = ____.", a: "five" },
        { q: "2 x 4 = ____.", a: "eight" }, { q: "After 9 is ____.", a: "ten" }, { q: "Triangle has 3 ____.", a: "sides" },
        { q: "Square has 4 ____.", a: "corners" }, { q: "6 + 4 = ____.", a: "ten" }, { q: "9 - 6 = ____.", a: "three" },
        { q: "7 + 2 = ____.", a: "nine" }, { q: "Half of 12: ____.", a: "six" }, { q: "One week: 7 ____.", a: "days" },
        { q: "0 + 1 = ____.", a: "one" }, { q: "8 - 0 = ____.", a: "eight" }, { q: "2 x 3 = ____.", a: "six" },
        { q: "10 / 2 = ____.", a: "five" }, { q: "Spider: 8 ____.", a: "legs" }, { q: "60 seconds: 1 ____.", a: "minute" },
        { q: "12 / 3 = ____.", a: "four" }, { q: "One dozen is ____.", a: "twelve" }, { q: "Many legs: ____.", a: "centipede" }, { q: "20 + 5 = ____-five.", a: "twenty" }
    ]
};

// 2. GLOBAL DEĞİŞKENLER
let mevcutPuan = parseInt(localStorage.getItem('userXP')) || 0; 
let aktifDersKey = null;
let curQuizIdx = 0, quizCorrect = 0;
let curGap = 0, gapCorrect = 0;
let matchIndex = 0, matchCountInGroup = 0, totalMatchCorrect = 0;

let userBadges = JSON.parse(localStorage.getItem('userBadges')) || {
    colors: { quiz: null, matching: null, marathon: null },
    animals: { quiz: null, matching: null, marathon: null },
    numbers: { quiz: null, matching: null, marathon: null }
};

// --- İLERLEME VE PUAN SİSTEMİ ---
function updateGeneralProgress() {
    let totalAct = 9; // 3 Modül x 3 Aktivite
    let perfects = 0;
    for (let mod in userBadges) {
        for (let act in userBadges[mod]) {
            if (userBadges[mod][act] && userBadges[mod][act].label === "Çok İyi") perfects++;
        }
    }
    const percent = Math.round((perfects / totalAct) * 100);
    const bar = document.getElementById('main-progress-bar');
    if(bar) { bar.style.width = percent + "%"; bar.innerText = "%" + percent; }
}

function updateXPDisplay() { 
    document.getElementById('total-xp').innerText = `Puan: ${mevcutPuan} XP`; 
    localStorage.setItem('userXP', mevcutPuan);
}

function saveBadge(activityType, score) {
    const badge = getBadgeTier(score);
    userBadges[aktifDersKey][activityType] = badge;
    localStorage.setItem('userBadges', JSON.stringify(userBadges));
    updateGeneralProgress();
}

function getBadgeTier(score) {
    if (score >= 75) return { label: "Çok İyi", color: "#f1c40f", icon: "fa-trophy" };
    if (score >= 50) return { label: "Ortalama", color: "#95a5a6", icon: "fa-medal" };
    return { label: "Geliştirilmeli", color: "#cd7f32", icon: "fa-award" };
}

// --- ARAYÜZ YÖNETİMİ ---
function hideAll() {
    ['quiz-area', 'matching-game', 'gap-fill-area', 'badges-area', 'games-area', 'activity-selector'].forEach(id => {
        const el = document.getElementById(id); if(el) el.style.display = "none";
    });
}

function toggleFocusMode(on) {
    const elements = ['.sidebar', '.progress-section', '.modules', '#modules-header', 'header h1'];
    elements.forEach(selector => {
        const el = document.querySelector(selector);
        if(el) on ? el.classList.add('hidden-layout') : el.classList.remove('hidden-layout');
    });
    document.querySelector('.content').classList.toggle('full-width-content', on);
}

function openModule(moduleKey) {
    hideAll(); aktifDersKey = moduleKey;
    document.getElementById('lesson-title').innerText = "Ders: " + dersIcerikleri[moduleKey].title;
    document.getElementById('activity-selector').style.display = "block";
    toggleFocusMode(false); 
}

function showActivity(type) {
    hideAll(); toggleFocusMode(true); 
    if (type === 'quiz') { curQuizIdx = 0; quizCorrect = 0; document.getElementById('quiz-area').style.display = "grid"; loadQuiz(); } 
    else if (type === 'matching') { matchIndex = 0; matchCountInGroup = 0; totalMatchCorrect = 0; document.getElementById('matching-game').style.display = "block"; loadMatch(); }
}

function showBadgesPage() {
    hideAll(); toggleFocusMode(false);
    document.getElementById('lesson-title').innerText = "Başarı Rozetlerim";
    document.getElementById('badges-area').style.display = "block";
    renderBadges();
}

function renderBadges() {
    const container = document.getElementById('badges-container'); container.innerHTML = "";
    for (let mod in userBadges) {
        let modBox = document.createElement('div'); modBox.className = "card";
        let modTitle = mod.charAt(0).toUpperCase() + mod.slice(1);
        let html = `<h4 style="border-bottom: 1px solid #eee; padding-bottom: 10px; text-align:left;">${modTitle} Modülü</h4><div style="display: flex; gap: 20px; justify-content: space-around; padding-top: 10px;">`;
        for (let act in userBadges[mod]) {
            let b = userBadges[mod][act], label = act === 'quiz' ? 'Test' : (act === 'matching' ? 'Eşleştirme' : 'Maraton');
            if (b) html += `<div style="text-align: center;"><i class="fas ${b.icon} fa-2x" style="color: ${b.color}"></i><p style="font-size: 14px; margin: 5px 0;">${label}</p><span style="color:${b.color}; font-weight:bold;">${b.label}</span></div>`;
            else html += `<div style="text-align: center; opacity: 0.2;"><i class="fas fa-lock fa-2x"></i><p style="font-size: 14px; margin: 5px 0;">${label}</p><span>Kilitli</span></div>`;
        }
        modBox.innerHTML = html + `</div>`; container.appendChild(modBox);
    }
}

// --- QUIZ ---
function loadQuiz() {
    const q = dersIcerikleri[aktifDersKey].questions[curQuizIdx];
    document.getElementById('question-text').innerHTML = `<b>Soru ${curQuizIdx + 1}:</b> ${q.q}`;
    const cont = document.getElementById('options-container'); cont.innerHTML = "";
    q.opts.forEach(o => {
        const b = document.createElement('button'); b.className = "btn-opt"; b.innerText = o;
        b.onclick = () => {
            const fb = document.getElementById('feedback-message');
            if (o === q.a) { quizCorrect++; fb.innerText = "Doğru!"; fb.className = "feedback-correct"; } 
            else { fb.innerText = "Yanlış! Cevap: " + q.a; fb.className = "feedback-wrong"; }
            updateXPDisplay();
            setTimeout(() => {
                curQuizIdx++;
                if (curQuizIdx < 10) loadQuiz();
                else { saveBadge('quiz', quizCorrect * 10); finishQuiz(); }
            }, 1200);
        };
        cont.appendChild(b);
    });
}
function finishQuiz() {
    const skor = quizCorrect * 10; mevcutPuan += skor; updateXPDisplay();
    document.getElementById('quiz-area').innerHTML = `<div style="text-align:center; padding:40px;"><h2>Tamamlandı!</h2><p>Puan: ${skor}/100</p><button class="btn-select" onclick="location.reload()">Derslere Dön</button></div>`;
}

// --- MARATON ---
function startGapFill() {
    hideAll(); curGap = 0; gapCorrect = 0; toggleFocusMode(true);
    document.getElementById('gap-fill-area').style.display = "grid"; showNextGap();
    document.getElementById('gap-input').onkeydown = (e) => { if (e.key === "Enter") checkGapAnswer(); };
}
function showNextGap() {
    const s = maratonSorulari[aktifDersKey];
    if (curGap < 25) {
        document.getElementById('question-number').innerText = `Soru: ${curGap + 1} / 25`;
        document.getElementById('gap-question-text').innerText = s[curGap].q;
        const i = document.getElementById('gap-input'); i.value = ""; i.disabled = false; i.focus();
        document.getElementById('gap-feedback').className = "feedback-hidden";
    } else { saveBadge('marathon', gapCorrect * 4); finishGapFill(); }
}
function checkGapAnswer() {
    const i = document.getElementById('gap-input'), fb = document.getElementById('gap-feedback'), ans = maratonSorulari[aktifDersKey][curGap].a.toLowerCase();
    i.disabled = true;
    if (i.value.trim().toLowerCase() === ans) { gapCorrect++; fb.innerText = "Doğru!"; fb.className = "feedback-correct"; }
    else { fb.innerText = "Yanlış! Cevap: " + ans; fb.className = "feedback-wrong"; }
    setTimeout(() => { curGap++; showNextGap(); }, 1200);
}
function finishGapFill() {
    const skor = gapCorrect * 4; mevcutPuan += skor; updateXPDisplay();
    document.getElementById('gap-fill-area').innerHTML = `<div style="text-align:center; padding:40px;"><h2>Tamamlandı!</h2><p>Puan: ${skor}/100</p><button class="btn-select" onclick="location.reload()">Derslere Dön</button></div>`;
}

// --- EŞLEŞTİRME ---
function loadMatch() {
    const d = dersIcerikleri[aktifDersKey], enDiv = document.getElementById('english-words'), trDiv = document.getElementById('turkish-words');
    enDiv.innerHTML = ""; trDiv.innerHTML = "";
    let size = (aktifDersKey === 'colors') ? 10 : 5, grup = d.matching.slice(matchIndex, matchIndex + size);
    if (grup.length === 0) { saveBadge('matching', Math.round((totalMatchCorrect / d.matching.length) * 100)); finishMatch(); return; }
    function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
    shuffle(grup).forEach((p, i) => {
        const b = document.createElement('div'); b.className = "word-box"; b.draggable = true; b.innerText = p.en; b.id = "e" + i;
        b.ondragstart = (e) => e.dataTransfer.setData("text", e.target.id); enDiv.appendChild(b);
    });
    shuffle(grup).forEach((p, i) => {
        const z = document.createElement('div'); z.className = "drop-zone"; z.innerText = p.tr; z.dataset.correct = p.en; z.dataset.current = "";
        z.ondragover = (e) => e.preventDefault();
        z.ondrop = (e) => {
            const id = e.dataTransfer.getData("text"), el = document.getElementById(id);
            if (z.dataset.current !== "") return;
            z.innerHTML = `${p.tr} <br> <b style="color:var(--primary)">[${el.innerText}]</b>`;
            z.dataset.current = el.innerText; z.style.borderStyle = "solid"; el.style.visibility = "hidden";
            matchCountInGroup++;
            if (matchCountInGroup === grup.length) { 
                setTimeout(() => {
                    document.querySelectorAll('.drop-zone').forEach(dz => {
                        if (dz.dataset.current === dz.dataset.correct) { dz.classList.add("correct-match"); dz.innerHTML = `✅ ${dz.innerText}`; totalMatchCorrect++; }
                        else { dz.style.backgroundColor = "#f8d7da"; dz.style.borderColor = "#dc3545"; dz.innerHTML = `❌ ${dz.innerText} <br><small>Cevap: ${dz.dataset.correct}</small>`; }
                    });
                    setTimeout(() => { matchIndex += size; matchCountInGroup = 0; loadMatch(); }, 3000);
                }, 1000);
            }
        };
        trDiv.appendChild(z);
    });
}
function finishMatch() {
    mevcutPuan += Math.round((totalMatchCorrect / dersIcerikleri[aktifDersKey].matching.length) * 100); updateXPDisplay();
    document.getElementById('matching-game').innerHTML = `<div style="text-align:center; padding:40px;"><h2>Tamamlandı!</h2><button class="btn-select" onclick="location.reload()">Derslere Dön</button></div>`;
}

// --- SAVAŞ UÇAĞI ---
let canvas, ctx, player, bullets = [], enemies = [], gameRunning = false, playerLives = 3, isInvincible = false, lastDamageTime = 0;
function startPlaneGame() {
    hideAll(); toggleFocusMode(true); document.getElementById('games-area').style.display = "block";
    canvas = document.getElementById('gameCanvas'); ctx = canvas.getContext('2d');
    player = { x: 300, y: 350, w: 40, h: 40 }; bullets = []; enemies = []; playerLives = 3; isInvincible = false; gameRunning = true;
    canvas.onmousemove = (e) => { if(!gameRunning) return; const r = canvas.getBoundingClientRect(); player.x = e.clientX - r.left - player.w / 2; };
    canvas.onclick = () => { if(!gameRunning) return; bullets.push({ x: player.x + player.w / 2 - 2, y: player.y, w: 4, h: 10 }); };
    requestAnimationFrame(function loop() { if (!gameRunning) return; updatePlane(); drawPlane(); requestAnimationFrame(loop); });
}
function updatePlane() {
    bullets.forEach((b, i) => { b.y -= 9; if (b.y < 0) bullets.splice(i, 1); });
    if (Math.random() < 0.015) enemies.push({ x: Math.random() * (canvas.width - 30), y: -30, w: 30, h: 30 });
    if (isInvincible && Date.now() - lastDamageTime > 1500) isInvincible = false;
    enemies.forEach((en, ei) => {
        en.y += 2.0;
        if (!isInvincible && player.x < en.x + en.w && player.x + player.w > en.x && player.y < en.y + en.h && player.y + player.h > en.y) { enemies.splice(ei, 1); playerLives--; isInvincible = true; lastDamageTime = Date.now(); if(playerLives<=0) { gameRunning=false; setTimeout(gameOver, 100); } }
        bullets.forEach((b, bi) => { if (b.x < en.x+en.w && b.x+b.w > en.x && b.y < en.y+en.h && b.y+b.h > en.y) { enemies.splice(ei, 1); bullets.splice(bi, 1); mevcutPuan += 5; updateXPDisplay(); } });
        if (en.y > canvas.height) enemies.splice(ei, 1);
    });
}
function gameOver() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.85)"; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.textAlign = "center"; ctx.fillStyle = "#e74c3c"; ctx.font = "bold 50px Arial"; ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2-20);
    ctx.fillStyle = "white"; ctx.font = "20px Arial"; ctx.fillText("GÖREV BAŞARISIZ!", canvas.width/2, canvas.height/2+30); ctx.fillStyle = "#f1c40f"; ctx.font = "bold 24px Arial"; ctx.fillText(`Toplam Puan: ${mevcutPuan} XP`, canvas.width/2, canvas.height/2+70); updateXPDisplay();
}
function drawPlane() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.textAlign = "left"; ctx.fillStyle = "#e74c3c"; ctx.font = "20px Arial"; ctx.fillText("Can: " + "❤️".repeat(playerLives), 10, 30);
    ctx.fillStyle = "white"; ctx.fillText("Skor: " + mevcutPuan + " XP", 480, 30);
    if (!isInvincible || Math.floor(Date.now() / 150) % 2 === 0) { ctx.fillStyle = isInvincible ? "rgba(52, 152, 219, 0.5)" : "#3498db"; ctx.fillRect(player.x, player.y, player.w, player.h); }
    ctx.fillStyle = "#f1c40f"; bullets.forEach(b => ctx.fillRect(b.x, b.y, b.w, b.h)); ctx.fillStyle = "#e74c3c"; enemies.forEach(en => ctx.fillRect(en.x, en.y, en.w, en.h));
}

window.onload = () => { updateXPDisplay(); updateGeneralProgress(); const items = document.querySelectorAll('.nav-item'); items.forEach(i => { if(i.innerText.includes("Oyunlar")) i.onclick = startPlaneGame; if(i.innerText.includes("Rozetlerim")) i.onclick = showBadgesPage; if(i.innerText.includes("Ana Sayfa")) i.onclick = () => location.reload(); }); };
