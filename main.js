const menuList = [
    { name: "김치찌개", eng: "kimchi stew", category: "korean", desc: "얼큰한 국물과 잘 익은 김치의 깊은 맛" },
    { name: "불고기", eng: "bulgogi", category: "korean", desc: "달콤 짭짤한 양념과 부드러운 소고기의 조화" },
    { name: "비빔밥", eng: "bibimbap", category: "korean", desc: "신선한 나물과 고추장의 건강한 만남" },
    { name: "삼겹살", eng: "grilled pork belly", category: "korean", desc: "지글지글 구워낸 고소한 한국인의 소울푸드" },
    { name: "떡볶이", eng: "tteokbokki", category: "korean", desc: "매콤달콤한 소스와 쫄깃한 떡의 중독성" },

    { name: "스테이크", eng: "beef steak", category: "western", desc: "육즙이 살아있는 고품격 소고기 요리" },
    { name: "파스타", eng: "pasta carbonara", category: "western", desc: "부드러운 크림과 고소한 베이컨의 풍미" },
    { name: "햄버거", eng: "gourmet hamburger", category: "western", desc: "두툼한 패티와 신선한 야채의 든든한 조화" },
    { name: "피자", eng: "pepperoni pizza", category: "western", desc: "쭉 늘어나는 치즈와 다양한 토핑의 즐거움" },
    { name: "샌드위치", eng: "club sandwich", category: "western", desc: "신선한 재료를 듬뿍 담은 깔끔한 한 끼" },

    { name: "초밥", eng: "sushi set", category: "japanese", desc: "신선한 생선과 장인의 손길이 닿은 미식" },
    { name: "라멘", eng: "tonkotsu ramen", category: "japanese", desc: "진한 육수와 쫄깃한 면발의 깊은 매력" },
    { name: "돈카츠", eng: "tonkatsu", category: "japanese", desc: "겉은 바삭하고 속은 촉촉한 일식 튀김 요리" },
    { name: "우동", eng: "tempura udon", category: "japanese", desc: "탱글한 면발과 시원한 국물의 따뜻한 만남" },
    { name: "규동", eng: "gyudon", category: "japanese", desc: "부드러운 소고기가 듬뿍 올라간 일본식 덮밥" },

    { name: "짜장면", eng: "jajangmyeon", category: "chinese", desc: "달콤한 춘장 소스와 쫄깃한 면의 환상 조화" },
    { name: "짬뽕", eng: "jjamppong", category: "chinese", desc: "해산물이 듬뿍 들어간 얼큰하고 시원한 국물" },
    { name: "탕수육", eng: "sweet and sour pork", category: "chinese", desc: "바삭한 튀김과 새콤달콤한 소스의 찰떡 궁합" },
    { name: "볶음밥", eng: "chinese fried rice", category: "chinese", desc: "불향 가득 고슬고슬하게 볶아낸 고소한 맛" },
    { name: "마라탕", eng: "malatang", category: "chinese", desc: "얼얼한 매운맛과 풍부한 재료의 중독적인 맛" }
];

let currentCategory = 'all';
const introBox = document.getElementById('intro-box');
const resultCard = document.getElementById('result-card');
const recommendBtn = document.getElementById('recommend-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuImage = document.getElementById('menu-image');
const loadingOverlay = document.getElementById('loading-overlay');
const resName = document.getElementById('res-name');
const resCategory = document.getElementById('res-category');
const resDescription = document.getElementById('res-description');

// 필터 클릭 이벤트
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
    });
});

// 추천 메인 로직
recommendBtn.addEventListener('click', () => {
    // 1. 필터링 및 랜덤 추출
    const filtered = currentCategory === 'all' 
        ? menuList 
        : menuList.filter(m => m.category === currentCategory);
    
    const randomMenu = filtered[Math.floor(Math.random() * filtered.length)];

    // 2. UI 전환 (초기 화면 숨기고 결과 카드 표시)
    introBox.classList.add('hidden');
    resultCard.classList.remove('hidden');
    loadingOverlay.classList.remove('hidden');
    menuImage.classList.remove('loaded');

    // 3. 텍스트 업데이트
    resName.textContent = randomMenu.name;
    resCategory.textContent = randomMenu.category.toUpperCase();
    resDescription.textContent = randomMenu.desc;

    // 4. Pollinations.ai 이미지 생성 및 주입
    const seed = Math.random();
    const prompt = encodeURIComponent(randomMenu.eng + " professional food photography, high quality");
    const imageUrl = `https://image.pollinations.ai/prompt/${prompt}?width=1080&height=1080&nologo=true&seed=${seed}`;

    menuImage.src = imageUrl;

    // 5. 로딩 완료 후 이미지 표시
    menuImage.onload = () => {
        loadingOverlay.classList.add('hidden');
        menuImage.classList.add('loaded');
    };
});

// 모달 토글
const modal = document.getElementById('privacy-modal');
window.toggleModal = (show) => {
    modal.classList.toggle('hidden', !show);
};
