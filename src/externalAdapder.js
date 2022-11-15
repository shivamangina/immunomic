import { getPayout } from "./paypal.js";

export const createRequest = async (req, res) => {
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

    eaResponse.data = { result: apiResponse.data.batch_header.time_completed };
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
