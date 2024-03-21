import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
      <div className="page-inner-content">
        <div className="content">
          <div className="left-side">
            <h2>Malbeb - Signature</h2>
            <p>
              Com os ingredientes mais valiosos da perfumaria e uma embalagem
              comemorativa, Malbec Eau de Parfum Signature é uma versão ainda
              mais luxuosa para homens que não se contentam com pouco.
            </p>
            <Link to="/products" className="see-more-btn">
              <span>Ver Agora</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <div className="right-side">
            <img src="/images/exclusive.png" alt="Malbec" />
          </div>
        </div>
      </div>
    </div>
  );
}
