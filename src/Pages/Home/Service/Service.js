import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, img, description } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <div className="service-description">
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>
          <small>{description}</small>
        </p>
        <button
          onClick={() => navigateToServiceDetail(id)}
          className="btn btn-primary"
        >
          Book: {name}
        </button>
      </div>
    </div>
  );
};

export default Service;
