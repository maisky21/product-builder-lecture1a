const allMenus = [
    // Korean (6 items)
    { id: 1, name: "김치찌개", category: "korean", engName: "Kimchi Stew", description: "얼큰하고 칼칼한 국물 맛이 일품인 한국인의 소울푸드" },
    { id: 2, name: "불고기", category: "korean", engName: "Bulgogi", description: "달콤 짭짤한 양념과 부드러운 소고기의 환상적인 조화" },
    { id: 3, name: "비빔밥", category: "korean", engName: "Bibimbap", description: "각양각색의 나물과 고추장이 어우러진 건강한 한 끼" },
    { id: 4, name: "삼겹살", category: "korean", engName: "Samgyeopsal", description: "지글지글 구운 고소한 육향이 가득한 돼지고기 구이" },
    { id: 5, name: "떡볶이", category: "korean", engName: "Tteokbokki", description: "매콤달콤한 소스와 쫄깃한 떡의 중독적인 만남" },
    { id: 6, name: "제육볶음", category: "korean", engName: "Spicy Stir-fried Pork", description: "화끈한 불맛과 매콤한 양념이 돋보이는 밥도둑" },

    // Western (6 items)
    { id: 7, name: "스테이크", category: "western", engName: "Beef Steak", description: "육즙이 가득한 고품격 소고기 구이 요리" },
    { id: 8, name: "까르보나라", category: "western", engName: "Pasta Carbonara", description: "고소한 크림과 베이컨의 풍미가 가득한 파스타" },
    { id: 9, name: "햄버거", category: "western", engName: "Gourmet Hamburger", description: "두툼한 패티와 신선한 야채가 조화를 이루는 한 끼" },
    { id: 10, name: "피자", category: "western", engName: "Pepperoni Pizza", description: "쭉 늘어나는 치즈와 다양한 토핑의 즐거움" },
    { id: 11, name: "샌드위치", category: "western", engName: "Club Sandwich", description: "신선한 재료를 듬뿍 담은 간편하고 든든한 식사" },
    { id: 12, name: "샐러드", category: "western", engName: "Chicken Caesar Salad", description: "아삭한 야채와 담백한 토핑의 가벼운 건강식" },

    // Japanese (6 items)
    { id: 13, name: "초밥", category: "japanese", engName: "Assorted Sushi", description: "신선한 생선과 초대리의 조화가 돋보이는 미식" },
    { id: 14, name: "라멘", category: "japanese", engName: "Tonkotsu Ramen", description: "진한 국물과 쫄깃한 면발이 매력적인 일본식 면 요리" },
    { id: 15, name: "돈카츠", category: "japanese", engName: "Tonkatsu", description: "겉은 바삭하고 속은 촉촉한 일식 돼지고기 튀김" },
    { id: 16, name: "우동", category: "japanese", engName: "Tempura Udon", description: "탱글한 면발과 깊은 육수가 일품인 따뜻한 요리" },
    { id: 17, name: "소바", category: "japanese", engName: "Zaru Soba", description: "시원한 쯔유에 찍어 먹는 깔끔한 메밀 국수" },
    { id: 18, name: "규동", category: "japanese", engName: "Gyudon", description: "부드러운 소고기와 양파를 올린 든든한 덮밥" },

    // Chinese (6 items)
    { id: 19, name: "짜장면", category: "chinese", engName: "Jajangmyeon", description: "달콤 짭짤한 춘장 소스와 쫄깃한 면의 만남" },
    { id: 20, name: "짬뽕", category: "chinese", engName: "Jjamppong", description: "각종 해산물이 들어간 얼큰하고 시원한 국물 요리" },
    { id: 21, name: "탕수육", category: "chinese", engName: "Sweet and Sour Pork", description: "바삭하게 튀긴 고기에 새콤달콤한 소스를 곁들인 별미" },
    { id: 22, name: "마라탕", category: "chinese", engName: "Malatang", description: "얼얼한 매운맛과 풍부한 재료가 매력적인 중독성 갑 요리" },
    { id: 23, name: "꿔바로우", category: "chinese", engName: "Guobaorou", description: "쫀득한 찹쌀 튀김옷과 새콤한 소스의 환상 조화" },
    { id: 24, name: "볶음밥", category: "chinese", engName: "Chinese Fried Rice", description: "고소한 계란과 불향이 어우러진 깔끔한 한 끼" },

    // Simple (6 items)
    { id: 25, name: "나노바나나", category: "simple", engName: "Nano Banana", description: "미래 기술로 완성된 작지만 폭발적인 에너지를 가진 바나나" },
    { id: 26, name: "시리얼", category: "simple", engName: "Bowl of Cereal", description: "우유와 함께 즐기는 가장 빠르고 간편한 아침 식사" },
    { id: 27, name: "토스트", category: "simple", engName: "Butter Toast", description: "버터 향 가득 노릇하게 구워낸 바삭한 빵" },
    { id: 28, name: "삼각김밥", category: "simple", engName: "Onigiri", description: "언제 어디서나 간편하게 즐기는 한국의 국민 간편식" },
    { id: 29, name: "컵라면", category: "simple", engName: "Instant Cup Noodles", description: "단 3분 만에 완성되는 화끈하고 든든한 한 끼" },
    { id: 30, name: "요거트", category: "simple", engName: "Greek Yogurt Bowl", description: "과일과 견과류를 곁들인 상큼하고 가벼운 건강 디저트" }
];

