import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://brand-shop-server-1uzsk94m3-tanjilhossain00.vercel.app",
  }),
  endpoints: () => ({}),
});
