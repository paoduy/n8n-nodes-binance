"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const binance_api_node_1 = __importDefault(require("binance-api-node"));
async function execute(index) {
    const credentials = await this.getCredentials('binanceApi', index);
    const binanceClient = (0, binance_api_node_1.default)(credentials);
    const symbol = this.getNodeParameter('symbol', index);
    const leverage = this.getNodeParameter('leverage', index);
    const marginType = this.getNodeParameter('marginType', index);
    const response = await binanceClient.futuresLeverage({ symbol, leverage });
    try {
        await binanceClient.futuresMarginType({ symbol, marginType });
    }
    catch (error) {
        if (error.code !== -4046) {
            throw error;
        }
        n8n_workflow_1.LoggerProxy.warn(`${symbol} ${error}`);
    }
    return this.helpers.returnJsonArray({ ...response, marginType });
}
exports.execute = execute;
//# sourceMappingURL=leverage.execute.js.map