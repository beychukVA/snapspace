import React from "react";
import { Link } from "react-router-dom";
import { TextLogoIcon } from "../svg";

export const Footer = () => {
  return (
    <footer className="bg-blue-dark pt-14 md:pt-16 pb-24 md:pb-64 text-light">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <Link
            to="/"
            onClick={() => {
              document.documentElement.scrollTop = 0;
              document.scrollingElement.scrollTop = 0;
            }}
          >
            <TextLogoIcon className="#fff" />
          </Link>

          <div className="flex flex-wrap gap-9 md:gap-12 mt-28 md:mt-0 max-w-[240px] md:max-w-[100%]">
            <Link to="/get-in-touch">
              <div className="md:text-[1.175rem] underline font-bold min-w-[100px] md:min-w-fit">
                Get in touch
              </div>
            </Link>
            <Link to="/about-us">
              <div className="md:text-[1.175rem] underline font-bold min-w-[100px] md:min-w-fit">
                About us
              </div>
            </Link>
            <Link to="/terms">
              <div className="md:text-[1.175rem] underline font-bold min-w-[100px] md:min-w-fit">
                Terms
              </div>
            </Link>
            <Link to="/privacy">
              <div className="md:text-[1.175rem] underline font-bold min-w-[100px] md:min-w-fit">
                Privacy
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
