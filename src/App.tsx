import Hero from "./components/Hero";
import Introduce from "./components/Introduce";
import Navbar from "./components/Navbar";
import Rose from "./components/Rose";

export default function App() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main>
        <Hero />
        <Introduce />
        <Rose />
      </main>
    </>
  );
}
