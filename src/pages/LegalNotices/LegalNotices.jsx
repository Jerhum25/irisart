import "./legalNotices.scss";

import React, { useEffect } from "react";

function LegalNotices(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="legalNoticesContainer">
      <main>
        <h2>Mentions Légales</h2>
        <h3>1. Éditeur du site</h3>
        <br />
        Le site "D'iris & d'art" est édité par JHdev, société
        non créée au capital de 0 €, immatriculée au Registre du
        Commerce et des Sociétés de BESANCON sous le numéro 00000000000000, dont le
        siège social est situé à BESANCON.
        <br />
        <br />
        Email : <a href="mailto:contact@jhdev.fr">contact@jhdev.fr</a>
        <br />
        <br />
        Téléphone : <a href="tel:0606060606">06 06 06 06 06</a>
        <br />
        <br />
        <br />
        <h3>2. Directeur de la publication</h3>
        <br />
        Le directeur de la publication est Jérôme HUMBERT.
        <br />
        <br />
        <br />
        <h3>3. Hébergement</h3>
        <br />
        Le site est hébergé par OVH, situé à 2, rue Kellermann, 59100 Roubaix.
        <br />
        <br />
        Téléphone : <a href="tel:0707070707"> 07 07 07 07 07</a>
        <br />
        <br />
        Site web : <a href="https://www.ovhcloud.com/fr/">https://www.ovhcloud.com/fr/</a>
        <br />
        <br />
        <br />
        <h3>4. Propriété intellectuelle</h3>
        <br />
        L’ensemble des contenus présents sur le site (textes, images, logos,
        vidéos, etc.) sont la propriété exclusive de l'entreprise "D'iris & d'art" ou de
        ses partenaires et sont protégés par les lois en vigueur sur la
        propriété intellectuelle.
        <br />
        Toute reproduction, modification ou diffusion, totale ou partielle, sans
        autorisation préalable est strictement interdite.
        <br />
        <br />
        <br />
        <h3>5. Protection des données personnelles</h3>
        <br />
        Les données personnelles collectées sur le site sont traitées
        conformément à la réglementation en vigueur. Conformément au RGPD, vous
        disposez d’un droit d’accès, de rectification et de suppression des
        données vous concernant. Vous pouvez exercer ces droits en contactant <a href="mailto:dirisdart@gmail.com">dirisdart@gmail.com</a>.
        <br />
        <br />
        <br />
        <h3>6. Cookies</h3>
        <br />
        Le site peut être amené à utiliser des cookies afin d’améliorer
        l’expérience utilisateur. Vous avez la possibilité de les accepter ou de
        les refuser via les paramètres de votre navigateur.
        <br />
        <br />
        <br />
        <h3>7. Responsabilité</h3>
        <br />
        L'entreprise "D'iris & d'art" ne saurait être tenu responsable en cas
        d’indisponibilité du site, de bugs ou d’erreurs pouvant survenir lors de
        son utilisation.
        <br />
        <br />
        <h3>8. Droit applicable et litiges</h3>
        <br />
        Les présentes mentions légales sont régies par le droit français. En cas
        de litige, une solution amiable sera privilégiée avant toute action
        judiciaire.
        <br />
        <br />
        <br />
        <h3>9. Contact</h3>
        <br />
        Pour toute question, vous pouvez contacter l'entreprise "D'iris & d'art" à
        l’adresse suivante : <a href="mailto:dirisdart@gmail.com">dirisdart@gmail.com</a>
      </main>
    </div>
  );
}

export default LegalNotices;
