import React, { useState } from "react";
import { Input } from "../components/Input";
import { RangeSlider } from "../components/RangeSlider";
import {
  ArrowsDownIcon,
  FifteenPersonIcon,
  NinePersonIcon,
  PersonIcon,
  SixPersonIcon,
  TenPersonIcon,
  ThreePersonIcon,
} from "../components/svg";
import { UploadPlan } from "../components/UploadPlan";
import { ChoiceOfBusinessSector } from "../components/ChoiceOfBusinessSector";
import bg from "./../assets/Artboard18.png";
// import person from "./../assets/PersonsImgForSlider/OnePerson.png";
import { RadioInput } from "../components/RadioInput";
import { SpecifyOrAutoRequirements } from "../components/SpecifyOrAutoRequirements";
import { Header } from "../components/commonSections/Header";
import ReactFullpage from "@fullpage/react-fullpage";

export const GetStarted = () => <FullPage fullpageApi={"fullpageApi"} />;
// <ReactFullpage
//   scrollingSpeed={1000}
//   fitToSection={true}
//   scrollOverflow={true}
//   autoScrolling={false}
//   render={({ state, fullpageApi }) => {
//     return (
//       <ReactFullpage.Wrapper>
//         <FullPage fullpageApi={fullpageApi} />;
//       </ReactFullpage.Wrapper>
//     );
//   }}
// />
export const FullPage = ({ fullpageApi }) => {
  const [adress1, setAdress1] = useState("");
  const [adress2, setAdress2] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [floor, setFloor] = useState("");
  const [area, setArea] = useState("");
  const [employeesAmount, setEmployeesAmount] = useState({ value: 2 });
  const [daysWorkFromOffice, setDaysWorkFromOffice] = useState({ value: 1 });
  const [incrNumbOfEmployees, setIncrNumbOfEmployees] = useState("");
  const [placeFor, setPlaceFor] = useState("");
  const [sharingIntensity, setSharingIntensity] = useState("");
  const [isPlanUploaded, setIsPlanUloaded] = useState(false);

  const disabled =
    !adress1 ||
    !adress2 ||
    !postcode ||
    !city ||
    !country ||
    !floor ||
    !area ||
    !isPlanUploaded;

  return (
    <>
      <div className="section px-[20px] sm:px-[45px] text-white">
        <Header />
        <div className="text-[#77F2A1] mt-[70px] text-[38px] sm:text-[44px] md:text-[46px] lg:text-[54px]  xl:text-[80px] font-bold">
          Let’s get started
        </div>
        <div className="text-[28px]  sm:text-[34px]  lg:text-[38px]  xl:text-[40px] mb-[20px] font-bold">
          About the building
        </div>
        <div className="relative">
          <div className="text-[#77F2A1] text-[22px] font-bold mb-[40px]">
            1. Please enter the address of the building
            <span className="text-white">*</span>
          </div>
          <Input
            placeholder="Address 1"
            onChange={(value) => {
              setAdress1(value);
            }}
            value={adress1}
          />
          <Input
            placeholder="Address 2"
            onChange={(value) => {
              setAdress2(value);
            }}
            value={adress2}
          />
          <Input
            placeholder="Postcode"
            onChange={(value) => {
              setPostcode(value);
            }}
            value={postcode}
          />
          <Input
            placeholder="Town/city"
            onChange={(value) => {
              setCity(value);
            }}
            value={city}
          />
          <Input
            placeholder="Country"
            onChange={(value) => {
              setCountry(value);
            }}
            value={country}
          />

          <div className="text-[#77F2A1] text-[22px] font-bold mt-[60px] mb-[40px]">
            2. What floor are you interested in?
            <span className="text-white">*</span>
          </div>
          <Input
            placeholder="Floor number/name"
            onChange={(value) => {
              setFloor(value);
            }}
            value={floor}
          />

          <div className="text-[#77F2A1] text-[22px] font-bold mt-[60px] mb-[40px]">
            3. Please input the Net Internal Area (NIA):
            <span className="text-white">*</span>
          </div>
          <Input
            placeholder="Net Internal Area (sq/ft)"
            onChange={(value) => {
              setArea(value);
            }}
            value={area}
          />
          <div className="text-[#77F2A1] text-[22px] font-bold mt-[60px] mb-[40px]">
            4. What is the Maximum Statutory Occupancy (if you know this)?
          </div>
          <Input placeholder="Maximum Statutory Occupancy" />
          <div
            onClick={() => fullpageApi.moveSectionDown()}
            className="mr-auto ml-auto cursor-pointer w-fit  mt-[50px] sm:mt-[105px] mb-[65px]"
          >
            <ArrowsDownIcon className={"#77F2A1"} />
          </div>
          <div className=" hidden lg:block absolute lg:right-[40px] max-w-[400px] xl:max-w-full  xl:right-[150px] top-[0px]">
            <img src={bg} alt="img" className="" />
          </div>
          <div className=" hidden lg:block absolute lg:right-[40px]  max-w-[400px] xl:max-w-full  xl:right-[150px] top-[340px]">
            <img src={bg} alt="img" className="" />
          </div>
        </div>
      </div>
      <UploadPlan
        onArrowDownClick={() => fullpageApi.moveSectionDown()}
        setIsPlanUloaded={setIsPlanUloaded}
      />
      <div className="section text-white">
        <ChoiceOfBusinessSector
          onArrowDownClick={() => fullpageApi.moveSectionDown()}
        />
        <div className="bg-[#4F76F6]  pt-[60px] pb-[75px] px-[20px] sm:px-[45px]">
          <div className="text-[#77F2A1] text-[22px] font-bold mb-[80px] lg:mb-[290px]">
            6. How many global employees do you have?
          </div>
          <div className="lg:pl-[15px] max-w-[1282px]">
            <div className="flex">
              {/* <PersonIcon />
            <ThreePersonIcon />
            <SixPersonIcon />
            <NinePersonIcon />
            <TenPersonIcon />
            <FifteenPersonIcon /> */}
              {/* <img src={person} alt="img" className="opacity-25" /> */}
            </div>
            <RangeSlider
              value={employeesAmount}
              setValue={setEmployeesAmount}
              marks={[
                { mark: "0-20", img: <PersonIcon /> },
                { mark: "21-50", img: <ThreePersonIcon /> },
                { mark: "50-100", img: <SixPersonIcon /> },
                { mark: "101-250", img: <NinePersonIcon /> },
                { mark: "251-500", img: <TenPersonIcon /> },
                { mark: "501-1000", img: <FifteenPersonIcon /> },
                "1001+",
              ]}
              min={0}
              max={6}
            />
          </div>
          <div className="text-[#77F2A1] text-[22px] font-bold mt-[60px] mb-[40px]">
            7. How many employees do you anticipate to work from this office?
          </div>
          <Input placeholder="Employee" />
          <div className="text-[#77F2A1] text-[22px] font-bold mt-[60px] mb-[40px]">
            8. Are you anticipating for this number to increase in the future?
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="mb-[25px] mr-[60px]">
              <RadioInput
                value="Yes"
                role={incrNumbOfEmployees}
                onChange={setIncrNumbOfEmployees}
              />
              <RadioInput
                value="No"
                role={incrNumbOfEmployees}
                onChange={setIncrNumbOfEmployees}
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center">
              <span className="mr-[12px] mb-[24px]">By</span>
              <Input placeholder="0" label="Employees" />
              <span className="mx-[15px] mb-[24px]"> employees, over </span>
              <Input placeholder="0" label="Months" />
              <span className="ml-[12px] mb-[24px]">months</span>
            </div>
          </div>
          <div className="text-[#77F2A1] text-[22px] font-bold mt-[60px] mb-[100px]">
            9. How many days on average do you expect employees to work from the
            office (per week)?
          </div>
          <div className="pl-[15px] max-w-[495px]">
            <RangeSlider
              value={daysWorkFromOffice}
              setValue={setDaysWorkFromOffice}
              marks={["", "1", "2", "3", "4", "5"]}
              min={1}
              max={5}
            />
          </div>
          <div className="text-[#77F2A1] text-[22px] font-bold mt-[60px] mb-[40px]">
            10. What will your employees see as the primary use of your office
            in the future?
          </div>
          <div className="mb-[25px]">
            <RadioInput
              value="A place to collaborate face to face"
              role={placeFor}
              onChange={setPlaceFor}
            />
            <RadioInput
              value="A place to focus and concentrate"
              role={placeFor}
              onChange={setPlaceFor}
            />
            <RadioInput
              value="A place to collaborate face to face and focus in equall measures"
              role={placeFor}
              onChange={setPlaceFor}
            />
          </div>
          <div className="text-[#77F2A1] text-[22px] font-bold mt-[60px] mb-[40px]">
            11. What will your employees see as the primary use of your office
            in the future?
          </div>
          <div className="mb-[25px] relative">
            <RadioInput
              value="No sharing (1 desk per employee)"
              role={sharingIntensity}
              onChange={setSharingIntensity}
            />
            <RadioInput
              value="Moderate sharing ratio (10 desks per 15 empoyees)e"
              role={sharingIntensity}
              onChange={setSharingIntensity}
            />
            <RadioInput
              value="Higher sharing ratio (10 desks per 20 employees)"
              role={sharingIntensity}
              onChange={setSharingIntensity}
            />
            <RadioInput
              value="Other sharing ratio"
              role={sharingIntensity}
              onChange={setSharingIntensity}
              className="lg:mt-[50px]"
            />
            <div className="lg:absolute left-[210px] top-[140px] flex flex-col mt-[30px] lg:flex-row lg:items-center">
              <Input placeholder="0" label="Descs" />
              <span className="mx-[15px] mb-[24px]">desks per</span>
              <Input placeholder="0" label="Months" />
              <span className="ml-[12px] mb-[24px]">employees</span>
            </div>
          </div>
          {/* <div
            onClick={() => fullpageApi.moveSectionDown()}
            className="mr-auto ml-auto cursor-pointer w-fit  mt-[30px] lg:mt-[95px] "
          >
            <ArrowsDownIcon className={"white"} />
          </div> */}
        </div>
      </div>
      <SpecifyOrAutoRequirements disabled={disabled} />
    </>
  );
};
