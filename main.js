const menus = [
    { name: "김치찌개", category: "korean", emoji: "🥘", description: "얼큰하고 시원한 한국인의 소울푸드" },
    { name: "불고기", category: "korean", emoji: "🍱", description: "달콤 짭짤한 양념이 매력적인 소고기 요리" },
    { name: "비빔밥", category: "korean", emoji: "🥗", description: "각종 나물과 고추장의 조화로운 맛" },
    { name: "삼겹살", category: "korean", emoji: "🥓", description: "지글지글 구워 먹는 즐거움이 있는 돼지고기" },
    { name: "떡볶이", category: "korean", emoji: "🍡", description: "매콤달콤한 소스와 쫄깃한 떡의 만남" },
    
    { name: "까르보나라", category: "western", emoji: "🍝", description: "고소한 크림과 베이컨이 어우러진 파스타" },
    { name: "스테이크", category: "western", emoji: "🥩", description: "육즙 가득한 고품격 저녁 식사" },
    { name: "햄버거", category: "western", emoji: "🍔", description: "패티와 신선한 채소의 든든한 한 끼" },
    { name: "피자", category: "western", emoji: "🍕", description: "다양한 토핑과 치즈의 완벽한 조화" },
    
    { name: "초밥", category: "japanese", emoji: "🍣", description: "신선한 생선과 깔끔한 밥의 조화" },
    { name: "돈가스", category: "japanese", emoji: "🍱", description: "바삭한 튀김옷 속 촉촉한 고기" },
    { name: "라멘", category: "japanese", emoji: "🍜", description: "깊은 국물 맛이 일품인 일본식 면 요리" },
    { name: "짜장면", category: "japanese", emoji: "🍜", description: "달콤 짭짤한 소스의 국민 중식 메뉴" },
    
    { name: "샌드위치", category: "simple", emoji: "🥪", description: "가볍고 신선하게 즐기는 한 끼" },
    { name: "샐러드", category: "simple", emoji: "🥗", description: "건강하고 깔끔한 저녁 식사" },
    { name: "컵라면", category: "simple", emoji: "🍜", description: "가장 빠르고 간편하게 해결하는 저녁" }
];

let currentCategory = 'all';

// DOM Elements
const recommendBtn = document.getElementById('recommend-btn');
const resultCard = document.getElementById('result-card');
const menuEmoji = document.getElementById('menu-emoji');
const menuName = document.getElementById('menu-name');
const menuCategory = document.getElementById('menu-category');
const menuDescription = document.getElementById('menu-description');
const filterBtns = document.querySelectorAll('.filter-btn');

// Category mapping for display
const categoryMap = {
    korean: "한식",
    western: "양식",
    japanese: "일식/중식",
    simple: "간단식"
};

// Functions
function getRandomMenu() {
    const filteredMenus = currentCategory === 'all' 
        ? menus 
        : menus.filter(menu => menu.category === currentCategory);
    
    const randomIndex = Math.floor(Math.random() * filteredMenus.length);
    return filteredMenus[randomIndex];
}

function displayMenu() {
    // Add animation effect
    resultCard.classList.add('hidden');
    
    setTimeout(() => {
        const menu = getRandomMenu();
        
        menuEmoji.textContent = menu.emoji;
        menuName.textContent = menu.name;
        menuCategory.textContent = categoryMap[menu.category];
        menuDescription.textContent = menu.description;
        
        resultCard.classList.remove('hidden');
    }, 100);
}

// Event Listeners
recommendBtn.addEventListener('click', displayMenu);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update current category
        currentCategory = btn.getAttribute('data-category');
    });
});

// Initial display
// displayMenu(); 
