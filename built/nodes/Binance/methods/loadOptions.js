"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIntervals = exports.getCustomFunctions = exports.getSymbols = void 0;
const binance_api_node_1 = __importDefault(require("binance-api-node"));
async function getSymbols() {
    const credentials = await this.getCredentials('binanceApi');
    const resource = this.getNodeParameter('resource', 0);
    const binanceClient = (0, binance_api_node_1.default)(credentials);
    const exchange = resource === 'future'
        ? await binanceClient.futuresExchangeInfo()
        : await binanceClient.exchangeInfo();
    const options = exchange.symbols.map((item) => ({
        name: item.symbol,
        value: item.symbol,
    }));
    return options;
}
exports.getSymbols = getSymbols;
async function getCustomFunctions() {
    const credentials = await this.getCredentials('binanceApi');
    const binanceClient = (0, binance_api_node_1.default)(credentials);
    const functions = Object.keys(binanceClient).filter((key) => typeof binanceClient[key] === 'function');
    return functions.map((name) => ({ name, value: name }));
}
exports.getCustomFunctions = getCustomFunctions;
async function getIntervals() {
    return [
        '1m',
        '3m',
        '5m',
        '15m',
        '30m',
        '1h',
        '2h',
        '4h',
        '6h',
        '8h',
        '12h',
        '1d',
        '3d',
        '1w',
        '1M',
    ].map((name) => ({ name, value: name }));
}
exports.getIntervals = getIntervals;
//# sourceMappingURL=loadOptions.js.map