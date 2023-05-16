import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";
import logoImg from "../assets/Logo.svg";
function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>
      <Component {...pageProps} />;
    </Container>
  );
}

export default MyApp;
