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
      query: (id) => `/products/get/${id}`,
    }),
    addProduct: builder.mutation({
      query: (productInfo) => {
        return {
          url: "/products",
          method: "POST",
          body: productInfo,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.insertedId) {
            dispatch(
              api.util.updateQueryData(
                "getProducts",
                arg.brandName,
                (draft) => {
                  draft.push(arg);
                }
              )
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    updateProduct: builder.mutation({
      query: ({ _id, productInfo }) => ({
        url: `/products/update/${_id}`,
        method: "PUT",
        body: productInfo,
      }),
      async onQueryStarted({ _id, productInfo }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            dispatch(
              api.util.updateQueryData("getProduct", _id, (draft) => {
                Object.assign(draft, productInfo);
              })
            );
            dispatch(
              api.util.updateQueryData(
                "getProducts",
                productInfo.brandName,
                (draft) => {
                  const findObj = draft.find((pro) => pro._id == _id);
                  Object.assign(findObj, productInfo);
                }
              )
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getCartItem: builder.query({
      query: (email) => `/carts/${email}`,
    }),
    addToCart: builder.mutation({
      query: ({ _id, cartInfo }) => ({
        url: `/carts/${_id}`,
        method: "POST",
        body: cartInfo,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          console.log(arg.cartInfo);
          const { data } = await queryFulfilled;
          if (data?.insertedId) {
            dispatch(
              api.util.updateQueryData(
                "getCartItem",
                arg.cartInfo.email,
                (draft) => {
                  arg.cartInfo._id = data.insertedId;
                  console.log(arg.cartInfo);
                  draft.push(arg.cartInfo);
                }
              )
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    deleteToCart: builder.mutation({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled, getState }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.deletedCount == 1) {
            dispatch(
              api.util.updateQueryData(
                "getCartItem",
                getState().auth.user.email,
                (draft) => {
                  const findId = draft.map((item) => item.id);
                  const index = findId.indexOf(arg);
                  draft.splice(index, 1);
                }
              )
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const {
  useGetBrandsQuery,
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useGetCartItemQuery,
  useAddToCartMutation,
  useDeleteToCartMutation,
} = brandApi;
