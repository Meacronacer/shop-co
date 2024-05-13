import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const sorting: { [key: string]: string } = {
  "Rating DESC": "-rating",
  "Rating ASC": "rating",
  "Price DESC": "-price",
  "Price ASC": "price",
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://53f07093566c8ca8.mokky.dev/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({
        activeSizes,
        activeColors,
        activeTypes,
        activeDressStyles,
        sortBy,
        price,
        currentPage,
      }) =>
        `all-products?${`${activeSizes.join("&")}&`}${`${activeColors.join("&")}&`}${`${activeTypes.join("&")}&`}${`${activeDressStyles.join("&")}&`}${`price[from]=${price[0]}&price[to]=${price[1]}&`}page=${currentPage}&limit=9&sortBy=${sorting[sortBy]}`,
    }),
    getYouMightLike: builder.query({
      query: ({ type }) => `all-products?type=${type}`,
    }),
    getProductByTitle: builder.query({
      query: ({ productTitle }) => `all-products?title=${productTitle}`,
    }),
    getNewArriwals: builder.query({
      query: () => "new-arriwals",
    }),
    getTopSelling: builder.query({
      query: () => "top-selling",
    }),
    getAllComents: builder.query({
      query: () => "comments",
    }),
  }),
});

export const {
  useLazyGetAllProductsQuery,
  useGetProductByTitleQuery,
  useGetNewArriwalsQuery,
  useGetTopSellingQuery,
  useGetYouMightLikeQuery,
  useGetAllComentsQuery,
} = productsApi;
