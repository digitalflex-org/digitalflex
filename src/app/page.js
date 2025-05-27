import Image from "next/image";
import Header from "../components/header/Header.jsx";
import HomeSection from "../components/home/homeSection.jsx";



export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col items-center justify-center md:min-h-screen bg-black">
        <Header />
        <HomeSection />
       

      </main >

    </div >

  );
}
