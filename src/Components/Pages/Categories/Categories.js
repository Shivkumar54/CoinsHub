import React, { useEffect, useState } from "react"
import axios from "axios"
import "./category.css"
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
    <div className="DefaultContentHolder container">
      <div className="row">
        <div className="col-12">
          <div className="categoriesList row mx-auto">
            {data.map((eachData) => {
              return (
                <div
                  className="cList col-sm-12 col-md-4 col-lg-4  "
                  key={eachData.id}
                >
                  <img src={eachData.top_3_coins} alt="Please Reload" className="ctImager" />
                  <h2 className="ctName">
                    {" "}
                    <span className="ctSpanner"> Name -</span> {eachData.name}
                  </h2>
                  <h6 className="ctSubName">
                    {" "}
                    <span className="ctSpanner"> MarketCap - </span> {eachData.market_cap.toFixed(1)}
                  </h6>
                  <h6 className="ctSubName">
                    <span className="ctSpanner"> Market_cap_change_24h: - </span>{" "}
                    {eachData.market_cap_change_24h}
                  </h6>
                  <h6 className="ctSubName">
                    {" "}
                    <span className="ctSpanner"> updated_at: - </span> {eachData.updated_at}
                  </h6>
                  <h6 className="ctSubName">
                    {" "}
                    <span className="ctSpanner"> volume_24h: - </span> {eachData.volume_24h}
                  </h6>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
