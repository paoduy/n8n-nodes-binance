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
    const interval = this.getNodeParameter('interval', index);
    const limit = this.getNodeParameter('limit', index);
    const startTimeString = this.getNodeParameter('startTime', index);
    const endTimeString = this.getNodeParameter('endTime', index);
    const startTime = (startTimeString && new Date(startTimeString).getTime()) || undefined;
    const endTime = (endTimeString && new Date(endTimeString).getTime()) || undefined;
    const candles = await binanceClient.futuresCandles({
        symbol,
        interval,
        limit,
        startTime,
        endTime,
    });
    const executionData = candles.map((candle) => ({
        ...candle,
        open: Number(candle.open),
        close: Number(candle.close),
        low: Number(candle.low),
        high: Number(candle.high),
        volume: Number(candle.volume),
    }));
    return this.helpers.returnJsonArray(executionData);
}
exports.execute = execute;
//# sourceMappingURL=candle.execute.js.map