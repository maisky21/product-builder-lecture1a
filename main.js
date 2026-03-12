const menus = [
    // Korean
    { 
        name: { ko: "김치찌개", en: "kimchi stew" }, 
        category: "korean", 
        description: { ko: "얼큰하고 시원한 한국인의 소울푸드", en: "Spicy and hearty Korean soul food" } 
    },
    { 
        name: { ko: "불고기", en: "bulgogi" }, 
        category: "korean", 
        description: { ko: "달콤 짭짤한 양념이 매력적인 소고기 요리", en: "Sweet and savory marinated beef dish" } 
    },
    { 
        name: { ko: "비빔밥", en: "bibimbap" }, 
        category: "korean", 
        description: { ko: "각종 나물과 고추장의 조화로운 맛", en: "Assorted vegetables with rice and spicy sauce" } 
    },
    { 
        name: { ko: "삼겹살", en: "samgyeopsal" }, 
        category: "korean", 
        description: { ko: "지글지글 구워 먹는 즐거움이 있는 돼지고기", en: "Grilled pork belly, a favorite Korean BBQ" } 
    },
    { 
        name: { ko: "떡볶이", en: "tteokbokki" }, 
        category: "korean", 
        description: { ko: "매콤달콤한 소스와 쫄깃한 떡의 만남", en: "Spicy and sweet rice cakes" } 
    },
    { 
        name: { ko: "제육볶음", en: "spicy pork" }, 
        category: "korean", 
        description: { ko: "매콤한 양념으로 볶아낸 밥도둑 돼지고기", en: "Spicy stir-fried pork, a true rice thief" } 
    },
    { 
        name: { ko: "냉면", en: "naengmyeon" }, 
        category: "korean", 
        description: { ko: "가슴속까지 시원해지는 메밀면 요리", en: "Refreshing cold buckwheat noodles" } 
    },

    // Western
    { 
        name: { ko: "까르보나라", en: "carbonara" }, 
        category: "western", 
        description: { ko: "고소한 크림과 베이컨이 어우러진 파스타", en: "Creamy pasta with savory bacon" } 
    },
    { 
        name: { ko: "스테이크", en: "steak" }, 
        category: "western", 
        description: { ko: "육즙 가득한 고품격 저녁 식사", en: "Juicy and premium beef dinner" } 
    },
    { 
        name: { ko: "햄버거", en: "hamburger" }, 
        category: "western", 
        description: { ko: "패티와 신선한 채소의 든든한 한 끼", en: "Hearty patty with fresh vegetables" } 
    },
    { 
        name: { ko: "피자", en: "pizza" }, 
        category: "western", 
        description: { ko: "다양한 토핑과 치즈의 완벽한 조화", en: "Perfect harmony of toppings and cheese" } 
    },
    { 
        name: { ko: "리조또", en: "risotto" }, 
        category: "western", 
        description: { ko: "부드럽고 고소한 이탈리아식 쌀 요리", en: "Creamy and savory Italian rice dish" } 
    },
    { 
        name: { ko: "에그베네딕트", en: "egg benedict" }, 
        category: "western", 
        description: { ko: "수란과 홀랜다이즈 소스의 만남", en: "Poached eggs with hollandaise sauce" } 
    },
    { 
        name: { ko: "감바스", en: "gambas" }, 
        category: "western", 
        description: { ko: "마늘 향 가득한 올리브유와 새우", en: "Shrimp in garlic-infused olive oil" } 
    },

    // Japanese
    { 
        name: { ko: "초밥", en: "sushi" }, 
        category: "japanese", 
        description: { ko: "신선한 생선과 깔끔한 밥의 조화", en: "Fresh fish with seasoned rice" } 
    },
    { 
        name: { ko: "돈가스", en: "tonkatsu" }, 
        category: "japanese", 
        description: { ko: "바삭한 튀김옷 속 촉촉한 고기", en: "Crispy fried pork cutlet" } 
    },
    { 
        name: { ko: "라멘", en: "ramen" }, 
        category: "japanese", 
        description: { ko: "깊은 국물 맛이 일품인 일본식 면 요리", en: "Japanese noodle soup with rich broth" } 
    },
    { 
        name: { ko: "우동", en: "udon" }, 
        category: "japanese", 
        description: { ko: "통통한 면발과 따뜻한 국물", en: "Thick noodles in warm, comforting broth" } 
    },
    { 
        name: { ko: "카레라이스", en: "japanese curry" }, 
        category: "japanese", 
        description: { ko: "진하고 부드러운 일본식 카레", en: "Thick and smooth Japanese-style curry" } 
    },

    // Chinese
    { 
        name: { ko: "짜장면", en: "jajangmyeon" }, 
        category: "chinese", 
        description: { ko: "달콤 짭짤한 소스의 국민 중식 메뉴", en: "Noodles in savory black bean sauce" } 
    },
    { 
        name: { ko: "탕수육", en: "tangsuyuk" }, 
        category: "chinese", 
        description: { ko: "바삭한 튀김과 새콤달콤한 소스", en: "Crispy sweet and sour pork" } 
    },
    { 
        name: { ko: "마라탕", en: "malatang" }, 
        category: "chinese", 
        description: { ko: "중독성 강한 매콤하고 얼얼한 맛", en: "Spicy and numbing Szechuan soup" } 
    },
    { 
        name: { ko: "딤섬", en: "dim sum" }, 
        category: "chinese", 
        description: { ko: "한 입에 즐기는 다채로운 맛", en: "Bite-sized delights in various styles" } 
    },

    // Simple
    { 
        name: { ko: "샐러드", en: "salad" }, 
        category: "simple", 
        description: { ko: "건강하고 깔끔한 저녁 식사", en: "Healthy and fresh dinner option" } 
    },
    { 
        name: { ko: "컵라면", en: "cup noodles" }, 
        category: "simple", 
        description: { ko: "가장 빠르고 간편하게 해결하는 저녁", en: "Fastest and easiest dinner solution" } 
    },
    { 
        name: { ko: "타코", en: "taco" }, 
        category: "simple", 
        description: { ko: "멕시코 풍미를 가볍게 즐기는 한 끼", en: "Light meal with Mexican flavors" } 
    },
    { 
        name: { ko: "요거트 볼", en: "yogurt bowl" }, 
        category: "simple", 
        description: { ko: "과일과 견과류를 곁들인 가벼운 저녁", en: "Light dinner with fruit and nuts" } 
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
const dinnerSounds = [
    new Audio('https://assets.mixkit.co/active_storage/sfx/2017/2017-preview.mp3'),
    new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'),
    new Audio('https://assets.mixkit.co/active_storage/sfx/2830/2830-preview.mp3'),
    new Audio('https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3')
];
let soundIndex = 0;

function playSound(sound, volume = 0.3) {
    sound.currentTime = 0;
    sound.volume = volume;
    sound.play().catch(e => console.log("Sound play prevented"));
}

// DOM Elements
const recommendBtn = document.getElementById('recommend-btn');
const shareBtn = document.getElementById('share-btn');
const resultCard = document.getElementById('result-card');
const menuImage = document.getElementById('menu-image');
const menuName = document.getElementById('menu-name');
const menuCategory = document.getElementById('menu-category');
const menuDescription = document.getElementById('menu-description');
const luckyDigitsContainer = document.getElementById('lucky-digits');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
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
    langToggle.textContent = strings.langBtn;
    
    filterBtns.forEach(btn => {
        const cat = btn.getAttribute('data-category');
        btn.textContent = strings.categories[cat];
    });

    if (!resultCard.classList.contains('hidden')) {
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

function generateLuckyNumber() {
    const num = Math.floor(Math.random() * 99) + 1;
    return num.toString().padStart(2, '0');
}

// Footer Modal Logic
const footerModal = document.getElementById('footer-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

const modalData = {
    info: {
        ko: { title: "서비스 정보", body: "우주의 기운을 담은 알고리즘이 당신의 완벽한 식사를 골라드립니다. 매일 새로운 미식을 발견하는 즐거움을 누려보세요." },
        en: { title: "About Us", body: "Our cosmic algorithm divines the perfect meal for you. Enjoy the daily discovery of new gourmet experiences." }
    },
    contact: {
        ko: { title: "문의하기", body: "서비스 이용 중 불편사항이나 제안은 이메일(support@vibecoding.com)로 보내주시기 바랍니다." },
        en: { title: "Contact", body: "For any inquiries or suggestions, please contact us at support@vibecoding.com" }
    },
    privacy: {
        ko: { title: "개인정보처리방침", body: "본 서비스는 사용자의 개인정보를 수집하거나 저장하지 않습니다. 모든 데이터는 브라우저 로컬 환경에서만 처리됩니다." },
        en: { title: "Privacy Policy", body: "This service does not collect or store any personal information. All data is processed locally within your browser." }
    }
};

function showModal(type) {
    const data = modalData[type][currentLang];
    modalTitle.textContent = data.title;
    modalBody.textContent = data.body;
    footerModal.classList.remove('hidden');
}

document.getElementById('info-link').addEventListener('click', (e) => { e.preventDefault(); showModal('info'); });
document.getElementById('contact-link').addEventListener('click', (e) => { e.preventDefault(); showModal('contact'); });
document.getElementById('privacy-link').addEventListener('click', (e) => { e.preventDefault(); showModal('privacy'); });
modalClose.addEventListener('click', () => footerModal.classList.add('hidden'));
footerModal.addEventListener('click', (e) => { if(e.target === footerModal) footerModal.classList.add('hidden'); });

// Core Menu Logic
async function displayMenu() {
    playSound(clickSound);
    
    // 1. 초기화 및 로딩 상태 (Skeleton) 표시
    resultCard.classList.add('hidden');
    shareBtn.classList.add('hidden');
    document.querySelector('.app-container').classList.remove('result-shown');
    
    const foodImg = document.getElementById('menu-image'); 
    foodImg.classList.remove('loaded');
    foodImg.src = ""; // 이전 이미지 즉시 제거하여 스켈레톤 노출 보장
    
    const menu = getRandomMenu();
    const luckyNumStr = generateLuckyNumber();
    
    // 2. 추천된 메뉴의 영문 이름(menuNameEng) 추출
    const menuNameEng = menu.name.en;
    
    // 3. 동적 URL 생성 및 강제 업데이트 (Cache-Busting)
    const newImageUrl = `https://source.unsplash.com/featured/800x800/?food,${encodeURIComponent(menuNameEng)}&t=${new Date().getTime()}`;
    const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"; 
    
    // 4. DOM 즉시 반영 (이미지 태그 src 할당)
    foodImg.src = newImageUrl;
    foodImg.alt = menu.name[currentLang];
    
    // 5. 로딩 연출: 이미지 로드 완료 시 페이드인 및 결과 표시
    foodImg.onload = () => {
        foodImg.classList.add('loaded');
        resultCard.classList.remove('hidden');
        shareBtn.classList.remove('hidden');
        document.querySelector('.app-container').classList.add('result-shown');
    };
    
    foodImg.onerror = () => {
        console.log("Image load failed, using fallback.");
        foodImg.src = FALLBACK_IMAGE;
        foodImg.onload = () => {
            foodImg.classList.add('loaded');
            resultCard.classList.remove('hidden');
            shareBtn.classList.remove('hidden');
            document.querySelector('.app-container').classList.add('result-shown');
        };
    };
    
    // 텍스트 정보 및 럭키 넘버 업데이트
    menuName.textContent = menu.name[currentLang];
    menuCategory.textContent = uiStrings[currentLang].categories[menu.category];
    menuDescription.textContent = menu.description[currentLang];
    
    luckyDigitsContainer.innerHTML = '';
    luckyNumStr.split('').forEach((char) => {
        const span = document.createElement('span');
        span.className = 'digit';
        span.textContent = char;
        luckyDigitsContainer.appendChild(span);
    });
    
    const currentDinnerSound = dinnerSounds[soundIndex];
    setTimeout(() => playSound(currentDinnerSound), 100);
    soundIndex = (soundIndex + 1) % dinnerSounds.length;
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

recommendBtn.addEventListener('click', displayMenu);
shareBtn.addEventListener('click', shareResult);
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
    });
});

updateLanguageUI();
