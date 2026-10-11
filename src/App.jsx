import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Heart,
  ShoppingBag,
  Menu,
  X,
  Sun,
  Moon,
  Search,
  Plus,
  Minus,
  Check,
  MoveUpRight,
} from "lucide-react";
import "./index.css";


function PremiumIntro({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const value = Math.min(
        100,
        Math.round(((Date.now() - start) / 1800) * 100)
      );

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setTimeout(onFinish, 350);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="premium-intro">
      <div className="intro-content">
        <span className="intro-caption">DESIGNED FOR LIVING</span>

        <h1>
          LUNARO<span>.</span>
        </h1>

        <p>Objects of timeless beauty.</p>

        <div className="intro-progress">
          <div style={{ width: `${progress}%` }} />
        </div>

        <div className="intro-bottom">
          <span>EST. 2026</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}

const words = {
  UZ: {
    home: "Bosh sahifa",
    collection: "Katalog",
    about: "Biz haqimizda",
    contact: "Aloqa",
    search: "Mahsulot qidirish...",
    new: "YANGI AVLOD MEbEL DIZAYNI",
    hero1: "Makon.",
    hero2: "O‘ziga xos.",
    heroText:
      "Har bir buyum — xarakter, qulaylik va zamonaviy dizaynning uyg‘unligi.",
    discover: "Kolleksiyani kashf etish",
    scroll: "PASTGA SURING",
    selected: "TANLANGAN BUYUMLAR",
    featuredTitle: "Oddiy buyumlar emas.",
    featuredTitle2: "Kelajak klassikasi.",
    allProducts: "Barcha mahsulotlar",
    view: "Batafsil",
    add: "Savatga qo‘shish",
    added: "Savatga qo‘shildi",
    favorite: "Sevimlilar",
    cart: "Savat",
    aboutLabel: "BIZNING FALSAFAMIZ",
    aboutTitle: "Dizayn — his qilish mumkin bo‘lgan san’at.",
    aboutText:
      "Biz mebelni shunchaki buyum deb bilmaymiz. U siz yashaydigan makonning xarakteri, kundalik hayotingizning bir qismi va yillar davomida qadri oshib boradigan tanlovdir.",
    aboutButton: "Bizning hikoyamiz",
    craft: "Puxta ishlov",
    craftText: "Har bir detalga e’tibor.",
    timeless: "Vaqtsiz dizayn",
    timelessText: "Trenddan ustun shakllar.",
    comfort: "Haqiqiy qulaylik",
    comfortText: "Go‘zallik va funksionallik.",
    categories: "KATEGORIYALAR",
    categoriesTitle: "Makonni o‘zingizga moslang.",
    chairs: "Kreslolar",
    sofas: "Divanlar",
    tables: "Stollar",
    lighting: "Yoritish",
    catalogLabel: "BIZNING KOLLEKSIYA",
    catalogTitle: "Sizga mos buyum topiladi.",
    catalogText: "Tanlangan dizayn. O‘ylangan detallar. Har kungi qulaylik.",
    all: "Barchasi",
    sort: "Saralash",
    recommended: "Tavsiya etilgan",
    low: "Avval arzonlari",
    high: "Avval qimmatlari",
    newest: "Yangi mahsulotlar",
    results: "ta mahsulot",
    noResults: "Mahsulot topilmadi.",
    clear: "Qidiruvni tozalash",
    aboutPageTitle: "Yaxshi dizayn makondan boshlanadi.",
    aboutPageText:
      "Lunaro — estetikani kundalik hayot bilan birlashtiradigan mustaqil mebel konsepsiyasi. Bizning maqsadimiz shunchaki xona to‘ldirish emas, balki siz o‘zingizni yaxshi his qiladigan muhit yaratish.",
    principle: "Biz ishonadigan tamoyillar",
    principle1: "Shakl va funksiyaning uyg‘unligi",
    principle2: "Uzoq xizmat qiladigan materiallar",
    principle3: "Har bir detalda soddalik",
    contactTitle: "Keling, makoningiz haqida gaplashamiz.",
    contactText:
      "Yangi loyiha, mahsulot yoki hamkorlik haqida savolingiz bormi? Bizga xabar qoldiring.",
    name: "Ismingiz",
    email: "Elektron pochtangiz",
    subject: "Mavzu",
    message: "Xabaringiz",
    send: "Xabar yuborish",
    sent: "Rahmat! Xabaringiz tayyor.",
    sentText: "Demo forma ishladi. Haqiqiy yuborish uchun server ulanishi kerak.",
    address: "Manzil",
    hours: "Ish vaqti",
    hoursText: "Dushanba – Shanba, 09:00–18:00",
    follow: "BIZNI KUZATING",
    newsletter: "Yaxshi makonlar haqida.",
    newsletterText: "Yangi kolleksiyalar va dizayn ilhomlari.",
    emailShort: "Email manzilingiz",
    subscribe: "Obuna bo‘lish",
    footerText: "Makon uchun o‘ylangan dizayn.",
    rights: "Barcha huquqlar himoyalangan.",
    emptyCart: "Savatingiz hozircha bo‘sh.",
    emptyFav: "Sevimlilar ro‘yxati bo‘sh.",
    continue: "Katalogga qaytish",
    total: "Jami",
    remove: "O‘chirish",
    checkout: "Buyurtmani rasmiylashtirish",
    backHome: "Bosh sahifaga qaytish",
    sale: "YANGI",
    made: "Yaxshi makon — yaxshi hayot.",
    contactCTA: "Biz bilan bog‘laning",
    quantity: "Miqdor",
  },
  EN: {
    home: "Home",
    collection: "Collection",
    about: "About us",
    contact: "Contact",
    search: "Search products...",
    new: "A NEW GENERATION OF FURNITURE",
    hero1: "Space.",
    hero2: "Distinctive.",
    heroText:
      "Every piece is a balance of character, comfort and contemporary design.",
    discover: "Discover the collection",
    scroll: "SCROLL TO EXPLORE",
    selected: "THE EDIT",
    featuredTitle: "Not just furniture.",
    featuredTitle2: "Future classics.",
    allProducts: "View all products",
    view: "Discover",
    add: "Add to bag",
    added: "Added to bag",
    favorite: "Wishlist",
    cart: "Bag",
    aboutLabel: "OUR PHILOSOPHY",
    aboutTitle: "Design is an art you can feel.",
    aboutText:
      "Furniture is more than an object. It gives character to your space, becomes part of your everyday life and grows more meaningful over time.",
    aboutButton: "Our story",
    craft: "Thoughtful craft",
    craftText: "Considered down to the detail.",
    timeless: "Timeless design",
    timelessText: "Shapes beyond passing trends.",
    comfort: "Everyday comfort",
    comfortText: "Beauty meets function.",
    categories: "CATEGORIES",
    categoriesTitle: "Make the space your own.",
    chairs: "Seating",
    sofas: "Sofas",
    tables: "Tables",
    lighting: "Lighting",
    catalogLabel: "THE COLLECTION",
    catalogTitle: "Find your next favourite.",
    catalogText: "Considered design. Thoughtful details. Everyday comfort.",
    all: "All pieces",
    sort: "Sort by",
    recommended: "Recommended",
    low: "Price: low to high",
    high: "Price: high to low",
    newest: "Newest first",
    results: "products",
    noResults: "No products found.",
    clear: "Clear search",
    aboutPageTitle: "Good design begins with space.",
    aboutPageText:
      "Lunaro is an independent furniture concept connecting aesthetics with everyday life. We aim to create environments where you feel good, not simply fill a room.",
    principle: "What we believe in",
    principle1: "Form and function in balance",
    principle2: "Materials made to last",
    principle3: "Simplicity in every detail",
    contactTitle: "Let's talk about your space.",
    contactText:
      "Have a question about a project, a product or a collaboration? Send us a message.",
    name: "Your name",
    email: "Your email",
    subject: "Subject",
    message: "Your message",
    send: "Send message",
    sent: "Thank you! Your message is ready.",
    sentText: "The demo form works. A server connection is needed to send it.",
    address: "Location",
    hours: "Opening hours",
    hoursText: "Monday – Saturday, 9 AM–6 PM",
    follow: "FOLLOW OUR JOURNEY",
    newsletter: "For spaces worth living in.",
    newsletterText: "New collections and design inspiration.",
    emailShort: "Your email address",
    subscribe: "Subscribe",
    footerText: "Design made for living.",
    rights: "All rights reserved.",
    emptyCart: "Your bag is empty for now.",
    emptyFav: "Your wishlist is empty.",
    continue: "Continue shopping",
    total: "Total",
    remove: "Remove",
    checkout: "Proceed to checkout",
    backHome: "Back to home",
    sale: "NEW",
    made: "Better spaces. Better living.",
    contactCTA: "Get in touch",
    quantity: "Quantity",
  },
  RU: {
    home: "Главная",
    collection: "Каталог",
    about: "О нас",
    contact: "Контакты",
    search: "Поиск товаров...",
    new: "НОВОЕ ПОКОЛЕНИЕ МЕБЕЛЬНОГО ДИЗАЙНА",
    hero1: "Пространство.",
    hero2: "С характером.",
    heroText:
      "Каждый предмет — сочетание характера, комфорта и современного дизайна.",
    discover: "Открыть коллекцию",
    scroll: "ЛИСТАЙТЕ НИЖЕ",
    selected: "ИЗБРАННАЯ КОЛЛЕКЦИЯ",
    featuredTitle: "Не просто мебель.",
    featuredTitle2: "Классика будущего.",
    allProducts: "Вся коллекция",
    view: "Подробнее",
    add: "В корзину",
    added: "Добавлено",
    favorite: "Избранное",
    cart: "Корзина",
    aboutLabel: "НАША ФИЛОСОФИЯ",
    aboutTitle: "Дизайн — искусство, которое можно почувствовать.",
    aboutText:
      "Мебель — это больше, чем предмет. Она придаёт характер пространству, становится частью повседневной жизни и со временем приобретает ещё большую ценность.",
    aboutButton: "Наша история",
    craft: "Продуманное мастерство",
    craftText: "Внимание к каждой детали.",
    timeless: "Вневременной дизайн",
    timelessText: "Формы вне мимолётных трендов.",
    comfort: "Настоящий комфорт",
    comfortText: "Красота и функциональность.",
    categories: "КАТЕГОРИИ",
    categoriesTitle: "Создайте своё пространство.",
    chairs: "Кресла",
    sofas: "Диваны",
    tables: "Столы",
    lighting: "Освещение",
    catalogLabel: "НАША КОЛЛЕКЦИЯ",
    catalogTitle: "Найдите то, что вам близко.",
    catalogText: "Продуманный дизайн. Точные детали. Комфорт каждый день.",
    all: "Все товары",
    sort: "Сортировка",
    recommended: "Рекомендуемые",
    low: "Сначала дешевле",
    high: "Сначала дороже",
    newest: "Сначала новинки",
    results: "товаров",
    noResults: "Товары не найдены.",
    clear: "Очистить поиск",
    aboutPageTitle: "Хороший дизайн начинается с пространства.",
    aboutPageText:
      "Lunaro — независимая мебельная концепция, объединяющая эстетику и повседневную жизнь. Наша цель — создавать среду, в которой вам хорошо.",
    principle: "Наши принципы",
    principle1: "Баланс формы и функции",
    principle2: "Материалы, созданные надолго",
    principle3: "Простота в каждой детали",
    contactTitle: "Давайте обсудим ваше пространство.",
    contactText:
      "Есть вопрос о проекте, товаре или сотрудничестве? Напишите нам.",
    name: "Ваше имя",
    email: "Ваш email",
    subject: "Тема",
    message: "Ваше сообщение",
    send: "Отправить сообщение",
    sent: "Спасибо! Ваше сообщение готово.",
    sentText: "Демо-форма работает. Для отправки нужен сервер.",
    address: "Адрес",
    hours: "Часы работы",
    hoursText: "Понедельник – суббота, 09:00–18:00",
    follow: "МЫ В СОЦСЕТЯХ",
    newsletter: "Пространство для жизни.",
    newsletterText: "Новые коллекции и идеи для интерьера.",
    emailShort: "Ваш email",
    subscribe: "Подписаться",
    footerText: "Дизайн для жизни.",
    rights: "Все права защищены.",
    emptyCart: "Ваша корзина пока пуста.",
    emptyFav: "В избранном пока ничего нет.",
    continue: "Вернуться в каталог",
    total: "Итого",
    remove: "Удалить",
    checkout: "Оформить заказ",
    backHome: "На главную",
    sale: "НОВИНКА",
    made: "Лучшее пространство. Лучшая жизнь.",
    contactCTA: "Связаться с нами",
    quantity: "Количество",
  },
};

const products = [
  {
    id: 1,
    name: { UZ: "Forma lounge kreslosi", EN: "Forma lounge chair", RU: "Кресло Forma" },
    category: "chairs",
    price: 4850000,
    image: "photo-1567538096630-e0c55bd6374c",
    tag: "sale",
  },
  {
    id: 2,
    name: { UZ: "Sculpt divani", EN: "Sculpt sofa", RU: "Диван Sculpt" },
    category: "sofas",
    price: 12800000,
    image: "photo-1555041469-a586c61ea9bc",
    tag: "",
  },
  {
    id: 3,
    name: { UZ: "Arc yon stoli", EN: "Arc side table", RU: "Приставной столик Arc" },
    category: "tables",
    price: 2650000,
    image: "photo-1499933374294-4584851497cc",
    tag: "",
  },
  {
    id: 4,
    name: { UZ: "Luma pol lampasi", EN: "Luma floor lamp", RU: "Торшер Luma" },
    category: "lighting",
    price: 1980000,
    image: "photo-1507473885765-e6ed057f782c",
    tag: "sale",
  },
  {
    id: 5,
    name: { UZ: "Noma dizayner kreslosi", EN: "Noma accent chair", RU: "Дизайнерское кресло Noma" },
    category: "chairs",
    price: 5350000,
    image: "photo-1598300053653-3e7b2e0a5e5c",
    tag: "",
  },
  {
    id: 6,
    name: { UZ: "Morrow modulli divan", EN: "Morrow modular sofa", RU: "Модульный диван Morrow" },
    category: "sofas",
    price: 15700000,
    image: "photo-1550254478-ead40cc54513",
    tag: "",
  },
  {
    id: 7,
    name: { UZ: "Linea ovqatlanish stoli", EN: "Linea dining table", RU: "Обеденный стол Linea" },
    category: "tables",
    price: 8950000,
    image: "photo-161 table",
    tag: "",
  },
  {
    id: 8,
    name: { UZ: "Halo osma chiroq", EN: "Halo pendant light", RU: "Подвесной светильник Halo" },
    category: "lighting",
    price: 2350000,
    image: "photo-1507473885765-e6ed057f782c",
    tag: "",
  },
  {
    id: 9,
    name: { UZ: "Muse yumshoq kreslo", EN: "Muse soft chair", RU: "Мягкое кресло Muse" },
    category: "chairs",
    price: 4200000,
    image: "photo-1567538096630-e0c55bd6374c",
    tag: "",
  },
  {
    id: 10,
    name: { UZ: "Cloud ikki kishilik divan", EN: "Cloud two-seat sofa", RU: "Двухместный диван Cloud" },
    category: "sofas",
    price: 11400000,
    image: "photo-1555041469-a586c61ea9bc",
    tag: "",
  },
  {
    id: 11,
    name: { UZ: "Onda kofe stoli", EN: "Onda coffee table", RU: "Журнальный столик Onda" },
    category: "tables",
    price: 3150000,
    image: "photo-1499933374294-4584851497cc",
    tag: "",
  },
  {
    id: 12,
    name: { UZ: "Orb stol chirog‘i", EN: "Orb table lamp", RU: "Настольная лампа Orb" },
    category: "lighting",
    price: 1450000,
    image: "photo-1507473885765-e6ed057f782c",
    tag: "",
  },
  {
    id: 13,
    name: { UZ: "Milo ixcham kreslo", EN: "Milo compact chair", RU: "Компактное кресло Milo" },
    category: "chairs",
    price: 3650000,
    image: "photo-1598300053653-3e7b2e0a5e5c",
    tag: "",
  },
  {
    id: 14,
    name: { UZ: "Forma keng divan", EN: "Forma wide sofa", RU: "Широкий диван Forma" },
    category: "sofas",
    price: 16900000,
    image: "photo-1550254478-ead40cc54513",
    tag: "",
  },
  {
    id: 15,
    name: { UZ: "Axis yon stoli", EN: "Axis side table", RU: "Приставной столик Axis" },
    category: "tables",
    price: 2850000,
    image: "photo-1499933374294-4584851497cc",
    tag: "",
  },
  {
    id: 16,
    name: { UZ: "Sol arxitektura lampasi", EN: "Sol architectural lamp", RU: "Архитектурный светильник Sol" },
    category: "lighting",
    price: 3250000,
    image: "photo-1507473885765-e6ed057f782c",
    tag: "",
  },
];

function money(price) {
  return new Intl.NumberFormat("uz-UZ").format(price) + " so‘m";
}

function photo(id, width = 900) {
  const fixedIds = {
    "photo-161 table": "photo-1615874694520-474822394e73",
  };

  const imageId = fixedIds[id] || id;

  return `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=${width}&q=80`;
}

function AppShell() {
const [introFinished, setIntroFinished] = useState(false);

function finishIntro() {
  setIntroFinished(true);
}

  const [language, setLanguage] = useState(
    () => localStorage.getItem("lunaro-language") || "UZ"
  );
  const [dark, setDark] = useState(
    () => localStorage.getItem("lunaro-theme") === "dark"
  );
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("lunaro-favorites") || "[]");
    } catch {
      return [];
    }
  });
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("lunaro-cart") || "[]");
    } catch {
      return [];
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const t = words[language];
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("lunaro-language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("lunaro-theme", dark ? "dark" : "light");
    document.body.classList.toggle("dark-mode", dark);
  }, [dark]);

  useEffect(() => {
    localStorage.setItem("lunaro-favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("lunaro-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 2200);
    return () => clearTimeout(timer);
  }, [notice]);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function addToCart(id) {
    setCart((current) => {
      const existing = current.find((item) => item.id === id);
      if (existing) {
        return current.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...current, { id, qty: 1 }];
    });
    setNotice(t.added);
  }

  function changeQty(id, amount) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + amount } : item
        )
        .filter((item) => item.qty > 0)
    );
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  const shared = {
    t,
    language,
    setLanguage,
    dark,
    setDark,
    favorites,
    cart,
    toggleFavorite,
    addToCart,
    changeQty,
    removeFromCart,
    setNotice,
  };

  return (
  <>
    {!introFinished && (
      <PremiumIntro onFinish={finishIntro} />
    )}

    <div className="site-shell">
      <Header {...shared} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Routes>
          <Route path="/" element={<Home {...shared} />} />
          <Route path="/collection" element={<Collection {...shared} />} />
          <Route path="/about" element={<About {...shared} />} />
          <Route path="/contact" element={<Contact {...shared} />} />
          <Route path="/favorites" element={<Favorites {...shared} />} />
          <Route path="/cart" element={<Cart {...shared} />} />
          <Route path="*" element={<Home {...shared} />} />
        </Routes>
      </main>

      <Footer {...shared} />

      {notice && (
        <div className="toast" role="status">
          <span className="toast-check"><Check size={17} /></span>
          {notice}
        </div>
      )}
        </div>
  </>
  );
}

