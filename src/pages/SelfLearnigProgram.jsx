import React, { useState } from "react";
import { FaCertificate, FaPenAlt, FaUsers, FaCheckCircle, FaArrowRight, FaAward, FaMedal, FaDoorOpen, FaStar, FaUserGraduate, FaChalkboardTeacher, FaBriefcase, FaLaptopCode, FaHandshake, FaHandsHelping } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Form1 from "../components/Form";
import FeaturesSection from "../components/FeatureSection";
import Certificate from "../components/Certificate";
import DynamicFeatureSection from "../components/DynamicFetures";
import Reviews from "../components/Reviews";
import Courses from "../components/Courses";
import BookDemoForm from "../components/BookDemoForm";
const SelfLearningProgram = () => {
 
    
  const [isModalVisible, setIsModalVisible] = useState(false);
  const mainTitle = "The All New Self Learning launched to";
  const subTitle = "Supercharge Your Career";
 
  const programDetails = [
    {
      title: "16 Weeks of Recording Sessions",
      description:
        "Engage in 16 weeks of high-quality, structured recording sessions to build your skills in a hands-on environment.",
      icon: <FaCheckCircle size={30} color="#007bff" />,
    },
    {
      title: "Alumni Portal Access",
      description:
        "Gain lifetime access to the alumni portal, allowing you to network with fellow graduates, access exclusive content, and stay updated with industry trends.",
      icon: <FaUsers size={30} color="#28a745" />,
    },
    {
      title: "Career Growth Networking Portal",
      description:
        "Access a dedicated Career Growth Networking Portal where you can apply for jobs, internships, and stipend-based opportunities. This platform connects you with employers, giving you a direct pathway to apply for positions and gain practical experience with financial support.",
      icon: <FaBriefcase size={30} color="#ffc107" />,
    },
    {
      title: "Letter of Recommendation (LOR)",
      description:
        "Receive a personalized letter of recommendation from instructors or industry professionals, enhancing your credibility when applying for future opportunities.",
      icon: <FaPenAlt size={30} color="#17a2b8" />,
    },
    {
      title: "Industry-Ready Certification",
      description:
        "Our Industry-Ready Certification is designed to equip you with the practical skills and knowledge most demanded in today's fast-paced job market. Learn and master the latest tools, technologies, and methodologies, and showcase your readiness to make an immediate impact in the workforce.",
      icon: <FaCertificate size={30} color="#dc3545" />,
    },
    {
      title: "Course Completion Certificate",
      description:
        "Upon completing the program, you will receive a certificate showcasing your dedication and achievement in mastering the course content.",
      icon: <FaAward size={30} color="#6c757d" />,
    },
    {
      title: "Internship Completion Certificate",
      description:
        "Complete an internship and earn a certificate that demonstrates real-world experience in your chosen field.",
      icon: <FaMedal size={30} color="#007bff" />,
    },
    {
      title: "AI-Based Resume Building Assistance",
      description:
        "Leverage AI-powered tools to craft a standout resume tailored to industry standards and optimized for applicant tracking systems (ATS).",
      icon: <FaLaptopCode size={30} color="#28a745" />,
    },
    {
      title: "Job Placement Support",
      description:
        "Comprehensive support includes personalized job placement assistance, exclusive access to job opportunities, and industry connections for career advancement.",
      icon: <FaHandshake size={30} color="#ffc107" />,
    },
    {
      title: "Hands-On Experience Certificate",
      description:
        "Receive a certificate highlighting the practical experience you've gained throughout the program, ensuring employers know you have the necessary skills to excel.",
      icon: <FaHandsHelping size={30} color="#17a2b8" />,
    },
  ];
  
  

  return (
    <div>
    <section
  className="d-flex align-items-center"
  style={{
    backgroundImage: "url('/images/banner.jpeg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "80vh",
    paddingBottom:"10px",
    color: "#fff",
  }}
>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 mt-4 ml-4">
        <h1 className="fw-bold text-white">Become Industry Ready</h1>
        <h2 className="text-warning text-orange">with our Flexible Self-Learning!</h2>
        <p className="text-white">
          Learn from industry experts and boost your career prospects.
        </p>
        <button className="btn btn-warning btn-lg">Explore Courses</button>

        <div className="row mt-4">
          <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
            <FaStar size={40} className=" me-3" style={{color:'yellowgreen'}} />
            <div>
              <h5 className="text-white mb-0">4.6</h5>
              <p className="text-white mb-0">Overall Rating</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
            <FaUserGraduate size={40} className="tex me-3"  style={{color:'skyblue'}}/>
            <div>
              <h5 className="text-white mb-0">1.4M+</h5>
              <p className="text-white mb-0">Students</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
            <FaChalkboardTeacher size={40} className="text-success me-3" />
            <div>
              <h5 className="text-white mb-0">150+</h5>
              <p className="text-white mb-0">Instructors</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4 mt-lg-0">
        <BookDemoForm />
      </div>
    </div>
  </div>
</section>


    <div className="container my-5">
  <h2 className="text-center fw-bold">The All New Self Learning</h2>
  <h3 className="text-center text-primary mb-4">
    <u>Supercharge Your Career</u>
  </h3>
  <div className="row justify-content-center">
    {programDetails.map((detail, index) => (
      <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div
          className="card shadow-sm h-100 border-0"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
          }}
        >
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                }}
              >
                {detail.icon}
              </div>
              <h5 className="card-title mb-0 text-primary">{detail.title}</h5>
            </div>
            <p className="card-text text-dark">{detail.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
   
   <Courses/>
     <FeaturesSection/>
      <Certificate/>
 
      {/* Modal Section */}
      {isModalVisible && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={() => setIsModalVisible(false)}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enroll in the Self-Learning Program</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalVisible(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Complete your journey with our guided learning programs.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalVisible(false)}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

<Reviews/>
    </div>
  );
};

export default SelfLearningProgram;
