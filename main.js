const menus = [
    // Korean
    { 
        name: { ko: "김치찌개", en: "kimchi stew" }, 
        category: "korean", 
        descriptions: [
            "얼큰하고 칼칼한 국물 맛이 일품인 한국인의 소울푸드입니다.",
            "잘 익은 김치와 돼지고기의 환상적인 조화로 밥 한 그릇 뚝딱!",
            "피곤한 오늘 하루, 뜨끈한 국물로 속을 든든하게 채워보세요."
        ],
        aiDescription: "A steaming bowl of Korean Kimchi stew with tofu and pork, vibrant red broth, traditional earthenware bowl, photorealistic food photography, 8k"
    },
    { 
        name: { ko: "불고기", en: "bulgogi" }, 
        category: "korean", 
        descriptions: [
            "달콤 짭짤한 양념이 고기 속까지 잘 배어 있는 소고기 요리입니다.",
            "남녀노소 누구나 좋아하는 부드러운 식감과 풍부한 육즙을 즐겨보세요.",
            "신선한 쌈 채소와 함께 곁들이면 더욱 건강하고 맛있는 한 끼가 됩니다."
        ],
        aiDescription: "Thinly sliced marinated Korean beef bulgogi, sizzling on a plate, garnished with green onions and sesame seeds, photorealistic food photography, 8k"
    },
    { 
        name: { ko: "비빔밥", en: "bibimbap" }, 
        category: "korean", 
        descriptions: [
            "각양각색의 나물과 고추장이 어우러진 한국의 대표 건강식입니다.",
            "보는 즐거움과 섞어 먹는 재미, 그리고 조화로운 맛의 향연!",
            "영양 밸런스가 완벽한 한 끼로 몸과 마음을 리프레시해 보세요."
        ],
        aiDescription: "A delicious bowl of Korean bibimbap, colorful vegetables, fried egg on top, spicy sauce, photorealistic food photography, 8k"
    },
    { 
        name: { ko: "삼겹살", en: "samgyeopsal" }, 
        category: "korean", 
        descriptions: [
            "지글지글 불판 위에서 구워 먹는 즐거움이 있는 돼지고기 요리입니다.",
            "고소한 육향과 쫄깃한 식감으로 오늘 저녁 스트레스를 날려버리세요.",
            "마늘, 쌈장과 함께 한 쌈 가득 입안에 퍼지는 행복을 느껴보세요."
        ],
        aiDescription: "Sizzling Korean pork belly samgyeopsal on a grill, crispy and golden brown, with side dishes like garlic and lettuce, photorealistic food photography, 8k"
    },
    { 
        name: { ko: "떡볶이", en: "tteokbokki" }, 
        category: "korean", 
        descriptions: [
            "매콤달콤한 소스와 쫄깃한 떡의 만남이 매력적인 국민 간식입니다.",
            "자꾸만 손이 가는 중독성 강한 맛으로 기분 전환에 최고!",
            "튀김이나 순대를 곁들여 풍성한 분식 파티를 즐겨보세요."
        ],
        aiDescription: "Spicy Korean rice cakes tteokbokki in a thick red sauce, with fish cakes and a boiled egg, photorealistic food photography, 8k"
    },
    { 
        name: { ko: "제육볶음", en: "spicy pork" }, 
        category: "korean", 
        descriptions: [
            "매콤한 양념으로 볶아낸 감칠맛 폭발 돼지고기 요리입니다.",
            "흰 쌀밥 위에 올려 슥슥 비벼 먹으면 그 어떤 진미도 부럽지 않죠.",
            "오늘 저녁, 화끈한 매운맛으로 활력을 되찾아보세요."
        ],
        aiDescription: "Korean spicy stir-fried pork Jeyuk-bokkeum, vibrant red color, garnished with sesame seeds and vegetables, photorealistic food photography, 8k"
    },

    // Western
    { 
        name: { ko: "까르보나라", en: "carbonara" }, 
        category: "western", 
        descriptions: [
            "고소하고 부드러운 크림 소스가 일품인 이탈리아식 파스타입니다.",
            "베이컨의 짭조름함과 달걀 노른자의 깊은 풍미를 동시에 느껴보세요.",
            "부드러운 면발이 입안을 감싸는 로맨틱한 저녁 식사를 제안합니다."
        ],
        aiDescription: "Creamy pasta carbonara with crispy bacon, parmesan cheese, and black pepper, elegant presentation, photorealistic food photography, 8k"
    },
    { 
        name: { ko: "스테이크", en: "steak" }, 
        category: "western", 
        descriptions: [
            "육즙이 가득 가둬진 고품격 소고기 구이 요리입니다.",
            "특별한 날, 혹은 자신을 격려하고 싶은 날 최고의 선택!",
            "레드 와인 한 잔과 함께 영화 속 주인공 같은 분위기를 만끽해 보세요."
        ],
        aiDescription: "Juicy grilled beef steak with grill marks, served with roasted vegetables and a sprig of rosemary, gourmet plating, photorealistic food photography, 8k"
    },
    { 
        name: { ko: "햄버거", en: "hamburger" }, 
        category: "western", 
        descriptions: [
            "두툼한 패티와 신선한 야채가 조화를 이루는 든든한 한 끼입니다.",
            "한 입 베어 물면 퍼지는 풍부한 맛의 밸런스가 일품이죠.",
            "빠르고 간편하지만 확실한 포만감을 원하는 당신에게 추천합니다."
        ],
        aiDescription: "A juicy gourmet hamburger with melted cheese, lettuce, tomato, and onion in a brioche bun, photorealistic food photography, 8k"
    },
    { 
        name: { ko: "피자", en: "pizza" }, 
        category: "western", 
        descriptions: [
            "쭉 늘어나는 치즈와 다양한 토핑이 어우러진 환상적인 요리입니다.",
            "친구들과 함께 나누어 먹으며 즐거운 대화를 꽃피워 보세요.",
            "도우의 바삭함과 치즈의 고소함이 조화를 이루는 맛의 축제!"
        ],
        aiDescription: "Delicious pizza with melting mozzarella cheese, pepperoni, and fresh basil, coming out of a wood-fired oven, photorealistic food photography, 8k"
    },

    // Japanese
    { 
        name: { ko: "초밥", en: "sushi" }, 
        category: "japanese", 
        descriptions: [
            "신선한 생선과 깔끔한 초대리의 조화가 돋보이는 요리입니다.",
            "입안에서 사르르 녹는 바다의 신선함을 그대로 느껴보세요.",
            "깔끔하고 가벼운 하지만 품격 있는 식사를 원하시는 분들께 추천합니다."
        ],
        aiDescription: "An assortment of fresh sushi and sashimi on a wooden platter, including salmon, tuna, and shrimp, photorealistic food photography, 8k"
    },
    { 
        name: { ko: "라멘", en: "ramen" }, 
        category: "japanese", 
        descriptions: [
            "진한 육수와 쫄깃한 면발이 매력적인 일본식 면 요리입니다.",
            "깊은 국물 한 모금에 오늘 하루의 피로가 싹 가시는 기분!",
            "차슈와 반숙 달걀을 곁들여 풍성한 미식 여행을 떠나보세요."
        ],
        aiDescription: "Authentic Japanese ramen with rich tonkotsu broth, pork chashu, soft-boiled egg, and green onions, steaming hot bowl, photorealistic food photography, 8k"
    },

    // Special
    {
        name: { ko: "나노바나나", en: "Nanobanana" },
        category: "simple",
        descriptions: [
            "미래 기술이 집약된 초소형 나노 바나나입니다.",
            "작지만 한 입 베어 무는 순간 느껴지는 폭발적인 에너지!",
            "첨단 기술의 맛을 직접 경험해 보세요."
        ],
        aiDescription: "A futuristic, glowing miniature nanotechnological banana, detailed circuitry texture, high-tech lab setting, photorealistic, 8k"
    }
];

