const getPayout = require("./paypal.js").getPayout;

const createRequest = async (req, res) => {
  const eaInputData = req.body;
  console.log(" Request data received: ", eaInputData);

  let eaResponse = {
    data: {},
    jobRunId: eaInputData.id,
    statusCode: 0,
  };

  try {
    const apiResponse = await getPayout(eaInputData.data);
    console.log("apiResponse: ", apiResponse);

    eaResponse.data = {
      paymentMethod:
        apiResponse.data.items[0].payout_item.recipient_wallet || "PAYPAL",
      to: apiResponse.data.items[0].payout_item.receiver || "Reciever",
      from: apiResponse.data.items[0].payout_item.receiver || "Sender",
      amount: apiResponse.data.batch_header.amount.value || "100",
      transactionId: apiResponse.data.items[0].transaction_id || "80ADJ9390K",
      currency: apiResponse.data.batch_header.amount.currency || "USD",
      paymentTime:
        apiResponse.data.batch_header.time_completed || "2022-11-12T17:02:38Z",
      accountId: apiResponse.data.items[0].activity_id || "P3GJR5VFXJSUL",
      eventName: "Campaign 1",
      organisationId: "Organisation 1",
    };
    eaResponse.statusCode = apiResponse.statusCode;

    res.json(eaResponse);
  } catch (error) {
    console.error("API Response Error: ", error);
    eaResponse.error = error.message;
    eaResponse.statusCode = error.statusCode;

    res.json(eaResponse);
  }

  console.log("returned response:  ", eaResponse);
  return;
};


module.exports = { createRequest } 
