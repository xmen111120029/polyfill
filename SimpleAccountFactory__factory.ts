/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  SimpleAccountFactory,
  SimpleAccountFactoryInterface,
} from "../SimpleAccountFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "accountImplementation",
    outputs: [
      {
        internalType: "contract SimpleAccount",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract SimpleAccount",
        name: "ret",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051612f0f380380612f0f83398101604081905261002f91610088565b8060405161003c9061007b565b6001600160a01b039091168152602001604051809103906000f080158015610068573d6000803e3d6000fd5b506001600160a01b0316608052506100b8565b61218980610d8683390190565b60006020828403121561009a57600080fd5b81516001600160a01b03811681146100b157600080fd5b9392505050565b608051610ca66100e060003960008181604b0152818161011401526102580152610ca66000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe146100465780635fbfb9cf146100965780638cb84e18146100a9575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61006d6100a436600461039d565b6100bc565b61006d6100b736600461039d565b6101ee565b6000806100c984846101ee565b905073ffffffffffffffffffffffffffffffffffffffff81163b80156100f1575090506101e8565b60405173ffffffffffffffffffffffffffffffffffffffff8616602482015284907f000000000000000000000000000000000000000000000000000000000000000090604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc4d66de800000000000000000000000000000000000000000000000000000000179052516101b790610390565b6101c2929190610412565b8190604051809103906000f59050801580156101e2573d6000803e3d6000fd5b50925050505b92915050565b60006103578260001b6040518060200161020790610390565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604081905273ffffffffffffffffffffffffffffffffffffffff871660248201527f000000000000000000000000000000000000000000000000000000000000000090604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc4d66de800000000000000000000000000000000000000000000000000000000179052905161030093929101610412565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261033c9291602001610480565b6040516020818303038152906040528051906020012061035e565b9392505050565b60006103578383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6107c1806104b083390190565b600080604083850312156103b057600080fd5b823573ffffffffffffffffffffffffffffffffffffffff811681146103d457600080fd5b946020939093013593505050565b60005b838110156103fd5781810151838201526020016103e5565b8381111561040c576000848401525b50505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000825180604084015261044d8160608501602087016103e2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b600083516104928184602088016103e2565b8351908301906104a68183602088016103e2565b0194935050505056fe60806040526040516107c13803806107c183398101604081905261002291610321565b61002e82826000610035565b505061043e565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d0838360405180606001604052806027815260200161079a602791396101a9565b9392505050565b6100ea8161022260201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61023160201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101c691906103ef565b600060405180830381855af49150503d8060008114610201576040519150601f19603f3d011682016040523d82523d6000602084013e610206565b606091505b50909250905061021886838387610234565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a357825160000361029c576001600160a01b0385163b61029c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610148565b50816102ad565b6102ad83836102b5565b949350505050565b8151156102c55781518083602001fd5b8060405162461bcd60e51b8152600401610148919061040b565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103105781810151838201526020016102f8565b838111156100645750506000910152565b6000806040838503121561033457600080fd5b82516001600160a01b038116811461034b57600080fd5b60208401519092506001600160401b038082111561036857600080fd5b818501915085601f83011261037c57600080fd5b81518181111561038e5761038e6102df565b604051601f8201601f19908116603f011681019083821181831017156103b6576103b66102df565b816040528281528860208487010111156103cf57600080fd5b6103e08360208301602088016102f5565b80955050505050509250929050565b600082516104018184602087016102f5565b9190910192915050565b602081526000825180602084015261042a8160408501602087016102f5565b601f01601f19169190910160400192915050565b61034d8061044d6000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b6100b9565b565b606061004e83836040518060600160405280602781526020016102f1602791396100dd565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156100d8573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516101079190610283565b600060405180830381855af49150503d8060008114610142576040519150601f19603f3d011682016040523d82523d6000602084013e610147565b606091505b509150915061015886838387610162565b9695505050505050565b606083156101fd5782516000036101f65773ffffffffffffffffffffffffffffffffffffffff85163b6101f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b5081610207565b610207838361020f565b949350505050565b81511561021f5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ed919061029f565b60005b8381101561026e578181015183820152602001610256565b8381111561027d576000848401525b50505050565b60008251610295818460208701610253565b9190910192915050565b60208152600082518060208401526102be816040850160208701610253565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201cd78ab6a31213989661cff2d7d05fc9b9c38b1a848e8249e2e398659a9eb7e364736f6c634300080f0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122030a4cd3aed4a6d9ec37ebc1d87061b12ed9906b5ba9c82d2d00395cabba20fbd64736f6c634300080f003360c0604052306080523480156200001557600080fd5b506040516200218938038062002189833981016040819052620000389162000118565b6001600160a01b03811660a0526200004f62000056565b506200014a565b600054610100900460ff1615620000c35760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116101562000116576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6000602082840312156200012b57600080fd5b81516001600160a01b03811681146200014357600080fd5b9392505050565b60805160a051611fd3620001b66000396000818161023b01528181610624015281816106cb01528181610aad01528181610d0c0152818161106801526113fc0152600081816103ef0152818161049f0152818161078f0152818161083f01526109880152611fd36000f3fe6080604052600436106100d65760003560e01c806352d1902d1161007f578063b0d691fe11610059578063b0d691fe1461022c578063b61d27f61461025f578063c399ec881461027f578063c4d66de81461029457600080fd5b806352d1902d146101925780638da5cb5b146101a7578063affed0e01461020957600080fd5b80634a58db19116100b05780634a58db19146101575780634d44560d1461015f5780634f1ef2861461017f57600080fd5b806318dfb3c7146100e25780633659cfe6146101045780633a871cdd1461012457600080fd5b366100dd57005b600080fd5b3480156100ee57600080fd5b506101026100fd366004611aaa565b6102b4565b005b34801561011057600080fd5b5061010261011f366004611b38565b6103d8565b34801561013057600080fd5b5061014461013f366004611b55565b6105dd565b6040519081526020015b60405180910390f35b610102610622565b34801561016b57600080fd5b5061010261017a366004611ba9565b6106c1565b61010261018d366004611c04565b610778565b34801561019e57600080fd5b5061014461096e565b3480156101b357600080fd5b506001546101e4906c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161014e565b34801561021557600080fd5b506001546bffffffffffffffffffffffff16610144565b34801561023857600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006101e4565b34801561026b57600080fd5b5061010261027a366004611ce6565b610a5a565b34801561028b57600080fd5b50610144610aa9565b3480156102a057600080fd5b506101026102af366004611b38565b610b61565b6102bc610cf4565b82811461032a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b838110156103d1576103bf85858381811061034a5761034a611d6f565b905060200201602081019061035f9190611b38565b600085858581811061037357610373611d6f565b90506020028101906103859190611d9e565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610dc792505050565b806103c981611e32565b91505061032d565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016300361049d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610321565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166105127f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146105b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610321565b6105be81610e44565b604080516000808252602082019092526105da91839190610e4c565b50565b60006105e7611050565b6105f184846110ef565b90506106006040850185611d9e565b905060000361061257610612846111e1565b61061b826112aa565b9392505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b1580156106ad57600080fd5b505af11580156103d1573d6000803e3d6000fd5b6106c9611315565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561075c57600080fd5b505af1158015610770573d6000803e3d6000fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016300361083d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610321565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108b27f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610955576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610321565b61095e82610e44565b61096a82826001610e4c565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610a35576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610321565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610a62610cf4565b610aa3848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610dc792505050565b50505050565b60007f00000000000000000000000000000000000000000000000000000000000000006040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610b38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5c9190611e6a565b905090565b600054610100900460ff1615808015610b815750600054600160ff909116105b80610b9b5750303b158015610b9b575060005460ff166001145b610c27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610321565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610c8557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610c8e826113b0565b801561096a57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610d5f57506001546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1633145b610dc5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152606401610321565b565b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051610df09190611eaf565b60006040518083038185875af1925050503d8060008114610e2d576040519150601f19603f3d011682016040523d82523d6000602084013e610e32565b606091505b5091509150816103d157805160208201fd5b6105da611315565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610e8457610e7f83611448565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610f09575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610f0691810190611e6a565b60015b610f95576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610321565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611044576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610321565b50610e7f838383611552565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610dc5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606401610321565b600080611149836040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b905061119961115c610140860186611d9e565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525085939250506115779050565b6001546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff9081169116146111d55760019150506111db565b60009150505b92915050565b600180546020830135916bffffffffffffffffffffffff90911690600061120783611ecb565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff16146105da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e6365000000000000000000006044820152606401610321565b80156105da5760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d80600081146103d1576040519150601f19603f3d011682016040523d82523d6000602084013e6103d1565b6001546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1633148061134a57503330145b610dc5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152606401610321565b600180546bffffffffffffffffffffffff166c0100000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8481168202929092179283905560405192048116917f0000000000000000000000000000000000000000000000000000000000000000909116907f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de90600090a350565b73ffffffffffffffffffffffffffffffffffffffff81163b6114ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610321565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61155b8361159b565b6000825111806115685750805b15610e7f57610aa383836115e8565b6000806000611586858561160d565b9150915061159381611652565b509392505050565b6115a481611448565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061061b8383604051806060016040528060278152602001611f7760279139611805565b60008082516041036116435760208301516040840151606085015160001a6116378782858561188a565b9450945050505061164b565b506000905060025b9250929050565b600081600481111561166657611666611ef6565b0361166e5750565b600181600481111561168257611682611ef6565b036116e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610321565b60028160048111156116fd576116fd611ef6565b03611764576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610321565b600381600481111561177857611778611ef6565b036105da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610321565b60606000808573ffffffffffffffffffffffffffffffffffffffff168560405161182f9190611eaf565b600060405180830381855af49150503d806000811461186a576040519150601f19603f3d011682016040523d82523d6000602084013e61186f565b606091505b509150915061188086838387611979565b9695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156118c15750600090506003611970565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611915573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811661196957600060019250925050611970565b9150600090505b94509492505050565b60608315611a0f578251600003611a085773ffffffffffffffffffffffffffffffffffffffff85163b611a08576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610321565b5081611a19565b611a198383611a21565b949350505050565b815115611a315781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103219190611f25565b60008083601f840112611a7757600080fd5b50813567ffffffffffffffff811115611a8f57600080fd5b6020830191508360208260051b850101111561164b57600080fd5b60008060008060408587031215611ac057600080fd5b843567ffffffffffffffff80821115611ad857600080fd5b611ae488838901611a65565b90965094506020870135915080821115611afd57600080fd5b50611b0a87828801611a65565b95989497509550505050565b73ffffffffffffffffffffffffffffffffffffffff811681146105da57600080fd5b600060208284031215611b4a57600080fd5b813561061b81611b16565b600080600060608486031215611b6a57600080fd5b833567ffffffffffffffff811115611b8157600080fd5b84016101608187031215611b9457600080fd5b95602085013595506040909401359392505050565b60008060408385031215611bbc57600080fd5b8235611bc781611b16565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060408385031215611c1757600080fd5b8235611c2281611b16565b9150602083013567ffffffffffffffff80821115611c3f57600080fd5b818501915085601f830112611c5357600080fd5b813581811115611c6557611c65611bd5565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611cab57611cab611bd5565b81604052828152886020848701011115611cc457600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008060008060608587031215611cfc57600080fd5b8435611d0781611b16565b935060208501359250604085013567ffffffffffffffff80821115611d2b57600080fd5b818701915087601f830112611d3f57600080fd5b813581811115611d4e57600080fd5b886020828501011115611d6057600080fd5b95989497505060200194505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611dd357600080fd5b83018035915067ffffffffffffffff821115611dee57600080fd5b60200191503681900382131561164b57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611e6357611e63611e03565b5060010190565b600060208284031215611e7c57600080fd5b5051919050565b60005b83811015611e9e578181015183820152602001611e86565b83811115610aa35750506000910152565b60008251611ec1818460208701611e83565b9190910192915050565b60006bffffffffffffffffffffffff808316818103611eec57611eec611e03565b6001019392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6020815260008251806020840152611f44816040850160208701611e83565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220fd4b8799a91c8d4b8c5386672729ac9615b60b5f5b7dbac6da122be87a2a90b164736f6c634300080f0033";

type SimpleAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccountFactory__factory extends ContractFactory {
  constructor(...args: SimpleAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleAccountFactory> {
    return super.deploy(
      _entryPoint,
      overrides || {}
    ) as Promise<SimpleAccountFactory>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  override attach(address: string): SimpleAccountFactory {
    return super.attach(address) as SimpleAccountFactory;
  }
  override connect(signer: Signer): SimpleAccountFactory__factory {
    return super.connect(signer) as SimpleAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountFactoryInterface {
    return new utils.Interface(_abi) as SimpleAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccountFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleAccountFactory;
  }
}
