import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: axiosBaseQuery, // Replace with your backend's base URL configuration
  tagTypes: ["Students"], // Used to manage cache invalidation for specific endpoints
  endpoints: (builder) => ({
    // Get all students with pagination and search
    getAllStudents: builder.query({
      query: ({ page = 1, limit = 10, search = "" }) => ({
        url: `students/?page=${page}&limit=${limit}&search=${search}`,
        method: "GET",
      }),
      providesTags: ["Students"],
    }),

    // Get a single student by ID
    getStudentById: builder.query({
      query: (id) => ({
        url: `students/${id}`,
        method: "GET",
      }),
      providesTags: ["Students"],
    }),

    // Update a student
    updateStudent: builder.mutation({
      query: (updatedData) => ({
        url: `students/update`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["Students"],
    }),

    // Delete a student
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Students"],
    }),

    // Forgot password
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: `students/password-reset-request`,
        method: "POST",
        body: { email },
      }),
    }),

    // Reset password
    resetPassword: builder.mutation({
      query: ({ resetToken, newPassword }) => ({
        url: `students/password-reset`,
        method: "POST",
        body: { resetToken, newPassword },
      }),
    }),

    // Get students by payment status
    getStudentsByPaymentStatus: builder.query({
      query: ({ paymentStatus, page = 1, limit = 10 }) => ({
        url: `students/payment-status?paymentStatus=${paymentStatus}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Students"],
    }),

    // Get detailed student information
    getDetailedStudentInfo: builder.query({
      query: (id) => ({
        url: `students/${id}/details`,
        method: "GET",
      }),
      providesTags: ["Students"],
    }),

    // Update payment information
    updatePaymentInfo: builder.mutation({
      query: ({ studentId, courseId, paymentData }) => ({
        url: `students/${studentId}/courses/${courseId}/payment`,
        method: "PUT",
        body: paymentData,
      }),
      invalidatesTags: ["Students"],
    }),

    // Login success
    getLoginSuccess: builder.query({
      query: () => ({
        url: `students/login/success`,
        method: "GET",
      }),
    }),

    // Logout
    logoutStudent: builder.mutation({
      query: () => ({
        url: `students/logout`,
        method: "GET",
      }),
    }),

    // Google OAuth - trigger login
    googleLogin: builder.query({
      query: () => ({
        url: `students/auth/google`,
        method: "GET",
      }),
    }),

    // Google OAuth - handle callback
    googleCallback: builder.query({
      query: () => ({
        url: `students/auth/google/callback`,
        method: "GET"
      }),
    }),
  }),
});

export const {
  useGetAllStudentsQuery,
  useGetStudentByIdQuery,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetStudentsByPaymentStatusQuery,
  useGetDetailedStudentInfoQuery,
  useUpdatePaymentInfoMutation,
  useGetLoginSuccessQuery,
  useLogoutStudentMutation,
  useGoogleLoginQuery,
  useGoogleCallbackQuery,
} = studentApi;
