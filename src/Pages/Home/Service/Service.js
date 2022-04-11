import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, price, img, description } = service;
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <div className="service-description">
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>
          <small>{description}</small>
        </p>
        <button>Book: {name}</button>
      </div>
    </div>
  );
};

export default Service;
