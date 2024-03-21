import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>Desperte sua Beleza Interior!</h2>
          <p>Descubra os Segredos dos Cosméticos para uma Pele Radiante!</p>
          <Link to="/products" className="see-more-btn">
            <span>Ver Agora</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
          </div>
          <div className="right-side">
            <img src="/images/header-image.png" alt="Products"/>
        </div>
      </div>
    </header>
  );
}
