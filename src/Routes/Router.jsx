import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Branding from '../Pages/Branding';
import Layout from '../Pages/Layout';
import Blogs from '../Pages/Blogs';
import Career from '../Pages/Career';
import Works from '../Pages/Works';
import Awards from '../Pages/Awards';
import WorkOne from '../Pages/Works/WorkOne';
import Home from '../Pages/Home';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Parent route with layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/career" element={<Career />} />
            <Route path="/works" element={<Works />} />
            <Route path="/workone" element={<WorkOne />} />
            <Route path="/awards" element={<Awards />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
