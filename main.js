const menus = [
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
    ko: { title: "오늘의 저녁 메뉴 추천", recommendBtn: "나의 미식 운세 확인하기", shareBtn: "내 행운 공유하기", langBtn: "🌐 EN" },
    en: { title: "Cosmic Dinner Fortune", recommendBtn: "Check My Dinner Fortune", shareBtn: "Share My Fortune", langBtn: "🌐 KO" }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let currentCategory = 'all';
let lastMenu = null; // 중복 방지용

const recommendBtn = document.getElementById('recommend-btn');
const resultCard = document.getElementById('result-card');
const menuImage = document.getElementById('menu-image');
const imageLoading = document.getElementById('image-loading');
const menuName = document.getElementById('menu-name');
const menuCategory = document.getElementById('menu-category');
const menuDescription = document.getElementById('menu-description');
const luckyDigitsContainer = document.getElementById('lucky-digits');
const filterBtns = document.querySelectorAll('.filter-btn');
const langToggle = document.getElementById('lang-toggle');

function updateAIImage(aiPrompt) {
    // 엑박 방지를 위한 기본 프롬프트 설정
    const prompt = aiPrompt || "delicious food photography, 8k, gourmet";
    const seed = Math.floor(Math.random() * 100000);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1080&height=1080&nologo=true&seed=${seed}`;
    
    console.log("Generated Pollinations URL:", imageUrl);
    
    // 로딩 상태 표시
    imageLoading.classList.remove('hidden');
    menuImage.classList.remove('loaded');
    
    // 이미지 소스 할당
    menuImage.src = imageUrl;

    // 완료 시 처리
    menuImage.onload = () => {
        imageLoading.classList.add('hidden');
        menuImage.classList.add('loaded');
    };

    menuImage.onerror = () => {
        console.error("Image load failed");
        imageLoading.innerHTML = "<p>이미지 생성에 실패했습니다. 다시 시도해 주세요.</p>";
    };
}

function getRandomMenu() {
    const filtered = currentCategory === 'all' 
        ? menus 
        : menus.filter(m => m.category === currentCategory);
    
    if (filtered.length === 0) return menus[0]; // 안전 장치

    // 필터링된 메뉴가 2개 이상일 경우 직전 메뉴와 겹치지 않게 선택
    let selected;
    if (filtered.length > 1) {
        do {
            selected = filtered[Math.floor(Math.random() * filtered.length)];
        } while (selected === lastMenu);
    } else {
        selected = filtered[0];
    }
    
    lastMenu = selected;
    return selected;
}

function displayMenu() {
    resultCard.classList.remove('hidden');
    
    const menu = getRandomMenu();
    
    menuName.textContent = menu.name[currentLang];
    menuCategory.textContent = menu.category.toUpperCase();
    menuDescription.innerHTML = menu.descriptions.map(d => `<p style="margin-bottom:4px;">${d}</p>`).join('');
    
    const num = Math.floor(Math.random() * 99 + 1).toString().padStart(2, '0');
    luckyDigitsContainer.innerHTML = num.split('').map(n => `<span class="digit">${n}</span>`).join('');

    updateAIImage(menu.aiDescription);
}

recommendBtn.addEventListener('click', displayMenu);
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    localStorage.setItem('lang', currentLang);
    recommendBtn.textContent = uiStrings[currentLang].recommendBtn;
    langToggle.textContent = uiStrings[currentLang].langBtn;
    
    // 현재 결과가 있을 경우 언어만 즉시 업데이트
    if (!resultCard.classList.contains('hidden') && lastMenu) {
        menuName.textContent = lastMenu.name[currentLang];
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
    });
});