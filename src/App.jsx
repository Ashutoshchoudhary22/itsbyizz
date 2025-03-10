import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Components/MainLayout";
import Portfolio from "./Pages/Portfolio";
import Development from "./Pages/Development";
import Brand from "./Pages/Brand";
import About from "./Components/About";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout with Header & Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="development" element={<Development />} />
          <Route path="brand" element={<Brand />} />
          <Route path="/about-us" element={<About/>} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
