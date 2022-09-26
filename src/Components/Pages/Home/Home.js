import React, { useState } from "react"
import Caurosal from "../../Layouts/Courosal/Caurosal"
import Topcoin from "../../Layouts/topCoins/Topcoin"
import { useNavigate } from "react-router-dom"
import "./home.css"
const Home = () => {
  const [search, setSearch] = useState([])
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`/coins/` + search.toLowerCase())
  }

  return (
    <div className="DefaultContentHolder">
      <Caurosal />

      <div className="container search mx-auto">
        <h1 className="searcher">Search Coins</h1>
        <form action="" onSubmit={submitHandler}>
          <input
            type="search"
            placeholder="eg - binance-usd"
            className="inputer"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-btn">Search Coin</button>
          <span></span>
        </form>
      </div>

      <Topcoin />
    </div>
  )
}

export default Home
