const menus = [
    { name: "매콤한 짬뽕", eng: "spicy seafood noodle jjamppong", desc: "해산물이 듬뿍 들어간 얼큰하고 시원한 국물 요리" },
    { name: "신선한 모듬 초밥", eng: "assorted fresh sushi platter", desc: "장인의 손길이 느껴지는 신선하고 깔끔한 초밥" },
    { name: "육즙 가득 스테이크", eng: "premium grilled beef steak", desc: "고소한 육즙과 부드러운 식감이 일품인 스테이크" },
    { name: "영양 가득 비빔밥", eng: "korean traditional bibimbap with vegetables", desc: "각종 나물과 고추장의 조화로운 건강식" },
    { name: "크림 파스타", eng: "creamy pasta carbonara", desc: "진하고 고소한 소스가 매력적인 정통 파스타" },
    { name: "바삭한 돈카츠", eng: "crispy japanese tonkatsu", desc: "겉은 바삭하고 속은 촉촉한 일식 돈가스" },
    { name: "얼큰 김치찌개", eng: "korean kimchi stew with pork", desc: "깊은 맛의 육수와 잘 익은 김치의 환상적인 맛" },
    { name: "달콤한 불고기", eng: "korean marinated beef bulgogi", desc: "남녀노소 좋아하는 달콤 짭짤한 한국식 소고기 볶음" },
    { name: "치즈 듬뿍 피자", eng: "classic cheese pizza with tomato sauce", desc: "쭉 늘어나는 고소한 치즈가 일품인 피자" },
    { name: "매콤달콤 떡볶이", eng: "korean spicy rice cake tteokbokki", desc: "쫄깃한 떡과 중독성 있는 매콤한 양념" },
    { name: "진한 돈코츠 라멘", eng: "japanese tonkotsu ramen with egg", desc: "오랜 시간 우려낸 진한 국물의 정통 일본식 라멘" },
    { name: "담백한 쌀국수", eng: "vietnamese beef pho noodle soup", desc: "시원하고 담백한 국물의 베트남식 쌀국수" }
];

const introView = document.getElementById('intro-view');
const resultView = document.getElementById('result-view');
const recommendBtn = document.getElementById('recommend-btn');
const retryBtn = document.getElementById('retry-btn');
const menuImage = document.getElementById('menu-image');
const loadingOverlay = document.getElementById('loading-overlay');
const resName = document.getElementById('res-name');
const resDesc = document.getElementById('res-desc');

let loadingTimeout;

function recommendMenu() {
    // 1. 랜덤 메뉴 선택
    const selected = menus[Math.floor(Math.random() * menus.length)];

    // 2. UI 전환 및 데이터 세팅
    introView.classList.add('hidden');
    resultView.classList.remove('hidden');
    loadingOverlay.style.display = 'flex';
    
    resName.textContent = selected.name;
    resDesc.textContent = selected.desc;

    // 3. 이미지 생성 (Pollinations.ai)
    const seed = Math.floor(Math.random() * 10000);
    const prompt = encodeURIComponent(selected.eng + " professional food photography, high quality, 4k");
    const imageUrl = `https://image.pollinations.ai/prompt/${prompt}?width=1080&height=1080&nologo=true&seed=${seed}`;

    // 4. 이미지 로드 및 안전장치
    if (loadingTimeout) clearTimeout(loadingTimeout);
    
    menuImage.src = imageUrl;

    menuImage.onload = () => {
        hideSpinner();
    };

    // 3초 안전장치: 이미지 로딩이 느려도 3초 후에는 스피너 제거
    loadingTimeout = setTimeout(() => {
        hideSpinner();
    }, 3000);
}

function hideSpinner() {
    loadingOverlay.style.display = 'none';
    if (loadingTimeout) clearTimeout(loadingTimeout);
}

function resetApp() {
    resultView.classList.add('hidden');
    introView.classList.remove('hidden');
}

recommendBtn.addEventListener('click', recommendMenu);
retryBtn.addEventListener('click', resetApp);
