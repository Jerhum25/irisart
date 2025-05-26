import { Link } from "react-router";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="legal">
        <Link to="/LegalNotices">Mentions légales</Link>
        <Link to="/GeneralConditionsOfSale">CGV</Link>
        <Link to="/PrivacyPolicy">Politique de confidentialité</Link>
      </div>
      <p className="copyright">
        &copy; 2025 D'iris & d'art. Tous droits réservés. - Site réalisé par{" "}
        <a href="https://jhdev.fr">JHdev</a>
      </p>
    </footer>
  );
};

export default Footer;
