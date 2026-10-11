import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            lunaro<span>.</span>
          </a>
          <p>
            Zamonaviy makonlar uchun nafis mebel.
            Qulaylik va dizayn uyg‘unligi.
          </p>
        </div>

        <div className="footer-links">
          <h3>Sahifalar</h3>
          <a href="#home">Bosh sahifa</a>
          <a href="#collection">Kolleksiya</a>
          <a href="#about">Biz haqimizda</a>
        </div>

        <div className="footer-links">
          <h3>Aloqa</h3>
          <a href="mailto:info@lunaro.uz">
            info@lunaro.uz
          </a>
          <a href="#collection">
            Mahsulotlarni ko‘rish
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="footer-social">
          <h3>Bizni kuzating</h3>
          <div className="social-list">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              IG
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              FB
            </a>
            <a href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Telegram">
              TG
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Lunaro. Barcha huquqlar himoyalangan.</p>
        <p>Did bilan yaratilgan.</p>
      </div>
    </footer>
  );
}

export default Footer;