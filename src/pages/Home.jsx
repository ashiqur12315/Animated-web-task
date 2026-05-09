import { useState } from "react";
import { Navbar, Hero, TrustedLogos, DemandSection, FeaturedWork } from "../components";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-white text-white">
      <Navbar setMenuOpen={setMenuOpen} />
      <Hero menuOpen={menuOpen} />
      <TrustedLogos />
      <DemandSection />
      <FeaturedWork />
    </main>
  );
}

export default App;
