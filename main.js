const menus = [
    // Korean
    { name: { ko: "김치찌개", en: "Kimchi Jjigae" }, category: "korean", emoji: "🥘", description: { ko: "얼큰하고 시원한 한국인의 소울푸드", en: "Spicy and hearty Korean soul food" } },
    { name: { ko: "불고기", en: "Bulgogi" }, category: "korean", emoji: "🍱", description: { ko: "달콤 짭짤한 양념이 매력적인 소고기 요리", en: "Sweet and savory marinated beef dish" } },
    { name: { ko: "비빔밥", en: "Bibimbap" }, category: "korean", emoji: "🥗", description: { ko: "각종 나물과 고추장의 조화로운 맛", en: "Assorted vegetables with rice and spicy sauce" } },
    { name: { ko: "삼겹살", en: "Samgyeopsal" }, category: "korean", emoji: "🥓", description: { ko: "지글지글 구워 먹는 즐거움이 있는 돼지고기", en: "Grilled pork belly, a favorite Korean BBQ" } },
    { name: { ko: "떡볶이", en: "Tteokbokki" }, category: "korean", emoji: "🍡", description: { ko: "매콤달콤한 소스와 쫄깃한 떡의 만남", en: "Spicy and sweet rice cakes" } },
    { name: { ko: "김치찜", en: "Kimchi-jjim" }, category: "korean", emoji: "🍲", description: { ko: "푹 익은 김치와 돼지고기의 깊은 맛", en: "Deep flavor of braised kimchi and pork" } },
    { name: { ko: "제육볶음", en: "Jeyuk Bokkeum" }, category: "korean", emoji: "🔥", description: { ko: "매콤한 양념으로 볶아낸 밥도둑 돼지고기", en: "Spicy stir-fried pork, a true rice thief" } },
    { name: { ko: "갈비탕", en: "Galbi-tang" }, category: "korean", emoji: "🥣", description: { ko: "진한 국물과 부드러운 소갈비의 만남", en: "Rich broth with tender beef short ribs" } },
    { name: { ko: "냉면", en: "Naengmyeon" }, category: "korean", emoji: "❄️", description: { ko: "가슴속까지 시원해지는 메밀면 요리", en: "Refreshing cold buckwheat noodles" } },
    { name: { ko: "닭갈비", en: "Dak-galbi" }, category: "korean", emoji: "🥘", description: { ko: "매콤한 양념과 닭고기, 채소의 조화", en: "Spicy stir-fried chicken with vegetables" } },

    // Western
    { name: { ko: "까르보나라", en: "Carbonara" }, category: "western", emoji: "🍝", description: { ko: "고소한 크림과 베이컨이 어우러진 파스타", en: "Creamy pasta with savory bacon" } },
    { name: { ko: "스테이크", en: "Steak" }, category: "western", emoji: "🥩", description: { ko: "육즙 가득한 고품격 저녁 식사", en: "Juicy and premium beef dinner" } },
    { name: { ko: "햄버거", en: "Hamburger" }, category: "western", emoji: "🍔", description: { ko: "패티와 신선한 채소의 든든한 한 끼", en: "Hearty patty with fresh vegetables" } },
    { name: { ko: "피자", en: "Pizza" }, category: "western", emoji: "🍕", description: { ko: "다양한 토핑과 치즈의 완벽한 조화", en: "Perfect harmony of toppings and cheese" } },
    { name: { ko: "리조또", en: "Risotto" }, category: "western", emoji: "🍚", description: { ko: "부드럽고 고소한 이탈리아식 쌀 요리", en: "Creamy and savory Italian rice dish" } },
    { name: { ko: "라자냐", en: "Lasagna" }, category: "western", emoji: "🥘", description: { ko: "겹겹이 쌓인 면과 소스의 풍미", en: "Rich layers of pasta and sauce" } },
    { name: { ko: "에그베네딕트", en: "Egg Benedict" }, category: "western", emoji: "🍳", description: { ko: "수란과 홀랜다이즈 소스의 만남", en: "Poached eggs with hollandaise sauce" } },
    { name: { ko: "피쉬앤칩스", en: "Fish and Chips" }, category: "western", emoji: "🐟", description: { ko: "바삭한 생선 튀김과 감자튀김", en: "Crispy fried fish and golden chips" } },
    { name: { ko: "감바스", en: "Gambas" }, category: "western", emoji: "🍤", description: { ko: "마늘 향 가득한 올리브유와 새우", en: "Shrimp in garlic-infused olive oil" } },

    // Japanese
    { name: { ko: "초밥", en: "Sushi" }, category: "japanese", emoji: "🍣", description: { ko: "신선한 생선과 깔끔한 밥의 조화", en: "Fresh fish with seasoned rice" } },
    { name: { ko: "돈가스", en: "Tonkatsu" }, category: "japanese", emoji: "🍱", description: { ko: "바삭한 튀김옷 속 촉촉한 고기", en: "Crispy fried pork cutlet" } },
    { name: { ko: "라멘", en: "Ramen" }, category: "japanese", emoji: "🍜", description: { ko: "깊은 국물 맛이 일품인 일본식 면 요리", en: "Japanese noodle soup with rich broth" } },
    { name: { ko: "규동", en: "Gyudon" }, category: "japanese", emoji: "🥣", description: { ko: "달콤 짭짤한 소고기 덮밥", en: "Sweet and savory beef rice bowl" } },
    { name: { ko: "오코노미야키", en: "Okonomiyaki" }, category: "japanese", emoji: "🥞", description: { ko: "취향대로 넣어 만드는 일본식 전", en: "Japanese savory pancake" } },
    { name: { ko: "소바", en: "Soba" }, category: "japanese", emoji: "🥢", description: { ko: "메밀의 향을 즐기는 깔끔한 면 요리", en: "Clean and fragrant buckwheat noodles" } },
    { name: { ko: "우동", en: "Udon" }, category: "japanese", emoji: "🍜", description: { ko: "통통한 면발과 따뜻한 국물", en: "Thick noodles in warm, comforting broth" } },
    { name: { ko: "카레라이스", en: "Japanese Curry" }, category: "japanese", emoji: "🍛", description: { ko: "진하고 부드러운 일본식 카레", en: "Thick and smooth Japanese-style curry" } },

    // Chinese
    { name: { ko: "짜장면", en: "Jajangmyeon" }, category: "chinese", emoji: "🍜", description: { ko: "달콤 짭짤한 소스의 국민 중식 메뉴", en: "Noodles in savory black bean sauce" } },
    { name: { ko: "짬뽕", en: "Jjamppong" }, category: "chinese", emoji: "🍜", description: { ko: "얼큰한 국물과 해산물의 만남", en: "Spicy seafood noodle soup" } },
    { name: { ko: "탕수육", en: "Tangsuyuk" }, category: "chinese", emoji: "🍖", description: { ko: "바삭한 튀김과 새콤달콤한 소스", en: "Crispy sweet and sour pork" } },
    { name: { ko: "마라탕", en: "Malatang" }, category: "chinese", emoji: "🌶️", description: { ko: "중독성 강한 매콤하고 얼얼한 맛", en: "Spicy and numbing Szechuan soup" } },
    { name: { ko: "꿔바로우", en: "Guo Bao Rou" }, category: "chinese", emoji: "🥓", description: { ko: "쫀득하고 바삭한 북경식 탕수육", en: "Chewy and crispy Beijing-style pork" } },
    { name: { ko: "양꼬치", en: "Lamb Skewers" }, category: "chinese", emoji: "🍢", description: { ko: "쯔란 향 가득한 고소한 양고기", en: "Flavorful grilled lamb with cumin" } },
    { name: { ko: "딤섬", en: "Dim Sum" }, category: "chinese", emoji: "🥟", description: { ko: "한 입에 즐기는 다채로운 맛", en: "Bite-sized delights in various styles" } },

    // Simple
    { name: { ko: "샐러드", en: "Salad" }, category: "simple", emoji: "🥗", description: { ko: "건강하고 깔끔한 저녁 식사", en: "Healthy and fresh dinner option" } },
    { name: { ko: "컵라면", en: "Cup Noodles" }, category: "simple", emoji: "🍜", description: { ko: "가장 빠르고 간편하게 해결하는 저녁", en: "Fastest and easiest dinner solution" } },
    { name: { ko: "포케", en: "Poke" }, category: "simple", emoji: "🥗", description: { ko: "신선한 재료를 한 그릇에 담은 건강식", en: "Healthy bowl of fresh ingredients" } },
    { name: { ko: "타코", en: "Taco" }, category: "simple", emoji: "🌮", description: { ko: "멕시코 풍미를 가볍게 즐기는 한 끼", en: "Light meal with Mexican flavors" } },
    { name: { ko: "요거트 볼", en: "Yogurt Bowl" }, category: "simple", emoji: "🥣", description: { ko: "과일과 견과류를 곁들인 가벼운 저녁", en: "Light dinner with fruit and nuts" } }
];

