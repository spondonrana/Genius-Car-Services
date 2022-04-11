import React from "react";
import "./Experts.css";

import expert1 from "../../../img/experts/expert-1.jpg";
import expert2 from "../../../img/experts/expert-2.jpg";
import expert3 from "../../../img/experts/expert-3.jpg";
import expert4 from "../../../img/experts/expert-4.jpg";
import expert5 from "../../../img/experts/expert-5.jpg";
import expert6 from "../../../img/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "Will Smith", img: expert1 },
  { id: 2, name: "Smith", img: expert2 },
  { id: 3, name: "John", img: expert3 },
  { id: 4, name: "Rock", img: expert4 },
  { id: 5, name: "Diya", img: expert5 },
  { id: 6, name: "Diya smith", img: expert6 },
];
const Experts = () => {
  return (
    <div className="container">
      <h2 className="text-primary text-center mt-5">Our Experts Man</h2>
      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
