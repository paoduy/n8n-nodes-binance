import { INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { IExecuteFunctions } from 'n8n-core';
import { loadOptions } from './methods';
export declare class Binance implements INodeType {
    description: INodeTypeDescription;
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
    methods: {
        loadOptions: typeof loadOptions;
    };
}
