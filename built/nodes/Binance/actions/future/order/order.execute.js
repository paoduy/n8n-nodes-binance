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
    const side = this.getNodeParameter('side', index);
    const symbol = this.getNodeParameter('symbol', index);
    if (side === 'CLEAR') {
        const order = await binanceClient.futuresCancelAllOpenOrders({ symbol });
        return this.helpers.returnJsonArray(order);
    }
    if (side === 'GET') {
        const orders = await binanceClient.futuresOpenOrders({ symbol });
        return this.helpers.returnJsonArray(orders);
    }
    const quantity = this.getNodeParameter('quantity', index);
    const price = this.getNodeParameter('price', index);
    const reduceOnly = this.getNodeParameter('reduceOnly', index);
    const orderType = this.getNodeParameter('orderType', index);
    const params = {};
    if (orderType === 'TAKE_PROFIT_MARKET' || orderType === 'STOP_MARKET') {
        params.stopPrice = price;
        params.closePosition = true;
    }
    else {
        params.price = price;
    }
    const order = await binanceClient.futuresOrder({
        symbol,
        quantity,
        side: side,
        type: orderType,
        timeInForce: 'GTC',
        reduceOnly: `${reduceOnly}`,
        ...params,
    });
    return this.helpers.returnJsonArray(order);
}
exports.execute = execute;
//# sourceMappingURL=order.execute.js.map