import type { NextPage } from "next";

import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import image1 from "../assets/camiseta1.png";
import image2 from "../assets/camiseta2.png";

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Product>
        <Image src={image1} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={image2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
};

export default Home;
