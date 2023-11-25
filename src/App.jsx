import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css'
import "./App.css"
import Comfort from "./Comfort"
import ContactUs from './ContactUs'
import Layout from './Layout';
import Hero2 from './Hero2';
// import Exampletwo from './Exampletwo';
import OurServices from "./OurServices";
import TimeLine from "./TimeLine";
import Products from "./Products";
import JewelleryProtection from "./JewelleryProtection";
import AtmFoggingSecurity from "./AtmFoggingSecurity";
import ShowRoomSmartSecurtiy from "./ShowRoomSmartSecurtiy";
import OurMission from "./OurMission";
import CustomCursor from "./CustomCursor";
// import ExampleThree from "./ExampleThree";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Comfort />} />
        <Route path="/Hero2" element={<Hero2 />} />
        <Route path="/CustomCursor" element={<CustomCursor />} />
        {/* <Route path="/ExampleThree" element={<ExampleThree />} /> */}
        {/* <Route path="/Exampletwo" element={<Exampletwo />} /> */}
        <Route path="/ContactUs" element={
          <Layout>
            <ContactUs />
          </Layout>
        } />
        <Route path="/OurServices" element={
          <Layout>
            <OurServices />
          </Layout>
        } />
        <Route path="/TimeLine" element={
          <Layout>
            <TimeLine />
          </Layout>
        } />
        <Route path="/Products" element={
          <Layout>
            <Products />
          </Layout>
        } />
        <Route path="/JewelleryProtection" element={
          <Layout>
            <JewelleryProtection />
          </Layout>
        } />
        <Route path="/AtmFoggingSecurity" element={
          <Layout>
            <AtmFoggingSecurity />
          </Layout>
        } />
        <Route path="/ShowRoomSmartSecurtiy" element={
          <Layout>
            <ShowRoomSmartSecurtiy />
          </Layout>
        } />
        <Route path="/OurMission" element={
          <Layout>
            <OurMission />
          </Layout>
        } />
      </Routes>
    </Router>
  )
}

export default App
