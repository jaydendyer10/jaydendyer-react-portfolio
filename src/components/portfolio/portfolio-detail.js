import React from "react";

const PortfolioDetail = (props) => {
  return (
    <div>
      <h1>PortfolioDetail for {props.match.params.slug}</h1>
    </div>
  );
};

export default PortfolioDetail;
