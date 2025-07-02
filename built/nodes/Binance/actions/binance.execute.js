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
const spot = __importStar(require("./spot"));
const future = __importStar(require("./future"));
const custom = __importStar(require("./custom"));
async function execute() {
    const items = this.getInputData();
    const executionData = [];
    for (let index = 0; index < items.length; index++) {
        const resource = this.getNodeParameter('resource', index);
        try {
            const data = resource === 'spot'
                ? await spot.execute.call(this, index)
                : resource === 'future'
                    ? await future.execute.call(this, index)
                    : resource === 'custom'
                        ? await custom.execute.call(this, index)
                        : [];
            const dataWithMeta = data.map((value) => ({
                ...value,
                pairedItem: { item: index },
            }));
            executionData.push(dataWithMeta);
        }
        catch (error) {
            if (this.continueOnFail()) {
                executionData.push([{ json: this.getInputData(index)[0].json, error }]);
            }
            else {
                if (error.context)
                    error.context.itemIndex = index;
                throw error;
            }
        }
    }
    return executionData;
}
exports.execute = execute;
//# sourceMappingURL=binance.execute.js.map