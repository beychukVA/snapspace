import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export const Info = () => {
  const firstBlockRef = useRef();
  const secondBlockRef = useRef();
  const thirdBlockRef = useRef();

  const { inViewport: inViewportFirst } = useInViewport(firstBlockRef);
  const { inViewport: inViewportSecond } = useInViewport(secondBlockRef);
  const { inViewport: inViewportThird } = useInViewport(thirdBlockRef);

  return (
    <div className="container mx-auto pt-14 md:pt-48 pb-20 md:pb-36 text-blue-dark">
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="m-0 mb-8 text-[2.25rem] lg:text-[3.75rem] font-bold">
          Why choose <br /> SnapSpace?
        </h2>

        <div className="text-[1.25rem] md:text-[1.375rem] md:w-[50%]">
          <p className="mb-6 md:mb-8">
            <b>The SnapSpace team are on a mission:</b> to develop technology
            that does the mundane heavy-lifting work of space planning, allowing
            you to have more time to do the interesting stuff.
          </p>
          <p className="mb-6 md:mb-8">
            The team is made up of Workplace Designers and Strategists, Project
            and Programme Managers, Data Architects and Programmers who have
            come together to unlock the potential of Artificial Intelligence.
            Each team member is an expert in their own field, giving SnapSpace a
            full understanding of all aspects of what makes a successful design.
          </p>
          <p className="mb-6 md:mb-8">
            We are driven by curiosity and are determined to use AI to make the
            design process easier and quicker for all.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-14 md:gap-20 mt-20 lg:mt-40">
        <div className="pl-5 md:pl-6 flex-1 relative">
          <div
            className={inViewportFirst ? "animated-line" : ""}
            ref={firstBlockRef}
          />
          <h5 className="m-0 mb-1.5 text-[1.5rem] md:text-[1.75rem] font-bold">
            Innovator spirit
          </h5>
          <p className="m-0 md:text-[1.25rem]">
            Never satisfied with the way things have ‘always been done’ we share
            a common vision around harnessing technology to better solve real
            estate challanges.
          </p>
        </div>

        <div className="pl-5 md:pl-6 flex-1 relative">
          <div
            className={inViewportSecond ? "animated-line" : ""}
            ref={secondBlockRef}
          />
          <h5 className="m-0 mb-1.5 text-[1.5rem] md:text-[1.75rem] font-bold">
            At the cutting edge
          </h5>
          <p className="m-0 md:text-[1.25rem]">
            Our industry is at a turning point and advances in AI technology,
            organisational design, environmental psychology and sustainibility
            are transforming the way we use space.
          </p>
        </div>

        <div className="pl-5 md:pl-6 flex-1 relative">
          <div
            className={inViewportThird ? "animated-line" : ""}
            ref={thirdBlockRef}
          />

          <h5 className="m-0 mb-1.5 text-[1.5rem] md:text-[1.75rem] font-bold">
            Expertise & Experience
          </h5>
          <p className="m-0 md:text-[1.25rem]">
            Our team comprises of cross-discipline and cross-sector industry
            leading experts.
          </p>
        </div>
      </div>
    </div>
  );
};
