import { memo } from "react";
import Hero from "./components/Hero";
import Introduce from "./components/Introduce";
import Navbar from "./components/Navbar";
import Rose from "./components/Rose";

const MemoizedHero = memo(Hero);
const MemoizedIntroduce = memo(Introduce);
const MemoizedNavbar = memo(Navbar);
const MemoizedRose = memo(Rose);

export default function App() {
  return (
    <>
      <header className="header">
        <MemoizedNavbar />
      </header>
      <main>
        <MemoizedHero />
        <MemoizedIntroduce />
        <MemoizedRose />
      </main>
    </>
  );
}