const uiStrings = {
    ko: {
        title: "오늘의 저녁 메뉴 추천",
        recommendBtn: "나의 미식 운세 확인하기",
        shareBtn: "내 행운 공유하기",
        langBtn: "🌐 EN"
    },
    en: {
        title: "Cosmic Dinner Fortune",
        recommendBtn: "Check My Dinner Fortune",
        shareBtn: "Share My Fortune",
        langBtn: "🌐 KO"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let currentCategory = 'all';

// Sound Effects
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
    recommendBtn.textContent = strings.recommendBtn;
    if(shareBtn) shareBtn.textContent = strings.shareBtn;
    langToggle.textContent = strings.langBtn;
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    localStorage.setItem('lang', currentLang);
    updateLanguageUI();
});

function generateLuckyNumber() {
    return Math.floor(Math.random() * 99 + 1).toString().padStart(2, '0');
}

// AI 이미지 업데이트 함수 (Pollinations.ai 사용)
function updateAIImage(aiPrompt) {
    const foodImg = document.getElementById('menu-image'); 
    if (!foodImg) return console.error('이미지 태그(#menu-image)를 찾을 수 없음!');

    const seed = Math.random();
    const newUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(aiPrompt)}?nologo=true&seed=${new Date().getTime()}`;

    foodImg.classList.remove('loaded'); // 스켈레톤 로딩 연출 시작
    foodImg.src = newUrl;
    
    console.log(`새로운 AI 이미지 생성 요청: ${newUrl}`);

    const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"; 
    
    foodImg.onerror = () => {
        console.log("AI 이미지 로드 실패, 예비 이미지로 대체합니다.");
        foodImg.src = FALLBACK_IMAGE;
    };
}

// Core Logic: Display Recommended Menu
async function displayMenu() {
    playSound(clickSound);
    
    // 초기화 및 결과 카드 즉시 표시 (로딩 상태 보여주기 위해)
    resultCard.classList.remove('hidden');
    document.querySelector('.app-container').classList.add('result-shown');
    
    const menu = getRandomMenu();
    const luckyNumStr = generateLuckyNumber();
    
    // 콘텐츠 자동 생성
    menuName.textContent = menu.name[currentLang];
    menuCategory.textContent = menu.category.toUpperCase();
    
    menuDescription.innerHTML = "";
    menu.descriptions.forEach(line => {
        const p = document.createElement('p');
        p.textContent = line;
        p.style.marginBottom = "4px";
        menuDescription.appendChild(p);
    });
    
    // 럭키 넘버 업데이트
    luckyDigitsContainer.innerHTML = '';
    luckyNumStr.split('').forEach((char) => {
        const span = document.createElement('span');
        span.className = 'digit';
        span.textContent = char;
        luckyDigitsContainer.appendChild(span);
    });

    // AI 이미지 업데이트 호출
    updateAIImage(menu.aiDescription);
    
    // 이미지 로드 완료 시 클래스 추가 (opacity 조절)
    menuImage.onload = () => {
        menuImage.classList.add('loaded');
    };
    
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
    const text = `✨ 오늘의 미식 운세 ✨\n\n추천 메뉴: "${menuName.textContent}"\n행운 번호: ${luckyNum}\n\n오늘의 운세를 확인해보세요! 🌙`;
    
    if (navigator.share) {
        await navigator.share({ title: '오늘의 미식 운세', text, url: window.location.href });
    } else {
        await navigator.clipboard.writeText(text + "\n" + window.location.href);
        alert("운세가 클립보드에 복사되었습니다! ✨");
    }
}

recommendBtn.addEventListener('click', displayMenu);
if(shareBtn) shareBtn.addEventListener('click', shareResult);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
    });
});

updateLanguageUI();
// AI 이미지 업데이트 함수 (파일 맨 아래에 추가하세요)
function updateAIImage(aiPrompt) {
    const foodImg = document.getElementById('menu-image'); 
    if (!foodImg) return;

    const timestamp = new Date().getTime();
    // 프롬프트 자체에 타임스탬프를 넣어 AI가 매번 다른 그림을 그리게 강제합니다.
    const newUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(aiPrompt + " , " + timestamp)}?nologo=true&seed=${timestamp}`;

    foodImg.classList.remove('loaded');
    foodImg.src = newUrl;
    
    console.log(`[DEBUG] 새로운 이미지 요청: ${newUrl}`);

    foodImg.onerror = () => {
        foodImg.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";
    };
}