const uiStrings = {
    ko: {
        title: "오늘의 미식 운세",
        subtitle: "신비로운 별들이 당신의 저녁 식사를 점지해드립니다.",
        recommendBtn: "나의 미식 운세 확인하기",
        shareBtn: "내 행운 공유하기",
        luckyNumber: "오늘의 행운 번호",
        categories: {
            all: "전체",
            korean: "한식",
            western: "양식",
            japanese: "일식",
            chinese: "중식",
            simple: "간단식"
        },
        shareText: (menu, num) => `✨ 오늘의 미식 운세 ✨\n\n행운의 메뉴: "${menu}"\n행운 번호: ${num}\n\n당신의 행운을 확인해보세요! 🌙`,
        copied: "운세가 클립보드에 복사되었습니다! ✨",
        langBtn: "🌐 EN"
    },
    en: {
        title: "Cosmic Dinner Fortune",
        subtitle: "The mysterious stars will divine your dinner tonight.",
        recommendBtn: "Check My Dinner Fortune",
        shareBtn: "Share My Fortune",
        luckyNumber: "Today's Lucky Number",
        categories: {
            all: "All",
            korean: "Korean",
            western: "Western",
            japanese: "Japanese",
            chinese: "Chinese",
            simple: "Simple"
        },
        shareText: (menu, num) => `✨ Cosmic Dinner Fortune ✨\n\nLucky Menu: "${menu}"\nLucky Number: ${num}\n\nCheck your luck now! 🌙`,
        copied: "Fortune copied to clipboard! ✨",
        langBtn: "🌐 KO"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let currentCategory = 'all';

// Sound Effects Logic
const clickSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'); 
const popSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3'); 

function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(e => console.log("Sound play prevented"));
}

// Floating Background Elements
function createBgElements() {
    const bgContainer = document.getElementById('bg-elements');
    const icons = ['🍀', '💰', '✨', '💎', '🌈'];
    const count = 15;

    for (let i = 0; i < count; i++) {
        const span = document.createElement('span');
        span.className = 'floating-icon';
        span.textContent = icons[Math.floor(Math.random() * icons.length)];
        span.style.left = Math.random() * 100 + 'vw';
        span.style.animationDelay = Math.random() * 15 + 's';
        span.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        bgContainer.appendChild(span);
    }
}

// DOM Elements
const recommendBtn = document.getElementById('recommend-btn');
const shareBtn = document.getElementById('share-btn');
const resultCard = document.getElementById('result-card');
const menuEmoji = document.getElementById('menu-emoji');
const menuName = document.getElementById('menu-name');
const menuCategory = document.getElementById('menu-category');
const menuDescription = document.getElementById('menu-description');
const luckyDigitsContainer = document.getElementById('lucky-digits');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const luckyNumberLabel = document.querySelector('.lucky-number-section span');
const headerTitle = document.querySelector('header h1');
const headerSubtitle = document.querySelector('header p');

// Theme Logic
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'light' ? '☀️' : '🌙';
});

