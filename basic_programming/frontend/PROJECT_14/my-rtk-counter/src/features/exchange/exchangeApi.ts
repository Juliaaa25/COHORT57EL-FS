import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ExchangeResponse } from "./exchangeTypes";

export const exchangeApi = createApi({
  reducerPath: "exchangeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://open.er-api.com/v6/",
  }),
  endpoints: (builder) => ({
    getRates: builder.query<ExchangeResponse, string>({
      query: (base = "USD") => `latest/${base}`,
    }),
  }),
});

export const { useGetRatesQuery } = exchangeApi;