function Header({
  t,
  language,
  setLanguage,
  dark,
  setDark,
  favorites,
  cart,
  menuOpen,
  setMenuOpen,
}) {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Lunaro home">
        <span className="brand-mark">L.</span>
        <span className="brand-name">LUNARO<span>®</span></span>
      </Link>

      <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
        <NavLink to="/">{t.home}</NavLink>
        <NavLink to="/collection">{t.collection}</NavLink>
        <NavLink to="/about">{t.about}</NavLink>
        <NavLink to="/contact">{t.contact}</NavLink>
      </nav>

      <div className="header-actions">
        <div className="language-switcher" aria-label="Choose language">
          {["UZ", "EN", "RU"].map((lang) => (
            <button
              key={lang}
              className={language === lang ? "language-btn active" : "language-btn"}
              onClick={() => setLanguage(lang)}
              aria-pressed={language === lang}
            >
              {lang}
            </button>
          ))}
        </div>

        <button
          className="icon-button theme-toggle"
          onClick={() => setDark(!dark)}
          aria-label="Toggle color theme"
          title={dark ? "Light mode" : "Dark mode"}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <Link className="icon-button header-icon" to="/favorites" aria-label={t.favorite}>
          <Heart size={19} />
          {favorites.length > 0 && <span className="count-dot">{favorites.length}</span>}
        </Link>

        <Link className="icon-button header-icon" to="/cart" aria-label={t.cart}>
          <ShoppingBag size={19} />
          {cart.length > 0 && (
            <span className="count-dot">
              {cart.reduce((sum, item) => sum + item.qty, 0)}
            </span>
          )}
        </Link>

        <button
          className="icon-button mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function ProductCard({ product, shared, index = 0 }) {
  const { t, language, favorites, toggleFavorite, addToCart } = shared;
  const liked = favorites.includes(product.id);

  return (
    <article className="product-card" style={{ "--card-index": index }}>
      <div className="product-image-wrap">
        <Link to="/collection" className="product-image-link" aria-label={product.name[language]}>
          <img
            className="product-image"
            src={photo(product.image, 760)}
            alt={product.name[language]}
            loading="lazy"
          />
        </Link>

        {product.tag && <span className="product-tag">{t.sale}</span>}

        <button
          className={`favorite-button ${liked ? "is-favorite" : ""}`}
          onClick={() => toggleFavorite(product.id)}
          aria-label={t.favorite}
          aria-pressed={liked}
        >
          <Heart size={18} fill={liked ? "currentColor" : "none"} />
        </button>

        <button
          className="quick-add"
          onClick={() => addToCart(product.id)}
        >
          <span>{t.add}</span>
          <ArrowUpRight size={17} />
        </button>

        <span className="product-number">L / {String(product.id).padStart(2, "0")}</span>
      </div>

      <div className="product-info">
        <div>
          <span className="product-category">
            {t[product.category] || product.category}
          </span>
          <h3>{product.name[language]}</h3>
        </div>
        <span className="product-price">{money(product.price)}</span>
      </div>
    </article>
  );
}

