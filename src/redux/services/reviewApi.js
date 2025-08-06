import { createApi } from "@reduxjs/toolkit/query/react";
import apiBaseQuery from "./axiosBaseQuery"; // Base API configuration for Axios

export const REVIEW_API = "reviewApi";

export const reviewApi = createApi({
  reducerPath: REVIEW_API,
  baseQuery: apiBaseQuery,
  tagTypes: ["Review"],
  endpoints: (builder) => ({
    // **1. Add a Review**
    addReview: builder.mutation({
      query: (reviewData) => ({
        url: "reviews",
        method: "POST",
        body: reviewData, // reviewData includes courseId, rating, and comment
      }),
      invalidatesTags: ["Review"],
    }),

    // **2. Get Reviews By Course**
    getReviewsByCourse: builder.query({
      query: (courseId) => ({
        url: `reviews/${courseId}`,
        method: "GET",
      }),
      providesTags: ["Review"],
    }),

    // **3. Get Top Rated Reviews**
    getTopRatedReviews: builder.query({
      query: (courseId) => ({
        url: `reviews/top-rated/${courseId}`,
        method: "GET",
      }),
      providesTags: ["Review"],
    }),

    // **4. Update Review**
    updateReview: builder.mutation({
      query: ({ reviewId, updatedData }) => ({
        url: `reviews/${reviewId}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["Review"],
    }),

    // **5. Delete Review**
    deleteReview: builder.mutation({
      query: (reviewId) => ({
        url: `reviews/${reviewId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Review"],
    }),

    // **6. Add Review By Admin**
    addReviewByAdmin: builder.mutation({
      query: (reviewData) => ({
        url: "reviews/admin",
        method: "POST",
        body: reviewData, // reviewData includes courseId, rating, and comment
      }),
      invalidatesTags: ["Review"],
    }),

    // **7. Update Review By Admin**
    updateReviewByAdmin: builder.mutation({
      query: (reviewData) => ({
        url: "reviews/admin/edit",
        method: "PUT",
        body: reviewData, // reviewData includes reviewId, rating, and comment
      }),
      invalidatesTags: ["Review"],
    }),

    // **8. Filter and Search Reviews With Pagination (Admin Only)**
    filterAndSearchReviews: builder.query({
      query: (params) => ({
        url: "reviews/admin/filter",
        method: "GET",
        params, // Example: { page: 1, limit: 10, keyword: "great", minRating: 4 }
      }),
      providesTags: ["Review"],
    }),
  }),
});

export const {
  useAddReviewMutation,
  useGetReviewsByCourseQuery,
  useGetTopRatedReviewsQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useAddReviewByAdminMutation,
  useUpdateReviewByAdminMutation,
  useFilterAndSearchReviewsQuery,
} = reviewApi;
