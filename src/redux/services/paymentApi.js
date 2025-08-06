import { createApi } from "@reduxjs/toolkit/query/react";
import apiBaseQuery from "./axiosBaseQuery"; // Axios base query setup

export const PAYMENT_API = "paymentApi";

export const paymentApi = createApi({
  reducerPath: PAYMENT_API,
  baseQuery: apiBaseQuery,
  tagTypes: ["payment"],
  endpoints: (builder) => ({
    // Initiate Payment
    initiatePayment: builder.mutation({
      query: (paymentData) => ({
        url: "payment/initiate",
        method: "POST",
        body: paymentData, // Includes userId, courses, amount, and address
      }),
      invalidatesTags: ["payment"],
    }),

    // Verify Payment
    verifyPayment: builder.mutation({
      query: (transactionId) => ({
        url: "payment/verify",
        method: "POST",
        body: transactionId, // Transaction ID from the initiated payment
      }),
      invalidatesTags: ["payment"],
    }),

    // Get All Payments
    getAllPayments: builder.query({
      query: ({ page = 1, limit = 10, search = "", startDate = "", endDate = "" }) => ({
        url: `payment/get-all-payments?search=${search}&page=${page}&limit=${limit}&startDate=${startDate}&endDate=${endDate}`,
        method: "GET",
      }),
      providesTags: ["payment"],
    }),

    // Update Payment and Course Access
    updatePaymentAndAccess: builder.mutation({
      query: (updateData) => ({
        url: "payment/update-payment-access",
        method: "PUT",
        body: updateData, // Includes paymentId, paymentStatus, amountPaid, revokeAccess
      }),
      invalidatesTags: ["payment"],
    }),

    // Get Payment Details by ID
    getPaymentDetails: builder.query({
      query: (paymentId) => ({
        url: `payment/details/${paymentId}`, // Endpoint to get payment details
        method: "GET",
      }),
      providesTags: ["payment"],
    }),
  }),
});

// **Exporting Hooks**
export const {
  useLazyGetAllPaymentsQuery,
  useInitiatePaymentMutation,
  useVerifyPaymentMutation,
  useUpdatePaymentAndAccessMutation,
  useGetPaymentDetailsQuery, // New Hook
} = paymentApi;
