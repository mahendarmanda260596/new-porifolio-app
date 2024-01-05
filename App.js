import Body from "./components/Body";
import AddProject from "./components/Addproject";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import './App.css';
import { BrowserRouter } from "react-router-dom";

//header Component

const Header = () => {
  return (
    <div className="Header-component">
      <div>
        <h1 className="heading">Modyln Torf</h1>
      </div>


      <>
        <nav>
          <ul className="nav-items">
            <li>
              <li to="/" className="item">Home</li>
            </li>
            <li>
              <li to="/Projects" className="item">Projects</li>
            </li>
            <li>
              <li to="/Footer" className="item">Contact</li>
            </li>
          </ul>
        </nav>

      </>








    </div>
  )
}





function App() {
  return (
    <div className="App-header">
      <Header />
      <Body />
      <AddProject />

      <Projects />
      <Footer />

      <BrowserRouter />








    </div>




  )
}

export default App;
