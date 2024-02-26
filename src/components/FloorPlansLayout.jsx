import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Auth } from "aws-amplify";
import { Modal } from "../components/Modal";
import { Loader } from "./Loader";
import { QuoteLayout } from "./QuoteLayout";
import { DataStore, SortDirection } from "@aws-amplify/datastore";
// import { DataStore, SortDirection } from "aws-amplify";
import { Plan } from "../models";
import html2pdf from "html2pdf.js";

export const FloorPlansLayout = ({ user }) => {
  const [formAddress, setFormAddress] = useState("N/A");
  const [plansId, setPlansId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisibleLoader, setVisibleLoader] = useState(true);
  const [userPlans, setUserPlans] = useState([]);
  const [currentPlan, setCurrentPlan] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getAllPlans = async () => {
      const user = await Auth.currentAuthenticatedUser();
      console.log("[USER]: ", user);
      if (user) {
        const {
          attributes: { "custom:address": address },
        } = user;
        setFormAddress(user ? address : "N/A");
      }
      const models = await DataStore.query(
        Plan,
        (c) => c.owner("eq", user?.username),
        {
          sort: (s) => s.createdAt(SortDirection.ASCENDING),
        }
      );
      setUserPlans(models);
      setVisibleLoader(false);
    };
    try {
      getAllPlans();
    } catch (error) {
      setVisibleLoader(false);
      console.log("ERROR: ", error);
    }
  }, []);

  const setPlan = (id) => {
    setPlansId(id);
    const currPlan = userPlans.find((plan) => plan.planId === id);
    setCurrentPlan(currPlan);
  };

  const closeModal = () => setIsModalOpen(false);
  const openModal = (id) => {
    setPlan(id);
    setIsModalOpen(true);
  };

  const downloadAsFile = (id) => {
    setPlan(id);
    var quote = document.getElementById("print-quote");
    var opt = {
      margin: 0.1,
      filename: "quote_" + id + ".pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        WindowWidht: 1600,
        scale: 3,
      },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(quote).set(opt).save();

    // const currPlan = userPlans.find((plan) => plan.planId === id);
    // const text = [];
    // text.push(`Your quote (#${currPlan?.planId})\n`);
    // text.push("-------------------------------\n");
    // text.push(`Total cost: £${currPlan?.summary}\n`);
    // text.push("-------------------------------\n");
    // text.push("Requirements summary\n");
    // text.push(`Number of desks: ${currPlan?.desksValue}\n`);
    // text.push(`Address: ${formAddress}\n`);
    // text.push(
    //   `Net internal area: ${currPlan?.internalAreaValue}${
    //     currPlan?.activeAreaIndex === 0 ? "sqm" : "sqft"
    //   }\n`
    // );
    // text.push(
    //   `Maximum allowed occupancy: ${
    //     currPlan?.peopleValue > 0 ? currPlan?.peopleValue : "N/A"
    //   }\n`
    // );
    // text.push("-------------------------------\n");
    // text.push("Requirements\n");
    // currPlan?.requirementsArray[0].items.map(({ title, value }) =>
    //   text.push(`${title}: ${value}\n`)
    // );
    // const blob = new Blob([text.join("")], { type: "text/plain" });
    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement("a");
    // a.download = "quote_" + Date.now() + ".txt";
    // a.href = url;
    // a.click();
  };

  return (
    <>
      <Loader visible={isVisibleLoader} />
      <div className="bg-[#4C5678] rounded-[8px] w-full p-[27px] mt-[15px] mb-[25px]">
        <span className="text-blue-light text-[24px] md:text-[30px] font-bold mb-[19px]">
          Your floorplans
        </span>
        <div className="overflow-auto max-h-[800px]">
          {userPlans ? (
            userPlans.map((plan) => {
              return (
                <div className="mt-[25px]" key={plan.id}>
                  <div className="flex flex-col items-start justify-center p-[27px] mb-[20px] border-[1px] border-[#C6D6FF] rounded-[6px]">
                    <div className="flex flex-col">
                      <span className="text-blue-light text-[18px] md:text-[20px] font-bold">
                        Order number #{plan?.planId}
                      </span>
                      <span className="text-light text-[14px] md:text-[16px] font-normal mb-[25px]">
                        {plan?.createdAt}
                      </span>
                    </div>
                    {plan?.image && (
                      <div className="bg-gray w-[163px] h-[109px] text-[#1F2C56] text-[12px] font-bold px-[10px] py-[5px] rounded-lg mb-[20px]">
                        <img src={plan?.image} alt={plan?.title} />
                      </div>
                    )}
                    <div className="w-full flex items-center justify-start md:justify-end">
                      <div
                        className="hover:cursor-pointer underline underline-offset-4 text-[14px] md:text-[16px] font-normal leading-[17px] text-light pr-[15px] border-r-[1px]"
                        onClick={() => openModal(plan?.planId)}
                      >
                        View
                      </div>
                      <div
                        className="hover:cursor-pointer underline underline-offset-4 text-[14px] md:text-[16px] font-normal leading-[17px] text-light pl-[15px]"
                        onClick={() => downloadAsFile(plan?.planId)}
                      >
                        Download
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="mt-[21px] mb-[37px]">
              <span className="text-[16px] font-normal">
                You don’t currently have any floorplans.
              </span>
            </div>
          )}
        </div>
        <Button className="w-fit" onClick={() => navigate("/questionnaire")}>
          Create new floorplan
        </Button>
      </div>
      <div>
        <div className="flex flex-col bg-[#4C5678] rounded-[8px] w-full p-[27px] mt-[15px] mb-[25px]">
          <span className="text-blue-light text-[24px] font-bold mb-[19px]">
            Need help?
          </span>
          <span className="text-[16px] font-normal mb-[37px]">
            Contact us to get your queries and questions answered.
          </span>
          <div className="underline underline-offset-4 md:underline-offset-[5px]">
            <a href="mailto:info@snapspace.com">info@snapspace.ai</a>
          </div>
        </div>
      </div>
      <Modal
        className="bg-blue-dark"
        isOpen={isModalOpen}
        closeModal={closeModal}
      >
        {user && currentPlan?.summaryArray && currentPlan?.requirementsArray && (
          <div
            id="print-quote"
            className="bg-blue-dark max-w-[800px] w-full flex flex-col items- justify-center py-[10px] px-[20px]  md:py-[40px] md:px-[80px]"
          >
            <div className="flex-1 w-full">
              <QuoteLayout
                title={true}
                address={formAddress}
                summaryList={currentPlan?.summaryArray}
                requirementsList={currentPlan?.requirementsArray}
                desksValue={currentPlan?.desksValue}
                internalAreaValue={currentPlan?.internalAreaValue}
                activeAreaIndex={currentPlan?.activeAreaIndex}
                peopleValue={currentPlan?.peopleValue}
                totalCost={currentPlan?.summary}
              />
            </div>
            {currentPlan?.image && (
              <img
                className="w-full h-full flex-1"
                src={currentPlan?.image}
                alt={currentPlan?.title}
              />
            )}
          </div>
        )}
      </Modal>
    </>
  );
};
