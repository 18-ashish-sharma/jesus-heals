import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar1 from "./components/Navbar";
import Routing from "./routes";

export default function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Routing />
      <Footer />
    </div>
  );
}
