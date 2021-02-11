import "./App.css";
import Nav from "./Components/Nav";
import Logo from "./Assets/Logo.png";
import { HeaderLogo } from "./styles";
import IntroMessage from "./Components/IntroMessage";
import Bedroom from "./Components/Bedroom";
import FloorPlan from "./Components/FloorPlan";
import Luxurys from "./Components/Luxurys";
import LocalArea from "./Components/LocalArea";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <div style={{ backgroundColor: "black" }}>
        <HeaderLogo src={Logo} alt="Assembly Logo" />
      </div>
      <IntroMessage id="Home" />
      <Bedroom />
      <Luxurys id="Luxurys" />
      <FloorPlan id="FloorPlan" />
      <LocalArea id="LocalArea" />
      <Contact id="Contact" />
      <Footer />
    </div>
  );
}

export default App;
