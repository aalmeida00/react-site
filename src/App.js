import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlobalStyle from "./globalStyles";
import sliderData from "./data/SliderData";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Dropdown />
      <Hero slides={sliderData} />
    </div>
  );
}

export default App;
