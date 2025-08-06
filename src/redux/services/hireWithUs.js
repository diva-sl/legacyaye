import { createApi } from "@reduxjs/toolkit/query/react";
import apiBaseQuery from "./axiosBaseQuery";

export const HIREWITHUS_API = "hireWithUsApi";

export const hireWithUsApi = createApi({
  reducerPath: HIREWITHUS_API,
  baseQuery: apiBaseQuery,
  tagTypes: ["HireWithUs", "Applications", "Webinars"],
  endpoints: (builder) => ({
    // Add a hiring request
    addHiringRequest: builder.mutation({
      query: (hiringData) => ({
        url: "hire/",
        method: "POST",
        body: hiringData,
      }),
      invalidatesTags: ["HireWithUs"],
    }),

    // Get all hiring requests (Admin)
    getHiringRequests: builder.query({
      query: () => ({
        url: "hire/",
        method: "GET",
      }),
      providesTags: ["HireWithUs"],
    }),

    // Change status of a hiring request (Admin)
    changeHiringRequestStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `hire/${id}/status`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["HireWithUs"],
    }),

    // Delete a hiring request (Admin)
    deleteHiringRequest: builder.mutation({
      query: (id) => ({
        url: `hire/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["HireWithUs"],
    }),

    // Add a new application
    addApplication: builder.mutation({
      query: (applicationData) => ({
        url: "application/",
        method: "POST",
        body: applicationData,
      }),
      invalidatesTags: ["Applications"],
    }),

    // Get all applications
    getApplications: builder.query({
      query: () => ({
        url: "application/",
        method: "GET",
      }),
      providesTags: ["Applications"],
    }),

    // Add a new webinar request
    addWebinarRequest: builder.mutation({
      query: (webinarData) => ({
        url: "webinar/",
        method: "POST",
        body: webinarData,
      }),
      invalidatesTags: ["Webinars"],
    }),

    // Get all webinar requests
    getWebinarRequests: builder.query({
      query: () => ({
        url: "webinar/",
        method: "GET",
      }),
      providesTags: ["Webinars"],
    }),
  }),
});

export const {
  useAddHiringRequestMutation,
  useGetHiringRequestsQuery,
  useChangeHiringRequestStatusMutation,
  useDeleteHiringRequestMutation,
  useAddApplicationMutation,
  useGetApplicationsQuery,
  useAddWebinarRequestMutation,
  useGetWebinarRequestsQuery,
} = hireWithUsApi;