function Home(shared) {
  const { t } = shared;
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" />{t.new}</p>
          <h1>{t.hero1}<br /><em>{t.hero2}</em></h1>
          <p className="hero-description">{t.heroText}</p>
          <Link to="/collection" className="button button-dark hero-button">
            {t.discover}<ArrowUpRight size={18} />
          </Link>
          <div className="hero-bottom-note">
            <span>01 — 04</span>
            <span className="hero-note-line" />
            <span>LUNARO STUDIO</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1300&q=90"
              alt="Sculptural modern furniture in a warm minimalist interior"
            />
          </div>
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-stamp">
            <span>DESIGNED</span>
            <strong>FOR<br />LIVING</strong>
            <span>EST. 2026</span>
          </div>
          <div className="hero-caption">
            <span>FIG. 001</span>
            <span>THE ART OF SLOW LIVING</span>
          </div>
        </div>

        <a className="scroll-cue" href="#selected">
          <span>{t.scroll}</span><ArrowDownRight size={17} />
        </a>
      </section>

      <section className="ticker" aria-label="Brand values">
        <div className="ticker-track">
          {[0, 1, 2, 3].map((item) => (
            <span key={item}>
              THOUGHTFUL DESIGN <i>✳</i> TIMELESS OBJECTS <i>✳</i> MADE TO LIVE WITH <i>✳</i>
            </span>
          ))}
        </div>
      </section>

      <section className="section featured-section" id="selected">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" />{t.selected}</p>
            <h2>{t.featuredTitle}<br /><em>{t.featuredTitle2}</em></h2>
          </div>
          <Link className="text-link" to="/collection">
            {t.allProducts}<ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="product-grid featured-grid">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} shared={shared} index={index} />
          ))}
        </div>
      </section>

      <section className="manifesto-section">
        <div className="manifesto-image">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt="Carefully styled contemporary living space"
            loading="lazy"
          />
          <span className="image-index">FIG. 002 — LIVING SPACE</span>
        </div>
        <div className="manifesto-copy">
          <p className="eyebrow"><span className="eyebrow-line" />{t.aboutLabel}</p>
          <h2>{t.aboutTitle}</h2>
          <p className="body-copy">{t.aboutText}</p>
          <Link to="/about" className="circle-link">
            <span>{t.aboutButton}</span><ArrowUpRight size={20} />
          </Link>

          <div className="value-list">
            <div className="value-item">
              <span className="value-index">01</span>
              <div><h3>{t.craft}</h3><p>{t.craftText}</p></div>
              <MoveUpRight size={18} />
            </div>
            <div className="value-item">
              <span className="value-index">02</span>
              <div><h3>{t.timeless}</h3><p>{t.timelessText}</p></div>
              <MoveUpRight size={18} />
            </div>
            <div className="value-item">
              <span className="value-index">03</span>
              <div><h3>{t.comfort}</h3><p>{t.comfortText}</p></div>
              <MoveUpRight size={18} />
            </div>
          </div>
        </div>
      </section>

      <section className="category-section section">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" />{t.categories}</p>
            <h2>{t.categoriesTitle}</h2>
          </div>
        </div>
        <div className="category-grid">
          {[
            { key: "chairs", image: "photo-1567538096630-e0c55bd6374c", num: "01" },
            { key: "sofas", image: "photo-1555041469-a586c61ea9bc", num: "02" },
            { key: "tables", image: "photo-1499933374294-4584851497cc", num: "03" },
            { key: "lighting", image: "photo-1507473885765-e6ed057f782c", num: "04" },
          ].map((cat) => (
            <Link
              key={cat.key}
              to="/collection"
              className="category-card"
            >
              <img src={photo(cat.image, 600)} alt={t[cat.key]} loading="lazy" />
              <span className="category-num">{cat.num}</span>
              <div className="category-label">
                <h3>{t[cat.key]}</h3><ArrowUpRight size={20} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-banner">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" />LUNARO STUDIO</p>
          <h2>{t.made}</h2>
        </div>
        <Link to="/contact" className="button button-light">
          {t.contactCTA}<ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  );
}

function Collection(shared) {
  const { t, language } = shared;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("recommended");

  let filtered = products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesQuery = product.name[language].toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  if (sort === "low") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "high") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "newest") filtered = [...filtered].sort((a, b) => b.id - a.id);

  return (
    <section className="collection-page page-section">
      <div className="page-hero">
        <p className="eyebrow"><span className="eyebrow-line" />{t.catalogLabel}</p>
        <h1>{t.catalogTitle}</h1>
        <p>{t.catalogText}</p>
        <span className="page-hero-number">COLLECTION / 016</span>
      </div>

      <div className="catalog-toolbar">
        <div className="category-filters">
          {["all", "chairs", "sofas", "tables", "lighting"].map((key) => (
            <button
              key={key}
              className={category === key ? "filter-chip selected" : "filter-chip"}
              onClick={() => setCategory(key)}
            >
              {key === "all" ? t.all : t[key]}
            </button>
          ))}
        </div>
        <div className="catalog-tools">
          <label className="search-box">
            <Search size={17} />
            <input
              type="search"
              placeholder={t.search}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && <button onClick={() => setQuery("")} aria-label={t.clear}><X size={15} /></button>}
          </label>
          <label className="sort-box">
            <span>{t.sort}</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="recommended">{t.recommended}</option>
              <option value="low">{t.low}</option>
              <option value="high">{t.high}</option>
              <option value="newest">{t.newest}</option>
            </select>
          </label>
        </div>
      </div>

      <div className="catalog-count">{filtered.length} {t.results}</div>

      {filtered.length > 0 ? (
        <div className="product-grid catalog-grid">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} shared={shared} index={index} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={30} />
          <h2>{t.noResults}</h2>
          <button className="text-link" onClick={() => { setQuery(""); setCategory("all"); }}>
            {t.clear}<ArrowRight size={17} />
          </button>
        </div>
      )}
    </section>
  );
}

