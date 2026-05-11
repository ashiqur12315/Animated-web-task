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
  WhatsNew,
  KineticText,
  Footer,
} from "../components";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className="
        text-white
        bg-white
      "
    >
      <Navbar setMenuOpen={setMenuOpen} />
      <Hero menuOpen={menuOpen} />
      <TrustedLogos />
      <DemandSection />
      <FeaturedWork />
      <ServicesSection />
      <MovingText />
      <StackedCards />
      <WhatsNew />
      <KineticText />
      <Footer />
    </main>
  );
}

export default App;
