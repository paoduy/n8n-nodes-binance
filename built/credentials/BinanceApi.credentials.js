"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinanceApi = void 0;
class BinanceApi {
    constructor() {
        this.name = 'binanceApi';
        this.displayName = 'Binance API';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
            },
            {
                displayName: 'API Secret',
                name: 'apiSecret',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
            },
        ];
    }
}
exports.BinanceApi = BinanceApi;
//# sourceMappingURL=BinanceApi.credentials.js.map