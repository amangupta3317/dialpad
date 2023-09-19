import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ContentSection from "./Pages/ContentSection";
import Footer from "./Pages/Footer";
import PricingSection from "./Pages/PricingSection";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ContentSection></ContentSection>
      <PricingSection></PricingSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
