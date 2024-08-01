import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Feature from "./components/Feature";
export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
    </main>
  );
}
