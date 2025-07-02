"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.properties = void 0;
exports.properties = [
    {
        displayName: 'Symbol Name or ID',
        name: 'symbol',
        type: 'options',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        displayOptions: {
            show: { resource: ['future'], operation: ['position'] },
        },
        typeOptions: {
            loadOptionsMethod: 'getSymbols',
        },
        options: [],
        default: '',
    },
];
//# sourceMappingURL=position.properties.js.map