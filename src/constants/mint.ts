export const ABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "initialOwner",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "burn",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getApproved",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getReceiptData",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct ShopcekReceipt.ShopcekReceiptData",
        components: [
          {
            name: "orderId",
            type: "string",
            internalType: "string",
          },
          {
            name: "orderDate",
            type: "string",
            internalType: "string",
          },
          {
            name: "transactionDetail",
            type: "tuple",
            internalType: "struct ShopcekReceipt.TransactionDetail",
            components: [
              {
                name: "subtotalAmount",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "totalAmount",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "currency",
                type: "string",
                internalType: "string",
              },
              {
                name: "transactionHash",
                type: "string",
                internalType: "string",
              },
              {
                name: "paymentMethod",
                type: "string",
                internalType: "string",
              },
              {
                name: "shippingCost",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "itemsPurchased",
            type: "tuple[]",
            internalType: "struct ShopcekReceipt.PurchasedItem[]",
            components: [
              {
                name: "itemId",
                type: "string",
                internalType: "string",
              },
              {
                name: "name",
                type: "string",
                internalType: "string",
              },
              {
                name: "category",
                type: "string",
                internalType: "string",
              },
              {
                name: "quantity",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "pricePerUnit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "totalPrice",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "additionalInformation",
            type: "tuple",
            internalType: "struct ShopcekReceipt.AdditionalInformation",
            components: [
              {
                name: "discountApplied",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "promoCodeUsed",
                type: "string",
                internalType: "string",
              },
              {
                name: "loyaltyPointsEarned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "specialNotes",
                type: "string",
                internalType: "string",
              },
            ],
          },
          {
            name: "shopcekDomainNFT",
            type: "string",
            internalType: "string",
          },
          {
            name: "signature",
            type: "string",
            internalType: "string",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "minter",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerOf",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeMint",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "receipt",
        type: "tuple",
        internalType: "struct ShopcekReceipt.ShopcekReceiptData",
        components: [
          {
            name: "orderId",
            type: "string",
            internalType: "string",
          },
          {
            name: "orderDate",
            type: "string",
            internalType: "string",
          },
          {
            name: "transactionDetail",
            type: "tuple",
            internalType: "struct ShopcekReceipt.TransactionDetail",
            components: [
              {
                name: "subtotalAmount",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "totalAmount",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "currency",
                type: "string",
                internalType: "string",
              },
              {
                name: "transactionHash",
                type: "string",
                internalType: "string",
              },
              {
                name: "paymentMethod",
                type: "string",
                internalType: "string",
              },
              {
                name: "shippingCost",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "itemsPurchased",
            type: "tuple[]",
            internalType: "struct ShopcekReceipt.PurchasedItem[]",
            components: [
              {
                name: "itemId",
                type: "string",
                internalType: "string",
              },
              {
                name: "name",
                type: "string",
                internalType: "string",
              },
              {
                name: "category",
                type: "string",
                internalType: "string",
              },
              {
                name: "quantity",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "pricePerUnit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "totalPrice",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "additionalInformation",
            type: "tuple",
            internalType: "struct ShopcekReceipt.AdditionalInformation",
            components: [
              {
                name: "discountApplied",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "promoCodeUsed",
                type: "string",
                internalType: "string",
              },
              {
                name: "loyaltyPointsEarned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "specialNotes",
                type: "string",
                internalType: "string",
              },
            ],
          },
          {
            name: "shopcekDomainNFT",
            type: "string",
            internalType: "string",
          },
          {
            name: "signature",
            type: "string",
            internalType: "string",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
      {
        name: "approved",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setMinter",
    inputs: [
      {
        name: "minter_",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenByIndex",
    inputs: [
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenOfOwnerByIndex",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenURI",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateReceipt",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "receipt",
        type: "tuple",
        internalType: "struct ShopcekReceipt.ShopcekReceiptData",
        components: [
          {
            name: "orderId",
            type: "string",
            internalType: "string",
          },
          {
            name: "orderDate",
            type: "string",
            internalType: "string",
          },
          {
            name: "transactionDetail",
            type: "tuple",
            internalType: "struct ShopcekReceipt.TransactionDetail",
            components: [
              {
                name: "subtotalAmount",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "totalAmount",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "currency",
                type: "string",
                internalType: "string",
              },
              {
                name: "transactionHash",
                type: "string",
                internalType: "string",
              },
              {
                name: "paymentMethod",
                type: "string",
                internalType: "string",
              },
              {
                name: "shippingCost",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "itemsPurchased",
            type: "tuple[]",
            internalType: "struct ShopcekReceipt.PurchasedItem[]",
            components: [
              {
                name: "itemId",
                type: "string",
                internalType: "string",
              },
              {
                name: "name",
                type: "string",
                internalType: "string",
              },
              {
                name: "category",
                type: "string",
                internalType: "string",
              },
              {
                name: "quantity",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "pricePerUnit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "totalPrice",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "additionalInformation",
            type: "tuple",
            internalType: "struct ShopcekReceipt.AdditionalInformation",
            components: [
              {
                name: "discountApplied",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "promoCodeUsed",
                type: "string",
                internalType: "string",
              },
              {
                name: "loyaltyPointsEarned",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "specialNotes",
                type: "string",
                internalType: "string",
              },
            ],
          },
          {
            name: "shopcekDomainNFT",
            type: "string",
            internalType: "string",
          },
          {
            name: "signature",
            type: "string",
            internalType: "string",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "approved",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "approved",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BatchMetadataUpdate",
    inputs: [
      {
        name: "_fromTokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_toTokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MetadataUpdate",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC721EnumerableForbiddenBatchMint",
    inputs: [],
  },
  {
    type: "error",
    name: "ERC721IncorrectOwner",
    inputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721InsufficientApproval",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721InvalidApprover",
    inputs: [
      {
        name: "approver",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721InvalidOperator",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721InvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721InvalidReceiver",
    inputs: [
      {
        name: "receiver",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721InvalidSender",
    inputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721NonexistentToken",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721OutOfBoundsIndex",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "UnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
];

export const ADDRESS = "0xe353077dbcd7511c662F4D5deFCcC8a0a59E259E";
