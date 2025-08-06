import React, { useState } from "react";
import {
  FaCertificate,
  FaPenAlt,
  FaUsers,
  FaCheckCircle,
  FaLaptopCode,
  FaBriefcase,
  FaHandshake,
  FaHandsHelping,
  FaGraduationCap,
  FaNetworkWired,
  FaStar,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";
import Form1 from "../components/Form";
import Certificate from "../components/Certificate";
import Reviews from "../components/Reviews";
import FeaturesSection from "../components/FeatureSection";
import Courses from "../components/Courses";
import BookDemoForm from "../components/BookDemoForm";
const IntensiveTrainingProgram = () => {
  const programDetails = [
    {
      title: "16 Weeks of Recording Sessions",
      description:
        "Engage in 16 weeks of high-quality, structured recording sessions to build your skills in a hands-on environment.",
      icon: <FaLaptopCode size={30} color="#007bff" />,
    },
    {
      title: "8 Weeks of Live Sessions",
      description:
        "Participate in live sessions with industry experts for real-time guidance and insights.",
      icon: <FaNetworkWired size={30} color="#28a745" />,
    },
    {
      title: "Alumni Portal Access",
      description:
        "Gain lifetime access to the alumni portal, allowing you to network with fellow graduates, access exclusive content, and stay updated with industry trends.",
      icon: <FaUsers size={30} color="#ffc107" />,
    },
    {
      title: "Career Growth Networking Portal",
      description:
        "Access a dedicated Career Growth Networking Portal where you can apply for jobs, internships, and stipend-based opportunities.",
      icon: <FaBriefcase size={30} color="#17a2b8" />,
    },
    {
      title: "Letter of Recommendation (LOR)",
      description:
        "Receive a personalized letter of recommendation from instructors or industry professionals.",
      icon: <FaPenAlt size={30} color="#dc3545" />,
    },
    {
      title: "Industry-Ready Certification",
      description:
        "Equip yourself with the practical skills and knowledge most demanded in today's job market, showcasing your ability to solve real-world problems.",
      icon: <FaCertificate size={30} color="#6c757d" />,
    },
    {
      title: "Course Completion Certificate",
      description:
        "Upon completing the program, you will receive a certificate showcasing your dedication and achievement.",
      icon: <FaGraduationCap size={30} color="#007bff" />,
    },
    {
      title: "Internship Completion Certificate",
      description:
        "If applicable, complete an internship and earn a certificate that demonstrates real-world experience.",
      icon: <FaHandsHelping size={30} color="#28a745" />,
    },
    {
      title: "AI-Based Resume Building Assistance",
      description:
        "Leverage AI-powered tools to craft a standout resume tailored to industry standards.",
      icon: <FaLaptopCode size={30} color="#ffc107" />,
    },
    {
      title: "Job Placement Support and Career Advancement Benefits",
      description:
        "Comprehensive support includes job placement assistance and exclusive access to opportunities through our network.",
      icon: <FaHandshake size={30} color="#17a2b8" />,
    },
    {
      title: "Hands-On Experience Certificate",
      description:
        "Receive a certificate highlighting the practical experience you've gained throughout the program.",
      icon: <FaCheckCircle size={30} color="#dc3545" />,
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
    paddingBottom: "10px",
    color: "#fff",
  }}
>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 mt-4 ml-4">
        <h1 className="fw-bold text-white">Master the Skills You Need</h1>
        <h2 className="text-warning text-orange">with Intensive Training Programs!</h2>
        <p className="text-white">
          Dive deep into specialized training led by industry experts.
        </p>
        <button className="btn btn-warning btn-lg">Explore Programs</button>

        <div className="row mt-4">
          <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
            <FaStar size={40} className="me-3" style={{ color: 'yellowgreen' }} />
            <div>
              <h5 className="text-white mb-0">4.8</h5>
              <p className="text-white mb-0">Expert Ratings</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
            <FaUserGraduate size={40} className="me-3" style={{ color: 'skyblue' }} />
            <div>
              <h5 className="text-white mb-0">2M+</h5>
              <p className="text-white mb-0">Graduates</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
            <FaChalkboardTeacher size={40} className="text-success me-3" />
            <div>
              <h5 className="text-white mb-0">200+</h5>
              <p className="text-white mb-0">Expert Trainers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4 mt-lg-0">
        <BookDemoForm/>      </div>
    </div>
  </div>
</section>


      {/* Program Details Section */}
      <div className="container my-5">
        <h2 className="text-center fw-bold">Program Overview</h2>
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
<Reviews/>
    </div>
  );
};

export default IntensiveTrainingProgram;