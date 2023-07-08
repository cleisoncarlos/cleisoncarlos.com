import Image from "next/image";
import React from "react";

import Slider from "react-slick";

import ananindeua from "../../images/logos/ananindeua.png";
import alepa from "../../images/logos/alepa.png";
import benevides from "../../images/logos/benevides.png";
import amapa from "../../images/logos/amapa.png";
import para from "../../images/logos/para.png";

export default function Logos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div className="my-10 mx-10 align-middle">
      <Slider {...settings}>
        <div>
          <Image src={ananindeua} alt="nodejs" />
        </div>

        <div>
          <Image src={alepa} alt="nodejs" />
        </div>

        <div>
          <Image src={benevides} alt="nodejs" />
        </div>

        <div>
          <Image src={amapa} alt="nodejs" />
        </div>
      </Slider>
    </div>
  );
}
