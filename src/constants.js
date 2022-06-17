export const youfundrAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
export const youfundrABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "fundAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fundStarter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "fundName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "fundDescription",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "goal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum Project.State",
        name: "state",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "donator",
        type: "bool",
      },
    ],
    name: "fundStarted",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "allProjects",
    outputs: [
      {
        internalType: "contract Project[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountNeeded",
        type: "uint256",
      },
    ],
    name: "startFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
export const projectABI = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "fundStarter",
        type: "address",
      },
      {
        internalType: "string",
        name: "fundName",
        type: "string",
      },
      {
        internalType: "string",
        name: "fundDescription",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "fundRaisingDeadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "goal",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "FounderPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentTotal",
        type: "uint256",
      },
    ],
    name: "MoneyReceived",
    type: "event",
  },
  {
    inputs: [],
    name: "amountNeeded",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "completeAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "details",
    outputs: [
      {
        internalType: "address",
        name: "projectAddress",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "fundStarter",
        type: "address",
      },
      {
        internalType: "string",
        name: "fundName",
        type: "string",
      },
      {
        internalType: "string",
        name: "fundDescription",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "enum Project.State",
        name: "currentState",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "currentAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "goal",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "donator",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "donations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "founder",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "raiseBy",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "refundSenders",
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
  {
    inputs: [],
    name: "sendFunds",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum Project.State",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "transferCompletedOrExpired",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
