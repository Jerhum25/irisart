import React, { useEffect } from "react";
import "./generalConditionsOfSale.scss";

function GeneralConditionsOfSale(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="generalConditionsOfSaleContainer">
      <main>
        <h2>Conditions Générales de Vente (CGV)</h2>
        <h3>1. Préambule</h3>
        <br />
        Les présentes Conditions Générales de Vente (CGV) régissent les
        relations contractuelles entre l'entreprise "D'iris & d'art", dont le
        siège social est situé 3 rue de l'Eglise, 25720 Avanne-Aveney, et toute
        personne physique ou morale souhaitant effectuer un achat sur le site
        internet "D'iris & d'art".
        <br />
        <br />
        <h3>2. Objet</h3>
        <br />
        Les CGV définissent les conditions dans lesquelles les produits et
        services sont vendus, livrés et retournés par l'entreprise "D'iris &
        d'art".
        <br />
        <br />
        <h3>3. Produits et Services</h3>
        <br />
        Les produits et services proposés sont décrits sur le site internet. Les
        photographies n'ont pas de valeur contractuelle.
        <br />
        <br />
        <h3>4. Prix</h3>
        <br />
        Les prix sont affichés en euros (€) et incluent la TVA applicable. Ils
        ne comprennent pas les frais de livraison, qui sont indiqués avant la
        validation de la commande.
        <br />
        <br />
        <h3>5. Commande</h3>
        <br />
        Toute commande implique l'acceptation des présentes CGV. La confirmation
        de commande constitue une preuve de transaction entre les parties.
        <br />
        <br />
        <h3>6. Paiement</h3>
        <br />
        Le paiement peut être effectué par carte bancaire, PayPal ou tout autre
        moyen de paiement accepté par l'entreprise "D'iris & d'art".
        <br />
        <br />
        <h3>7. Livraison</h3>
        <br />
        Les délais de livraison sont indicatifs. l'entreprise "D'iris & d'art"
        ne saurait être tenu responsable des retards causés par les
        transporteurs.
        <br />
        <br />
        <h3>8. Droit de rétractation</h3>
        <br />
        Le client dispose d'un délai de 14 jours à compter de la réception du
        produit pour exercer son droit de rétractation sans justification.
        <br />
        <br />
        <h3>9. Garantie et Responsabilité</h3>
        <br />
        Les produits bénéficient des garanties légales de conformité et des
        vices cachés. La responsabilité de l'entreprise "D'iris & d'art" est
        limitée au montant de la commande.
        <br />
        <br />
        <h3>10. Protection des données personnelles</h3>
        <br />
        Les informations collectées sont nécessaires au traitement des
        commandes. Le client dispose d’un droit d’accès, de rectification et de
        suppression de ses données.
        <br />
        <br />
        <h3>11. Litiges et Droit applicable</h3>
        <br />
        Les présentes CGV sont soumises au droit français. En cas de litige, une
        solution amiable sera privilégiée avant toute action judiciaire.
        <br />
        <br />
        <h3>12. Contact</h3>
        <br />
        Pour toute question, vous pouvez contacter l'entreprise "D'iris & d'art"
        à l'adresse suivante :{" "}
        <a href="mailto:dirisdart@gmail.com">dirisdart@gmail.com</a>
      </main>
    </div>
  );
}

export default GeneralConditionsOfSale;
