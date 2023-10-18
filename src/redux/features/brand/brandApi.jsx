import { api } from "../api/api";

const brandApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => "/brands",
    }),
  }),
});
export const { useGetBrandsQuery } = brandApi;
