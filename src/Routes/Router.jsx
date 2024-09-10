import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Branding from '../Pages/Branding';
import Layout from '../Pages/Layout';
import Blogs from '../Pages/Blogs';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Parent route with layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Branding />} />
            <Route path="/blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
