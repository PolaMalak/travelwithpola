// Currency conversion rates
// Base currency is EGP - rates are fetched from API

export const currencySymbols = {
  EGP: "EGP",
  USD: "$",
  EUR: "€",
};

export const currencyNames = {
  en: {
    EGP: "Egyptian Pound",
    USD: "US Dollar",
    EUR: "Euro",
  },
  es: {
    EGP: "Libra Egipcia",
    USD: "Dólar Estadounidense",
    EUR: "Euro",
  },
  ar: {
    EGP: "جنيه مصري",
    USD: "دولار أمريكي",
    EUR: "يورو",
  },
};

export type Currency = keyof typeof currencySymbols;

// Fallback rates in case API is unavailable
export const fallbackRates = {
  EGP: 1,
  USD: 0.0204, // ~49 EGP per USD
  EUR: 0.0188, // ~53 EGP per EUR
};

// API endpoint for exchange rates (free tier)
// Using exchangerate.host which is free and doesn't require API key
const EXCHANGE_API_URL = "https://api.exchangerate.host/latest";

export interface ExchangeRates {
  EGP: number;
  USD: number;
  EUR: number;
  lastUpdated: string;
}

// Fetch rates from API - converts FROM EGP to other currencies
export async function fetchExchangeRates(): Promise<ExchangeRates> {
  try {
    // Fetch EGP rates (EGP as base)
    const response = await fetch(
      `${EXCHANGE_API_URL}?base=EGP&symbols=USD,EUR`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.success === false) {
      throw new Error("API returned error");
    }

    return {
      EGP: 1,
      USD: data.rates?.USD || fallbackRates.USD,
      EUR: data.rates?.EUR || fallbackRates.EUR,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.warn("Failed to fetch exchange rates, using fallback:", error);
    return {
      ...fallbackRates,
      lastUpdated: "fallback",
    };
  }
}

// Alternative API using frankfurter.app (completely free, no key required)
export async function fetchExchangeRatesAlt(): Promise<ExchangeRates> {
  try {
    // Frankfurter doesn't support EGP, so we'll use USD as intermediary
    // Get USD to EUR rate, then calculate from known EGP/USD rate
    const response = await fetch(
      "https://api.frankfurter.app/latest?from=USD&to=EUR"
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // Current approximate rate: 1 USD ≈ 49 EGP
    const egpToUsd = 1 / 49;
    const usdToEur = data.rates?.EUR || 0.92;
    const egpToEur = egpToUsd * usdToEur;

    return {
      EGP: 1,
      USD: egpToUsd,
      EUR: egpToEur,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.warn("Failed to fetch exchange rates, using fallback:", error);
    return {
      ...fallbackRates,
      lastUpdated: "fallback",
    };
  }
}

export function convertPrice(priceInEGP: number, rate: number): number {
  return Math.round(priceInEGP * rate);
}

export function formatPrice(price: number, currency: Currency): string {
  const symbol = currencySymbols[currency];
  const formattedPrice = price.toLocaleString();

  if (currency === "EGP") {
    return `${symbol} ${formattedPrice}`;
  }
  return `${symbol}${formattedPrice}`;
}

export function convertAndFormat(
  priceInEGP: number,
  currency: Currency,
  rate: number
): string {
  const converted = convertPrice(priceInEGP, rate);
  return formatPrice(converted, currency);
}
