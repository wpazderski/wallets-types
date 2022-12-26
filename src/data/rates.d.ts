import * as KvapiTypes from "@wpazderski/kvapi-types";





export type InflationRate = KvapiTypes.Opaque<number, typeof __InflationRate>; declare const __InflationRate: unique symbol;
export type ReferenceRate = KvapiTypes.Opaque<number, typeof __ReferenceRate>; declare const __ReferenceRate: unique symbol;

export interface MonthlyInflationRate {
    year: number;
    month: number;
    inflationRate: InflationRate;
}

export interface MonthlyReferenceRate {
    year: number;
    month: number;
    day: number;
    referenceRate: ReferenceRate;
}
