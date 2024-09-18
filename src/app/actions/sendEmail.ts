"use server";
import { ErrorResponse, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const emailContent = formData.get("emailContent");

  if (!emailContent) {
    return {
      error: { message: "Invalid Message - No Email Content" },
    };
  }

  if (!senderEmail) {
    return {
      error: { message: "Invalid Message - No Sender Email" },
    };
  }

  if (typeof emailContent !== "string" || typeof senderEmail !== "string") {
    return {
      error: { message: "Invalid Message - Incorrect File Type" },
    };
  }

  const resendResponse = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["philipgeorge1337@yahoo.co.uk"],
    subject: "Portfolio Inbox",
    replyTo: senderEmail as string,
    text: emailContent as string,
  });

  console.log("Finished");

  if (resendResponse.error) {
    console.error({ resendResponse });
  }

  return resendResponse;
};
