import { useEffect, useState } from "react";

export default function FetchAPI() {
  const [btcData, setBtcData] = useState(null);

  useEffect(() => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));

    console.log("FETCHING DATA...");
  }, []);

  return btcData ? (
    <>
      <h1>Current BTC/USD data</h1>
      {console.log(btcData)}
      <p>Code: {btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.description}</p>
      <p>Rate Float: {btcData.rate_float}</p>
    </>
  ) : (
    <>
      {" "}
      {console.log(btcData)}
      <h1>Data pending...</h1>
    </>
  );
}
