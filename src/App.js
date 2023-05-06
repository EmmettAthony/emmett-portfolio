import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Experience from "./component/Experience";
import SocialLinks from "./component/SocialLinks";
import Contact from "./component/Contact";

function App() {


  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <SocialLinks></SocialLinks>
      <Contact></Contact>
    </div>
  );
}

export default App;
