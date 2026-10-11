import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero({ lang }) {
  const content = {
    uz: {
      label: "ZAMONAVIY HAYOT UCHUN",
      title: "Uyingizga",
      highlight: "nafislik",
      end: "olib keling.",
      description:
        "Har bir detalda qulaylik. Har bir chiziqda san’at. Siz uchun yaratilgan zamonaviy mebellar kolleksiyasi.",
      button: "KOLLEKSIYANI KO‘RISH",
      note: "Vaqt sinovidan o‘tadigan dizayn",
    },
    ru: {
      label: "ДЛЯ СОВРЕМЕННОЙ ЖИЗНИ",
      title: "Добавьте",
      highlight: "элегантность",
      end: "в ваш дом.",
      description:
        "Комфорт в каждой детали. Искусство в каждой линии. Коллекция современной мебели для вас.",
      button: "СМОТРЕТЬ КОЛЛЕКЦИЮ",
      note: "Дизайн вне времени",
    },
    en: {
      label: "MADE FOR MODERN LIVING",
      title: "Bring",
      highlight: "elegance",
      end: "into your home.",
      description:
        "Comfort in every detail. Art in every line. A contemporary furniture collection made for you.",
      button: "EXPLORE COLLECTION",
      note: "Design that stands the test of time",
    },
  }[lang];

  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          {content.label}
        </div>

        <h1>
          {content.title}
          <br />
          <span>{content.highlight}</span>
          <br />
          {content.end}
        </h1>

        <p className="hero-description">{content.description}</p>

        <a href="#collection" className="primary-button">
          {content.button}
          <ArrowUpRight size={18} />
        </a>

        <div className="hero-note">
          <span className="note-number">01 / 03</span>
          <span>{content.note}</span>
        </div>
      </div>

      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90"
          alt="Zamonaviy, nafis uslubdagi mehmonxona interyeri"
        />

        <div className="hero-image-caption">
          <span>THE ART OF LIVING</span>
          <span>01 — LIVING ROOM</span>
        </div>

        <a href="#collection" className="hero-round-link" aria-label="Explore furniture">
          <ArrowDownRight size={25} />
        </a>

        <div className="hero-side-label">LUNARO / COLLECTION 2026</div>
      </div>
    </section>
  );
}