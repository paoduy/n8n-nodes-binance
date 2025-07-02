"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Binance = void 0;
const methods_1 = require("./methods");
const binance_properties_1 = require("./actions/binance.properties");
const binance_execute_1 = require("./actions/binance.execute");
class Binance {
    constructor() {
        this.description = {
            displayName: 'Binance',
            name: 'binance',
            description: 'Consume Binance API',
            icon: 'file:Binance.svg',
            version: 1,
            inputs: ['main'],
            outputs: ['main'],
            defaults: {
                name: 'Consume Binance API',
            },
            group: ['Binance'],
            credentials: [{ name: 'binanceApi', required: true }],
            properties: binance_properties_1.properties,
        };
        this.methods = { loadOptions: methods_1.loadOptions };
    }
    async execute() {
        return binance_execute_1.execute.call(this);
    }
}
exports.Binance = Binance;
//# sourceMappingURL=Binance.node.js.map