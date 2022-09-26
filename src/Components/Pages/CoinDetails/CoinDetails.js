import axios from "axios"
import React, { useState, useEffect } from "react"
import "./coindetail.css"
import { Disclosure } from "@headlessui/react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { useParams } from "react-router-dom"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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
    <div className="div">
      <ResponsiveContainer>
        <div className="DefaultContentHolder container detailer">
          <div className="Reacharts ">
            <AreaChart
              width={345}
              height={400}
              data={lists}
              margin={{
                top: 30,
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
            <div className="flexer">
              <div className="imager">
                {details.image ? (
                  <img src={details.image.large} alt="" className="cimage" />
                ) : null}
              </div>
              <div className="flexer1">
                <h2 className="cCoiner">
                  <span className="cSpanner">Name - </span> {details.name}
                </h2>
                <h5 className="cCoiner">
                  <span className="cSpanner">Symbol - </span>
                  {details.symbol}{" "}
                </h5>
                <h5 className="cCoiner">
                  <span className="cSpanner">Hashing Algorithm - </span>
                  {details.hashing_algorithm
                    ? details.hashing_algorithm
                    : "NA"}{" "}
                </h5>
              </div>

              <div className="flexer2">
                <h4 className="cCoiner">
                  <span className="cSpanner">Market Cap Rank - </span>
                  {details.market_cap_rank}
                </h4>

                <h4 className="cCoiner">
                  <span className="cSpanner">Current Market Price -</span>
                  {details.market_data
                    ? details.market_data.current_price.usd
                    : null}{" "}
                  USD
                </h4>
                <h4 className="cCoiner">
                  <span className="cSpanner"> Updated on -</span>
                  {details.last_updated ? details.last_updated : null}
                </h4>
              </div>
            </div>
          </div>

          {/* Table  */}
          <div className="score">
            <h2>Coin Scores</h2>
            <table className="table table-bordered ">
              <thead >
                <th>coingecko_score</th>
                <th>developer_score</th>
                <th>community_score</th>
                <th>public_interest_score</th>
              </thead>
              <tr>
                <td>{details.coingecko_score}</td>
                <td>{details.developer_score}</td>
                <td>{details.community_score}</td>
                <td>{details.public_interest_score}</td>
              </tr>
            </table>
          </div>

          {/* Table  */}

          {/* DropDown  */}
          <div className="links">
            <h2>Other Links</h2>
            <div className="backgrounder">
              <div className="div1">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="dBtn">
                        {open ? (
                          <BiChevronUp size={35} />
                        ) : (
                          <BiChevronDown size={35} />
                        )}
                        <span className="DSpanner">Home Page Link</span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="">
                        <a className="dLinker" href="https://bitcoin.org/en/">
                          {details.links ? details.links.homepage : null}
                        </a>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>

              <div className="div2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="dBtn">
                        {open ? (
                          <BiChevronUp size={35} />
                        ) : (
                          <BiChevronDown size={35} />
                        )}{" "}
                        <span className="DSpanner">Reddit URl Link</span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="">
                        <a
                          className="dLinker"
                          href="https://www.reddit.com/r/Bitcoin/"
                        >
                          {details.subreddit_url ? details.subreddit_url : "NA"}
                        </a>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>

              <div className="div3">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="dBtn">
                        {open ? (
                          <BiChevronUp size={35} />
                        ) : (
                          <BiChevronDown size={35} />
                        )}{" "}
                        <span className="DSpanner">Official Forum url </span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="">
                        <a className="dLinker" href="https://bitcointalk.org/">
                          {details.links
                            ? details.links.official_forum_url
                            : null}
                        </a>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
          {/* DropDown  */}
        </div>
      </ResponsiveContainer>
    </div>
  )
}

export default CoinDetails
