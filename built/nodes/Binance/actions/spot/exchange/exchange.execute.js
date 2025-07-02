"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const binance_api_node_1 = __importDefault(require("binance-api-node"));
async function execute(index) {
    const credentials = await this.getCredentials('binanceApi', index);
    const binanceClient = (0, binance_api_node_1.default)(credentials);
    const symbol = this.getNodeParameter('symbol', index);
    const executionData = await binanceClient.exchangeInfo({ symbol });
    return this.helpers.returnJsonArray(executionData);
}
exports.execute = execute;
//# sourceMappingURL=exchange.execute.js.map