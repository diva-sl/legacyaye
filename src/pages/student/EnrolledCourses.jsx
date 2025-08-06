import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
import StudentLayout from "./StudentLayout";

function EnrolledCourses() {
  const [activeTab, setActiveTab] = useState("enrolled");  
  const data = useSelector((state) => state.student.student);

  // Filter courses based on their status
  const enrolledCourses = data?.enrolledCourses || [];
  const activeCourses = enrolledCourses.filter((course) => course.status === "in-progress");
  const completedCourses = enrolledCourses.filter((course) => course.status === "completed");

  const renderCourses = (courses) => {
    if (!courses.length) {
      return <p>No courses available in this category.</p>;
    }

    return (
      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col-xl-4 col-md-6">
            <div className="courses__item courses__item-two shine__animate-item">
              <div className="courses__item-thumb courses__item-thumb-two">
                <Link to={`/student/enrolled-course/${course._id}`}>
                  <img
                    src={course.course?.thumbnail || "/images/placeholder.jpg"}
                    alt={course.course?.title || "Course"}
                  />
                </Link>
              </div>
              <div className="courses__item-content courses__item-content-two">
                <h5 className="title">
                  <Link to={`/student/enrolled-course/${course._id}`}>
                    {course.course?.title || "Course Title"}
                  </Link>
                </h5>
                <div className="progress-item progress-item-two">
                  <h6 className="title">
                    COMPLETE <span>{course.progress || 0}%</span>
                  </h6>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-valuenow={course.progress || 0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar"
                      style={{ width: `${course.progress || 0}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="courses__item-bottom-two">
                <ul className="list-wrap">
                  <li>
                    <i className="flaticon-book" />
                    {course.course?.lessons || "N/A"} Lessons
                  </li>
                  <li>
                    <i className="flaticon-clock" />
                    {course.course?.duration || "N/A"} Hours
                  </li>
                  <li>
                    <i className="flaticon-mortarboard" />
                    {course.course?.enrollments || "N/A"} Enrollments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <StudentLayout>
      <div className="col-lg-9">
        <div className="dashboard__content-wrap dashboard__content-wrap-two">
          <div className="dashboard__content-title">
            <h4 className="title">Enrolled Courses</h4>
          </div>
          {/* Tab Navigation */}
          <div className="dashboard__nav-wrap">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "enrolled" ? "active" : ""}`}
                  onClick={() => setActiveTab("enrolled")}
                >
                  Enrolled Courses
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "active" ? "active" : ""}`}
                  onClick={() => setActiveTab("active")}
                >
                  Active Courses
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "completed" ? "active" : ""}`}
                  onClick={() => setActiveTab("completed")}
                >
                  Completed Courses
                </button>
              </li>
            </ul>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "enrolled" && renderCourses(enrolledCourses)}
            {activeTab === "active" && renderCourses(activeCourses)}
            {activeTab === "completed" && renderCourses(completedCourses)}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}

export default EnrolledCourses;
