import * as KvapiTypes from "@wpazderski/kvapi-types";

export type Id = KvapiTypes.Opaque<string, typeof __Id>; declare const __Id: unique symbol;
export type Name = KvapiTypes.Opaque<string, typeof __Name>; declare const __Name: unique symbol;
export interface Currency {
    id: Id;
    name: Name;
}
export type ExchangeRate = KvapiTypes.Opaque<number, typeof __ExchangeRate>; declare const __ExchangeRate: unique symbol;
