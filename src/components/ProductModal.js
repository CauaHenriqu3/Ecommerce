import { faCartShopping, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductModal({
  id,
  image,
  name,
  price,
  addProductToCart,
}) {
  return (
    <div className="product-modal">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <p className="price">
        <span>R$ </span>
        {price}
      </p>

      <div className="buttons">
        <Link to={"products/123/checkout"} className="btn-icon">
          <span>Comprar Agora</span>
          <FontAwesomeIcon icon={faMoneyBill} />
        </Link>
        <button
          onClick={() => addProductToCart(id)}
          className="btn-icon add-to-cart-btn"
        >
          <span>Adicionar ao Carrinho</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
}
