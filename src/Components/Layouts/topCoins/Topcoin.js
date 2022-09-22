import React, { useEffect, useState } from "react"
import "./topcoins.css"
import axios from "axios"
const Topcoin = () => {
  const [top, setTop] = useState([])

  useEffect(() => {
    const getTrendingCoins = async () => {
      const trendingCoins = await axios.get(
        `https://api.coingecko.com/api/v3/search/trending`
      )
      setTop(trendingCoins.data.coins)
    }
    getTrendingCoins()
  }, [])

  return (
    <div className=" trending container">
      <h1 className="tHeading">Trending Coins</h1>
      <div className="trendingOne">
        {top.map((eachCoin) => {
          return (
            <div className="horizontal" key={eachCoin.item.id}>
              <hr className="hori" />
              <div className="coins">
                <div className="tCoinImage">
                  <img src={eachCoin.item.small} alt="" className="tLogo" />
                </div>
                <div className="cContent">
                  <div className="tCoinTitle">
                    <h3 className="cTitle ">{eachCoin.item.name}</h3>
                    <h5 className="symbol ">
                      <span className="spanner ">Symbol -</span>{" "}
                      {eachCoin.item.symbol}
                    </h5>
                  </div>

                  <div className="tCoinPrice ">
                    <h5 className="symbol price">
                      <span className="spanner price">Market Rank -</span>
                      {eachCoin.item.market_cap_rank}
                    </h5>
                    <h5 className="symbol price ">
                      <span className="spanner price">PriceBTC - </span>
                      {eachCoin.item.price_btc}
                    </h5>
                  </div>
                </div>
              </div>
              <hr className="hori" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Topcoin
