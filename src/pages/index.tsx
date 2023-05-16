import type { NextPage } from "next";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import image1 from "../assets/camiseta1.png";
import image2 from "../assets/camiseta2.png";
import image3 from "../assets/camiseta3.png";

const Home: NextPage = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={image1} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={image2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={image3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
};

export default Home;
