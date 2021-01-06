import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlobalStyle from "./globalStyles";
import sliderData from "./data/SliderData";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Hero slides={sliderData} />
    </div>
  );
}

export default App;
