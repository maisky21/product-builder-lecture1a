const menus = [
    // Korean
    { 
        name: { ko: "김치찌개", en: "Kimchi Jjigae" }, 
        category: "korean", 
        imagePrompt: "A close-up, high-quality photograph of Korean Kimchi Stew (Kimchi-jjigae) simmering in a traditional black stone pot (Ttukbaegi), vibrant red broth, tofu, pork, and scallions, traditional Korean tableware.",
        description: { ko: "얼큰하고 시원한 한국인의 소울푸드", en: "Spicy and hearty Korean soul food" } 
    },
    { 
        name: { ko: "불고기", en: "Bulgogi" }, 
        category: "korean", 
        imagePrompt: "A professional food photograph of Korean Beef Bulgogi, thinly sliced marinated beef grilled with onions and mushrooms, served on a traditional Korean plate, authentic atmosphere.",
        description: { ko: "달콤 짭짤한 양념이 매력적인 소고기 요리", en: "Sweet and savory marinated beef dish" } 
    },
    { 
        name: { ko: "비빔밥", en: "Bibimbap" }, 
        category: "korean", 
        imagePrompt: "A high-angle, bright photograph of Korean Bibimbap in a brass bowl, assorted colorful vegetables, seasoned beef, and a fried egg on top with gochujang sauce, traditional Korean style.",
        description: { ko: "각종 나물과 고추장의 조화로운 맛", en: "Assorted vegetables with rice and spicy sauce" } 
    },
    { 
        name: { ko: "삼겹살", en: "Samgyeopsal" }, 
        category: "korean", 
        imagePrompt: "A delicious photograph of Korean grilled pork belly (Samgyeopsal) on a grill, crispy texture, served with garlic, ssamjang, and fresh lettuce wraps in a Korean BBQ restaurant setting.",
        description: { ko: "지글지글 구워 먹는 즐거움이 있는 돼지고기", en: "Grilled pork belly, a favorite Korean BBQ" } 
    },
    { 
        name: { ko: "떡볶이", en: "Tteokbokki" }, 
        category: "korean", 
        imagePrompt: "A close-up photograph of Korean Spicy Rice Cakes (Tteokbokki), chewy rice cakes in thick, glossy red spicy sauce, served with boiled eggs and fish cakes, Korean street food style.",
        description: { ko: "매콤달콤한 소스와 쫄깃한 떡의 만남", en: "Spicy and sweet rice cakes" } 
    },
    { 
        name: { ko: "제육볶음", en: "Jeyuk Bokkeum" }, 
        category: "korean", 
        imagePrompt: "A spicy and savory photograph of Korean Stir-fried Pork (Jeyuk Bokkeum), bright red seasoning, garnished with sesame seeds and green onions, served on a traditional Korean plate.",
        description: { ko: "매콤한 양념으로 볶아낸 밥도둑 돼지고기", en: "Spicy stir-fried pork, a true rice thief" } 
    },
    { 
        name: { ko: "냉면", en: "Naengmyeon" }, 
        category: "korean", 
        imagePrompt: "A close-up, high-quality photograph of Korean Cold Buckwheat Noodles (Naengmyeon) in a stainless steel bowl with ice-cold broth, half a boiled egg, sliced cucumber, and beef, served with mustard and vinegar on a traditional wooden table.",
        description: { ko: "가슴속까지 시원해지는 메밀면 요리", en: "Refreshing cold buckwheat noodles" } 
    },

    // Western
    { 
        name: { ko: "까르보나라", en: "Carbonara" }, 
        category: "western", 
        imagePrompt: "A gourmet photograph of authentic Italian Spaghetti Carbonara, creamy sauce made with egg yolk and pecorino cheese, crispy guanciale, and freshly cracked black pepper.",
        description: { ko: "고소한 크림과 베이컨이 어우러진 파스타", en: "Creamy pasta with savory bacon" } 
    },
    { 
        name: { ko: "스테이크", en: "Steak" }, 
        category: "western", 
        imagePrompt: "A close-up, juicy photograph of a grilled Ribeye Steak, medium-rare, served with rosemary, roasted garlic, and buttery potatoes on a dark plate, restaurant style.",
        description: { ko: "육즙 가득한 고품격 저녁 식사", en: "Juicy and premium beef dinner" } 
    },
    { 
        name: { ko: "햄버거", en: "Hamburger" }, 
        category: "western", 
        imagePrompt: "A large, appetizing Gourmet Cheeseburger photograph, thick juicy beef patty, melting cheese, fresh lettuce, tomato, and onion in a toasted brioche bun, high-quality food photography.",
        description: { ko: "패티와 신선한 채소의 든든한 한 끼", en: "Hearty patty with fresh vegetables" } 
    },
    { 
        name: { ko: "피자", en: "Pizza" }, 
        category: "western", 
        imagePrompt: "A delicious photograph of a fresh Neapolitan Pizza, bubbling mozzarella cheese, bright red tomato sauce, and fresh basil leaves, straight from a wood-fired oven.",
        description: { ko: "다양한 토핑과 치즈의 완벽한 조화", en: "Perfect harmony of toppings and cheese" } 
    },
    { 
        name: { ko: "리조또", en: "Risotto" }, 
        category: "western", 
        imagePrompt: "A creamy and elegant photograph of Italian Mushroom Risotto, garnished with parmesan cheese shavings, fresh parsley, and drizzled with truffle oil on a white ceramic plate.",
        description: { ko: "부드럽고 고소한 이탈리아식 쌀 요리", en: "Creamy and savory Italian rice dish" } 
    },
    { 
        name: { ko: "에그베네딕트", en: "Egg Benedict" }, 
        category: "western", 
        imagePrompt: "A beautiful photograph of Eggs Benedict, perfectly poached eggs with golden hollandaise sauce on English muffins with smoked salmon and avocado, brunch cafe setting.",
        description: { ko: "수란과 홀랜다이즈 소스의 만남", en: "Poached eggs with hollandaise sauce" } 
    },
    { 
        name: { ko: "감바스", en: "Gambas" }, 
        category: "western", 
        imagePrompt: "A sizzling photograph of Gambas al Ajillo (Spanish Garlic Shrimp), fresh shrimp in bubbling olive oil with lots of garlic and chili peppers, served with crusty bread slices.",
        description: { ko: "마늘 향 가득한 올리브유와 새우", en: "Shrimp in garlic-infused olive oil" } 
    },

    // Japanese
    { 
        name: { ko: "초밥", en: "Sushi" }, 
        category: "japanese", 
        imagePrompt: "A high-quality photograph of an Assorted Sushi Platter (Nigiri), fresh salmon, tuna, and shrimp on seasoned rice, served with ginger and wasabi on a wooden board, Japanese style.",
        description: { ko: "신선한 생선과 깔끔한 밥의 조화", en: "Fresh fish with seasoned rice" } 
    },
    { 
        name: { ko: "돈가스", en: "Tonkatsu" }, 
        category: "japanese", 
        imagePrompt: "A crispy photograph of Japanese Tonkatsu (Fried Pork Cutlet), thick meat with golden breadcrumbs, served with shredded cabbage and savory brown sauce on a modern plate.",
        description: { ko: "바삭한 튀김옷 속 촉촉한 고기", en: "Crispy fried pork cutlet" } 
    },
    { 
        name: { ko: "라멘", en: "Ramen" }, 
        category: "japanese", 
        imagePrompt: "A steaming bowl of Japanese Tonkotsu Ramen, rich pork broth, ramen noodles, soft-boiled marinated egg, chashu pork slices, and nori, authentic Japanese restaurant setting.",
        description: { ko: "깊은 국물 맛이 일품인 일본식 면 요리", en: "Japanese noodle soup with rich broth" } 
    },
    { 
        name: { ko: "우동", en: "Udon" }, 
        category: "japanese", 
        imagePrompt: "A warm photograph of Japanese Udon noodles in clear broth, thick chewy noodles, tempura shrimp on top, and green onions, served in a traditional ceramic bowl.",
        description: { ko: "통통한 면발과 따뜻한 국물", en: "Thick noodles in warm, comforting broth" } 
    },
    { 
        name: { ko: "카레라이스", en: "Japanese Curry" }, 
        category: "japanese", 
        imagePrompt: "A comforting photograph of Japanese Style Curry Rice, thick dark curry sauce with potatoes and carrots, served with steamed white rice and red pickled ginger (Fukujinzuke).",
        description: { ko: "진하고 부드러운 일본식 카레", en: "Thick and smooth Japanese-style curry" } 
    },

    // Chinese
    { 
        name: { ko: "짜장면", en: "Jajangmyeon" }, 
        category: "chinese", 
        imagePrompt: "A close-up photograph of Korean-style Chinese Black Bean Noodles (Jajangmyeon), thick noodles covered in glossy black bean sauce with diced pork and onions, topped with cucumber slices.",
        description: { ko: "달콤 짭짤한 소스의 국민 중식 메뉴", en: "Noodles in savory black bean sauce" } 
    },
    { 
        name: { ko: "탕수육", en: "Tangsuyuk" }, 
        category: "chinese", 
        imagePrompt: "A close-up, delicious photograph of deep-fried pork with sweet and sour sauce (Tangsuyuk), mixed with colorful vegetables like bell peppers and onions, crispy texture visible, served on a modern plate in a restaurant setting.",
        description: { ko: "바삭한 튀김과 새콤달콤한 소스", en: "Crispy sweet and sour pork" } 
    },
    { 
        name: { ko: "마라탕", en: "Malatang" }, 
        category: "chinese", 
        imagePrompt: "A spicy and vibrant bowl of Chinese Malatang, red numbing broth, variety of ingredients like tofu skin, beef, mushrooms, and bok choy, authentic Sichuan style.",
        description: { ko: "중독성 강한 매콤하고 얼얼한 맛", en: "Spicy and numbing Szechuan soup" } 
    },
    { 
        name: { ko: "딤섬", en: "Dim Sum" }, 
        category: "chinese", 
        imagePrompt: "A beautiful photograph of Assorted Chinese Dim Sum in bamboo steamers, translucent Har Gow (shrimp dumplings) and Siu Mai, steaming hot, traditional tea house atmosphere.",
        description: { ko: "한 입에 즐기는 다채로운 맛", en: "Bite-sized delights in various styles" } 
    },

    // Simple
    { 
        name: { ko: "샐러드", en: "Salad" }, 
        category: "simple", 
        imagePrompt: "A fresh and colorful Garden Salad photograph, mixed greens, cherry tomatoes, cucumbers, avocado slices, and nuts with balsamic dressing in a white bowl, healthy meal.",
        description: { ko: "건강하고 깔끔한 저녁 식사", en: "Healthy and fresh dinner option" } 
    },
    { 
        name: { ko: "컵라면", en: "Cup Noodles" }, 
        category: "simple", 
        imagePrompt: "A photograph of instant Cup Noodles, steaming hot noodles in spicy broth with visible dried vegetables and corn, casual convenience store setting.",
        description: { ko: "가장 빠르고 간편하게 해결하는 저녁", en: "Fastest and easiest dinner solution" } 
    },
    { 
        name: { ko: "타코", en: "Taco" }, 
        category: "simple", 
        imagePrompt: "A vibrant photograph of Mexican Street Tacos, soft corn tortillas filled with grilled meat, fresh cilantro, onions, and lime wedges, served on a colorful plate.",
        description: { ko: "멕시코 풍미를 가볍게 즐기는 한 끼", en: "Light meal with Mexican flavors" } 
    },
    { 
        name: { ko: "요거트 볼", en: "Yogurt Bowl" }, 
        category: "simple", 
        imagePrompt: "A beautiful Yogurt Bowl photograph, thick Greek yogurt topped with fresh blueberries, strawberries, granola, and a drizzle of honey, healthy breakfast or light dinner style.",
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
        span.style.fontSize = (Math.random() * 1.2 + 1) + 'rem';
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
    
    setTimeout(() => {
        const menu = getRandomMenu();
        const luckyNumStr = generateLuckyNumber();
        
        // 이미지 검색용 프롬프트 인코딩 및 URL 생성
        const searchPrompt = encodeURIComponent(menu.imagePrompt);
        menuImage.src = `https://source.unsplash.com/featured/800x600/?${searchPrompt}`;
        menuImage.alt = menu.name[currentLang];
        
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
