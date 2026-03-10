const menus = [
    // Korean
    { 
        name: { ko: "김치찌개", en: "Kimchi Jjigae" }, 
        category: "korean", 
        imageUrl: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80",
        description: { ko: "얼큰하고 시원한 한국인의 소울푸드", en: "Spicy and hearty Korean soul food" } 
    },
    { 
        name: { ko: "불고기", en: "Bulgogi" }, 
        category: "korean", 
        imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
        description: { ko: "달콤 짭짤한 양념이 매력적인 소고기 요리", en: "Sweet and savory marinated beef dish" } 
    },
    { 
        name: { ko: "비빔밥", en: "Bibimbap" }, 
        category: "korean", 
        imageUrl: "https://images.unsplash.com/photo-1590301157461-460d3d5272a8?auto=format&fit=crop&w=800&q=80",
        description: { ko: "각종 나물과 고추장의 조화로운 맛", en: "Assorted vegetables with rice and spicy sauce" } 
    },
    { 
        name: { ko: "삼겹살", en: "Samgyeopsal" }, 
        category: "korean", 
        imageUrl: "https://images.unsplash.com/photo-1629814203649-1be773950663?auto=format&fit=crop&w=800&q=80",
        description: { ko: "지글지글 구워 먹는 즐거움이 있는 돼지고기", en: "Grilled pork belly, a favorite Korean BBQ" } 
    },
    { 
        name: { ko: "떡볶이", en: "Tteokbokki" }, 
        category: "korean", 
        imageUrl: "https://images.unsplash.com/photo-1662116206135-7ce3203f13f1?auto=format&fit=crop&w=800&q=80",
        description: { ko: "매콤달콤한 소스와 쫄깃한 떡의 만남", en: "Spicy and sweet rice cakes" } 
    },
    { 
        name: { ko: "제육볶음", en: "Jeyuk Bokkeum" }, 
        category: "korean", 
        imageUrl: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80",
        description: { ko: "매콤한 양념으로 볶아낸 밥도둑 돼지고기", en: "Spicy stir-fried pork, a true rice thief" } 
    },
    { 
        name: { ko: "냉면", en: "Naengmyeon" }, 
        category: "korean", 
        imageUrl: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?auto=format&fit=crop&w=800&q=80",
        description: { ko: "가슴속까지 시원해지는 메밀면 요리", en: "Refreshing cold buckwheat noodles" } 
    },

    // Western
    { 
        name: { ko: "까르보나라", en: "Carbonara" }, 
        category: "western", 
        imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
        description: { ko: "고소한 크림과 베이컨이 어우러진 파스타", en: "Creamy pasta with savory bacon" } 
    },
    { 
        name: { ko: "스테이크", en: "Steak" }, 
        category: "western", 
        imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
        description: { ko: "육즙 가득한 고품격 저녁 식사", en: "Juicy and premium beef dinner" } 
    },
    { 
        name: { ko: "햄버거", en: "Hamburger" }, 
        category: "western", 
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        description: { ko: "패티와 신선한 채소의 든든한 한 끼", en: "Hearty patty with fresh vegetables" } 
    },
    { 
        name: { ko: "피자", en: "Pizza" }, 
        category: "western", 
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
        description: { ko: "다양한 토핑과 치즈의 완벽한 조화", en: "Perfect harmony of toppings and cheese" } 
    },
    { 
        name: { ko: "리조또", en: "Risotto" }, 
        category: "western", 
        imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
        description: { ko: "부드럽고 고소한 이탈리아식 쌀 요리", en: "Creamy and savory Italian rice dish" } 
    },
    { 
        name: { ko: "에그베네딕트", en: "Egg Benedict" }, 
        category: "western", 
        imageUrl: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=800&q=80",
        description: { ko: "수란과 홀랜다이즈 소스의 만남", en: "Poached eggs with hollandaise sauce" } 
    },
    { 
        name: { ko: "감바스", en: "Gambas" }, 
        category: "western", 
        imageUrl: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80",
        description: { ko: "마늘 향 가득한 올리브유와 새우", en: "Shrimp in garlic-infused olive oil" } 
    },

    // Japanese
    { 
        name: { ko: "초밥", en: "Sushi" }, 
        category: "japanese", 
        imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
        description: { ko: "신선한 생선과 깔끔한 밥의 조화", en: "Fresh fish with seasoned rice" } 
    },
    { 
        name: { ko: "돈가스", en: "Tonkatsu" }, 
        category: "japanese", 
        imageUrl: "https://images.unsplash.com/photo-1651586790924-f7b588390b39?auto=format&fit=crop&w=800&q=80",
        description: { ko: "바삭한 튀김옷 속 촉촉한 고기", en: "Crispy fried pork cutlet" } 
    },
    { 
        name: { ko: "라멘", en: "Ramen" }, 
        category: "japanese", 
        imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        description: { ko: "깊은 국물 맛이 일품인 일본식 면 요리", en: "Japanese noodle soup with rich broth" } 
    },
    { 
        name: { ko: "우동", en: "Udon" }, 
        category: "japanese", 
        imageUrl: "https://images.unsplash.com/photo-1548946522-4a313e8972a4?auto=format&fit=crop&w=800&q=80",
        description: { ko: "통통한 면발과 따뜻한 국물", en: "Thick noodles in warm, comforting broth" } 
    },
    { 
        name: { ko: "카레라이스", en: "Japanese Curry" }, 
        category: "japanese", 
        imageUrl: "https://images.unsplash.com/photo-1628102431706-96b6d85915d5?auto=format&fit=crop&w=800&q=80",
        description: { ko: "진하고 부드러운 일본식 카레", en: "Thick and smooth Japanese-style curry" } 
    },

    // Chinese
    { 
        name: { ko: "짜장면", en: "Jajangmyeon" }, 
        category: "chinese", 
        imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
        description: { ko: "달콤 짭짤한 소스의 국민 중식 메뉴", en: "Noodles in savory black bean sauce" } 
    },
    { 
        name: { ko: "탕수육", en: "Tangsuyuk" }, 
        category: "chinese", 
        imageUrl: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
        description: { ko: "바삭한 튀김과 새콤달콤한 소스", en: "Crispy sweet and sour pork" } 
    },
    { 
        name: { ko: "마라탕", en: "Malatang" }, 
        category: "chinese", 
        imageUrl: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&w=800&q=80",
        description: { ko: "중독성 강한 매콤하고 얼얼한 맛", en: "Spicy and numbing Szechuan soup" } 
    },
    { 
        name: { ko: "딤섬", en: "Dim Sum" }, 
        category: "chinese", 
        imageUrl: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
        description: { ko: "한 입에 즐기는 다채로운 맛", en: "Bite-sized delights in various styles" } 
    },

    // Simple
    { 
        name: { ko: "샐러드", en: "Salad" }, 
        category: "simple", 
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        description: { ko: "건강하고 깔끔한 저녁 식사", en: "Healthy and fresh dinner option" } 
    },
    { 
        name: { ko: "컵라면", en: "Cup Noodles" }, 
        category: "simple", 
        imageUrl: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=800&q=80",
        description: { ko: "가장 빠르고 간편하게 해결하는 저녁", en: "Fastest and easiest dinner solution" } 
    },
    { 
        name: { ko: "타코", en: "Taco" }, 
        category: "simple", 
        imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
        description: { ko: "멕시코 풍미를 가볍게 즐기는 한 끼", en: "Light meal with Mexican flavors" } 
    },
    { 
        name: { ko: "요거트 볼", en: "Yogurt Bowl" }, 
        category: "simple", 
        imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
        description: { ko: "과일과 견과류를 곁들인 가벼운 저녁", en: "Light dinner with fruit and nuts" } 
    }
];

