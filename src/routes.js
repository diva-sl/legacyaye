import { lazy } from "react";


export const publicRoutes = [
  {
    path: "/login",
    exact: true,
    element: lazy(() => import("./pages/auth/Login.jsx")),
  },  {
    path: "/placement-guarantee-program",
    exact: true,
    element: lazy(() => import("./pages/PlacementGuaranteeProgram.jsx")),
  },
   {
    path: "/job-readiness-program",
    exact: true,
    element: lazy(() => import("./pages/JobRedinessProgram.jsx")),
  },
   {
    path: "/workshop",
    exact: true,
    element: lazy(() => import("./pages/Workshop.jsx")),
  },
  
  {
    path: "/intensive-trainig-program",
    exact: true,
    element: lazy(() => import("./pages/IntensiveTrainingprogram.jsx")),
  },
  {
  path: "/student/enrolled-courses",
  exact: true,
  element: lazy(() => import("./pages/student/EnrolledCourses.jsx")),
},  {
  path: "/student/enrolled-course/:id",
  exact: true,
  element: lazy(() => import("./pages/student/EnrolledCoursedAccess.jsx")),
},{
    path: "/admin/login",
    exact: true,
    element: lazy(() => import("./pages/auth/AdminLogin.jsx")),
  },{
    path: "/register",
    exact: true,
    element: lazy(() => import("./pages/auth/Register.jsx")),
  },
  {
    path: "/cart",
    exact: true,
    element: lazy(() => import("./pages/Cart.jsx")),
  },{
    path: "/checkout",
    exact: true,
    element: lazy(() => import("./pages/Checkout.jsx")),
  },{
    path: "/hire-with-us",
    exact: true,
    element: lazy(() => import("./pages/HireWithUs.jsx")),
  },
  {
    path: "/about",
    exact: true,
    element: lazy(() => import("./pages/About.jsx")),
  },
  {
    path: "/self-learning-program",
    exact: true,
    element: lazy(() => import("./pages/SelfLearnigProgram.jsx")),
  },
  {
    path: "/courses",
    exact: true,
    element: lazy(() => import("./pages/course/Courses.jsx")),
  },
  {
    path: "/course/:id",
    exact: true,
    element: lazy(() => import("./pages/course/CoursesDetails.jsx")),
  },
  {
    path: "/forgot-password",
    exact: true,
    element: lazy(() => import("./pages/auth/ForgotPassword.jsx")),
  }, {
    path: "/forgot-password/:hash",
    exact: true,
    element: lazy(() => import("./pages/auth/ChangePassword.jsx")),
  },
  {
    path: "/student/dashboard",
    exact: true,
    element: lazy(() => import("./pages/student/Dashboard.jsx")),
  },{
    path: "/verify/:txnId",
    exact: true,
    element: lazy(() => import("./pages/Verify.jsx")),
  },
  {
    path: "/terms",
    exact: true,
    element: lazy(() => import("./pages/Terms.jsx")),
  },
  {
    path: "/privacy",
    exact: true,
    element: lazy(() => import("./pages/Privacy.jsx")),
  },
  {
    path: "/student/profile",
    exact: true,
    element: lazy(() => import("./pages/student/Profile.jsx")),
  },
  
  {
    path: "/student/wishlist",
    exact: true,
    element: lazy(() => import("./pages/student/Wishlist.jsx")),
  },
  {
    path: "/student/reviews",
    exact: true,
    element: lazy(() => import("./pages/student/Reviews.jsx")),
  },
  {
    path: "/student/quiz-attempts",
    exact: true,
    element: lazy(() => import("./pages/student/QuizAttempts.jsx")),
  },
  {
    path: "/student/order-history",
    exact: true,
    element: lazy(() => import("./pages/student/OrderHistory.jsx")),
  },
  {
    path: "/student/my-course",
    exact: true,
    element: lazy(() => import("./pages/student/MyCourse.jsx")),
  },
  {
    path: "/student/announcements",
    exact: true,
    element: lazy(() => import("./pages/student/Announcements.jsx")),
  },
  {
    path: "/student/assignments",
    exact: true,
    element: lazy(() => import("./pages/student/Assignments.jsx")),
  },
  {
    path: "/student/settings",
    exact: true,
    element: lazy(() => import("./pages/student/Settings.jsx")),
  }, {
    path: "/contact",
    exact: true,
    element: lazy(() => import("./pages/Contact.jsx")),
  },{
    path: "/application-form",
    exact: true,
    element: lazy(() => import("./pages/ApplicationFOrmPage.jsx")),
  },{
    path: "/webinar-form",
    exact: true,
    element: lazy(() => import("./components/WebinarRequestForm.jsx")),
  },{
    path: "/careers",
    exact: true,
    element: lazy(() => import("./pages/Careers.jsx")),
  },
];

 

