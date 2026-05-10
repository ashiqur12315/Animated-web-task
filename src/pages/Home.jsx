import { useState } from "react";
import {
  Navbar,
  Hero,
  TrustedLogos,
  DemandSection,
  FeaturedWork,
  ServicesSection,
  MovingText,
  StackedCards,
} from "../components";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-white text-white">
      <Navbar setMenuOpen={setMenuOpen} />
      <Hero menuOpen={menuOpen} />
      <TrustedLogos />
      <DemandSection />
      <FeaturedWork />
      <ServicesSection />
      <MovingText />
      <StackedCards />
    </main>
  );
}

export default App;
