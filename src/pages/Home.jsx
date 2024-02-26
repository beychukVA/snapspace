import React from "react";
import { Advantages } from "../components/commonSections/Advantages";
import { CallToAction } from "../components/commonSections/CallToAction";
import { Footer } from "../components/commonSections/Footer";
import { Hero } from "../components/commonSections/Hero";
import { Info } from "../components/commonSections/Info";
import { Steps } from "../components/commonSections/Steps";

export const Home = () => (
  <>
    <Hero />
    <Advantages />
    <Steps />
    <Info />
    <CallToAction />
    <Footer />
  </>
);
