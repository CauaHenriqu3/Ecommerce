import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="page-inner-content content">
        <div className="download-options">
          <p>Baixe nosso aplicativo</p>
          <p>Baixe nosso aplicativo para Android e IOS</p>
          <div>
            <img src="/images/app-store.png" alt="App Store download" />
            <img src="/images/play-store.png" alt="Play Store download" />
          </div>
        </div>

        <div className="logo-footer">
          <h1 className="logo">
            VUA<span>SHE</span>
          </h1>
          <p>
            Nosso objetivo é ser a referência em cosméticos sustentáveis,
            priorizando a inovação, qualidade e responsabilidade ambiental.
          </p>
        </div>
        <div className="links">
          <h3>Links úteis</h3>
          <ul>
            <li><Link to="/">Cupons</Link></li>
            <li><Link to="/">WhatsApp</Link></li>
            <li><Link to="/">Políticas</Link></li>
            <li><Link to="/">Torne-se afiliado</Link></li>
          </ul>
        </div>
      </div>
      <div className="page-inner-content">
        <hr />

        <p className="copyright">
          Copyright 2030 - VuaShe - Todos Direitos Reservados
        </p>
      </div>
    </footer>
  );
}
