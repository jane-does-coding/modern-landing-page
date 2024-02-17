import Image from "next/image";
import Title from "./components/LandingPage/Title";
import BannerImage from "./components/LandingPage/BannerImage";
import Navbar from "./components/LandingPage/Navbar";
import HorizScroll from "./components/LandingPage/HorizScroll";
import About from "./components/LandingPage/About";
import Footer from "./components/LandingPage/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Title />
      <BannerImage />
      <HorizScroll />
      <About />
      <Footer />
    </>
  );
}
