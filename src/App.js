import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Experience from "./component/Experience";
import SocialLinks from "./component/SocialLinks";
import Contact from "./component/Contact";
import ScrollToTop from "./component/ScrollToTop";

function App() {


  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <SocialLinks></SocialLinks>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default App;
