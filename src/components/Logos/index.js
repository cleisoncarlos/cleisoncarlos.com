import Image from "next/image";
import React from "react";

import Slider from "react-slick";

import ananindeua from "../../images/logos/ananindeua.png";
import ananews from "../../images/logos/ananews.png";
import alepa from "../../images/logos/alepa.png";
import benevides from "../../images/logos/benevides.png";
import agenciabenevides from "../../images/logos/agenciabenevides.png";
import governoamapa from "../../images/logos/governoamapa.png";
import governopara from "../../images/logos/governopara.png";
import fundacaocultural from "../../images/logos/fundacaocultural.png";
import drnumeros from "../../images/logos/drnumeros.png";
import leialdirblanc from "../../images/logos/leialdirblanc.png";
import sbseg from "../../images/logos/sbseg.png";
import secult from "../../images/logos/secult.png";
import prefeiturasaoluiz from "../../images/logos/prefeiturasaoluiz.png";
import prefeituracastanhal from "../../images/logos/prefeituracastanhal.png";

export default function Logos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="my-10 mx-10 align-middle">
      <Slider {...settings}>

      <div>
          <Image src={prefeituracastanhal} alt="nodejs" />
        </div>

      <div>
          <Image src={prefeiturasaoluiz} alt="nodejs" />
        </div>


      <div>
          <Image src={sbseg} alt="nodejs" />
        </div>



        <div>
          <Image src={ananindeua} alt="nodejs" />
        </div>
        <div>
          <Image src={secult} alt="nodejs" />
        </div>

        <div>
          <Image src={ananews} alt="nodejs" />
        </div>

        <div>
          <Image src={alepa} alt="nodejs" />
        </div>

        <div>
          <Image src={benevides} alt="nodejs" />
        </div>

        <div>
          <Image src={agenciabenevides} alt="nodejs" />
        </div>

        <div>
          <Image src={governoamapa} alt="nodejs" />
        </div>

        <div>
          <Image src={governopara} alt="nodejs" />
        </div>

        <div>
          <Image src={fundacaocultural} alt="nodejs" />
        </div>

        <div>
          <Image src={benevides} alt="nodejs" />
        </div>
        <div>
          <Image src={drnumeros} alt="nodejs" />
        </div>

        <div>
          <Image src={leialdirblanc} alt="nodejs" />
        </div>
      </Slider>
    </div>
  );
}
