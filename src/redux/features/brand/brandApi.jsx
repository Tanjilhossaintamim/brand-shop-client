import { api } from "../api/api";

const brandApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => "/brands",
    }),
    getProducts: builder.query({
      query: (brandName) => `/products/${brandName}`,
    }),
  }),
});
export const { useGetBrandsQuery, useGetProductsQuery } = brandApi;
