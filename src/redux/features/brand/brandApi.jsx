import { api } from "../api/api";

const brandApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => "/brands",
    }),
    getProducts: builder.query({
      query: (brandName) => `/products/${brandName}`,
    }),
    getProduct: builder.query({
      query: ({ brandName, id }) => `/products/${brandName}/${id}`,
    }),
  }),
});
export const { useGetBrandsQuery, useGetProductsQuery, useGetProductQuery } =
  brandApi;
