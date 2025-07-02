"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trigger = void 0;
const binance_api_node_1 = __importDefault(require("binance-api-node"));
async function trigger() {
    const credentials = await this.getCredentials('binanceApi');
    const binanceClient = (0, binance_api_node_1.default)(credentials);
    const symbols = this.getNodeParameter('symbols');
    const interval = this.getNodeParameter('interval');
    const percentThreshold = this.getNodeParameter('percentThreshold');
    const timeThreshold = this.getNodeParameter('timeThreshold');
    const isFinal = this.getNodeParameter('isFinal');
    const waiters = {};
    const executeTrigger = (data) => {
        this.emit([this.helpers.returnJsonArray([data])]);
    };
    const ws = binanceClient.ws.futuresCandles(symbols, interval, (ticker) => {
        if (isFinal && ticker.isFinal) {
            executeTrigger(ticker);
        }
        if (percentThreshold > 0 && timeThreshold > 0) {
            const open = Number(ticker.open);
            const close = Number(ticker.close);
            const percent = Math.abs(close - open) / Math.min(close, open);
            const waitTime = Date.now() - (waiters[ticker.symbol] || 0);
            if (percent > percentThreshold && waitTime > timeThreshold) {
                waiters[ticker.symbol] = Date.now();
                executeTrigger(ticker);
            }
        }
    });
    async function closeFunction() {
        ws();
    }
    async function manualTriggerFunction() {
        executeTrigger({});
    }
    return {
        closeFunction,
        manualTriggerFunction,
    };
}
exports.trigger = trigger;
//# sourceMappingURL=candle.trigger.js.map