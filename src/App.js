import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [coins, setCoins] = useState();
  useEffect(() => {
    axios
      .get(
        "htps://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res.data);
        setCoins(res.data);
      })
      .catch((error) => {
        console.log("error is" + error);
      });
  }, []);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
