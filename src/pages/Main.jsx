import React from "react";
import { Intro } from "../components/mainPageSections/Intro";
import { Journey } from "../components/mainPageSections/Journey";
import { ThreeSteps } from "../components/mainPageSections/ThreeSteps";
// import { Reviews } from "../components/mainPageSections/Reviews";
import { Benefits } from "../components/mainPageSections/Benefits";
import { CreateNow } from "../components/mainPageSections/CreateNow";
import { WhatIsIt } from "../components/mainPageSections/WhatIsIt";
import ReactFullpage from "@fullpage/react-fullpage";
import { Footer } from "../components/commonSections/Footer";

export const Main = () => {
  return (
    <div className="text-white ">
      {/* <Fullpage /> */}
      <Intro />
      <WhatIsIt />
      <ThreeSteps />
      <Benefits />
      {/* <Journey /> */}
      <CreateNow />
      {/* <Reviews /> */}
    </div>
  );
};
const Fullpage = () => (
  <ReactFullpage
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000}
    fitToSection={true}
    scrollOverflow={true}
    autoScrolling={false}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <Intro onArrowDownClick={() => fullpageApi.moveSectionDown()} />
          <WhatIsIt onArrowDownClick={() => fullpageApi.moveSectionDown()} />
          <ThreeSteps onArrowDownClick={() => fullpageApi.moveSectionDown()} />
          <Benefits onArrowDownClick={() => fullpageApi.moveSectionDown()} />
          {/* <Journey onArrowDownClick={() => fullpageApi.moveSectionDown()} /> */}
          <CreateNow onArrowDownClick={() => fullpageApi.moveSectionDown()} />
          {/* <Reviews onArrowDownClick={() => fullpageApi.moveSectionDown()} /> */}
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
