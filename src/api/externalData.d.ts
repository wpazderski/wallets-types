import * as cryptocurrency from "../data/cryptocurrency";
import * as currency from "../data/currency";
import * as market from "../data/market";
import * as rates from "../data/rates";





export interface ExternalData {
    currencies: currency.Currency[];
    cryptocurrencies: cryptocurrency.CryptoCurrency[];
    exchangeRates: { [id: currency.Id]: number };
    cryptocurrencyExchangeRates: { [id: cryptocurrency.Id]: number };
    monthlyInflationRates: rates.MonthlyInflationRate[];
    monthlyReferenceRates: rates.MonthlyReferenceRate[];
    tickerData: market.TickerData[];
    lastUpdateTimestamp: number;
}

export interface GetExternalDataRequest {
    cacheMaxLifetime: number;
    tickers: market.Ticker[];
}
export interface GetExternalDataResponse extends ExternalData {
}
