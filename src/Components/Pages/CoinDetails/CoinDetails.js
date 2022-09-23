import React, { useEffect, useState } from "react"
import axios from "axios"
const CoinDetails = () => {
  const [details, setDetails] = useState([])

  useEffect(() => {
    const getCoinDetailFromAPI = async () => {
      const getCoinDetail = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin}`
      )
      setDetails(getCoinDetail)
    }
    getCoinDetailFromAPI()
  }, [])

  return (
    <div className="DefaultContentHolder container ">
      <h1>Im coin detail Page for each Coin</h1>
    </div>
  )
}

export default CoinDetails

//
