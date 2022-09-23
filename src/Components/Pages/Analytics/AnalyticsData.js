import axios from "axios"
import React, { useState, useEffect } from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import "./ana.css"
const Analytics = () => {
  const [market, setMarket] = useState([])
  useEffect(() => {
    const getmarketPrice = async () => {
      const getMarket = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=130`
      )
      setMarket(getMarket.data.prices)
    }
    getmarketPrice()
  }, [])

  const lists = Object.values(market).map((eachM) => {
    const [timeStamp, p] = eachM
    const normalDate = new Date(timeStamp).toLocaleDateString("en")
    return {
      Date: normalDate,
      Price: p,
    }
  })

  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className="DefaultContentHolder container">
        <h1>Analytics Content</h1>
        <div className="Reacharts ">
          <AreaChart
            width={500}
            height={400}
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
      </div>
    </ResponsiveContainer>
  )
}

export default Analytics
