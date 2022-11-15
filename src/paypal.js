import paypal from "paypal-rest-sdk";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

paypal.configure({
  mode: process.env.MODE || "live",
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
});

export const getPayout = async (data) => {
  console.log("getPayout is running");
  return new Promise(async (resolve, reject) => {
    if (!("payout_id" in data))
      return reject({
        statusCode: 400,
        message: "missing required parameters",
      });

    let type = data.type || "batch";
    let request;
    switch (type.toLowerCase()) {
      case "item":
        request = paypal.payoutItem;
        break;
      case "batch":
        request = paypal.payout;
        break;
      default:
        return reject({ statusCode: 400, message: "invalid method" });
    }

    await request.get(data.payout_id, (error, payout) => {
      if (error) {
        console.log(error, "error");
        return reject({ statusCode: error.httpStatusCode, message: error });
      }

      console.log(payout, "payout");
      return resolve({ statusCode: payout.httpStatusCode, data: payout });
    });
  });
};