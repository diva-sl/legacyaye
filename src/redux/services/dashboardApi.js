import { createApi } from "@reduxjs/toolkit/query/react";
import apiBaseQuery from "./axiosBaseQuery";

export const DASHBOARD_API = "dashboardApi";

export const dashboardApi = createApi({
  reducerPath: DASHBOARD_API,
  baseQuery: apiBaseQuery,
  tagTypes: ["Dashboard"],
  endpoints: (builder) => ({
    getDashboardAnalytics: builder.query({
      query: () => ({
        url: "dashboard/analytics",
        method: "GET",
      }),
      providesTags: ["Dashboard"],
    }),
  }),
});

export const { useGetDashboardAnalyticsQuery } = dashboardApi;
