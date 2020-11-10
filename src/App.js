import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [coins, setCoins] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res.data);
        setCoins(res.data);
      })
      .catch((error) => {
        console.log("error is" + error);
      });
  }, []);
  console.log(search);
  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            type='text'
            className='coin-input'
            placeholder='Search'
            onChange={(e) => setSearch(e.target.value)}></input>
        </form>
      </div>
    </div>
  );
};

export default App;
