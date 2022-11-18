// webhook transformer
const ethers = require("ethers");
exports.handler = async (event) => {
  console.log(JSON.stringify(event));
  
  const body = JSON.parse(event.body);

  const PAYOUT_ID = body.resource.batch_header.payout_batch_id;
  const ORACLE_ADDRESS = "Oracle address here";
  const JOB_ID = "Job Id here";
  const SECRET_KEY = "Secret key here";
  const RPC_PROVIDER = "RPC provider here";

  const contractAddress = "0xABCEC3684E4b606c1E66d80c6a3d70dAeFdbF215";
  const abi = [
    {
      inputs: [
        {
          internalType: "address",
          name: "_oracle",
          type: "address",
        },
        {
          internalType: "string",
          name: "_jobId",
          type: "string",
        },
        {
          internalType: "string",
          name: "_payoutId",
          type: "string",
        },
      ],
      name: "requestInfo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_id",
          type: "string",
        },
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "bool",
          name: "_isActive",
          type: "bool",
        },
        {
          internalType: "address",
          name: "_createdBy",
          type: "address",
        },
        {
          internalType: "string",
          name: "_createdAt",
          type: "string",
        },
      ],
      name: "createOrganisation",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const provider = new ethers.providers.JsonRpcProvider(RPC_PROVIDER);
  const signer = new ethers.Wallet(SECRET_KEY, provider);
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const info = await contract.functions.requestInfo(
    ORACLE_ADDRESS,
    JOB_ID,
    PAYOUT_ID
  );

  console.log(JSON.stringify({ PAYOUT_ID, info }));

  const response = {
    statusCode: 200,
    body: JSON.stringify("Webhook received" + PAYOUT_ID),
  };
  return response;
};
