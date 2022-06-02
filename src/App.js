import Nav from "./components/Nav";
import Banner from "./components/Banner.js";
import Clients from "./components/Clients";
import Benefits from "./components/Benefits";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Clients />
      <div className="row mt-5"></div>
      <Benefits />
      <div className="row"></div>
    </>
  );
}

export default App;
