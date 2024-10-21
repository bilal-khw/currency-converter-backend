// currencyService.ts
import axios from "axios";
import { API_KEY, EXTERNAL_API } from "../config/environment";

export const convertCurrency = async (
  base: string,
  target: string,
  amount: number
) => {
  const response = await axios.get(
    `${EXTERNAL_API}latest?apikey=${API_KEY}&base_currency=${base}&currencies=${target}`
  );

  const rate = response.data.data[target];
  const convertedAmount = rate * amount;

  return { rate, convertedAmount };
};

export const fetchCurrencyList = async () => {
  try {
    const response = await axios.get(
      `${EXTERNAL_API}currencies?apikey=${API_KEY}`
    );

    const currencies = Object.keys(response.data.data);
    return currencies;
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
};
