import React from "react"
import "./caurosal.css"
import Slider from "react-slick" // Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Caurosal = () => {
 const settings = {
   arrows: true,
   centerMode: true,
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   centerPadding: "100px",
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: false,
         centerPadding: "20px",
       },
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         initialSlide: 2,
         centerPadding: "0px",
       },
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         centerPadding: "0px",
       },
     },
   ],
 }

  const list = [
    {
      id: 0,
      img: "https://arbismart.com/wp-content/uploads/2022/02/1-27-1.png",
    },
    {
      id: 1,
      img: "https://pixelplex.io/wp-content/uploads/2020/10/blockchain-trends-2021-main-1600.jpg",
    },
    {
      id: 2,
      img: "https://miro.medium.com/max/1200/1*rcJD5ViFTuCRgcJqxaVR0Q.png",
    },
    {
      id: 3,
      img: "https://teenfinancetoday.com/wp-content/uploads/2021/04/shutterstock_1374132248-scaled.jpg",
    },
    {
      id: 4,
      img: "https://zipmex.com/static/cdc63403b370030a59c0000b0de91b70/13.jpg",
    },
    {
      id: 5,
      img: "https://miro.medium.com/max/1400/1*Zx9rS0XsTQvoZLj6i7Gg5w.png",
    },
  ]

  return (
    <div className="caurosals">
      <Slider {...settings}>
        {list.map((eachList) => {
          return (
            <div className="list-holder" key={eachList.id}>
              <img src={eachList.img} alt="Banner" className="banner" />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Caurosal