const uiStrings = {
    ko: {
        title: "오늘의 미식 운세",
        subtitle: "신비로운 별들이 당신의 저녁 식사를 점지해드립니다.",
        recommendBtn: "나의 미식 운세 확인하기",
        shareBtn: "내 행운 공유하기",
        luckyNumber: "오늘의 행운 번호",
        categories: {
            all: "전체",
            korean: "한식",
            western: "양식",
            japanese: "일식",
            chinese: "중식",
            simple: "간단식"
        },
        shareText: (menu, num) => `✨ 오늘의 미식 운세 ✨\n\n행운의 메뉴: "${menu}"\n행운 번호: ${num}\n\n당신의 행운을 확인해보세요! 🌙`,
        copied: "운세가 클립보드에 복사되었습니다! ✨",
        langBtn: "🌐 EN"
    },
    en: {
        title: "Cosmic Dinner Fortune",
        subtitle: "The mysterious stars will divine your dinner tonight.",
        recommendBtn: "Check My Dinner Fortune",
        shareBtn: "Share My Fortune",
        luckyNumber: "Today's Lucky Number",
        categories: {
            all: "All",
            korean: "Korean",
            western: "Western",
            japanese: "Japanese",
            chinese: "Chinese",
            simple: "Simple"
        },
        shareText: (menu, num) => `✨ Cosmic Dinner Fortune ✨\n\nLucky Menu: "${menu}"\nLucky Number: ${num}\n\nCheck your luck now! 🌙`,
        copied: "Fortune copied to clipboard! ✨",
        langBtn: "🌐 KO"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let currentCategory = 'all';

// Sound Effects Logic
const clickSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'); // Very soft subtle click
const dinnerSounds = [
    new Audio('https://assets.mixkit.co/active_storage/sfx/2017/2017-preview.mp3'),   // Soft interface tap
    new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'),   // Subtle blip
    new Audio('https://assets.mixkit.co/active_storage/sfx/2830/2830-preview.mp3'),   // Minimalist click
    new Audio('https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3')    // Tiny electronic click
];
let soundIndex = 0;

function playSound(sound, volume = 0.3) {
    sound.currentTime = 0;
    sound.volume = volume; // 기본 볼륨을 낮게 설정 (은은하게)
    sound.play().catch(e => console.log("Sound play prevented"));

    // 1초 후 페이드아웃 및 정지 로직
    setTimeout(() => {
        let fadeOut = setInterval(() => {
            if (sound.volume > 0.05) {
                sound.volume -= 0.05;
            } else {
                sound.pause();
                sound.volume = volume; // 볼륨 원복
                clearInterval(fadeOut);
            }
        }, 50);
    }, 800); // 0.8초 지점부터 페이드아웃 시작하여 1초 내외로 종료
}

// Floating Background Elements
function createBgElements() {
    const bgContainer = document.getElementById('bg-elements');
    const icons = ['🍀', '💰', '✨', '💎', '🌈'];
    const count = 15;

    for (let i = 0; i < count; i++) {
        const span = document.createElement('span');
        span.className = 'floating-icon';
        span.textContent = icons[Math.floor(Math.random() * icons.length)];
        span.style.left = Math.random() * 100 + 'vw';
        span.style.animationDelay = Math.random() * 15 + 's';
        span.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        bgContainer.appendChild(span);
    }
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
const luckyNumberLabel = document.querySelector('.lucky-number-section span');
const headerTitle = document.querySelector('header h1');
const headerSubtitle = document.querySelector('header p');

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
    headerTitle.textContent = strings.title;
    headerSubtitle.textContent = strings.subtitle;
    recommendBtn.textContent = strings.recommendBtn;
    shareBtn.textContent = strings.shareBtn;
    luckyNumberLabel.textContent = strings.luckyNumber;
    langToggle.textContent = strings.langBtn;
    
    filterBtns.forEach(btn => {
        const cat = btn.getAttribute('data-category');
        btn.textContent = strings.categories[cat];
    });

    if (!resultCard.classList.contains('hidden')) {
        // Update current result card if it's visible
        // We need to find the current menu object
        const currentMenuName = menuName.textContent;
        const menu = menus.find(m => m.name.ko === currentMenuName || m.name.en === currentMenuName);
        if (menu) {
            menuName.textContent = menu.name[currentLang];
            menuCategory.textContent = strings.categories[menu.category];
            menuDescription.textContent = menu.description[currentLang];
        }
    }
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    localStorage.setItem('lang', currentLang);
    updateLanguageUI();
});

// Functions
function generateLuckyNumber() {
    const num = Math.floor(Math.random() * 99) + 1;
    return num.toString().padStart(2, '0');
}

function displayMenu() {
    playSound(clickSound);
    resultCard.classList.add('hidden');
    shareBtn.classList.add('hidden');
    
    // 이미지 로딩 상태 초기화
    menuImage.classList.remove('loaded');
    
    setTimeout(() => {
        const menu = getRandomMenu();
        const luckyNumStr = generateLuckyNumber();
        
        // 검색 키워드 보강: "delicious [메뉴영문명] photo"
        const enhancedPrompt = `delicious ${menu.name.en} photo`;
        
        // 동적 이미지 URL 생성: Unsplash Featured 사용 (정확도 향상 및 캐시 방지)
        menuImage.src = `https://source.unsplash.com/800x600/?${encodeURIComponent(enhancedPrompt)}&sig=${Math.random()}`;
        menuImage.alt = ''; // 이미지 위 중복 텍스트 방지를 위해 alt를 비움
        
        // 이미지 로드 완료 이벤트 핸들러
        menuImage.onload = () => {
            menuImage.classList.add('loaded');
        };
        
        // 이미지 로드 실패 시 정적 백업 URL 사용
        menuImage.onerror = () => {
            menuImage.src = menu.imageUrl;
            menuImage.classList.add('loaded');
        };
        
        menuName.textContent = menu.name[currentLang];
        menuCategory.textContent = uiStrings[currentLang].categories[menu.category];
        menuDescription.textContent = menu.description[currentLang];
        
        // Staggered Digits
        luckyDigitsContainer.innerHTML = '';
        luckyNumStr.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.className = 'digit';
            span.textContent = char;
            span.style.animationDelay = (index * 0.2) + 's';
            luckyDigitsContainer.appendChild(span);
        });
        
        resultCard.classList.remove('hidden');
        shareBtn.classList.remove('hidden');
        
        // Use rotating discrete dinner sounds
        const currentDinnerSound = dinnerSounds[soundIndex];
        setTimeout(() => playSound(currentDinnerSound), 100);
        soundIndex = (soundIndex + 1) % dinnerSounds.length;
        
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
}

function getRandomMenu() {
    const filteredMenus = currentCategory === 'all' 
        ? menus 
        : menus.filter(menu => menu.category === currentCategory);
    return filteredMenus[Math.floor(Math.random() * filteredMenus.length)];
}

async function shareResult() {
    const luckyNum = Array.from(luckyDigitsContainer.children).map(c => c.textContent).join('');
    const text = uiStrings[currentLang].shareText(menuName.textContent, luckyNum);
    
    if (navigator.share) {
        await navigator.share({ title: uiStrings[currentLang].title, text, url: window.location.href });
    } else {
        await navigator.clipboard.writeText(text + "\n" + window.location.href);
        alert(uiStrings[currentLang].copied);
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

// Initialize
updateLanguageUI();
createBgElements();
