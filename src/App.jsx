import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects"; // <-- novo import

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Projects /> {/* <-- aqui o bloco de projetos vindos do Sanity */}
      <Footer />
    </>
  );
}
