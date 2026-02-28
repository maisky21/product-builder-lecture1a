const menus = [
    { 
        name: { ko: "김치찌개", en: "Kimchi Jjigae" }, 
        category: "korean", 
        emoji: "🥘", 
        description: { ko: "얼큰하고 시원한 한국인의 소울푸드", en: "Spicy and hearty Korean soul food" } 
    },
    { 
        name: { ko: "불고기", en: "Bulgogi" }, 
        category: "korean", 
        emoji: "🍱", 
        description: { ko: "달콤 짭짤한 양념이 매력적인 소고기 요리", en: "Sweet and savory marinated beef dish" } 
    },
    { 
        name: { ko: "비빔밥", en: "Bibimbap" }, 
        category: "korean", 
        emoji: "🥗", 
        description: { ko: "각종 나물과 고추장의 조화로운 맛", en: "Assorted vegetables with rice and spicy sauce" } 
    },
    { 
        name: { ko: "삼겹살", en: "Samgyeopsal" }, 
        category: "korean", 
        emoji: "🥓", 
        description: { ko: "지글지글 구워 먹는 즐거움이 있는 돼지고기", en: "Grilled pork belly, a favorite Korean BBQ" } 
    },
    { 
        name: { ko: "떡볶이", en: "Tteokbokki" }, 
        category: "korean", 
        emoji: "🍡", 
        description: { ko: "매콤달콤한 소스와 쫄깃한 떡의 만남", en: "Spicy and sweet rice cakes" } 
    },
    { 
        name: { ko: "까르보나라", en: "Carbonara" }, 
        category: "western", 
        emoji: "🍝", 
        description: { ko: "고소한 크림과 베이컨이 어우러진 파스타", en: "Creamy pasta with savory bacon" } 
    },
    { 
        name: { ko: "스테이크", en: "Steak" }, 
        category: "western", 
        emoji: "🥩", 
        description: { ko: "육즙 가득한 고품격 저녁 식사", en: "Juicy and premium beef dinner" } 
    },
    { 
        name: { ko: "햄버거", en: "Hamburger" }, 
        category: "western", 
        emoji: "🍔", 
        description: { ko: "패티와 신선한 채소의 든든한 한 끼", en: "Hearty patty with fresh vegetables" } 
    },
    { 
        name: { ko: "피자", en: "Pizza" }, 
        category: "western", 
        emoji: "🍕", 
        description: { ko: "다양한 토핑과 치즈의 완벽한 조화", en: "Perfect harmony of toppings and cheese" } 
    },
    { 
        name: { ko: "초밥", en: "Sushi" }, 
        category: "japanese", 
        emoji: "🍣", 
        description: { ko: "신선한 생선과 깔끔한 밥의 조화", en: "Fresh fish with seasoned rice" } 
    },
    { 
        name: { ko: "돈가스", en: "Tonkatsu" }, 
        category: "japanese", 
        emoji: "🍱", 
        description: { ko: "바삭한 튀김옷 속 촉촉한 고기", en: "Crispy fried pork cutlet" } 
    },
    { 
        name: { ko: "라멘", en: "Ramen" }, 
        category: "japanese", 
        emoji: "🍜", 
        description: { ko: "깊은 국물 맛이 일품인 일본식 면 요리", en: "Japanese noodle soup with rich broth" } 
    },
    { 
        name: { ko: "짜장면", en: "Jajangmyeon" }, 
        category: "chinese", 
        emoji: "🍜", 
        description: { ko: "달콤 짭짤한 소스의 국민 중식 메뉴", en: "Noodles in savory black bean sauce" } 
    },
    { 
        name: { ko: "짬뽕", en: "Jjamppong" }, 
        category: "chinese", 
        emoji: "🍜", 
        description: { ko: "얼큰한 국물과 해산물의 만남", en: "Spicy seafood noodle soup" } 
    },
    { 
        name: { ko: "탕수육", en: "Tangsuyuk" }, 
        category: "chinese", 
        emoji: "🍖", 
        description: { ko: "바삭한 튀김과 새콤달콤한 소스", en: "Crispy sweet and sour pork" } 
    },
    { 
        name: { ko: "샌드위치", en: "Sandwich" }, 
        category: "simple", 
        emoji: "🥪", 
        description: { ko: "가볍고 신선하게 즐기는 한 끼", en: "Light and fresh quick meal" } 
    },
    { 
        name: { ko: "샐러드", en: "Salad" }, 
        category: "simple", 
        emoji: "🥗", 
        description: { ko: "건강하고 깔끔한 저녁 식사", en: "Healthy and fresh dinner option" } 
    },
    { 
        name: { ko: "컵라면", en: "Cup Noodles" }, 
        category: "simple", 
        emoji: "🍜", 
        description: { ko: "가장 빠르고 간편하게 해결하는 저녁", en: "Fastest and easiest dinner solution" } 
    }
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
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
