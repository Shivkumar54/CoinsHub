import React from "react"
import "./navbar.css"
import { Outlet, Link } from "react-router-dom"
import { FaBitcoin } from "react-icons/fa"
import { RiCoinsFill } from "react-icons/ri"
import { IoMdAnalytics } from "react-icons/io"
import { ImHome } from "react-icons/im"
import { FaUserCircle } from "react-icons/fa"
import { MdCategory } from "react-icons/md"
const Navbar = () => {
  return (
    <div className="contentt">
      <div className="nav-container ">
        <div className="logo">
          <Link className="linker" to="/">
            <h3 className="innerLogo">
              <FaBitcoin className="logoIcon" /> CryptoHub
            </h3>
          </Link>
        </div>
        <div className="nav-list">
          <ul className="navLi">
            <li>
              <Link className="linker" to="/">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link className="linker" to="/categories">
                Categories{" "}
              </Link>
            </li>
            <li>
              <Link className="linker" to="/coins">
                Coins{" "}
              </Link>
            </li>

            <li>
              <Link className="linker" to="/analytics">
                {" "}
                Analytics
              </Link>
            </li>
            <li>
              <Link className="linker" to="/login">
                {" "}
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />

      {/* for Mobiles  */}

      <div className="mobileNavIcons">
        <ul className="navmobileList">
          <li>
            <Link className="linker mdLinker" to="/">
              <ImHome size={22} />
              Home
            </Link>
          </li>
          <li>
            <Link className="linker mdLinker" to="/categories">
              <MdCategory size={22} />
              Category
            </Link>
          </li>
          <li>
            <Link className="linker mdLinker" to="/coins">
              <RiCoinsFill size={22} />
              Coins
            </Link>
          </li>
          <li>
            <Link className="linker mdLinker" to="/analytics">
              <IoMdAnalytics size={22} />
              Analytics
            </Link>
          </li>
          <li>
            <Link className="linker mdLinker" to="/login">
              <FaUserCircle size={22} />
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* for Mobiles  */}
    </div>
  )
}

export default Navbar
