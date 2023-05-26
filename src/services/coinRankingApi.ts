import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const coinRankingApi = createApi({
  reducerPath: "coinRankingApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ba0161fabamsh8b2683f832b811ep1ed961jsnb935cc6bbcad"
      );
      headers.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        `/coin/${coinId}/history?timeperiod=${timeperiod}`,
    }),
    getCryptoExchanges: builder.query({
      query: ({ coinId, timeperiod }) =>
        `/coin/${coinId}/history?timeperiod=${timeperiod}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = coinRankingApi;
