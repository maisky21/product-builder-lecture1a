const menuList = [
    { name: "불고기", eng: "Korean beef bulgogi", desc: "달콤 짭짤한 양념이 매력적인 한국의 대표 소고기 요리" },
    { name: "짬뽕", eng: "Spicy seafood noodle soup jjamppong", desc: "얼큰하고 시원한 국물에 해산물이 듬뿍 들어간 면 요리" },
    { name: "스테이크", eng: "Juicy grilled beef steak", desc: "육즙이 가득하고 풍미가 일품인 프리미엄 스테이크" },
    { name: "초밥", eng: "Fresh assorted sushi platter", desc: "신선한 생선과 고슬고슬한 밥의 완벽한 조화" },
    { name: "비빔밥", eng: "Korean traditional bibimbap with vegetables", desc: "각종 나물과 고추장이 어우러진 건강하고 맛있는 한 끼" },
    { name: "파스타", eng: "Creamy pasta carbonara", desc: "고소한 크림 소스와 짭짤한 베이컨이 어우러진 이탈리안 요리" },
    { name: "돈카츠", eng: "Crispy fried pork cutlet tonkatsu", desc: "겉은 바삭하고 속은 촉촉한 정통 일식 돈가스" },
    { name: "라멘", eng: "Japanese tonkotsu ramen with egg", desc: "진한 돼지뼈 육수가 일품인 일본식 라멘" },
    { name: "쌀국수", eng: "Vietnamese beef pho noodle soup", desc: "담백하고 시원한 국물의 베트남식 쌀국수" },
    { name: "피자", eng: "Cheesy pepperoni pizza", desc: "풍성한 치즈와 페퍼로니가 가득한 클래식 피자" },
    { name: "치킨", eng: "Korean style crispy fried chicken", desc: "바삭한 튀김옷과 촉촉한 속살의 완벽한 치킨" },
    { name: "마라탕", eng: "Spicy chinese malatang with ingredients", desc: "중독성 있는 매운맛과 다양한 재료의 만남" }
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
    const randomIdx = Math.floor(Math.random() * menuList.length);
    const selected = menuList[randomIdx];

    // 2. UI 전환 및 초기화
    introView.classList.add('hidden');
    resultView.classList.remove('hidden');
    loadingOverlay.style.display = 'flex';
    
    resName.textContent = selected.name;
    resDesc.textContent = selected.desc;

    // 3. 이미지 생성 URL 설정
    const seed = Math.floor(Math.random() * 10000);
    const prompt = encodeURIComponent(selected.eng + " delicious food photography");
    const imageUrl = `https://image.pollinations.ai/prompt/${prompt}?width=1080&height=1080&nologo=true&seed=${seed}`;

    // 4. 이미지 로드 및 안전장치
    if (loadingTimeout) clearTimeout(loadingTimeout);
    
    menuImage.src = imageUrl;

    // 로드 완료 시
    menuImage.onload = () => {
        finishLoading();
    };

    // 3초 후 강제 표시 (안전장치)
    loadingTimeout = setTimeout(() => {
        finishLoading();
    }, 3000);
}

function finishLoading() {
    loadingOverlay.style.display = 'none';
    if (loadingTimeout) clearTimeout(loadingTimeout);
}

function resetApp() {
    resultView.classList.add('hidden');
    introView.classList.remove('hidden');
    if (loadingTimeout) clearTimeout(loadingTimeout);
}

recommendBtn.addEventListener('click', recommendMenu);
retryBtn.addEventListener('click', resetApp);
