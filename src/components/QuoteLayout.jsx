import React from "react";

export const QuoteLayout = ({
  address = "N/A",
  title = false,
  summaryList,
  requirementsList,
  desksValue,
  internalAreaValue,
  activeAreaIndex,
  peopleValue,
  totalCost,
}) => {
  const formValue = (title, value) => {
    switch (title) {
      case "Number of desks":
        return desksValue;
      case "Address":
        return address;
      case "Net internal area":
        return `${internalAreaValue}${activeAreaIndex === 0 ? "sqm" : "sqft"}`;
      case "Maximum allowed occupancy":
        return `${peopleValue > 0 ? peopleValue : "N/A"}`;

      default:
        return value;
    }
  };

  return (
    <>
      {title && (
        <h2 className="font-bold text-blue-light md:text-[2rem] text-[1.875rem] mb-5 md:mb-3">
          Your quote
        </h2>
      )}
      <div className="border-[0.5px] border-blue-light rounded-md px-[30px] py-[25px] mb-[22px] md:mb-[38px]">
        <span className="text-[0.875rem] text-blue-light">Total cost</span>
        <h5 className="mt-2 text-blue-light text-[2rem] font-bold">
          £{totalCost}
        </h5>
      </div>

      <h5 className="text-blue-light mb-3 font-bold text-[1.175rem]">
        Requirements summary
      </h5>

      <div className="border-t-[0.5px] border-b-[0.5px] border-blue-light py-3 mb-7">
        {summaryList.map((r) => (
          <div key={r.id}>
            {r.title && (
              <h5 className="font-bold mb-2 text-blue-light">{r.title}</h5>
            )}
            {r.items.map((i) => (
              <div
                key={i.id}
                className="flex justify-between text-[0.875rem] text-light mb-2"
              >
                <span>{i.title}</span>
                <span
                  className="font-bold text-right"
                  dangerouslySetInnerHTML={{
                    __html: formValue(i.title, i.value),
                  }}
                />
              </div>
            ))}
          </div>
        ))}
        {requirementsList.map((r) => (
          <div key={r.id}>
            {r.title && (
              <h5 className="font-bold mb-2 text-blue-light">{r.title}</h5>
            )}
            {r.items.map((i) => (
              <div
                key={i.id}
                className="flex justify-between text-[0.875rem] text-light mb-2"
              >
                <span>{i.title}</span>
                <span
                  className="font-bold text-right"
                  dangerouslySetInnerHTML={{ __html: i.value }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
