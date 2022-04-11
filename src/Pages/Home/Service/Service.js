import React from "react";

const Service = ({ service }) => {
  const { name, price, img, description } = service;
  return (
    <div>
      <img src={img} alt="" />
      <h2>This is service of: {name}</h2>
    </div>
  );
};

export default Service;
