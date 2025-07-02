"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.properties = void 0;
const order = __importStar(require("./order"));
const candle = __importStar(require("./candle"));
const exchange = __importStar(require("./exchange"));
const leverage = __importStar(require("./leverage"));
const position = __importStar(require("./position"));
const account = __importStar(require("./account"));
const statistics = __importStar(require("./statistics"));
exports.properties = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['future'],
            },
        },
        options: [
            {
                name: 'Account',
                value: 'account',
                description: 'Get the account',
                action: 'Get the account',
            },
            {
                name: 'Candle',
                value: 'candle',
                description: 'Get the candles',
                action: 'Get the candles',
            },
            {
                name: 'Exchange',
                value: 'exchange',
                description: 'Get the exchange info',
                action: 'Get the exchange',
            },
            {
                name: 'Leverage',
                value: 'leverage',
                action: 'Update leverage',
                description: 'Update leverage',
            },
            {
                name: 'Order',
                value: 'order',
                action: 'Buy or sell a cryptocurrency',
                description: 'Buy or sell a cryptocurrency',
            },
            {
                name: 'Position',
                value: 'position',
                action: 'Get position info',
                description: 'Get position info',
            },
            {
                name: 'Statistics',
                value: 'statistics',
                action: 'Get daily statistics',
                description: 'Get daily statistics',
            },
        ],
        default: 'account',
    },
    ...order.properties,
    ...candle.properties,
    ...exchange.properties,
    ...leverage.properties,
    ...position.properties,
    ...account.properties,
    ...statistics.properties,
];
//# sourceMappingURL=future.properties.js.map