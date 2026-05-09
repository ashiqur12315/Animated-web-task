import { useState } from "react";
import { Navbar, Hero } from "../components";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-black text-white">
      <Navbar setMenuOpen={setMenuOpen} />
      <Hero menuOpen={menuOpen} />
    </main>
  );
}

export default App;
