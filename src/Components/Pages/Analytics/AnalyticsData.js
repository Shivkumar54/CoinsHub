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
import CoinDetails from "../CoinDetails/CoinDetails"
import "./ana.css"
const Analytics = () => {
  const { id } = useParams()

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
          <CoinDetails />
        </div>
      </div>
    </ResponsiveContainer>
  )
}

export default Analytics
