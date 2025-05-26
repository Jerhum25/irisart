import React from "react";
import "./Contact.scss";
import { LiaHandPointer } from "react-icons/lia";

function Contact(props) {
  return (
    <div className="contactContainer" id="contact">
      <div className="coordonnees">
        <h2>nous contacter</h2>
        <div className="pauline">
          <h3>Pauline</h3>
          <a href="tel:0629246642">Tél : 06 29 24 66 42</a>
          <a href="mailto:pauline@photofeeries.fr">Mail : pauline@photofeeries.fr</a>
        </div>
        <div className="nathanaelle">
          <h3>Nathanaëlle</h3>
          <a href="tel:0668256759">Tél : 06 68 25 67 59</a>
          <a href="mailto:photographe25@sfr.fr">Mail : photographe25@sfr.fr</a>
        </div>
      </div>
      <div className="links">
        <div className="adresse">
          <h2>nous trouver</h2>
          <a
            href="https://maps.app.goo.gl/L8R7SBPQiXqCwzKE8"
            target="_blank"
            rel="noreferrer"
          >
            D'iris & D'art
            <br />3 rue de l'Eglise
            <br />
            25720 AVANNE-AVENEY
          </a>
          <p>
          <LiaHandPointer />Cliquez sur l'adresse pour
            nous localiser
          </p>
        </div>
        <div className="socialNetworks">
          <h2>suivez nous sur les réseaux</h2>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61553070890176"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./assets/images/facebook.png" alt="facebook link" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/diris_et_dart_besancon/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./assets/images/instagram.png" alt="instagram link" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
