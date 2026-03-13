const menus = [
    // 한식 (Korean)
    { name: "김치찌개", eng: "kimchi stew", category: "korean", desc: "얼큰하고 칼칼한 국물 맛이 일품인 한국인의 소울푸드" },
    { name: "불고기", eng: "bulgogi", category: "korean", desc: "달콤 짭짤한 양념과 부드러운 소고기의 환상적인 조화" },
    { name: "비빔밥", eng: "bibimbap", category: "korean", desc: "각양각색의 나물과 고추장이 어우러진 건강한 한 끼" },
    { name: "삼겹살", eng: "grilled pork belly", category: "korean", desc: "지글지글 구운 고소한 육향이 가득한 돼지고기 구이" },
    { name: "떡볶이", eng: "tteokbokki", category: "korean", desc: "매콤달콤한 소스와 쫄깃한 떡의 중독적인 만남" },
    { name: "냉면", eng: "naengmyeon", category: "korean", desc: "가슴속까지 시원해지는 육수와 쫄깃한 면발의 조화" },

    // 양식 (Western)
    { name: "스테이크", eng: "beef steak", category: "western", desc: "육즙이 가득한 고품격 소고기 구이 요리" },
    { name: "까르보나라", eng: "pasta carbonara", category: "western", desc: "고소한 크림과 베이컨의 풍미가 가득한 파스타" },
    { name: "햄버거", eng: "gourmet hamburger", category: "western", desc: "두툼한 패티와 신선한 야채가 조화를 이루는 한 끼" },
    { name: "피자", eng: "pepperoni pizza", category: "western", desc: "쭉 늘어나는 치즈와 다양한 토핑의 즐거움" },
    { name: "샌드위치", eng: "club sandwich", category: "western", desc: "신선한 재료를 듬뿍 담은 간편하고 든든한 식사" },

    // 일식 (Japanese)
    { name: "초밥", eng: "assorted sushi", category: "japanese", desc: "신선한 생선과 초대리의 조화가 돋보이는 미식" },
    { name: "라멘", eng: "tonkotsu ramen", category: "japanese", desc: "진한 국물과 쫄깃한 면발이 매력적인 일본식 면 요리" },
    { name: "돈카츠", eng: "tonkatsu", category: "japanese", desc: "겉은 바삭하고 속은 촉촉한 일식 돼지고기 튀김" },
    { name: "우동", eng: "tempura udon", category: "japanese", desc: "탱글한 면발과 깊은 육수가 일품인 따뜻한 요리" },
    { name: "규동", eng: "gyudon", category: "japanese", desc: "부드러운 소고기와 양파를 올린 든든한 일식 덮밥" },

    // 중식 (Chinese)
    { name: "짜장면", eng: "jajangmyeon", category: "chinese", desc: "달콤 짭짤한 춘장 소스와 쫄깃한 면의 만남" },
    { name: "짬뽕", eng: "jjamppong", category: "chinese", desc: "각종 해산물이 들어간 얼큰하고 시원한 국물 요리" },
    { name: "탕수육", eng: "sweet and sour pork", category: "chinese", desc: "바삭하게 튀긴 고기에 새콤달콤한 소스를 곁들인 별미" },
    { name: "마라탕", eng: "malatang", category: "chinese", desc: "얼얼한 매운맛과 풍부한 재료가 매력적인 중독성 갑 요리" },

    // 간단식 (Simple)
    { name: "시리얼", eng: "bowl of cereal", category: "simple", desc: "우유와 함께 즐기는 가장 빠르고 간편한 아침 식사" },
    { name: "토스트", eng: "butter toast", category: "simple", desc: "버터 향 가득 노릇하게 구워낸 바삭한 빵" },
    { name: "삼각김밥", eng: "onigiri", category: "simple", desc: "언제 어디서나 간편하게 즐기는 한국의 국민 간편식" },
    { name: "컵라면", eng: "instant cup noodles", category: "simple", desc: "단 3분 만에 완성되는 화끈하고 든든한 한 끼" }
];

let currentCategory = 'all';
let lastMenu = null;

const recommendBtn = document.getElementById('recommend-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const resultCard = document.getElementById('result-card');
const menuImage = document.getElementById('menu-image');
const loadingOverlay = document.getElementById('loading-overlay');
const resName = document.getElementById('res-name');
const resCategory = document.getElementById('res-category');
const resDescription = document.getElementById('res-description');

// 필터 버튼 이벤트
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
    });
});

// 추천 로직 (메뉴 골고루 추출 및 Pollinations.ai 연동)
recommendBtn.addEventListener('click', () => {
    const filtered = menus.filter(m => currentCategory === 'all' || m.category === currentCategory);
    
    // 중복 방지 로직 강화
    let selectedMenu;
    if (filtered.length > 1) {
        do {
            selectedMenu = filtered[Math.floor(Math.random() * filtered.length)];
        } while (selectedMenu === lastMenu);
    } else {
        selectedMenu = filtered[0];
    }
    lastMenu = selectedMenu;

    // UI 업데이트
    resultCard.classList.remove('hidden');
    loadingOverlay.classList.remove('hidden');
    menuImage.classList.remove('loaded');

    resName.textContent = selectedMenu.name;
    resCategory.textContent = selectedMenu.category.toUpperCase();
    resDescription.textContent = selectedMenu.desc;

    // Pollinations.ai 이미지 생성 URL (요청하신 형식)
    const prompt = encodeURIComponent(selectedMenu.eng + " delicious food photography, high quality, 8k");
    const seed = Math.floor(Math.random() * 100000);
    const imageUrl = `https://image.pollinations.ai/prompt/${prompt}?width=1080&height=1080&nologo=true&seed=${seed}`;

    console.log("Generated AI Image URL:", imageUrl);

    // 이미지 로딩 처리
    menuImage.src = imageUrl;
    menuImage.onload = () => {
        loadingOverlay.classList.add('hidden');
        menuImage.classList.add('loaded');
    };

    menuImage.onerror = () => {
        console.error("Image loading failed");
        loadingOverlay.innerHTML = "<p>미식을 가져오는 데 실패했습니다. 다시 시도해 주세요.</p>";
    };
});

// 모달 로직
const modalOverlay = document.getElementById('modal-overlay');
window.openModal = () => modalOverlay.classList.remove('hidden');
window.closeModal = () => modalOverlay.classList.add('hidden');
