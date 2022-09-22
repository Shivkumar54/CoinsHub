import React from "react"
import Caurosal from "../../Layouts/Courosal/Caurosal"
import Topcoin from "../../Layouts/topCoins/Topcoin"

import "./home.css"
const Home = () => {
  return (
    <div className="DefaultContentHolder">
      <Caurosal />

      <div className="search container ">
        <input type="text" placeholder="eg - bitcoin" className="inputer" />
        <button className="search-btn">Search Coin</button>
      </div>

      <Topcoin />
    </div>
  )
}

export default Home
