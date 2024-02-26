import Moment from "moment";

let base64 = "";

const onLoad = (fileString) => {
  base64 = fileString;
};

const getBase64 = (
  senderName,
  senderEmail,
  emailTo,
  message,
  file,
  plansId,
  summary
) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = async () => {
    onLoad(reader.result);

    await fetch(
      "https://ptbpgf55l2.execute-api.us-east-1.amazonaws.com/sendEmail",
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderName: senderName,
          senderEmail: senderEmail,
          emailTo: emailTo,
          message: message,
          base64Data: base64,
          date: Moment().format("DD/MM/YYYY"),
          fileName: file.name,
          plansId: plansId,
          summary: summary,
        }),
      }
    );
  };
};

const sendEmail = async (
  senderName,
  senderEmail,
  emailTo,
  message,
  file,
  plansId,
  summary
) => {
  getBase64(senderName, senderEmail, emailTo, message, file, plansId, summary);
};

export default sendEmail;
