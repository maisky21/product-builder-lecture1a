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
const shareBtn = document.getElementById('share-btn');
const resultCard = document.getElementById('result-card');
const menuEmoji = document.getElementById('menu-emoji');
const menuName = document.getElementById('menu-name');
const menuCategory = document.getElementById('menu-category');
const menuDescription = document.getElementById('menu-description');
const luckyNumberDisplay = document.getElementById('lucky-number');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('theme-toggle');

// Theme Toggle Logic
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
}

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

function generateLuckyNumber() {
    return Math.floor(Math.random() * 99) + 1;
}

function displayMenu() {
    resultCard.classList.add('hidden');
    shareBtn.classList.add('hidden');
    
    setTimeout(() => {
        const menu = getRandomMenu();
        const luckyNumber = generateLuckyNumber();
        
        menuEmoji.textContent = menu.emoji;
        menuName.textContent = menu.name;
        menuCategory.textContent = categoryMap[menu.category];
        menuDescription.textContent = menu.description;
        luckyNumberDisplay.textContent = luckyNumber;
        
        resultCard.classList.remove('hidden');
        shareBtn.classList.remove('hidden');
        
        // Scroll to result on mobile
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

async function shareResult() {
    const text = `✨ 오늘의 미식 운세 ✨\n\n오늘 저의 행운의 메뉴는 "${menuName.textContent}"입니다!\n행운 번호: ${luckyNumberDisplay.textContent}\n\n여러분도 오늘 저녁 운세를 확인해보세요! 🌙`;
    
    if (navigator.share) {
        try {
            await navigator.share({
                title: '오늘의 미식 운세',
                text: text,
                url: window.location.href
            });
        } catch (err) {
            console.log('Error sharing:', err);
        }
    } else {
        // Fallback: Copy to clipboard
        try {
            await navigator.clipboard.writeText(text + "\n" + window.location.href);
            alert('운세 결과가 클립보드에 복사되었습니다! SNS에 붙여넣어 공유해보세요. ✨');
        } catch (err) {
            alert('공유하기를 지원하지 않는 브라우저입니다. 화면을 캡처해서 공유해보세요!');
        }
    }
}

// Event Listeners
recommendBtn.addEventListener('click', displayMenu);
shareBtn.addEventListener('click', shareResult);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
    });
});
