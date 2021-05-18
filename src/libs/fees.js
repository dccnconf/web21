import {loadJSONFile} from "./utility";

export const getAllFees = (locale = "en") => {
  const fees = loadJSONFile("fees.json");
  return fees.map(fee => ({
    ...fee, category: fee.category[locale], prices: fee.prices.map(price => ({...price, currency: price.currency[locale]}))
  }));
}