function About({ t }) {
  return (
    <section className="about-page page-section">
      <div className="page-hero about-page-hero">
        <p className="eyebrow"><span className="eyebrow-line" />LUNARO — EST. 2026</p>
        <h1>{t.aboutPageTitle}</h1>
        <p>{t.aboutPageText}</p>
      </div>

      <div className="about-editorial">
        <div className="about-editorial-image">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1300&q=85"
            alt="Warm minimalist interior"
          />
          <span className="image-index">OUR POINT OF VIEW — 01</span>
        </div>
        <div className="about-editorial-copy">
          <span className="giant-quote">“</span>
          <h2>{t.aboutTitle}</h2>
          <p className="body-copy">{t.aboutText}</p>
          <span className="signature">Lunaro Studio</span>
        </div>
      </div>

      <div className="principles">
        <p className="eyebrow"><span className="eyebrow-line" />OUR PRINCIPLES</p>
        <h2>{t.principle}</h2>
        {[t.principle1, t.principle2, t.principle3].map((item, index) => (
          <div className="principle-row" key={item}>
            <span>0{index + 1}</span>
            <h3>{item}</h3>
            <ArrowUpRight size={21} />
          </div>
        ))}
      </div>

      <div className="about-bottom-image">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
          alt="Architectural interior and modern furniture"
          loading="lazy"
        />
        <div><span>THE LUNARO APPROACH</span><h2>Objects with intention.</h2></div>
      </div>
    </section>
  );
}

