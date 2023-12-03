//render props : take functions that return react elements and call them inside their render logic

import React, { useEffect, useState } from "react";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "soda", "juice", "wkkw"]);
    }
  }, []);

  return render(data);
};

const DessertsCount = () => {
  return (
    <DataFetcher
      url="http://littlelemon/desserts"
      render={(data) => <h3>{data.length} desserts</h3>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <h3>{data.length} drinks</h3>}
    />
  );
};

function RenderProps() {
  return (
    <>
      <h1>Little lemon Restaurant</h1>
      <DrinksCount />
      <DessertsCount />
    </>
  );
}

export default RenderProps;
