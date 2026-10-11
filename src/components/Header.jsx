import {
  Heart,
  ShoppingBag,
  Sun,
  Moon,
  Menu,
  X,
  Globe,
} from "lucide-react";
import { useState } from "react";

export default function Header({
  lang,
  setLang,
  theme,
  setTheme,
  cartCount,
  favoriteCount,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const text = {
    uz: ["Bosh sahifa", "Katalog", "Biz haqimizda", "Aloqa"],
    ru: ["Главная", "Каталог", "О нас", "Контакты"],
    en: ["Home", "Collection", "About us", "Contact"],
  }[lang];

  const nextLang = { uz: "ru", ru: "en", en: "uz" };

  return (
    <header className="site-header">
      <a href="#home" className="logo" aria-label="Lunaro home">
        LUNARO<span>.</span>
        <small>FURNITURE STUDIO</small>
      </a>

      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
        {text.map((item, index) => (
          <a
            href={["#home", "#collection", "#about", "#contact"][index]}
            key={item}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="icon-button language-button"
          onClick={() => setLang(nextLang[lang])}
          aria-label="Change language"
          title="Change language"
        >
          <Globe size={17} />
          <span>{lang.toUpperCase()}</span>
        </button>

        <button
          className="icon-button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Toggle color theme"
        >
          {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
        </button>

        <a href="#collection" className="icon-button favorite-link" aria-label="Favorites">
          <Heart size={19} />
          {favoriteCount > 0 && <span className="count">{favoriteCount}</span>}
        </a>

        <a href="#cart" className="icon-button cart-link" aria-label="Shopping cart">
          <ShoppingBag size={19} />
          <span className="count">{cartCount}</span>
        </a>

        <button
          className="icon-button mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}