import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Pricing = () => {
  //let { id } = useParams();
  let id = 79827373408;
  return (
    <div>
      <h1>Pricing is a {<Link to={`/pricing/:${id}`}>boy</Link>}</h1>
    </div>
  );
};

export default Pricing;
