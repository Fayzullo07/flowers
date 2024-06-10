import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

// Core Components
import NotFoundPage from "./Core/NotFoundPage";

// Components
import Home from "./pages/Home";
import Product from "./components/Product";
import { useEffect } from "react";


import 'lightbox.js-react/dist/index.css'
import { initLightboxJS } from 'lightbox.js-react'
import TypeOfMaking from "./pages/TypeOfMaking";

const Routing = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/typeOfMaking"
        element={<TypeOfMaking />}
      />

      <Route
        path="/product/:id"
        element={<Product />}
      />

     

      <Route path="/notFound" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />


    </Routes>
  );
};


function App() {

  useEffect(() => {
    initLightboxJS("Insert License key", "Insert plan type here");

    AOS.init({ once: true, easing: "ease-in-sine", delay: 50 });
    AOS.refresh();

  }, []);

  return (
    <>
      <Routing />
    </>
  );
}
export default App;