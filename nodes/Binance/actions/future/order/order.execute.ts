import { IExecuteFunctions } from 'n8n-core';
import { INodeExecutionData } from 'n8n-workflow';
import createBinance, { NewFuturesOrder, OrderSide_LT } from 'binance-api-node';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const credentials = await this.getCredentials('binanceApi', index);
	const binanceClient = createBinance(credentials);

	const side = this.getNodeParameter('side', index) as string;
	const symbol = this.getNodeParameter('symbol', index) as string;

	if (side === 'CLEAR') {
		const order = await binanceClient.futuresCancelAllOpenOrders({ symbol });

		return this.helpers.returnJsonArray(order as any);
	}

	if (side === 'GET') {
		const orders = await binanceClient.futuresOpenOrders({ symbol });

		return this.helpers.returnJsonArray(orders as any);
	}

	const quantity = this.getNodeParameter('quantity', index) as string;
	const price = this.getNodeParameter('price', index) as string;
	const reduceOnly = this.getNodeParameter('reduceOnly', index) as boolean;
	const orderType = this.getNodeParameter('orderType', index) as string;



	const params  = {} as any;
	if(orderType === 'TAKE_PROFIT_MARKET' || orderType === 'STOP_MARKET') {
		params.stopPrice = price;
		params.closePosition = true;
		params.workingType = 'MARK_PRICE';
	} else {
		params.price = price;
		params.reduceOnly = `${reduceOnly}`;
	}

	const order = await binanceClient.futuresOrder({
		symbol,
		quantity,
		side: side as OrderSide_LT,
		type: orderType,
		timeInForce: 'GTC',
		...params,
	});

	return this.helpers.returnJsonArray(order as any);
}
