import { createApi } from "@reduxjs/toolkit/query/react";
import apiBaseQuery from "./axiosBaseQuery"; // Custom Axios base query

export const ENROLLED_COURSE_API = "enrolledCourseApi";

export const enrolledCourseApi = createApi({
  reducerPath: ENROLLED_COURSE_API,
  baseQuery: apiBaseQuery,
  tagTypes: ["enrolledCourse", "lesson"],
  endpoints: (builder) => ({
    // Fetch Enrolled Course by ID
    getEnrolledCourseById: builder.query({
      query: (courseId) => ({
        url: `/enrolledCourse/${courseId}`,
        method: "GET",
      }),
      providesTags: ["enrolledCourse"],
    }),

    // Fetch Lesson Video by ID
    getLessonVideo: builder.query({
      query: (lessonId) => ({
        url: `/enrolledCourse/lesson/${lessonId}`,
        method: "GET",
      }),
      providesTags: ["lesson"],
    }),
  }),
});

// **Exporting Hooks**
export const {
  useGetEnrolledCourseByIdQuery,
  useLazyGetLessonVideoQuery,
} = enrolledCourseApi;
