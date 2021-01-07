import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlobalStyle from "./globalStyles";
import sliderData from "./data/SliderData";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={sliderData} />
    </div>
  );
}

export default App;
