import React, { useState } from "react";
import {
  FaBriefcase,
  FaCertificate,
  FaPenAlt,
  FaUsers,
  FaCheckCircle,
  FaHandshake,
  FaHandsHelping,
} from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Form, Input, Button, Checkbox, Upload } from "antd";
import FeaturesSection from "../components/FeatureSection";
import Reviews from "../components/Reviews";
import ApplicationForm from "../components/ApplicationForm";

const CareerPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleFormSubmit = (values) => {
    console.log("Form submitted with values: ", values);
    // Perform form submission logic here
  };

  return (
    <div>
      <section
        className="d-flex align-items-center p-2"
        style={{
          backgroundImage: "url('/images/banner.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "80vh",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="fw-bold text-white">Kickstart Your Career</h1>
              <h2 className="text-warning">Join Our Team of Innovators</h2>
              <p className="text-white">
                Explore exciting career opportunities and be a part of our
                growth journey.
              </p>
              <button className="btn btn-warning btn-lg">
                Explore Careers
              </button>

              <div className="row mt-4">
                <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
                  <FaUsers
                    size={40}
                    className="me-3"
                    style={{ color: "#28a745" }}
                  />
                  <div>
                    <h5 className="text-white mb-0">10K+</h5>
                    <p className="text-white mb-0">Team Members</p>
                  </div>
                </div>
                <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
                  <FaBriefcase
                    size={40}
                    className="me-3"
                    style={{ color: "#ffc107" }}
                  />
                  <div>
                    <h5 className="text-white mb-0">50+</h5>
                    <p className="text-white mb-0">Departments</p>
                  </div>
                </div>
                <div className="col-md-4 col-12 mb-3 d-flex align-items-center">
                  <AiFillStar
                    size={40}
                    className="me-3"
                    style={{ color: "#ff5722" }}
                  />
                  <div>
                    <h5 className="text-white mb-0">4.8</h5>
                    <p className="text-white mb-0">Employee Rating</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <Reviews />
    </div>
  );
};

export default CareerPage;
