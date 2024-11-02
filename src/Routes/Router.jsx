import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Branding from '../Pages/Branding';
import Layout from '../Pages/Layout';
import Blogs from '../Pages/Blogs';
import Career from '../Pages/Career';
import Works from '../Pages/Works';
import Awards from '../Pages/Awards';
import WorkOne from '../Pages/Works/WorkOne';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Clients from '../Pages/Clients';
import Services from '../Pages/Services';
import Creative from '../Pages/Creative';
import PerfomanceMarketing from '../Pages/PerfomanceMarketing';
import PRCommunication from '../Pages/PRCommunication';
import SeoService from '../Pages/SeoService';
import Web from '../Pages/Web';
import DigitalMarketing from '../Pages/DigitalMarketing';
import SocialMedia from '../Pages/SocialMedia';
import Production from '../Pages/Production';
import Contact from '.././Pages/Contact';
import Privacy from '../Pages/Privacy';
import SeoPage from '../Pages/SeoPage';
import AgencyDubai from '../Pages/AgencyDubai';
import AgencySharjah from '../Pages/AgencySharjah';
import AgencyAbudhabi from '../Pages/AgencyAbudhabi';
import SeoDubai from '../Pages/SeoDubai';
import SeoAbudhabi from '../Pages/SeoAbudhabi';
import SeoSharjah from '../Pages/SeoSharjah';

const Router = () => {
  return (
    <Routes>
      {/* Parent route with layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="branding" element={<Branding />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="clients" element={<Clients />} />
        <Route path="career" element={<Career />} />
        <Route path="works" element={<Works />} />
        <Route path="workone" element={<WorkOne />} />
        <Route path="awards" element={<Awards />} /> 
        <Route path="privacy" element={<Privacy />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="creative" element={<Creative />} />
        <Route path="perfomance" element={<PerfomanceMarketing />} />
        <Route path="pr" element={<PRCommunication />} />
        <Route path="seo" element={<SeoService />} />
        <Route path="web" element={<Web />} />
        <Route path="production" element={<Production />} />
        <Route path="socialmedia" element={<SocialMedia />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="digital-marketing-agency-in-kerala" element={<DigitalMarketing />} />
      <Route path="/ae/digital-marketing-agency-in-dubai" element={<AgencyDubai />} />
      <Route path="/ae/digital-marketing-agency-in-sharjah" element={<AgencySharjah />} />
      <Route path="/ae/digital-marketing-agency-in-abudhabi" element={<AgencyAbudhabi />} />
      <Route path="seo-company-in-kerala" element={<SeoPage />} />
      <Route path="/ae/seo-company-in-dubai" element={<SeoDubai />} />
      <Route path="/ae/seo-company-in-abudhabi" element={<SeoAbudhabi />} />
      <Route path="/ae/seo-company-in-sharjah" element={<SeoSharjah />} />
			
    </Routes>
  );
};

export default Router;
