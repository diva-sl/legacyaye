import React, { useState } from "react";
import { Modal, message, Pagination } from "antd";
import { useDeleteCourseMutation, useGetCoursesQuery } from "../../redux/services/courseApi"; // Import the API hook
import Course from "./Course";
import { Link } from "react-router-dom";
import AddCourse from "./AddCourse";

const ManageCourses = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5); // Set the number of courses per page
const [deleteCourse]=useDeleteCourseMutation()
  const { data, isLoading, isError, refetch } = useGetCoursesQuery({
    page: currentPage,
    limit: pageSize,
  }); // Fetch courses with pagination

  const courses = data?.courses || [];
  const totalCourses = data?.totalCourses || 0;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    refetch(); // Refetch the data when the page changes
  };

  if (isLoading) {
    return <div>Loading courses...</div>;
  }

  if (isError) {
    return <div>Failed to load courses. Please try again later.</div>;
  }

  return (
    <section className="container-fluid p-4">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="border-bottom pb-3 mb-3 d-flex flex-column flex-md-row gap-3 align-items-md-center justify-content-between">
            <div className="d-flex flex-column gap-1">
              <h1 className="mb-0 h2 fw-bold">Courses</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Courses</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    All
                  </li>
                </ol>
              </nav>
            </div>
            <div>
              <a onClick={showModal} className="btn btn-primary">
                Add New Courses
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="card rounded-3">
            <div className="p-4 row">
              <form className="d-flex align-items-center col-12 col-md-12 col-lg-12">
                <span className="position-absolute ps-3 search-icon">
                  <i className="fe fe-search" />
                </span>
                <input
                  type="search"
                  className="form-control ps-6"
                  placeholder="Search Course"
                />
              </form>
            </div>
            <div>
              <div className="tab-content" id="tabContent">
                <div className="tab-pane fade show active" id="courses" role="tabpanel">
                  <div className="table-responsive border-0 overflow-y-hidden">
                    <table className="table mb-0 text-nowrap table-centered table-hover">
                      <thead className="table-light">
                        <tr>
                          <th>Courses</th>
                          <th>Instructor</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses.map((course) => (
                          <tr key={course._id}>
                            <td>
                              <Link to={`/admin/course/${course?._id}`} className="text-inherit">
                                <div className="d-flex align-items-center gap-3">
                                  <div>
                                    <img
                                      src={course.thumbnail || "https://via.placeholder.com/150"}
                                      alt={course.title}
                                      className="img-4by3-lg rounded"
                                    />
                                  </div>
                                  <div className="d-flex flex-column gap-1">
                                    <h4 className="mb-0 text-primary-hover">{course.title}</h4>
                                    <span>Added on {new Date(course.createdAt).toLocaleDateString()}</span>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>
                              <div className="d-flex align-items-center flex-row gap-2">
                                <h5 className="mb-0">{course.instructor?.name || "N/A"}</h5>
                              </div>
                            </td>
                            <td>
                              <span
                                className={`badge-dot me-1 d-inline-block align-middle ${
                                  course.status === "live" ? "bg-success" : "bg-warning"
                                }`}
                              />
                              {course.status || "Pending"}
                            </td>
                            <td>
                              <a href="#" className="btn btn-secondary btn-sm">
                                Edit
                              </a>
                              <a
                                href="#"
                                className="btn btn-danger btn-sm"
                                onClick={() => {
                                  Modal.confirm({
                                    title: "Are you sure you want to delete this course?",
                                    content: "This action cannot be undone.",
                                    okText: "Yes, Delete",
                                    cancelText: "Cancel",
                                    okType: "danger",
                                    onOk: async () => {
                                      try {
                                        const res = await deleteCourse(course?._id);
                                        if (res.data.success) {
                                          message.success("Course deleted successfully!");
                                          refetch();
                                        } else {
                                          message.error("Failed to delete the course.");
                                        }
                                      } catch (error) {
                                        message.error("An error occurred while deleting the course.");
                                      }
                                    },
                                    onCancel() {
                                      message.info("Delete action cancelled.");
                                    },
                                  });
                                }}
                              >
                                Delete
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <Pagination
                current={currentPage}
                total={totalCourses}
                pageSize={pageSize}
                onChange={handlePageChange}
                className="d-flex justify-content-center"
              />
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Add New Course"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="100%"
      >
        <AddCourse />
      </Modal>
    </section>
  );
};

export default ManageCourses;
