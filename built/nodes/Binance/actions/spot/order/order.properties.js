"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.properties = void 0;
exports.properties = [
    {
        displayName: 'Side',
        name: 'side',
        type: 'options',
        required: true,
        displayOptions: {
            show: { resource: ['spot'], operation: ['order'] },
        },
        options: [
            { name: 'BUY', value: 'BUY' },
            { name: 'SELL', value: 'SELL' },
            { name: 'CLEAR', value: 'CLEAR' },
        ],
        default: 'BUY',
    },
    {
        displayName: 'Symbol Name or ID',
        name: 'symbol',
        type: 'options',
        required: true,
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        displayOptions: {
            show: { resource: ['spot'], operation: ['order'] },
        },
        typeOptions: {
            loadOptionsMethod: 'getSymbols',
        },
        options: [],
        default: '',
    },
    {
        displayName: 'Quantity',
        name: 'quantity',
        type: 'number',
        required: true,
        displayOptions: {
            show: { resource: ['spot'], operation: ['order'] },
            hide: { side: ['CLEAR'] },
        },
        default: 0,
    },
    {
        displayName: 'Price',
        name: 'price',
        type: 'number',
        required: true,
        displayOptions: {
            show: { resource: ['spot'], operation: ['order'] },
            hide: { side: ['CLEAR'] },
        },
        default: 0,
    },
];
//# sourceMappingURL=order.properties.js.map