// Language Logic
function updateLanguageUI() {
    const strings = uiStrings[currentLang];
    headerTitle.textContent = strings.title;
    headerSubtitle.textContent = strings.subtitle;
    recommendBtn.textContent = strings.recommendBtn;
    shareBtn.textContent = strings.shareBtn;
    luckyNumberLabel.textContent = strings.luckyNumber;
    langToggle.textContent = strings.langBtn;
    
    filterBtns.forEach(btn => {
        const cat = btn.getAttribute('data-category');
        btn.textContent = strings.categories[cat];
    });

    if (!resultCard.classList.contains('hidden')) {
        // Update current result card if it's visible
        // We need to find the current menu object
        const currentMenuName = menuName.textContent;
        const menu = menus.find(m => m.name.ko === currentMenuName || m.name.en === currentMenuName);
        if (menu) {
            menuName.textContent = menu.name[currentLang];
            menuCategory.textContent = strings.categories[menu.category];
            menuDescription.textContent = menu.description[currentLang];
        }
    }
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    localStorage.setItem('lang', currentLang);
    updateLanguageUI();
});

// Functions
function generateLuckyNumber() {
    const num = Math.floor(Math.random() * 99) + 1;
    return num.toString().padStart(2, '0');
}

function displayMenu() {
    playSound(clickSound);
    resultCard.classList.add('hidden');
    shareBtn.classList.add('hidden');
    
    setTimeout(() => {
        const menu = getRandomMenu();
        const luckyNumStr = generateLuckyNumber();
        
        menuEmoji.textContent = menu.emoji;
        menuName.textContent = menu.name[currentLang];
        menuCategory.textContent = uiStrings[currentLang].categories[menu.category];
        menuDescription.textContent = menu.description[currentLang];
        
        // Staggered Digits
        luckyDigitsContainer.innerHTML = '';
        luckyNumStr.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.className = 'digit';
            span.textContent = char;
            span.style.animationDelay = (index * 0.2) + 's';
            luckyDigitsContainer.appendChild(span);
        });
        
        resultCard.classList.remove('hidden');
        shareBtn.classList.remove('hidden');
        
        setTimeout(() => playSound(popSound), 100);
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
}

function getRandomMenu() {
    const filteredMenus = currentCategory === 'all' 
        ? menus 
        : menus.filter(menu => menu.category === currentCategory);
    return filteredMenus[Math.floor(Math.random() * filteredMenus.length)];
}

async function shareResult() {
    const luckyNum = Array.from(luckyDigitsContainer.children).map(c => c.textContent).join('');
    const text = uiStrings[currentLang].shareText(menuName.textContent, luckyNum);
    
    if (navigator.share) {
        await navigator.share({ title: uiStrings[currentLang].title, text, url: window.location.href });
    } else {
        await navigator.clipboard.writeText(text + "\n" + window.location.href);
        alert(uiStrings[currentLang].copied);
    }
}

// Event Listeners
recommendBtn.addEventListener('click', displayMenu);
shareBtn.addEventListener('click', shareResult);
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
    });
});

// Initialize
updateLanguageUI();
createBgElements();
