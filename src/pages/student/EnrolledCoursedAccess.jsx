import React, { useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Button, Modal, Spin, Tabs } from "antd";
import { TextField, Rating, Box, Typography, Button as MuiButton } from "@mui/material";
import {
  useGetEnrolledCourseByIdQuery,
  useLazyGetLessonVideoQuery,
} from "../../redux/services/enrolledCourseApi";
import {
  useAddReviewMutation,
  useUpdateReviewMutation,
  useGetReviewsByCourseQuery,
} from "../../redux/services/reviewApi";

function EnrolledCourseAccess() {
  const { id } = useParams();

  // API Hooks
  const { data: courseData, isLoading: isCourseLoading } = useGetEnrolledCourseByIdQuery(id);
  const { data: reviewsData, isLoading: isReviewsLoading } = useGetReviewsByCourseQuery(
    courseData?.data?.course?._id
  );
  const [getLessonVideo, { isLoading: isVideoLoading }] = useLazyGetLessonVideoQuery();
  const [addReview] = useAddReviewMutation();
  const [updateReview] = useUpdateReviewMutation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [editingReview, setEditingReview] = useState(null);

  const showVideoModal = async (lessonId) => {
    try {
      const response = await getLessonVideo(lessonId).unwrap();
      setCurrentVideoUrl(response?.data?.videoUrl);
      setIsModalVisible(true);
    } catch (error) {
      console.error("Failed to fetch video:", error);
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setCurrentVideoUrl("");
  };

  const handleSubmitReview = async () => {
    try {
      if (editingReview) {
        await updateReview({ id: editingReview._id, rating, comment }).unwrap();
      } else {
        await addReview({ courseId: courseData?.data?.course?._id, rating, comment }).unwrap();
      }
      setRating(0);
      setComment("");
      setEditingReview(null);
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };

  if (isCourseLoading) {
    return (
      <div id="preloader">
        <div id="loader" className="loader">
          <div className="loader-container">
            <div className="loader-icon">
              <img src="/fav.png" alt="Preloader" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { course, progress, enrolledDate } = courseData?.data || {};
  const { sections = [], title, thumbnail, description } = course || {};

  return (
    <main className="main-area fix">
      <div
        className="breadcrumb__area breadcrumb__bg breadcrumb__bg-two"
        style={{ backgroundImage: 'url("/images/bg/breadcrumb_bg.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb__content">
                <nav className="breadcrumb">
                  <span>
                    <a href="/">Home</a>
                  </span>
                  <span className="breadcrumb-separator">
                    <i className="fas fa-angle-right" />
                  </span>
                  <span>
                    <a href="/enrolled-courses">Enrolled Courses</a>
                  </span>
                  <span className="breadcrumb-separator">
                    <i className="fas fa-angle-right" />
                  </span>
                  <span>{title}</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Details Section */}
      <section className="courses__details-area section-py-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="courses__details-thumb">
                <img src={thumbnail} alt="Course Thumbnail" />
              </div>
              <div className="courses__details-content">
                <h2 className="title">{title}</h2>
                <p dangerouslySetInnerHTML={{ __html: description }} />
                <div className="courses__details-meta">
                  <ul className="list-wrap">
                    <li className="date">
                      <i className="flaticon-calendar" />
                      Enrolled Date: {moment(enrolledDate).format("DD MMM YYYY")}
                    </li>
                    <li>
                      <i className="flaticon-progress" />
                      Progress: {progress || 0}%
                    </li>
                  </ul>
                </div>

                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane tab="Curriculum" key="1">
                    <div className="courses__curriculum-wrap">
                      <h3 className="title">Course Curriculum</h3>
                      <div className="accordion" id="accordionExample">
                        {sections?.length > 0 &&
                          sections?.map((section, sectionIndex) => (
                            <div className="accordion-item" key={sectionIndex + "section"}>
                              <h2 className="accordion-header" id={`heading${sectionIndex}`}>
                                <button
                                  className={`accordion-button  ${
                                    sectionIndex === 0 ? "" : "collapsed"
                                  }`}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse${sectionIndex}`}
                                  aria-expanded={sectionIndex === 0 ? "true" : "false"}
                                  aria-controls={`collapse${sectionIndex}`}
                                >
                                  {section?.title}
                                </button>
                              </h2>
                              <div
                                id={`collapse${sectionIndex}`}
                                className={`accordion-collapse collapse ${
                                  sectionIndex === 0 ? "show" : ""
                                }`}
                                aria-labelledby={`heading${sectionIndex}`}
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <ul className="list-wrap">
                                    {section?.lectures?.map((lecture, lectureIndex) => (
                                      <li className="course-item" key={lectureIndex + "lecture"}>
                                        <div className="course-item-link" style={{cursor:'pointer'}}>
                                          <span onClick={() => showVideoModal(lecture?._id)}>
                                            <img
                                              src="/images/icons/play.svg"
                                              alt="Play Icon"
                                              style={{marginRight:'4px'}}
                                            />
                                            <span >

                                            {lecture?.title}
                                            </span>
                                          </span>
                                          <div className="course-item-meta">
                                            <span className="item-meta duration">
                                              {lecture?.duration} mins
                                            </span>
                                            {/* {lecture?.requiresEnrollment && (
                                              <span className="item-meta course-item-status">
                                                <img
                                                  src="/images/icons/lock.svg"
                                                  alt="Locked"
                                                />
                                              </span>
                                            )} */}
                                          </div>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </Tabs.TabPane>

                  <Tabs.TabPane tab="Reviews" key="2">
                    <div className="courses__reviews-wrap">
                      <h3 className="title">Course Reviews</h3>
                      {isReviewsLoading ? (
                        <Spin />
                      ) : (
                        <>
                          {reviewsData?.reviews?.length > 0 ? (
                            <ul>
                              {reviewsData.reviews.map((review) => (
                                <li key={review._id}>
                                  <Typography variant="h6">{review.user.name}</Typography>
                                  <Rating value={review.rating} readOnly />
                                  <Typography>{review.comment}</Typography>
                                  <MuiButton
                                    onClick={() => {
                                      setEditingReview(review);
                                      setRating(review.rating);
                                      setComment(review.comment);
                                    }}
                                  >
                                    Edit
                                  </MuiButton>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <Typography>
                              No reviews yet. Be the first to review this course!
                            </Typography>
                          )}

                         {editingReview&& <Box component="form" mt={2}>
                            <Typography variant="h6">
                              {editingReview ? "Edit Your Review" : "Add a Review"}
                            </Typography>
                            <Rating
                              value={rating}
                              onChange={(event, newValue) => setRating(new
                                newValue)}
                                size="large"
                              />
                              <TextField
                                fullWidth
                                multiline
                                rows={4}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Write your review..."
                                variant="outlined"
                                margin="normal"
                              />
                              <MuiButton
                                variant="contained"
                                color="primary"
                                onClick={handleSubmitReview}
                              >
                                {editingReview ? "Update Review" : "Submit Review"}
                              </MuiButton>
                            </Box>}
                          </>
                        )}
                      </div>
                    </Tabs.TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <Modal
          title="Lecture Video"
          open={isModalVisible}
          onCancel={handleModalClose}
          footer={null}
          width={800}
          destroyOnClose={true}
        >
          {isVideoLoading ? (
            <Spin />
          ) : (
            <video
              controls
              src={currentVideoUrl}
              style={{ width: "100%", borderRadius: "8px" }}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </Modal>
      </main>
    );
  }
  
  export default EnrolledCourseAccess;
  