import Image from "next/image";
import Title from "./components/LandingPage/Title";
import BannerImage from "./components/LandingPage/BannerImage";
import Navbar from "./components/LandingPage/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Title />
      <BannerImage />
    </>
  );
}
