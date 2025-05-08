import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./Footer.scss";
import {FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {

  return (
    <footer className="footerContainer">
        <div className="legal">
          <Link to="/LegalNotices">Mentions légales</Link>
          <Link to="/GeneralConditionsOfSale">CGV</Link>
          <Link to="/PrivacyPolicy">Politique de confidentialité</Link>
        </div>
        <p className="copyright">
          &copy; 2025 D'iris & d'art. Tous droits réservés. - Site crée par JHdev
        </p>
    </footer>
  );
};

export default Footer;
