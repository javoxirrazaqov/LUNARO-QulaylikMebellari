import { Heart, ShoppingBag, ArrowUpRight } from "lucide-react";

export default function ProductCard({
  product,
  lang,
  favorite,
  onFavorite,
  onAddToCart,
}) {
  const labels = {
    uz: { add: "Savatga qo‘shish", color: "Rang", new: "Yangi", popular: "Mashhur", bestseller: "Ko‘p sotilgan" },
    ru: { add: "В корзину", color: "Цвет", new: "Новинка", popular: "Популярное", bestseller: "Хит продаж" },
    en: { add: "Add to bag", color: "Color", new: "New", popular: "Popular", bestseller: "Bestseller" },
  }[lang];

  const categoryNames = {
    uz: { sofa: "Divanlar", chair: "Stullar", table: "Stollar", bed: "Krovatlar" },
    ru: { sofa: "Диваны", chair: "Стулья", table: "Столы", bed: "Кровати" },
    en: { sofa: "Sofas", chair: "Chairs", table: "Tables", bed: "Beds" },
  }[lang];

  const formatPrice = (price) =>
    new Intl.NumberFormat(lang === "en" ? "en-US" : lang === "ru" ? "ru-RU" : "uz-UZ")
      .format(price) + " UZS";

  const badgeText = product.badge
    ? labels[product.badge.toLowerCase()] || product.badge
    : null;

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />

        {badgeText && <span className="product-badge">{badgeText}</span>}

        <button
          className={`favorite-button ${favorite ? "is-favorite" : ""}`}
          onClick={() => onFavorite(product.id)}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart size={18} fill={favorite ? "currentColor" : "none"} />
        </button>

        <button
          className="quick-add"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingBag size={16} />
          {labels.add}
        </button>
      </div>

      <div className="product-info">
        <div>
          <span className="product-category">{categoryNames[product.category]}</span>
          <h3>{product.name}</h3>
          <p className="product-color">{labels.color}: {product.color}</p>
        </div>
        <span className="product-arrow"><ArrowUpRight size={18} /></span>
      </div>

      <div className="product-price">{formatPrice(product.price)}</div>
    </article>
  );
}