function Contact({ t }) {
  const [sent, setSent] = useState(false);

  function submitForm(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section className="contact-page page-section">
      <div className="contact-page-grid">
        <div className="contact-intro">
          <p className="eyebrow"><span className="eyebrow-line" />LUNARO STUDIO / CONTACT</p>
          <h1>{t.contactTitle}</h1>
          <p className="body-copy">{t.contactText}</p>

          <div className="contact-detail">
            <span>{t.email}</span>
            <a href="mailto:hello@lunaro.studio">hello@lunaro.studio <ArrowUpRight size={16} /></a>
          </div>
          <div className="contact-detail">
            <span>{t.address}</span>
            <p>Samarkand, Uzbekistan</p>
          </div>
          <div className="contact-detail">
            <span>{t.hours}</span>
            <p>{t.hoursText}</p>
          </div>
        </div>

        <div className="contact-form-wrap">
          {sent ? (
            <div className="form-success">
              <span className="success-icon"><Check size={25} /></span>
              <h2>{t.sent}</h2>
              <p>{t.sentText}</p>
              <button className="button button-dark" onClick={() => setSent(false)}>
                {t.send}<ArrowRight size={18} />
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submitForm}>
              <label>{t.name}<input required name="name" placeholder={t.name} /></label>
              <label>{t.email}<input required type="email" name="email" placeholder={t.email} /></label>
              <label>{t.subject}<input required name="subject" placeholder={t.subject} /></label>
              <label>{t.message}<textarea required name="message" rows="5" placeholder={t.message} /></label>
              <button className="button button-dark form-submit" type="submit">
                {t.send}<ArrowUpRight size={18} />
              </button>
              <p className="form-note">{t.sentText}</p>
            </form>
          )}
        </div>
      </div>
      <div className="contact-bottom">
        <span>HAVE A GOOD DAY.</span>
        <span>WE’LL BE IN TOUCH.</span>
      </div>
    </section>
  );
}

