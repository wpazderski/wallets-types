import * as KvapiTypes from "@wpazderski/kvapi-types";

export type Id = KvapiTypes.Opaque<string, typeof __Id>; declare const __Id: unique symbol;
export type Name = KvapiTypes.Opaque<string, typeof __Name>; declare const __Name: unique symbol;
export interface CryptoCurrency {
    id: Id;
    name: Name;
}
