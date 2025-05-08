import "./privacyPolicy.scss";

import React, { useEffect } from "react";

function PrivacyPolicy(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="privacyPolicyContainer">
      <main>
        <h2>Politique de Confidentialité</h2>
        <h3>1. Introduction</h3>
        <br />
        La présente politique de confidentialité explique comment l'entreprise
        "D'iris & d'art" collecte, utilise et protège les informations
        personnelles des utilisateurs du site "D'iris & d'art".
        <br />
        <br />
        <h3>2. Données collectées</h3>
        <br />
        Nous collectons les informations suivantes :<br />
        <br />
        - Données d'identification (nom, prénom, email, téléphone, etc.).
        <br />
        - Données de navigation (adresse IP, type de navigateur, pages visitées,
        etc.).
        <br />
        - Données transactionnelles (moyens de paiement, historique des
        commandes, etc.).
        <br />
        <br />
        <h3>3. Finalité de la collecte</h3>
        <br />
        Les données personnelles sont collectées pour :<br />
        <br />
        - Gérer les commandes et services fournis.
        <br />
        - Assurer le bon fonctionnement du site et améliorer l’expérience
        utilisateur.
        <br />
        - Répondre aux demandes et assurer le support client.
        <br />
        - Envoyer des communications marketing sous réserve de votre
        consentement.
        <br />
        <br />
        <h3>4. Partage des données</h3>
        <br />
        Les données peuvent être partagées avec des prestataires de services
        (paiement, hébergement, livraison) uniquement dans le cadre de
        l’exécution des services demandés.
        <br />
        <br />
        <h3>5. Conservation des données</h3>
        <br />
        Les données sont conservées pendant la durée nécessaire aux finalités
        pour lesquelles elles ont été collectées, conformément aux obligations
        légales en vigueur.
        <br />
        <br />
        <h3>6. Sécurité des données</h3>
        <br />
        Nous mettons en place des mesures de sécurité adaptées pour protéger les
        données contre l’accès non autorisé, la modification, la divulgation ou
        la destruction.
        <br />
        <br />
        <h3>7. Droits des utilisateurs</h3>
        <br />
        Conformément au RGPD, vous disposez des droits suivants :<br />
        <br />
        - Droit d’accès, de rectification et de suppression de vos données.
        <br />
        - Droit d’opposition au traitement de vos données.
        <br />
        - Droit à la portabilité des données.
        <br />
        - Droit à la limitation du traitement.
        <br />
        <br />
        Vous pouvez exercer ces droits en nous contactant à{" "}
        <a href="mailto:dirisdart@gmail.com">dirisdart@gmail.com</a>.
        <br />
        <br />
        <h3>8. Utilisation des cookies</h3>
        <br />
        Le site utilise des cookies pour améliorer l’expérience utilisateur.
        Vous pouvez gérer vos préférences en matière de cookies via les
        paramètres de votre navigateur.
        <br />
        <br />
        <h3>9. Modification de la politique</h3>
        <br />
        Cette politique peut être mise à jour. Toute modification sera publiée
        sur cette page avec une date de mise à jour.
        <br />
        <br />
        <h3>10. Contact</h3>
        <br />
        Pour toute question relative à cette politique, vous pouvez nous
        contacter à l’adresse suivante :{" "}
        <a href="mailto:dirisdart@gmail.com">dirisdart@gmail.com</a>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
