import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Components/MainLayout";
import Portfolio from "./Pages/Portfolio";
import Development from "./Pages/Development";
import Brand from "./Pages/Brand";
import About from "./Components/About";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import PrivacyPolicy from "./Components/Legal/PrivacyPolicy";
import Term from "./Components/Legal/Term";
import DigitalMarketing from "./Pages/DigitalMarketing";
import MetaAdds from "./Components/DigitalMarketing/MetaAdds";
import Contact from "./Pages/Contact";
import Career from "./Components/Career";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Pages/Admin/Dashboard";
import Overview from "./Pages/Admin/Overview";
import Users from "./Pages/Admin/Users";

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        {/* Main Layout with Header & Footer */}
        <Route path="/register" element= {<Register />} />
        <Route path="/login" element= {<Login />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="development" element={<Development />} />
          <Route path="digitalmarketing" element={<DigitalMarketing />} />
          <Route path="brand" element={<Brand />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Term/>} />
          <Route path="/meta/ads" element={<MetaAdds/>} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/career" element={<Career/>}/>
        

          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Route>


        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
