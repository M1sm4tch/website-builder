import Image from "next/image";
import Navbar from '../components/Navbar';
import Footer from "@/components/Footer";
import SitePage from "@/components/SitePage";

export default function Home() {
  return (
  <div>
      <Navbar />  
      <SitePage />
      <Footer />
  </div>
  );
}
