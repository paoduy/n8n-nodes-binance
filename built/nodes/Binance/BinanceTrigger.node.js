"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinanceTrigger = void 0;
const binance_trigger_1 = require("./triggers/binance.trigger");
const binance_properties_1 = require("./triggers/binance.properties");
const methods_1 = require("./methods");
class BinanceTrigger {
    constructor() {
        this.description = {
            displayName: 'Binance Trigger',
            name: 'binanceTrigger',
            description: 'Binance Trigger',
            icon: 'file:Binance.svg',
            version: 1,
            inputs: [],
            outputs: ['main'],
            defaults: {
                name: 'Binance Trigger',
            },
            group: ['trigger', 'Binance'],
            credentials: [{ name: 'binanceApi', required: true }],
            properties: binance_properties_1.properties,
        };
        this.methods = { loadOptions: methods_1.loadOptions };
    }
    async trigger() {
        return binance_trigger_1.trigger.call(this);
    }
}
exports.BinanceTrigger = BinanceTrigger;
//# sourceMappingURL=BinanceTrigger.node.js.map