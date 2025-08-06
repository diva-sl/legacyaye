import React, { useState } from "react";
import StudentLayout from "./StudentLayout";
import { useSelector } from "react-redux";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard"); // Track the active tab
  const data = useSelector((state) => state.student.student);

  const enrolledCourses = data?.enrolledCourses || [];
  const inProgressCourses = enrolledCourses.filter(
    (course) => course.status === "in-progress"
  );
  const completedCourses = enrolledCourses.filter(
    (course) => course.status === "completed"
  );
  const cart = data?.cart?.courses || [];

  return (
    <StudentLayout>
      <div className="col-lg-9">
        {/* Tab Navigation */}
        <div className="dashboard__tabs">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "dashboard" ? "active" : ""}`}
                onClick={() => setActiveTab("dashboard")}
              >
                Dashboard
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "in-progress-courses" ? "active" : ""
                }`}
                onClick={() => setActiveTab("in-progress-courses")}
              >
                In-progress Courses
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "cart" ? "active" : ""}`}
                onClick={() => setActiveTab("cart")}
              >
                Cart
              </button>
            </li>
          </ul>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="dashboard__count-wrap">
              <div className="dashboard__content-title mb-3">
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="dashboard__counter-item">
                    <div className="icon">
                      <i className="new-book" />
                    </div>
                    <div className="content">
                      <span className="count">{enrolledCourses.length}</span>
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
                      <span className="count">{inProgressCourses.length}</span>
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
                      <span className="count">{completedCourses.length}</span>
                      <p>Completed Courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* In-progress Courses Tab */}
          {activeTab === "in-progress-courses" && (
            <div className="progress__courses-wrap">
              <div className="dashboard__content-title mb-3">
  
              </div>
              <div className="row">
                {inProgressCourses.length === 0 && (
                  <p>No courses in progress.</p>
                )}
                {inProgressCourses.map((course) => (
                  <div key={course._id} className="col-xl-4 col-md-6">
                    <div className="courses__item courses__item-two shine__animate-item">
                      <div className="courses__item-thumb courses__item-thumb-two">
                        <a href={`/course-details/${course.course}`}>
                          <img
                            src={course.course?.thumbnail || "/images/placeholder.jpg"}
                            alt={course.course?.title || "Course"}
                          />
                        </a>
                      </div>
                      <div className="courses__item-content courses__item-content-two">
                        <h5 className="title">
                          <a href={`/course-details/${course.course}`}>
                            {course.course?.title || "Course Title"}
                          </a>
                        </h5>
                        <div className="progress-item progress-item-two">
                          <h6 className="title">
                            COMPLETE <span>{course.progress}%</span>
                          </h6>
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label="Example with label"
                            aria-valuenow={course.progress}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cart Tab */}
          {activeTab === "cart" && (
            <div className="cart__courses-wrap">
              <div className="dashboard__content-title mb-3">
              </div>
              <div className="row">
                {cart.length === 0 && <p>Your cart is empty.</p>}
                {cart.map((item) => (
                  <div key={item._id} className="col-xl-4 col-md-6">
                    <div className="courses__item courses__item-two shine__animate-item">
                      <div className="courses__item-thumb courses__item-thumb-two">
                        <a href={`/course-details/${item.course._id}`}>
                          <img
                            src={item.course?.thumbnail || "/images/placeholder.jpg"}
                            alt={item.course?.title || "Course"}
                          />
                        </a>
                      </div>
                      <div className="courses__item-content courses__item-content-two">
                        <h5 className="title">
                          <a href={`/course-details/${item.course._id}`}>
                            {item.course?.title || "Course Title"}
                          </a>
                        </h5>
                        <p>Price: ₹{item.course?.price || "0"}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </StudentLayout>
  );
}

export default Dashboard;
