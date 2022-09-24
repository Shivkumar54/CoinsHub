import React, { useEffect, useState } from "react"
import axios from "axios"
import "./coins.css"
import { Link } from "react-router-dom"
const Coins = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    const getCoinsFromAPI = async () => {
      const getCoins = await axios.get(`https://api.coingecko.com/api/v3/coins/`)
      setCoins(getCoins.data)
    }
    getCoinsFromAPI()
  }, [])
  return (
    <div className="DefaultContentHolder container ">
      <h1 className="cHeading">Coins Listed in CryptoCurrency </h1>
      <div className="coinsHolder ">
        <div className="row">
          <div className="col-12 ">
            <div className="row outerContent mx-auto">
              {coins.map((eachCoin) => {
                return (
                  <div
                    className="col-6 col-md-4 col-lg-3  innerContent mx-auto"
                    key={eachCoin.id}
                  >
                    <Link className="linker" to={`/coins/${eachCoin.id}`}>
                      <img
                        src={eachCoin.image.large}
                        alt=""
                        className="coinsLogo"
                      />
                      <h4 className="coinsName">{eachCoin.name}</h4>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coins
