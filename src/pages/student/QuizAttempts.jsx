import React from 'react'
import StudentLayout from './StudentLayout'

function QuizAttempts() {
  return (
<StudentLayout>

<div className="col-lg-9">
       <div className="dashboard__count-wrap">
         <div className="dashboard__content-title">
           <h4 className="title">Dashboard</h4>
         </div>
         <div className="row">
           <div className="col-lg-4 col-sm-6">
             <div className="dashboard__counter-item">
               <div className="icon">
                 <i className="new-book" />
               </div>
               <div className="content">
                 <span
                   className="count odometer odometer-auto-theme"
                   data-count={15}
                 >
                   <div className="odometer-inside">
                     <span className="odometer-digit">
                       <span className="odometer-digit-spacer">8</span>
                       <span className="odometer-digit-inner">
                         <span className="odometer-ribbon">
                           <span className="odometer-ribbon-inner">
                             <span className="odometer-value">1</span>
                           </span>
                         </span>
                       </span>
                     </span>
                     <span className="odometer-digit">
                       <span className="odometer-digit-spacer">8</span>
                       <span className="odometer-digit-inner">
                         <span className="odometer-ribbon">
                           <span className="odometer-ribbon-inner">
                             <span className="odometer-value">5</span>
                           </span>
                         </span>
                       </span>
                     </span>
                   </div>
                 </span>
                 <p>Enrolled Courses</p>
               </div>
             </div>
           </div>
           <div className="col-lg-4 col-sm-6">
             <div className="dashboard__counter-item">
               <div className="icon">
                 <i className="new-tutorial" />
               </div>
               <div className="content">
                 <span
                   className="count odometer odometer-auto-theme"
                   data-count={12}
                 >
                   <div className="odometer-inside">
                     <span className="odometer-digit">
                       <span className="odometer-digit-spacer">8</span>
                       <span className="odometer-digit-inner">
                         <span className="odometer-ribbon">
                           <span className="odometer-ribbon-inner">
                             <span className="odometer-value">1</span>
                           </span>
                         </span>
                       </span>
                     </span>
                     <span className="odometer-digit">
                       <span className="odometer-digit-spacer">8</span>
                       <span className="odometer-digit-inner">
                         <span className="odometer-ribbon">
                           <span className="odometer-ribbon-inner">
                             <span className="odometer-value">2</span>
                           </span>
                         </span>
                       </span>
                     </span>
                   </div>
                 </span>
                 <p>Active Courses</p>
               </div>
             </div>
           </div>
           <div className="col-lg-4 col-sm-6">
             <div className="dashboard__counter-item">
               <div className="icon">
                 <i className="new-diploma-1" />
               </div>
               <div className="content">
                 <span
                   className="count odometer odometer-auto-theme"
                   data-count={10}
                 >
                   <div className="odometer-inside">
                     <span className="odometer-digit">
                       <span className="odometer-digit-spacer">8</span>
                       <span className="odometer-digit-inner">
                         <span className="odometer-ribbon">
                           <span className="odometer-ribbon-inner">
                             <span className="odometer-value">1</span>
                           </span>
                         </span>
                       </span>
                     </span>
                     <span className="odometer-digit">
                       <span className="odometer-digit-spacer">8</span>
                       <span className="odometer-digit-inner">
                         <span className="odometer-ribbon">
                           <span className="odometer-ribbon-inner">
                             <span className="odometer-value">0</span>
                           </span>
                         </span>
                       </span>
                     </span>
                   </div>
                 </span>
                 <p>Completed Courses</p>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="progress__courses-wrap">
         <div className="dashboard__content-title">
           <h4 className="title">In progress Courses</h4>
         </div>
         <div className="row">
           <div className="col-xl-4 col-md-6">
             <div className="courses__item courses__item-two shine__animate-item">
               <div className="courses__item-thumb courses__item-thumb-two">
                 <a
                   href="course-details.html"
                   className="shine__animate-link"
                 >
                   <img
                     src="/images/courses/course_thumb01.jpg"
                     alt="img"
                   />
                 </a>
               </div>
               <div className="courses__item-content courses__item-content-two">
                 <ul className="courses__item-meta list-wrap">
                   <li className="courses__item-tag">
                     <a href="course.html">Development</a>
                   </li>
                 </ul>
                 <h5 className="title">
                   <a href="course-details.html">
                     Learning JavaScript With Imagination
                   </a>
                 </h5>
                 <div className="courses__item-content-bottom">
                   <div className="author-two">
                     <a href="instructor-details.html">
                       <img
                         src="/images/courses/course_author001.png"
                         alt="img"
                       />
                       David Millar
                     </a>
                   </div>
                   <div className="avg-rating">
                     <i className="fas fa-star" /> (4.8 Reviews)
                   </div>
                 </div>
                 <div className="progress-item progress-item-two">
                   <h6 className="title">
                     COMPLETE <span>88%</span>
                   </h6>
                   <div
                     className="progress"
                     role="progressbar"
                     aria-label="Example with label"
                     aria-valuenow={25}
                     aria-valuemin={0}
                     aria-valuemax={100}
                   >
                     <div
                       className="progress-bar"
                       style={{ width: "88%" }}
                     />
                   </div>
                 </div>
               </div>
               <div className="courses__item-bottom-two">
                 <ul className="list-wrap">
                   <li>
                     <i className="flaticon-book" />
                     05
                   </li>
                   <li>
                     <i className="flaticon-clock" />
                     11h 20m
                   </li>
                   <li>
                     <i className="flaticon-mortarboard" />
                     22
                   </li>
                 </ul>
               </div>
             </div>
           </div>
           <div className="col-xl-4 col-md-6">
             <div className="courses__item courses__item-two shine__animate-item">
               <div className="courses__item-thumb courses__item-thumb-two">
                 <a
                   href="course-details.html"
                   className="shine__animate-link"
                 >
                   <img
                     src="/images/courses/course_thumb02.jpg"
                     alt="img"
                   />
                 </a>
               </div>
               <div className="courses__item-content courses__item-content-two">
                 <ul className="courses__item-meta list-wrap">
                   <li className="courses__item-tag">
                     <a href="course.html">Design</a>
                   </li>
                 </ul>
                 <h5 className="title">
                   <a href="course-details.html">
                     The Complete Graphic Design for Beginners
                   </a>
                 </h5>
                 <div className="courses__item-content-bottom">
                   <div className="author-two">
                     <a href="instructor-details.html">
                       <img
                         src="/images/courses/course_author002.png"
                         alt="img"
                       />
                       Wilson
                     </a>
                   </div>
                   <div className="avg-rating">
                     <i className="fas fa-star" /> (4.5 Reviews)
                   </div>
                 </div>
                 <div className="progress-item progress-item-two">
                   <h6 className="title">
                     COMPLETE <span>70%</span>
                   </h6>
                   <div
                     className="progress"
                     role="progressbar"
                     aria-label="Example with label"
                     aria-valuenow={25}
                     aria-valuemin={0}
                     aria-valuemax={100}
                   >
                     <div
                       className="progress-bar"
                       style={{ width: "70%" }}
                     />
                   </div>
                 </div>
               </div>
               <div className="courses__item-bottom-two">
                 <ul className="list-wrap">
                   <li>
                     <i className="flaticon-book" />
                     60
                   </li>
                   <li>
                     <i className="flaticon-clock" />
                     70h 45m
                   </li>
                   <li>
                     <i className="flaticon-mortarboard" />
                     202
                   </li>
                 </ul>
               </div>
             </div>
           </div>
           <div className="col-xl-4 col-md-6">
             <div className="courses__item courses__item-two shine__animate-item">
               <div className="courses__item-thumb courses__item-thumb-two">
                 <a
                   href="course-details.html"
                   className="shine__animate-link"
                 >
                   <img
                     src="/images/courses/course_thumb03.jpg"
                     alt="img"
                   />
                 </a>
               </div>
               <div className="courses__item-content courses__item-content-two">
                 <ul className="courses__item-meta list-wrap">
                   <li className="courses__item-tag">
                     <a href="course.html">Data Science</a>
                   </li>
                 </ul>
                 <h5 className="title">
                   <a href="course-details.html">
                     Learning JavaScript With Imagination
                   </a>
                 </h5>
                 <div className="courses__item-content-bottom">
                   <div className="author-two">
                     <a href="instructor-details.html">
                       <img
                         src="/images/courses/course_author003.png"
                         alt="img"
                       />
                       Warren
                     </a>
                   </div>
                   <div className="avg-rating">
                     <i className="fas fa-star" /> (4.8 Reviews)
                   </div>
                 </div>
                 <div className="progress-item progress-item-two">
                   <h6 className="title">
                     COMPLETE <span>95%</span>
                   </h6>
                   <div
                     className="progress"
                     role="progressbar"
                     aria-label="Example with label"
                     aria-valuenow={25}
                     aria-valuemin={0}
                     aria-valuemax={100}
                   >
                     <div
                       className="progress-bar"
                       style={{ width: "95%" }}
                     />
                   </div>
                 </div>
               </div>
               <div className="courses__item-bottom-two">
                 <ul className="list-wrap">
                   <li>
                     <i className="flaticon-book" />
                     08
                   </li>
                   <li>
                     <i className="flaticon-clock" />
                     18h 20m
                   </li>
                   <li>
                     <i className="flaticon-mortarboard" />
                     66
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
</StudentLayout>
  )
}

export default QuizAttempts