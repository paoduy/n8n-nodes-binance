import { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
export declare function getSymbols(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
export declare function getCustomFunctions(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
export declare function getIntervals(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