let currentCategory = 'all';
const recommendBtn = document.getElementById('recommend-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const resultCard = document.getElementById('result-card');
const menuImage = document.getElementById('menu-image');
const loadingOverlay = document.getElementById('loading-overlay');
const resName = document.getElementById('res-name');
const resCategory = document.getElementById('res-category');
const resDescription = document.getElementById('res-description');

// 필터 버튼 클릭 이벤트
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
    });
});

// 추천 로직
recommendBtn.addEventListener('click', () => {
    // 1. 필터링
    const filtered = allMenus.filter(m => currentCategory === 'all' || m.category === currentCategory);
    
    // 2. 랜덤 추출 (골고루 나오도록 보장)
    const randomIndex = Math.floor(Math.random() * filtered.length);
    const menu = filtered[randomIndex];

    // 3. UI 준비
    resultCard.classList.remove('hidden');
    loadingOverlay.classList.remove('hidden');
    menuImage.classList.remove('loaded');
    
    resName.textContent = menu.name;
    resCategory.textContent = menu.category.toUpperCase();
    resDescription.textContent = menu.description;

    // 4. Pollinations.ai 이미지 생성
    const seed = Math.random();
    const prompt = encodeURIComponent(`${menu.engName} food photography, high quality, 8k, bokeh background`);
    const imageUrl = `https://image.pollinations.ai/prompt/${prompt}?nologo=true&seed=${seed}`;

    // 5. 이미지 로딩 처리 (onload 이후에만 표시)
    menuImage.src = imageUrl;
    menuImage.onload = () => {
        loadingOverlay.classList.add('hidden');
        menuImage.classList.add('loaded');
    };

    menuImage.onerror = () => {
        console.error("Image loading failed");
        loadingOverlay.innerHTML = "<p>이미지 생성에 실패했습니다. 다시 시도해 주세요.</p>";
    };
});

// 모달 로직
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

const modalData = {
    privacy: {
        title: "개인정보처리방침",
        body: "본 서비스는 사용자의 어떠한 개인정보도 서버에 저장하거나 수집하지 않습니다. \n\n단, 서비스 분석을 위해 브라우저의 로컬 스토리지를 사용할 수 있으며 이는 귀하의 기기에만 저장됩니다."
    },
    terms: {
        title: "이용약관",
        body: "본 서비스가 제공하는 메뉴 추천 및 이미지 결과는 AI에 의해 생성된 가상의 정보입니다. \n\n사용자는 본 서비스를 재미와 참고용으로만 사용해야 하며, 실제 식사 선택에 따른 책임은 사용자 본인에게 있습니다."
    }
};

window.openModal = (type) => {
    modalTitle.textContent = modalData[type].title;
    modalBody.textContent = modalData[type].body;
    modalOverlay.classList.remove('hidden');
};

window.closeModal = () => {
    modalOverlay.classList.add('hidden');
};
