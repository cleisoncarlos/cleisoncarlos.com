import Image from 'next/image'
import React from 'react'

import logo from '../../images/icons/nodejs.png'

import Slider from "react-slick";


export default function CaroulselExemple() {
 


    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false
    };
    return (
      <div>
       
        <Slider {...settings}>
          <div>
         <Image src={logo} alt='teste'/>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
    
  


}












