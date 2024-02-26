import React from "react";
import { Footer } from "../components/commonSections/Footer";
import { Header } from "../components/commonSections/Header";
import Avatar from "../assets/avatar.png";
import Avatar1 from "../assets/avatar-1.jpg";
import Avatar3 from "../assets/avatar-3.jpg";
import Avatar4 from "../assets/avatar-4.jpg";
import Avatar5 from "../assets/avatar-5.jpg";
import Avatar6 from "../assets/avatar-6.jpg";
import BgIcon from "../assets/about-us-bg.svg";

export const AboutUs = () => {
  return (
    <>
      <div
        className="bg-blue-light text-blue-dark bg-no-repeat bg-[top_257px_right_-550px] md:bg-[top_193px_right]"
        style={{
          backgroundImage: `url(${BgIcon})`,
        }}
      >
        <Header />
        <div className="container mx-auto">
          <h2 className="font-bold text-[2rem] md:text-[4rem] mt-4 md:mt-20 max-w-[620px] mb-12 md:mb-28">
            The SnapSpace team behind the AI
          </h2>

          <div className="max-w-[850px] mx-auto pb-20 md:pb-72">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              <div className="mt-6">
                <div
                  className="w-[139px] md:w-[232px] h-[139px] md:h-[232px] rounded-full mb-6 md:mb-12"
                  style={{ background: `url(${Avatar1})` }}
                />
                <h5 className="m-0 md:text-[1.5rem] font-bold">
                  Dafydd Hughes
                </h5>
                <p className="mb-3 md:mb-4 md:text-[1.25rem]">
                  Founder/Managing Director
                </p>

                <p className="mb-1 md:mb-4 text-[0.875rem] md:text-[1rem]">
                  Dafydd is the Founder and Managing Director of SnapSpace
                  providing strategic direction to the team and market insight
                  from his 25+ years experience in Real Estate.
                </p>
              </div>

              <div className="mt-6">
                <div
                  className="w-[139px] md:w-[232px] h-[139px] md:h-[232px] rounded-full mb-6 md:mb-12"
                  style={{ background: `url(${Avatar})` }}
                />
                <h5 className="m-0 md:text-[1.5rem] font-bold">Neeraj Madan</h5>
                <p className="mb-3 md:mb-4 md:text-[1.25rem]">
                  Data Scientist Lead
                </p>

                <p className="mb-1 md:mb-4 text-[0.875rem] md:text-[1rem]">
                  Neeraj leads the development of the unique AI engine,
                  providing key insights into model development and critical
                  interpretation of data output.
                </p>
              </div>

              <div className="mt-6">
                <div
                  className="w-[139px] md:w-[232px] h-[139px] md:h-[232px] rounded-full mb-6 md:mb-12"
                  style={{ background: `url(${Avatar3})` }}
                />
                <h5 className="m-0 md:text-[1.5rem] font-bold">Hui Zhi</h5>
                <p className="mb-3 md:mb-4 md:text-[1.25rem]">Data Scientist</p>

                <p className="mb-1 md:mb-4 text-[0.875rem] md:text-[1rem]">
                  Hui focuses on data preparation and model optimisation,
                  providing key insights into critical interpretation of data
                  within Python and support model development.
                </p>
              </div>

              <div className="mt-6">
                <div
                  className="w-[139px] md:w-[232px] h-[139px] md:h-[232px] rounded-full mb-6 md:mb-12"
                  style={{ background: `url(${Avatar4})` }}
                />
                <h5 className="m-0 md:text-[1.5rem] font-bold">
                  Lorik Kastrati
                </h5>
                <p className="mb-3 md:mb-4 md:text-[1.25rem]">Data Processor</p>

                <p className="mb-1 md:mb-4 text-[0.875rem] md:text-[1rem]">
                  Lorik processes data and is responsible for working with the
                  team to produce data for the model learning and development.
                  His strong governance ensures that the data meets the high
                  standard needed.
                </p>
              </div>

              <div className="mt-6">
                <div
                  className="w-[139px] md:w-[232px] h-[139px] md:h-[232px] rounded-full mb-6 md:mb-12"
                  style={{ background: `url(${Avatar5})` }}
                />
                <h5 className="m-0 md:text-[1.5rem] font-bold">Bobby Rahman</h5>
                <p className="mb-3 md:mb-4 md:text-[1.25rem]">Data Manager</p>

                <p className="mb-1 md:mb-4 text-[0.875rem] md:text-[1rem]">
                  Bobby is responsible for data management ensuring its
                  integrity and accuracy. He is fundamental in sorting the
                  required data for the team to use for product development.
                </p>
              </div>

              <div className="mt-6">
                <div
                  className="w-[139px] md:w-[232px] h-[139px] md:h-[232px] rounded-full mb-6 md:mb-12"
                  style={{ background: `url(${Avatar6})` }}
                />
                <h5 className="m-0 md:text-[1.5rem] font-bold">
                  Steffan Wiliams
                </h5>
                <p className="mb-3 md:mb-4 md:text-[1.25rem]">
                  Product development and Customer Insights
                </p>

                <p className="mb-1 md:mb-4 text-[0.875rem] md:text-[1rem]">
                  Steffan uses his 25+ years of workplace design experience to
                  provide market and customer insight and is an expert on
                  workplace layouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
