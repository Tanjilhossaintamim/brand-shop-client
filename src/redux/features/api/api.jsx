import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://brand-shop-server-2a62za372-tanjilhossain00.vercel.app",
    // baseUrl: "http://localhost:5000",
  }),
  endpoints: () => ({}),
});
