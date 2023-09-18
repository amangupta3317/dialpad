import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ContentSection from "./Pages/ContentSection";
import PricingSection from "./Pages/PricingSection";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ContentSection></ContentSection>
      <PricingSection></PricingSection>
    </div>
  );
}

export default App;
