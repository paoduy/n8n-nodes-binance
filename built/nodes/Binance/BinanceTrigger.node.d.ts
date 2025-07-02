import { ITriggerFunctions } from 'n8n-core';
import { INodeType, INodeTypeDescription, ITriggerResponse } from 'n8n-workflow';
import { loadOptions } from './methods';
export declare class BinanceTrigger implements INodeType {
    description: INodeTypeDescription;
    trigger(this: ITriggerFunctions): Promise<ITriggerResponse | undefined>;
    methods: {
        loadOptions: typeof loadOptions;
    };
}
