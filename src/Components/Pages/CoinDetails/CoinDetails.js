import axios from "axios"
import React, { useState, useEffect } from "react"

import { useParams } from "react-router-dom"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
const CoinDetails = () => {
  const { id } = useParams()

  const [details, setDetails] = useState([])
  // For dETAILS
  useEffect(() => {
    const getDetailsFromAPI = async () => {
      const getDetails = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      )
      setDetails(getDetails.data)
    }
    getDetailsFromAPI()
  }, [])
  // For dETAILS

  const [market, setMarket] = useState([])

  useEffect(() => {
    const getmarketPrice = async () => {
      const getMarket = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=180`
      )
      setMarket(getMarket.data.prices)
    }
    getmarketPrice()
  }, [id])

  const lists = Object.values(market).map((eachM) => {
    const [timeStamp, p] = eachM
    const normalDate = new Date(timeStamp).toLocaleDateString("en")
    return {
      Date: normalDate,
      Price: p,
    }
  })

  return (
    <ResponsiveContainer width="100%" height={400}>
      <div className="DefaultContentHolder container">
        <div className="Reacharts ">
          <AreaChart
            width={350}
            height={300}
            data={lists}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            id="areachart"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Price"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>

        <div className="Contents mt-5">
          {details.image ? <img src={details.image.small} alt="" /> : null}
          <h2>
            <span>Name - </span> {details.name}
          </h2>
          <h5>
            <span>Symbol - </span>
            {details.symbol}{" "}
          </h5>
          <h3>
            <span>Market Cap Rank - </span>
            {details.market_cap_rank}
          </h3>
        </div>
      </div>
    </ResponsiveContainer>
  )
}

export default CoinDetails