export const studentRoutes = [
  {
    path: "/self-learning-program",
    exact: true,
    element: lazy(() => import("./pages/SelfLearnigProgram.jsx")),
  },
  {
    path: "/placement-guarantee-program",
    exact: true,
    element: lazy(() => import("./pages/PlacementGuaranteeProgram.jsx")),
  },
   {
    path: "/job-readiness-program",
    exact: true,
    element: lazy(() => import("./pages/JobRedinessProgram.jsx")),
  },
   {
    path: "/workshop",
    exact: true,
    element: lazy(() => import("./pages/Workshop.jsx")),
  },
  
{
    path: "/intensive-trainig-program",
    exact: true,
    element: lazy(() => import("./pages/IntensiveTrainingprogram.jsx")),
  },

  {
    path: "/student/dashboard",
    exact: true,
    element: lazy(() => import("./pages/student/Dashboard.jsx")),
  },
  {
    path: "/student/profile",
    exact: true,
    element: lazy(() => import("./pages/student/Profile.jsx")),
  },
  {
    path: "/student/enrolled-courses/:id",
    exact: true,
    element: lazy(() => import("./pages/student/EnrolledCourses.jsx")),
  },
  {
    path: "/student/wishlist",
    exact: true,
    element: lazy(() => import("./pages/student/Wishlist.jsx")),
  },
  {
    path: "/student/reviews",
    exact: true,
    element: lazy(() => import("./pages/student/Reviews.jsx")),
  },
  {
    path: "/student/quiz-attempts",
    exact: true,
    element: lazy(() => import("./pages/student/QuizAttempts.jsx")),
  },
  {
    path: "/student/order-history",
    exact: true,
    element: lazy(() => import("./pages/student/OrderHistory.jsx")),
  },
  {
    path: "/student/my-course",
    exact: true,
    element: lazy(() => import("./pages/student/MyCourse.jsx")),
  },
  {
    path: "/student/announcements",
    exact: true,
    element: lazy(() => import("./pages/student/Announcements.jsx")),
  },
  {
    path: "/student/assignments",
    exact: true,
    element: lazy(() => import("./pages/student/Assignments.jsx")),
  },
  {
    path: "/student/settings",
    exact: true,
    element: lazy(() => import("./pages/student/Settings.jsx")),
  },
];

 


 
 

export const userRoutes = [
  {
    path: "/user/dashboard",
    exact: true,
    element: lazy(() => import("./pages/user/Home.jsx")),
  },  {
    path: "/",
    exact: true,
    element: lazy(() => import("./pages/user/Home.jsx")),
  }
];

 
export const adminRoutes = [
  {
    path: "/admin/dashboard",
    exact: true,
    element: lazy(() => import("./pages/admin/Dashboard.jsx")),
  },
  {
    path: "/admin/applicationsList",
    exact: true,
    element: lazy(() => import("./components/ApplicationsList.jsx")),
  },
  {
    path: "/admin/payments",
    exact: true,
    element: lazy(() => import("./pages/admin/Payments.jsx")),
  },
  {
    path: "/admin/hire-with-us",
    exact: true,
    element: lazy(() => import("./pages/admin/HiringRequests.jsx")),
  }, 
  {
    path: "/admin/manage-courses",
    exact: true,
    element: lazy(() => import("./pages/admin/ManageCourses.jsx")),
  },
  {
    path: "/admin/course/:id",
    exact: true,
    element: lazy(() => import("./pages/admin/Course.jsx")),
  },
  {
    path: "/admin/category",
    exact: true,
    element: lazy(() => import("./pages/admin/Category.jsx")),
  },
  {
    path: "/admin/reviews",
    exact: true,
    element: lazy(() => import("./pages/admin/Reviews.jsx")),
  },
  {
    path: "/admin/assignments",
    exact: true,
    element: lazy(() => import("./pages/admin/Assignments.jsx")),
  },
  {
    path: "/admin/reports",
    exact: true,
    element: lazy(() => import("./pages/admin/Reports.jsx")),
  },
  {
    path: "/admin/settings",
    exact: true,
    element: lazy(() => import("./pages/admin/Settings.jsx")),
  },
  {
    path: "/admin/leads",
    exact: true,
    element: lazy(() => import("./pages/admin/leads/Leads.jsx")),
  },
  {
    path: "/admin/students",
    exact: true,
    element: lazy(() => import("./pages/admin/students/Students.jsx")),
  },  {
    path: "/admin/students/:id",
    exact: true,
    element: lazy(() => import("./pages/admin/students/StudentsProfile.jsx")),
  },
  {
    path: "/admin/payment-history",
    exact: true,
    element: lazy(() => import("./pages/admin/PaymentHistory.jsx")),
  },
];
