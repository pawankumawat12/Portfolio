import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function App() {
  useEffect(() =>{
    AOS.init({
      offset: 120, 
      duration: 600,
      easing: 'ease-in-out',
      delay: 200,
      once: true,
      
    })
  }, []);
  return (
    <>
      <BrowserRouter  basename="/Portfolio">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>

   
    </>
  );
}

export default App;
