import { createApi } from '@reduxjs/toolkit/query/react';
import apiBaseQuery from './axiosBaseQuery'; // Base configuration for Axios

export const COURSE_API = 'courseApi';

export const courseApi = createApi({
  reducerPath: COURSE_API,
  baseQuery: apiBaseQuery,
  tagTypes: ['Courses'],
  endpoints: (builder) => ({
    // Fetch all courses
    getCourses: builder.query({
      query: ({ page = 1, limit = 10, search = "" }) => ({
        url: `courses?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`,
        method: "GET",
      }),
      providesTags: ["Courses"],
    }),

    // Fetch course details by ID
    getCourseById: builder.query({
      query: (id) => ({
        url: `courses/${id}`,
        method: 'GET',
      }),
      providesTags: ['Courses'],
    }),

    // Create a new course
    createCourse: builder.mutation({
      query: (courseData) => ({
        url: 'courses',
        method: 'POST',
        body: courseData,
      }),
      invalidatesTags: ['Courses'],
    }),

    // Update course basic details
    updateCourse: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `courses/${id}`,
        method: 'PUT',
        body: updatedData,
      }),
      invalidatesTags: ['Courses'],
    }),

    // Update course curriculum
    updateCurriculum: builder.mutation({
      query: ({ id, curriculumData }) => ({
        url: `courses/${id}/curriculum`,
        method: 'PUT',
        body: curriculumData,
      }),
      invalidatesTags: ['Courses'],
    }),

    // Update course requirements
    updateRequirements: builder.mutation({
      query: ({ id, requirementsData }) => ({
        url: `courses/${id}/requirements`,
        method: 'PUT',
        body: requirementsData,
      }),
      invalidatesTags: ['Courses'],
    }),

    // Upload course media (image or video)
    uploadMedia: builder.mutation({
      query: (formData) => ({
        url: 'courses/upload-media',
        method: 'POST',
        body: formData, // Should be a FormData object for file uploads
      }),
      invalidatesTags: ['Courses'],
    }),

    // Delete a course
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `courses/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Courses'],
    }),
    getCoursesByCategory: builder.query({
      query: ({ categoryId, page = 1, limit = 10, search = "" }) => ({
        url: `courses/category`,
        method: "POST",
        body: { categoryId, page, limit, search }, // Pass parameters in the body
      }),
      providesTags: ["Courses"],
    }),
    
    
  }),
});

export const {
  useGetCoursesByCategoryQuery,
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useCreateCourseMutation,
  useUpdateCourseMutation,
  useUpdateCurriculumMutation,
  useUpdateRequirementsMutation,
  useUploadMediaMutation,
  useDeleteCourseMutation,
} = courseApi;
