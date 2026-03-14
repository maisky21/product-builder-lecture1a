const menus = [
    { name: "비빔밥", eng: "bibimbap", category: "korean", desc: "신선한 나물과 고추장의 완벽한 조화" },
    { name: "김치찌개", eng: "kimchi stew", category: "korean", desc: "얼큰하고 칼칼한 한국인의 소울푸드" },
    { name: "불고기", eng: "bulgogi", category: "korean", desc: "달콤 짭짤한 양념이 매력적인 소고기 요리" },
    { name: "스테이크", eng: "beef steak", category: "western", desc: "육즙 가득한 프리미엄 소고기 스테이크" },
    { name: "까르보나라", eng: "pasta carbonara", category: "western", desc: "고소하고 부드러운 크림 소스 파스타" },
    { name: "치즈피자", eng: "cheese pizza", category: "western", desc: "쭉 늘어나는 치즈가 일품인 클래식 피자" },
    { name: "초밥", eng: "assorted sushi", category: "japanese", desc: "신선한 생선과 초대리의 깔끔한 만남" },
    { name: "돈카츠", eng: "tonkatsu", category: "japanese", desc: "겉은 바삭하고 속은 촉촉한 일식 돈가스" },
    { name: "라멘", eng: "tonkotsu ramen", category: "japanese", desc: "진한 육수와 쫄깃한 면발의 정통 라멘" },
    { name: "짬뽕", eng: "jjamppong", category: "chinese", desc: "각종 해산물이 들어간 얼큰하고 시원한 국물 요리" },
    { name: "짜장면", eng: "jajangmyeon", category: "chinese", desc: "달콤 짭짤한 춘장 소스의 국민 면 요리" }
];

let currentCategory = 'all';
let loadingTimeout = null;

const introView = document.getElementById('intro-view');
const resultView = document.getElementById('result-view');
const recommendBtn = document.getElementById('recommend-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuImage = document.getElementById('menu-image');
const loadingOverlay = document.getElementById('loading-overlay');
const resName = document.getElementById('res-name');
const resCategory = document.getElementById('res-category');
const resDescription = document.getElementById('res-description');
const retryBtn = document.getElementById('retry-btn');

// 필터 버튼 처리
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
    });
});

// 메뉴 추천 로직
function recommendMenu() {
    // 1. 필터링
    const filtered = currentCategory === 'all' 
        ? menus 
        : menus.filter(m => m.category === currentCategory);
    
    // 2. 랜덤 선택
    const randomIndex = Math.floor(Math.random() * filtered.length);
    const selected = filtered[randomIndex];

    // 3. UI 업데이트
    introView.classList.add('hidden');
    resultView.classList.remove('hidden');
    loadingOverlay.classList.remove('hidden');
    menuImage.classList.remove('loaded');

    if (resName) resName.textContent = selected.name;
    if (resCategory) resCategory.textContent = selected.category.toUpperCase();
    if (resDescription) resDescription.textContent = selected.desc;

    // 4. 이미지 생성 및 로드 (Pollinations.ai)
    const seed = Math.floor(Math.random() * 1000);
    const prompt = encodeURIComponent(selected.eng + " professional food photography, top view, delicious, high quality, 4k");
    const imageUrl = `https://image.pollinations.ai/prompt/${prompt}?width=800&height=800&nologo=true&seed=${seed}`;

    // 이전 타임아웃 제거
    if (loadingTimeout) clearTimeout(loadingTimeout);

    // 이미지 로드 시도
    menuImage.src = imageUrl;

    // onload 이벤트: 이미지 로드 완료 시
    menuImage.onload = () => {
        finishLoading();
    };

    // onerror 이벤트: 이미지 로드 실패 시
    menuImage.onerror = () => {
        console.error("Image failed to load:", imageUrl);
        // 실패 시 기본 이미지나 재시도 로직을 넣을 수 있지만, 일단은 로딩을 끝냄
        finishLoading();
    };

    // 안전장치: 8초 후 강제 표시 (이미지 생성이 느릴 수 있음)
    loadingTimeout = setTimeout(() => {
        finishLoading();
    }, 8000);
}

function finishLoading() {
    loadingOverlay.classList.add('hidden');
    menuImage.classList.add('loaded');
    if (loadingTimeout) clearTimeout(loadingTimeout);
}

// 초기화: 다시 추천 받기
function resetView() {
    resultView.classList.add('hidden');
    introView.classList.remove('hidden');
    if (loadingTimeout) clearTimeout(loadingTimeout);
}

recommendBtn.addEventListener('click', recommendMenu);
if (retryBtn) retryBtn.addEventListener('click', resetView);
