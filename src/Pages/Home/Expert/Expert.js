import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 g-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Expert;
