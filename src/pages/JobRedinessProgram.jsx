import React from "react";
import { FaUserTie, FaCertificate, FaProjectDiagram, FaComments, FaHandshake, FaGraduationCap, FaChalkboardTeacher, FaUserGraduate, FaStar } from "react-icons/fa";
import Form1 from "../components/Form";
import Certificate from "../components/Certificate";
import Reviews from "../components/Reviews";
import FeaturesSection from "../components/FeatureSection";
import Courses from "../components/Courses";
import BookDemoForm from "../components/BookDemoForm";
const JobReadinessProgram = () => {
  const programHighlights = [
    {
      icon: <FaUserTie size={50} color="#007bff" />,
      title: "6 Weeks of Live, Expert-Led Sessions",
      description:
        "Immerse yourself in interactive sessions led by industry professionals. Master in-demand skills with hands-on projects and real-world examples."
    },
    {
      icon: <FaGraduationCap size={50} color="#28a745" />,
      title: "Career Growth Networking Portal",
      description:
        "Access exclusive, high-paying job opportunities through our networking portal. Connect with top employers actively seeking talent."
    },
    {
      icon: <FaCertificate size={50} color="#ffc107" />,
      title: "Personalized Letter of Recommendation",
      description:
        "Stand out with a customized LOR from your mentors, showcasing your credibility and trustworthiness to employers."
    },
    {
      icon: <FaProjectDiagram size={50} color="#17a2b8" />,
      title: "Industry-Ready Certification",
      description:
        "Earn certifications that validate your mastery of cutting-edge tools and technologies, making you a top choice for employers."
    },
    {
      icon: <FaComments size={50} color="#dc3545" />,
      title: "AI-Powered Resume Building",
      description:
        "Create an ATS-optimized resume with advanced AI tools, ensuring visibility to employers and increasing your chances of landing interviews."
    },
    {
      icon: <FaHandshake size={50} color="#6c757d" />,
      title: "Hands-On Experience & Real-World Projects",
      description:
        "Gain practical experience by working on projects that reflect real industry challenges. Showcase your skills with a tangible portfolio."
    }
  ];

  const jobAssistanceTimeline = [
    {
      week: "Week 1",
      title: "Interview Prep & Mock Interviews",
      description:
        "Practice mock interviews with personalized feedback from industry experts. Learn salary negotiation strategies and employer expectations."
    },
    {
      week: "Week 2",
      title: "Group Discussions & Communication Mastery",
      description:
        "Boost your communication skills and stand out in group discussions, a vital skill in professional settings."
    },
    {
      week: "Weeks 3-5",
      title: "Real Job Interviews",
      description:
        "Participate in real interviews with top employers in your field. Receive tailored feedback to improve continuously."
    },
    {
      week: "Week 6",
      title: "Final Interview Prep & Direct Placement Support",
      description:
        "Prepare for final interviews and secure direct job offers with personalized placement assistance."
    }
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
        <h1 className="fw-bold text-white">Achieve Career Excellence</h1>
        <h2 className="text-warning text-orange">with Our Job Readiness Program!</h2>
        <p className="text-white">
          Equip yourself with job-specific skills and secure your dream job.
        </p>
        <button className="btn btn-warning btn-lg">Join Now</button>

        <div className="row mt-4">
          <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
            <FaStar size={40} className="me-3" style={{ color: 'yellowgreen' }} />
            <div>
              <h5 className="text-white mb-0">4.7</h5>
              <p className="text-white mb-0">Job Satisfaction</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
            <FaUserGraduate size={40} className="me-3" style={{ color: 'skyblue' }} />
            <div>
              <h5 className="text-white mb-0">1.2M+</h5>
              <p className="text-white mb-0">Professionals Trained</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
            <FaChalkboardTeacher size={40} className="text-success me-3" />
            <div>
              <h5 className="text-white mb-0">300+</h5>
              <p className="text-white mb-0">Placement Partners</p>
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
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">What You’ll Get from This Program</h2>
        <div className="row">
          {programHighlights.map((highlight, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center">
                  <div className="mb-3">{highlight.icon}</div>
                  <h5 className="card-title fw-bold">{highlight.title}</h5>
                  <p className="card-text text-muted">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Assistance Section */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">6-Week Job Assistance Program</h2>
        <div className="row">
          {jobAssistanceTimeline.map((step, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-primary">{step.week}</h5>
                  <h6 className="card-subtitle mb-2 text-dark">{step.title}</h6>
                  <p className="card-text text-muted">{step.description}</p>
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

export default JobReadinessProgram;