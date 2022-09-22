import React, { useEffect, useState } from "react"
import axios from "axios"
const Categories = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getCategoriesFromAPI = async () => {
      const getCategories = await axios.get(
        `https://api.coingecko.com/api/v3/coins/categories`
      )
      setData(getCategories.data)
    }
    getCategoriesFromAPI()
  }, [])

  return (
    <div className="DefaultContentHolder">
      <h1>Categories</h1>

      <div className="categoriesList">
        {data.map((eachData) => {
          return (
            <div className="cList container" key={eachData.id}>
              <img src={eachData.top_3_coins} alt="" />
              <h2>Name - {eachData.name}</h2>
              <h5>MarketCap - {eachData.market_cap}</h5>
              <h5>Market_cap_change_24h: - {eachData.market_cap_change_24h}</h5>
              <h3>updated_at: - {eachData.updated_at}</h3>
              <h3>volume_24h: - {eachData.volume_24h}</h3>
              <hr />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
