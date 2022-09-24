import "./App.css"
import { Routes, Route } from "react-router-dom"

import Navbar from "./Components/Layouts/Navbar/Navbar"

// Pages
import Analytics from "./Components/Pages/Analytics/Analytics"
import Coins from "./Components/Pages/Coins/Coins"
import Home from "./Components/Pages/Home/Home"
import Login from "./Components/Pages/Login/Login"
import Categories from "./Components/Pages/Categories/Categories"
import CoinDetails from "./Components/Pages/CoinDetails/CoinDetails"
// Pages

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coins/:id" element={<CoinDetails />} />
          <Route path="/tutorials" element={<Analytics />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

{
  /* <Navbar />
<Home />
<Trending />
<Coins />
<Analytics />
<Login /> */
}
