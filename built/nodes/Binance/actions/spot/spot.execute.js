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
exports.execute = void 0;
const order = __importStar(require("./order"));
const account = __importStar(require("./account"));
const candle = __importStar(require("./candle"));
const exchange = __importStar(require("./exchange"));
async function execute(index) {
    const operation = this.getNodeParameter('operation', index);
    switch (operation) {
        case 'order':
            return order.execute.call(this, index);
        case 'account':
            return account.execute.call(this, index);
        case 'candle':
            return candle.execute.call(this, index);
        case 'exchange':
            return exchange.execute.call(this, index);
        default:
            return [];
    }
}
exports.execute = execute;
//# sourceMappingURL=spot.execute.js.map