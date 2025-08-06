import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCourseByIdQuery } from '../../redux/services/courseApi'
import moment from "moment"
import { Button, Modal } from 'antd'
import { useGetTopRatedReviewsQuery } from '../../redux/services/reviewApi'
import { FaChalkboardTeacher, FaClock, FaBookOpen, FaClipboardCheck, FaCertificate, FaUserGraduate, FaLock, FaVideo } from 'react-icons/fa'
import { useAddToWishlistMutation } from '../../redux/services/wishListApi'
import { toast } from 'react-toastify'
function CoursesDetails() {
const {id}=useParams()
const { data: reviewsData, isLoading: isReviewsLoading } = useGetTopRatedReviewsQuery(
id
);
  const {data,isLoading}=useGetCourseByIdQuery(id)
console.log(data)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  // Show modal with the selected video
  const showVideoModal = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsModalVisible(true);
  };
     
  // Close the modal
  const handleModalClose = () => {
    setIsModalVisible(false);
    setCurrentVideoUrl("");
  };
  const [addtoCart]=useAddToWishlistMutation()
  if(isLoading){
    return(
      <div id="preloader">
  <div id="loader" className="loader">
    <div className="loader-container">
      <div className="loader-icon">
        <img src="/fav.png" alt="Preloader" />
      </div>
    </div>
  </div>
</div>
    )
  }
  return (
    <main className="main-area fix">
 
    <div
      className="breadcrumb__area breadcrumb__bg breadcrumb__bg-two"
      data-background="/images/bg/breadcrumb_bg.jpg"
      style={{ backgroundImage: 'url("/images/bg/breadcrumb_bg.jpg")' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb__content">
              <nav className="breadcrumb">
                <span property="itemListElement" typeof="ListItem">
                  <a href="index-2.html">Home</a>
                </span>
                <span className="breadcrumb-separator">
                  <i className="fas fa-angle-right" />
                </span>
                <span property="itemListElement" typeof="ListItem">
                  <a href="index-2.html">Courses</a>
                </span>
                <span className="breadcrumb-separator">
                  <i className="fas fa-angle-right" />
                </span>
                <span property="itemListElement" typeof="ListItem">
                  {data?.title}
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    {/* breadcrumb-area-end */}
    {/* courses-details-area */}
    <section className="courses__details-area section-py-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="courses__details-thumb">
              <img src={data?.thumbnail} alt="img" />
            </div>
            <div className="courses__details-content">
              <ul className="courses__item-meta list-wrap">
                <li className="courses__item-tag">
                  <a href="course.html">{data?.category?.name}</a>
                </li>
                <li className="avg-rating">
                  <i className="fas fa-star" /> (4.5 Reviews)
                </li>
              </ul>
              <h2 className="title">
              {data?.title}
              </h2>
              <div className="courses__details-meta">
                <ul className="list-wrap">
                   
                  <li className="date">
                    <i className="flaticon-calendar" />
                   {moment(data?.created_at).format("DD MMM YYYY")}
                  </li>
                  <li>
                    <i className="flaticon-mortarboard" />
                    2,250 Students
                  </li>
                </ul>
              </div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="overview-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#overview-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="overview-tab-pane"
                    aria-selected="true"
                  >
                    Overview
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="curriculum-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#curriculum-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="curriculum-tab-pane"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Curriculum
                  </button>
                </li>
           
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="reviews-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#reviews-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="reviews-tab-pane"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    reviews
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
              <div
    className="tab-pane fade show active"
    id="overview-tab-pane"
    role="tabpanel"
    aria-labelledby="overview-tab"
    tabIndex={0}
  >
    <div className="courses__overview-wrap">
      <h3 className="title">Why Choose Our Certifications?</h3>
      <p>
        Our certifications aren't just pieces of paper—they are your gateway to endless professional opportunities! We’ve built strong alliances with global leaders like AICTE, IBM, ISO, EURO, Microsoft, AWS, NASSCOM, TATA, L&T Infotech, Mindtree, and many others. These partnerships ensure that the training you receive is in sync with industry standards and provides you with the knowledge and skills you need to thrive in today’s competitive job market.
      </p>
      <h3 className="title">Global Certifications to Propel Your Career</h3>
      <p>
        The certifications you earn with us are globally recognized and backed by industry giants, enhancing your professional reputation and opening doors to a wide array of career possibilities. Through collaborations with leading MNCs and mid-cap companies, we offer you cutting-edge training and real-world experience that will set you apart from the competition.
      </p>
      <h3 className="title">Certificates You Will Receive:</h3>
      <ul className="about__info-list list-wrap">
        <li className="about__info-list-item">
          <i className="flaticon-angle-right" />
          <p className="content">Course Completion Certificate</p>
        </li>
        <li className="about__info-list-item">
          <i className="flaticon-angle-right" />
          <p className="content">Internship &amp; Project Completion Certificate</p>
        </li>
        <li className="about__info-list-item">
          <i className="flaticon-angle-right" />
          <p className="content">Letter of Recommendation (LOR)</p>
        </li>
        <li className="about__info-list-item">
          <i className="flaticon-angle-right" />
          <p className="content">Outstanding Performance Certificate</p>
        </li>
        <li className="about__info-list-item">
          <i className="flaticon-angle-right" />
          <p className="content">Industry-Ready Certification</p>
        </li>
        <li className="about__info-list-item">
          <i className="flaticon-angle-right" />
          <p className="content">Hands-On Experience Certificate</p>
        </li>
      </ul>
      <h3 className="title">Earn While You Learn: Performance-Based Stipend</h3>
      <p>
        Looking to gain valuable work experience and earn at the same time? Our internship program offers the perfect opportunity—work on live MNC projects and earn a stipend based on your performance!
      </p>
      <div className="row">
        <div className="col-md-6">
          <div className="stipend-box">
            <h4>Earnings Between ₹17,000 to ₹43,000/month</h4>
            <p>Your stipend is directly linked to your performance, meaning the more you excel, the more you earn. It’s your chance to be rewarded for the hard work you put in.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="stipend-box">
            <h4>Build Skills, Gain Experience, Boost Your Career</h4>
            <p>Work on real projects, collaborate with industry leaders, and grow your skillset every day while being rewarded monetarily.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
                <div
                  className="tab-pane fade show "
                  id="curriculum-tab-pane"
                  role="tabpanel"
                  aria-labelledby="curriculum-tab"
                  tabIndex={0}
                >
                  <div className="courses__curriculum-wrap">
                    <h3 className="title">Course Curriculum</h3>
                    <div className="accordion" id="accordionExample">
                      {data?.sections?.length > 0 &&
                        data?.sections?.map((section, sectionIndex) => (
                          <div className="accordion-item" key={sectionIndex + "section"}>
                            <h2 className="accordion-header" id={`heading${sectionIndex}`}>
                              <button
                                className={`accordion-button ${
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
                                      <div className="course-item-link">
                                        <span   > <img src="/images/icons/play.svg" alt="" /> {lecture?.title}</span>
                                        <div className="course-item-meta">
                                          <span className="item-meta duration">
                                            {lecture?.duration} mins
                                          </span>
                                          {lecture?.requiresEnrollment ? (
                                            <span className="item-meta course-item-status">
                                            <FaLock/>
                                            </span>
                                          ) : (
                                          <FaVideo onClick={() => showVideoModal(lecture?.videoUrl)}/>
                                          )}
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
                </div>

          
                <div
                    className="tab-pane fade"
                    id="reviews-tab-pane"
                    role="tabpanel"
                    aria-labelledby="reviews-tab"
                  >
                    <div className="courses__rating-wrap">
                      <h2 className="title">Reviews</h2>

                      <div className="course-rate">
          <div className="course-rate__summary">
            <div className="course-rate__summary-value">
              {(
                
                reviewsData.reviews.length
              ).toFixed(1)}
            </div>
            <div className="course-rate__summary-stars">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className={`fas fa-star ${
                    index < Math.round(
                      reviewsData.reviews.reduce((sum, review) => sum + review.rating, 0) /
                        reviewsData.reviews.length
                    )
                      ? "filled"
                      : ""
                  }`}
                />
              ))}
            </div>
            <div className="course-rate__summary-text">
              {reviewsData.reviews.length} Ratings
            </div>
          </div>
        </div>
                      {isReviewsLoading ? (
                        <p>Loading reviews...</p>
                      ) : reviewsData?.reviews?.length > 0 ? (
                        reviewsData.reviews.map((review) => (
                          <div className="course-review-head" key={review._id}>
                            <div className="review-author-thumb">
                              <img
                                src="/images/courses/review-author.png"
                                alt="author"
                              />
                            </div>
                            <div className="review-author-content">
                              <div className="author-name">
                                <h5 className="name">
                                  {review.user.name} <span>{moment(review.createdAt).fromNow()}</span>
                                </h5>
                                <div className="author-rating">
                                  {[...Array(5)].map((_, i) => (
                                    <i
                                      key={i}
                                      className={
                                        i < review.rating
                                          ? "fas fa-star"
                                          : "far fa-star"
                                      }
                                    />
                                  ))}
                                </div>
                              </div>
                              <p>{review.comment}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No reviews available for this course.</p>
                      )}
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="courses__details-sidebar">
            
              <div className="courses__cost-wrap">
                <span>This Course Fee:</span>
                <h2 className="title">
                ₹{data?.price}
                </h2>
              </div>
              <div className="courses__information-wrap">
  <h5 className="title">Course includes:</h5>
  <ul className="list-wrap">
    <li>
      <FaChalkboardTeacher className="icon" />
      Level
      <span>{data?.level}</span>
    </li>
    <li>
      <FaClock className="icon" />
      Duration
      <span>{data?.duration}</span>
    </li>
    <li>
      <FaBookOpen className="icon" />
      Lessons
      <span>{data?.lessons}</span>
    </li>
    {/* <li>
      <FaClipboardCheck className="icon" />
      Quizzes
      <span>145</span>
    </li> */}
    <li>
      <FaCertificate className="icon" />
      Certifications
      <span>Yes</span>
    </li>
    {/* <li>
      <FaUserGraduate className="icon" />
      Graduation
      <span>25K</span>
    </li> */}
  </ul>
</div>
              <div className="courses__payment">
                <h5 className="title">Secure Payment:</h5>
                <img src="/images/secure.jpg" alt="img"  style={{width:"150px"}}/>
              </div>
              {/* <div className="courses__details-social">
                <h5 className="title">Share this course:</h5>
                <ul className="list-wrap">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-whatsapp" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="courses__details-enroll">
                <div className="tg-button-wrap">
                  <a      onClick={async (event) => {
                      event.stopPropagation();
                      if(!localStorage.getItem("authToken")){
                        toast.warn("please login to add course ")
                        setTimeout(()=>{
                          window.location.href = "/login";
                        },[1500])
                        return
                      }
                      const res = await addtoCart(id);
                      if (res) {
                        window.location.href = "/cart";
                      }
                    }} className="btn btn-two arrow-btn btn-primary">
                Enroll Now
                 
                  </a>
                </div>
              </div>

              <div className=" ">
                <div className=" ">
                  <a      onClick={async (event) => {
                      event.stopPropagation();
                      if(!localStorage.getItem("authToken")){
                        toast.warn("please login to add course ")
                        setTimeout(()=>{
                          window.location.href = "/login";
                        },[1500])
                        return
                      }
                      const res = await addtoCart(id);
                      if (res) {
                        window.location.href = "/cart";
                      }
                    }} className="btn  btn-primary sticky-button ">
                Enroll Now
                 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* courses-details-area-end */}

    <Modal
        title="Lecture Video"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={800}
        destroyOnClose={true}
      >
        <video
          controls
          src={currentVideoUrl}
          style={{ width: "100%", borderRadius: "8px" }}
        >
          Your browser does not support the video tag.
        </video>
      </Modal>
  </main>
  
  )
}

export default CoursesDetails



