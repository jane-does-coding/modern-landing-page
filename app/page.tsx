import Title from "./components/LandingPage/Title";
import BannerImage from "./components/LandingPage/BannerImage";
import HorizScroll from "./components/LandingPage/HorizScroll";
import About from "./components/LandingPage/About";
import Footer from "./components/LandingPage/Footer";
import More from "./components/LandingPage/More";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Title />
      <BannerImage />
      <HorizScroll />
      <About />
      <More />
      <Footer />
    </>
  );
}
