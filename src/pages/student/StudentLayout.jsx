import React from 'react'
import { useLocation ,Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function StudentLayout({children}) {
//  const {data,isLoading,isError}=useGetUserProfileQuery()
  const location =useLocation()
const data=useSelector(state=>state.student.student)
  const navigate=useNavigate()
const dispatch=useDispatch()
// useEffect(()=>{
// if(data){
//   dispatch(setStudent(data.data))
// }
// },[data])
  // if(isLoading){
  //   return <div id="preloader">
  //   <div id="loader" className="loader">
  //     <div className="loader-container">
  //       <div className="loader-icon">
  //         <img src="/fav.png" alt="Preloader" />
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // }
  if(!data){
navigate("/login")
  }
  return (
<main className="main-area">
 
 <section className="dashboard__area section-pb-120">
   <div className="dashboard__bg">
     <img src="/images/bg/dashboard_bg.jpg" alt="" />
   </div>
   <div className="container">
     <div className="dashboard__top-wrap">
       <div
         className="dashboard__top-bg"
         data-background="https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?t=st=1732276302~exp=1732279902~hmac=a5b9f3b105e22b9be5bf5a9cec8860ce69d588fcdcde4e349d9dcf10eff0676d&w=996"
         style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?t=st=1732276302~exp=1732279902~hmac=a5b9f3b105e22b9be5bf5a9cec8860ce69d588fcdcde4e349d9dcf10eff0676d&w=996")' }}
       />
       <div className="dashboard__instructor-info">
         <div className="dashboard__instructor-info-left">
           <div className="thumb">
             <img
               src="/images/courses/details_instructors02.jpg"
               alt="img"
             />
           </div>
           <div className="content">
             <h4 className="title">{data?.name}</h4>
             <ul className="list-wrap">
               <li>
                 <img
                   src="/images/icons/course_icon03.svg"
                   alt="img"
                   className="injectable"
                 />
                 10 Courses Enrolled
               </li>
               <li>
                 <img
                   src="/images/icons/course_icon05.svg"
                   alt="img"
                   className="injectable"
                 />
                 7 Certificate
               </li>
             </ul>
           </div>
         </div>
         <div className="dashboard__instructor-info-right">
           <Link  to="#" className="btn btn-primary btn-two arrow-btn">
             Become an Instructor{" "}
             <img
               src="/images/icons/right_arrow.svg"
               alt="img"
               className="injectable"
             />
           </Link>
         </div>
       </div>
     </div>
     <div className="dashboard__inner-wrap">
       <div className="row">
         <div className="col-lg-3">
           <div className="dashboard__sidebar-wrap">
             <div className="dashboard__sidebar-title mb-20">
               <h6 className="title">Welcome, {data?.name}</h6>
             </div>
             <nav className="dashboard__sidebar-menu">
               <ul className="list-wrap">
                 <li className={`${location.pathname==="/student/dashboard"&&"active"}`}>
                   <Link  to="/student/dashboard">
                     <i className="fas fa-home" />
                     Dashboard
                   </Link>
                 </li>
                 <li className={`${location.pathname==="/student/profile"&&"active"}`}>
                   <Link  to="/student/profile">
                     <i className="new-avatar" />
                     My Profile
                   </Link>
                 </li>
                 <li className={`${location.pathname==="/student/enrolled-courses"&&"active"}`}>
                   <Link  to="/student/enrolled-courses">
                     <i className="new-book" />
                     Enrolled Courses
                   </Link>
                 </li>
                 <li className={`${location.pathname==="/student/wishlist"&&"active"}`}>
                   <Link  to="/student/wishlist">
                     <i className="new-label" />
                     Wishlist
                   </Link>
                 </li>
                 {/* <li>
                   <Link  to="student-review.html">
                     <i className="new-book-2" />
                     Reviews
                   </Link>
                 </li> */}
                 {/* <li className={`${location.pathname==="/student/quiz-attempts"&&"active"}`}>
                   <Link  to="/student/quiz-attempts">
                     <i className="new-question" />
                     My Quiz Attempts
                   </Link>
                 </li> */}
                 {/* <li>
                   <Link  to="/student/enrolled-c">
                     <i className="new-satchel" />
                     Order History
                   </Link>
                 </li> */}
               </ul>
             </nav>
             <div className="dashboard__sidebar-title mt-30 mb-20">
               <h6 className="title">User</h6>
             </div>
             <nav className="dashboard__sidebar-menu">
               <ul className="list-wrap">
             
                 <li>
                   <div  onClick={()=>{
                    localStorage.removeItem("authToken")
                   window.location.href="/"
                   }}>
                     <i className="new-logout" />
                     Logout
                   </div>
                 </li>
               </ul>
             </nav>
           </div>
         </div>
     {children}
       </div>
     </div>
   </div>
 </section>
 {/* dashboard-area-end */}
</main>
  )
}

export default StudentLayout