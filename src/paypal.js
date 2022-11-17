const paypal = require("paypal-rest-sdk");
const dotenv = require("dotenv");
const process = require("process");

dotenv.config();

paypal.configure({
  mode: process.env.MODE || "live",
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
});

const getPayout = async (data) => {
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

const sendPayout = async (data) => {
  return new Promise(async (resolve, reject) => {
    if (!("amount" in data) || !("receiver" in data)) {
      return reject({ statusCode: 400, data: "missing required parameters" });
    }

    let sender_batch_id = Math.random().toString(36).substring(9);
    let create_payout_json = {
      sender_batch_header: {
        sender_batch_id: sender_batch_id,
        email_subject: data.email_subject || "",
        email_message: data.email_message || "",
      },
      items: [
        {
          recipient_type: data.recipient_type || "EMAIL",
          amount: {
            value: data.amount,
            currency: data.currency || "USD",
          },
          receiver: data.receiver,
          note: data.note || "",
          sender_item_id: data.sender_item_id || "",
        },
      ],
    };

    await paypal.payout.create(create_payout_json, function (error, payout) {
      if (error) {
        return reject({ statusCode: error.httpStatusCode, data: error });
      }
      return resolve({ statusCode: payout.httpStatusCode, data: payout });
    });
  });
};

module.exports = { getPayout, sendPayout };
