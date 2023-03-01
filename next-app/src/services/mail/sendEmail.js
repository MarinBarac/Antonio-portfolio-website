import mailServiceConfiguration from "../../config/email/service.json";

const sendEmail = async ({ url, mailData }) => {
  const nodeMailerData = { ...mailData, mailServiceConfiguration };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(nodeMailerData),
  });

  if (response.status !== 200) {
    return false;
  }

  return true;
};

export default sendEmail;