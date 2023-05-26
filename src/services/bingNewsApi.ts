import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';

export const bingNewsApi = createApi({
  reducerPath: "bingNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-BingApis-SDK", "true");
      headers.set(
        "X-RapidAPI-Key",
        "ba0161fabamsh8b2683f832b811ep1ed961jsnb935cc6bbcad"
      );
      headers.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => `/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptoNewsQuery } = bingNewsApi;