function Favorites(shared) {
  const { t, favorites } = shared;
  const saved = products.filter((product) => favorites.includes(product.id));

  return (
    <section className="utility-page page-section">
      <div className="page-hero">
        <p className="eyebrow"><span className="eyebrow-line" />YOUR PERSONAL EDIT</p>
        <h1>{t.favorite}</h1>
      </div>
      {saved.length ? (
        <div className="product-grid catalog-grid">
          {saved.map((product, index) => (
            <ProductCard key={product.id} product={product} shared={shared} index={index} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Heart size={32} />
          <h2>{t.emptyFav}</h2>
          <Link className="button button-dark" to="/collection">{t.continue}<ArrowRight size={18} /></Link>
        </div>
      )}
    </section>
  );
}

function Cart(shared) {
  const { t, cart, changeQty, removeFromCart } = shared;
  const navigate = useNavigate();
  const items = cart.map((item) => ({
    ...item,
    product: products.find((product) => product.id === item.id),
  })).filter((item) => item.product);
  const total = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  return (
    <section className="cart-page page-section">
      <div className="page-hero">
        <p className="eyebrow"><span className="eyebrow-line" />YOUR SELECTION</p>
        <h1>{t.cart}</h1>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <ShoppingBag size={34} />
          <h2>{t.emptyCart}</h2>
          <Link className="button button-dark" to="/collection">{t.continue}<ArrowRight size={18} /></Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map(({ id, qty, product }) => (
              <article className="cart-item" key={id}>
                <img src={photo(product.image, 360)} alt={product.name[shared.language]} />
                <div className="cart-item-details">
                  <span className="product-category">{t[product.category]}</span>
                  <h3>{product.name[shared.language]}</h3>
                  <strong>{money(product.price)}</strong>
                  <button className="remove-link" onClick={() => removeFromCart(id)}>{t.remove}</button>
                </div>
                <div className="quantity-control">
                  <button onClick={() => changeQty(id, -1)} aria-label="Decrease quantity"><Minus size={14} /></button>
                  <span>{qty}</span>
                  <button onClick={() => changeQty(id, 1)} aria-label="Increase quantity"><Plus size={14} /></button>
                </div>
              </article>
            ))}
          </div>
          <aside className="cart-summary">
            <span className="eyebrow">ORDER SUMMARY</span>
            <div className="summary-line"><span>{t.results}</span><span>{items.reduce((sum, item) => sum + item.qty, 0)}</span></div>
            <div className="summary-line summary-total"><span>{t.total}</span><strong>{money(total)}</strong></div>
            <button className="button button-dark checkout-button" onClick={() => navigate("/contact")}>
              {t.checkout}<ArrowUpRight size={18} />
            </button>
            <p className="form-note">{t.sentText}</p>
          </aside>
        </div>
      )}
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark">L.</span>
            <span className="brand-name">LUNARO<span>®</span></span>
          </Link>
          <p>{t.footerText}</p>
          <a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            
          </a>
        </div>

        <div className="footer-links">
          <span className="footer-heading">EXPLORE</span>
          <Link to="/">{t.home}</Link>
          <Link to="/collection">{t.collection}</Link>
          <Link to="/about">{t.about}</Link>
          <Link to="/contact">{t.contact}</Link>
        </div>

        <div className="footer-newsletter">
          <span className="footer-heading">{t.follow}</span>
          <h3>{t.newsletter}</h3>
          <p>{t.newsletterText}</p>
          <form onSubmit={(event) => event.preventDefault()} className="newsletter-form">
            <input type="email" required placeholder={t.emailShort} />
            <button type="submit" aria-label={t.subscribe}><ArrowUpRight size={20} /></button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© LUNARO 2026. {t.rights}</span>
        <span>DESIGNED WITH INTENTION — SAMARKAND</span>
        <Link to="/">{t.home}<ArrowUpRight size={14} /></Link>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}