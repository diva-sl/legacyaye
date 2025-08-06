import { createApi } from "@reduxjs/toolkit/query/react";
import apiBaseQuery from "./axiosBaseQuery"; // Your base query setup

export const LEAD_API = "leadApi";

export const leadApi = createApi({
  reducerPath: LEAD_API,
  baseQuery: apiBaseQuery,
  tagTypes: ["Leads"],
  endpoints: (builder) => ({
    // **1. Create a Lead**
    createLead: builder.mutation({
      query: (formData) => ({
        url: "/leads",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Leads"],
    }),

    // **2. Get All Leads**
    getAllLeads: builder.query({
      query: (status) => ({
        url: "/leads",
        method: "GET",
        params: status ? { status } : {},
      }),
      providesTags: ["Leads"],
    }),

    // **3. Update Lead Status**
    updateLeadStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/leads/${id}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Leads"],
    }),

    // **4. Delete a Lead**
    deleteLead: builder.mutation({
      query: (id) => ({
        url: `/leads/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Leads"],
    }),

    // **5. Upload Resume**
    uploadResume: builder.mutation({
      query: (formData) => ({
        url: "/leads/upload-resume",
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    }),
    downloadResume: builder.mutation({
      query: (resumeKey) => ({
        url: `/leads/download-resume`,
        method: "POST",
        body:{key:resumeKey}
      }),
      providesTags: ["Leads"],
    }),
 
  }),
});

export const {
  useCreateLeadMutation,
  useGetAllLeadsQuery,
  useUpdateLeadStatusMutation,
  useDeleteLeadMutation,
  useUploadResumeMutation,
  useDownloadResumeMutation // Exporting the download resume query hook
} = leadApi;

