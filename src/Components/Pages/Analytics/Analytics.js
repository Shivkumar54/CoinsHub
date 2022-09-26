import "./ana.css"
import FBanner from "../../Images/fBanner.svg"
import SBanner from "../../Images/sBanner.svg"

import { Disclosure } from "@headlessui/react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import ADetails from "./ADetails"
import Video from "../../Video/Video"

const Analytics = () => {
  return (
    <div className="DefaultContentHolder container">
      <div className="tContentHolder">
        <div className="imageer">
          <img src={FBanner} alt="" className="tBanner" />
        </div>
        {/* DropDown  */}
        <div className="list">
          <h1> CryptoCurrency basics</h1>
          {ADetails.map((eachD) => {
            return (
              <div className="divver" key={eachD.id}>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="dBtn">
                        {open ? (
                          <BiChevronUp size={35} />
                        ) : (
                          <BiChevronDown size={35} />
                        )}
                        <span className="DSpanner ">{eachD.title}</span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="">
                        <p className="eadDP">{eachD.ans}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            )
          })}

          {/* Duplicates */}

          {/* Duplicates */}
        </div>
      </div>

      <div className="youtubee">
        <Video />
      </div>
    </div>
  )
}

export default Analytics
