const ethers = require("ethers");
exports.handler = async (event) => {
  const body = JSON.parse(event.body);

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
  ];
  const provider = new ethers.providers.JsonRpcProvider(
    "https://lingering-thrilling-mound.matic-testnet.discover.quiknode.pro/9a7ec6af6fc98446c232302ce0c9a68c66e9f819/"
  );
  const contract = new ethers.Contract(contractAddress, abi, provider);

  const info = await contract.functions.requestInfo(
    "ORACLE_ADDRESS",
    "JOB_ID",
    "PAYOUT_ID"
  );
  console.log(info);

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello " + body.name),
  };
  return response;
};
