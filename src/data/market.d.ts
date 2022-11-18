import * as KvapiTypes from "@wpazderski/kvapi-types";

export type Ticker = KvapiTypes.Opaque<string, typeof __Ticker>; declare const __Ticker: unique symbol;
export type Value = KvapiTypes.Opaque<number, typeof __Value>; declare const __Value: unique symbol;

export interface TickerData {
    ticker: Ticker;
    value: Value;
}
