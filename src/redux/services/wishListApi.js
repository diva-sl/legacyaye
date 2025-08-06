import { createApi } from "@reduxjs/toolkit/query/react";
import apiBaseQuery from "./axiosBaseQuery";  

export const wishlistApi = createApi({
  reducerPath: "wishlistApi",
  baseQuery: apiBaseQuery,
  tagTypes: ["Wishlist"],
  endpoints: (builder) => ({
    getWishlist: builder.query({
      query: () => ({
        url: 'cart/',
        method: "GET",
      }),
      providesTags: ["Wishlist"],
    }),
    

   
    addToWishlist: builder.mutation({
      query: (courseId) => ({
        url: "/cart/add",
        method: "POST",
        body: { courseId },
      }),
      invalidatesTags: ["Wishlist"],
    }),

    // Remove a course from the wishlist
    removeFromWishlist: builder.mutation({
      query: (courseId) => ({
        url: "/cart/remove",
        method: "DELETE",
        body:  courseId ,
      }),
      invalidatesTags: ["Wishlist"],
    }),
  }),
});

export const {
  useGetWishlistQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} = wishlistApi;
