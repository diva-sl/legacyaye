import React from "react";
import { FaCheckCircle, FaMapMarkerAlt, FaLaptopCode, FaHandshake, FaBriefcase, FaUserTie, FaChalkboardTeacher, FaUserGraduate, FaStar } from "react-icons/fa";
import Form1 from "../components/Form";
import Reviews from "../components/Reviews";
import Certificate from "../components/Certificate";
import FeaturesSection from "../components/FeatureSection";
import {
  FaCode,
  FaDatabase,
  FaDesktop,
  FaJava,
  FaPython,
  FaCloud,
  FaRobot,
  FaChartBar,
  FaBusinessTime,
  FaTools,
  FaShieldAlt,
  FaServer,
  FaReact,
  FaBug,
  FaAws,
  FaUserShield,
} from "react-icons/fa";
import Courses from "../components/Courses";
import BookDemoForm from "../components/BookDemoForm";
const PlacementGuaranteeProgram = () => {
  const highlights = [
    {
      icon: <FaCheckCircle size={40} color="#007bff" />,
      title: "100% Placement Guarantee",
      description:
        "We promise a job placement within 100 days, or we will continue to provide training and career support at no extra cost.",
    },
    {
      icon: <FaLaptopCode size={40} color="#28a745" />,
      title: "Real-World Experience",
      description:
        "Work on live projects that simulate actual industry scenarios, helping you develop the technical skills employers value.",
    },
    {
      icon: <FaUserTie size={40} color="#ffc107" />,
      title: "Expert-Led Training",
      description:
        "Learn from certified industry experts who will provide you with the knowledge and insights to succeed.",
    },
    {
      icon: <FaHandshake size={40} color="#17a2b8" />,
      title: "Exclusive Placement Opportunities",
      description:
        "Access exclusive job openings with top startups and mid-sized companies actively hiring Legacyaye graduates.",
    },
    {
      icon: <FaBriefcase size={40} color="#dc3545" />,
      title: "Accelerated Career Growth",
      description:
        "Receive interview coaching, skill assessments, and actionable feedback to excel during the hiring process.",
    },
    {
      icon: <FaMapMarkerAlt size={40} color="#6c757d" />,
      title: "Prime Bengaluru Location",
      description:
        "Benefit from unmatched networking opportunities and exposure to India's vibrant tech job market.",
    },
  ];
 
  
  const roles = [
    { name: "Software Developer", icon: <FaCode />, color: "#007bff" },
    { name: "Backend Developer", icon: <FaServer />, color: "#28a745" },
    { name: "Full Stack Developer", icon: <FaReact />, color: "#17a2b8" },
    { name: "Java Developer", icon: <FaJava />, color: "#f39c12" },
    { name: "Python Developer", icon: <FaPython />, color: "#4b8bbe" },
    { name: "DevOps Engineer", icon: <FaTools />, color: "#ff5733" },
    { name: "AWS Specialist", icon: <FaAws />, color: "#ff9900" },
    { name: "AI/ML Engineer", icon: <FaRobot />, color: "#6f42c1" },
    { name: "Data Scientist", icon: <FaDatabase />, color: "#dc3545" },
    { name: "Data Analyst", icon: <FaChartBar />, color: "#ffc107" },
    { name: "Business Analyst", icon: <FaBusinessTime />, color: "#20c997" },
    { name: "SAP Consultant", icon: <FaTools />, color: "#6610f2" },
    { name: "Front-End Developer", icon: <FaDesktop />, color: "#fd7e14" },
    { name: "QA Tester", icon: <FaBug />, color: "#17a2b8" },
    { name: "Cloud Engineer", icon: <FaCloud />, color: "#6c757d" },
    { name: "Cybersecurity Specialist", icon: <FaShieldAlt />, color: "#e83e8c" },
    { name: "Big Data Engineer", icon: <FaDatabase />, color: "#343a40" },
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
        <h1 className="fw-bold text-white">Secure Your Future</h1>
        <h2 className="text-warning text-orange">with Our Placement Guarantee Program!</h2>
        <p className="text-white">
          Guaranteed placement with top companies after successful completion.
        </p>
        <button className="btn btn-warning btn-lg">Get Started</button>

        <div className="row mt-4">
          <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
            <FaStar size={40} className="me-3" style={{ color: 'yellowgreen' }} />
            <div>
              <h5 className="text-white mb-0">4.9</h5>
              <p className="text-white mb-0">Success Rate</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
            <FaUserGraduate size={40} className="me-3" style={{ color: 'skyblue' }} />
            <div>
              <h5 className="text-white mb-0">3M+</h5>
              <p className="text-white mb-0">Placements</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
            <FaChalkboardTeacher size={40} className="text-success me-3" />
            <div>
              <h5 className="text-white mb-0">500+</h5>
              <p className="text-white mb-0">Recruiters</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-4 mt-lg-0">
        <BookDemoForm/>
      </div>
    </div>
  </div>
</section>


      {/* Highlights Section */}
      <section className="my-5">
        <div className="container">
          <h2 className="text-center fw-bold">Why Choose Legacyaye?</h2>
          <p className="text-center text-muted mb-4">
            Our program is designed to make you job-ready from day one and accelerate your career growth in the tech industry.
          </p>
          <div className="row">
            {highlights.map((highlight, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body text-center">
                    {highlight.icon}
                    <h5 className="fw-bold mt-3">{highlight.title}</h5>
                    <p className="text-muted">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Roles Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold">High-Paying Technology Jobs You Can Pursue</h2>
          <p className="text-center text-muted mb-4">
            Our program opens doors to a wide range of high-demand roles in the tech industry.
          </p>
          <div className="row">
          {roles.map((role, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div
              className="text-center p-3 border rounded bg-white shadow-sm"
              style={{
                borderColor: role.color,
                borderWidth: "2px",
              }}
            >
              <div
                className="d-flex justify-content-center align-items-center mb-2"
                style={{
                  backgroundColor: `${role.color}22`, // Lighter shade of color
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  margin:'auto'
                }}
              >
                {React.cloneElement(role.icon, { size: 30, color: role.color })}
              </div>
              <p className="mb-0 fw-bold">{role.name}</p>
            </div>
          </div>
        ))}
          </div>
        </div>
      </section>
      <Courses/>
      <FeaturesSection/>
      <Certificate/>
<Reviews/>

    </div>
  );
};

export default PlacementGuaranteeProgram;
