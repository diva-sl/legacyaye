import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./slices/authSlice";
import sidebarSlice from "./slices/sidebarSlice";
import { authApi } from "./services/authApi";
import  loaderSlice  from "./slices/loadingSlice";
import { userApi } from "./services/usersApi";
import { weatherApi } from "./services/weatherApi";
import studentSlice from "./slices/studentSlice";
import { categoryApi } from "./services/categoryApi";
import { courseApi } from "./services/courseApi";
import { studentApi } from "./services/studentApi";
import { adminApi } from "./services/adminApi";
import { wishlistApi } from "./services/wishListApi";
import { leadApi } from "./services/leadApi";
import { paymentApi } from "./services/paymentApi";
import { enrolledCourseApi } from "./services/enrolledCourseApi";
import { reviewApi } from "./services/reviewApi";
import { dashboardApi } from "./services/dashboardApi";
import { hireWithUsApi } from "./services/hireWithUs";
 
const setUpStore = () => {
  const store = configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      [dashboardApi.reducerPath]: dashboardApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      [categoryApi.reducerPath]: categoryApi.reducer,
      [courseApi.reducerPath]: courseApi.reducer,
      [studentApi.reducerPath]: studentApi.reducer,
      [adminApi.reducerPath]: adminApi.reducer,
      [wishlistApi.reducerPath]: wishlistApi.reducer,
      [leadApi.reducerPath]: leadApi.reducer,
      [paymentApi.reducerPath]: paymentApi.reducer,
      [enrolledCourseApi.reducerPath]: enrolledCourseApi.reducer,
      [reviewApi.reducerPath]: reviewApi.reducer,
      [hireWithUsApi.reducerPath]: hireWithUsApi.reducer,
      
      auth: authReducer,
      loader: loaderSlice,
      sidebar: sidebarSlice,
      student: studentSlice
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        authApi.middleware,
        reviewApi.middleware,
        enrolledCourseApi.middleware,
        courseApi.middleware,
        weatherApi.middleware,
        userApi.middleware,
        categoryApi.middleware,
        studentApi.middleware,
        leadApi.middleware,
        adminApi.middleware,
        wishlistApi.middleware,
        paymentApi.middleware,
        dashboardApi.middleware,
        hireWithUsApi.middleware,
      ),
  });

  setupListeners(store.dispatch);
  return store;
};

export const store = setUpStore();
