/* eslint-disable no-async-promise-executor */
import paypal from "paypal-rest-sdk";
import dotenv from "dotenv";

dotenv.config();

paypal.configure({
  mode: process.env.MODE || "live",
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
});

export const sendPayout = async (data) => {
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
      console.log(error, "error");
      console.log(payout, "payout");

      if (error) {
        return reject({ statusCode: error.httpStatusCode, data: error });
      }
      return resolve({ statusCode: payout.httpStatusCode, data: payout });
    });
  });
};

export const getPayout = async (data) => {
  console.log("hi");
  return new Promise(async (resolve, reject) => {
    if (!("payout_id" in data))
      return reject({ statusCode: 400, data: "missing required parameters" });

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
        return reject({ statusCode: 400, data: "invalid method" });
    }

    await request.get(data.payout_id, (error, payout) => {
      console.log(error, "error");
      console.log(payout, "payout");

      if (error)
        return reject({ statusCode: error.httpStatusCode, data: error });
      return resolve({ statusCode: payout.httpStatusCode, data: payout });
    });
  });
};

export const createRequest = async (input) => {
  return new Promise((resolve, reject) => {
    const data = input.data;
    const method = process.env.API_METHOD || data.method || "";
    switch (method.toLowerCase()) {
      case "sendpayout":
        sendPayout(data)
          .then((response) => {
            response.data.result =
              response.data.batch_header.payout_batch_id || "";
            return resolve(response);
          })
          .catch(reject);
        break;
      case "getpayout":
        getPayout(data)
          .then((response) => {
            response.data.result =
              response.data.batch_header.payout_batch_id || "";
            return resolve(response);
          })
          .catch(reject);
        break;
      default:
        return reject({ statusCode: 400, data: "Invalid method" });
    }
  });
};

export const requestWrapper = async (req) => {
  return new Promise((resolve) => {
    let response = { jobRunID: req.id || "" };
    createRequest(req)
      .then(({ statusCode, data }) => {
        response.status = "success";
        response.data = data;
        response.statusCode = statusCode;
        resolve(response);
      })
      .catch(({ statusCode, data }) => {
        response.status = "errored";
        response.error = data;
        response.statusCode = statusCode;
        resolve(response);
      });
  });
};

// createRequest() wrapper for GCP
export const gcpservice = async (req = {}, res) => {
  let response = await requestWrapper(req.body);
  res.status(response.statusCode).send(response);
};

// createRequest() wrapper for AWS Lambda
export const handler = async (event, context, callback) => {
  callback(null, await requestWrapper(event));
};
