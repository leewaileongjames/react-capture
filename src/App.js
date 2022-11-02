//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
//Router
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />
      <Routes>
        <Route exact path="/" element={<AboutUs/ >}></Route>
        <Route path="/work" element={<OurWork/ >}></Route>
        <Route path="/contact" element={<ContactUs/ >}></Route>
      </Routes>
    </div>
  );
}

export default App;
