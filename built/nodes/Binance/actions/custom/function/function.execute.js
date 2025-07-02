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
    const functionName = this.getNodeParameter('functionName', index);
    const json = this.getNodeParameter('parameters', index);
    const parameters = Array.isArray(json) ? json : [json];
    const data = await binanceClient[functionName](...parameters);
    return this.helpers.returnJsonArray(data);
}
exports.execute = execute;
//# sourceMappingURL=function.execute.js.map