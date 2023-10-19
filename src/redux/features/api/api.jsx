import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://brand-shop-server-1qhynes4n-tanjilhossain00.vercel.app",
    // baseUrl: "http://localhost:5000",
  }),
  endpoints: () => ({}),
});
