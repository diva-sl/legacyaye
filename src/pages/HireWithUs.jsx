import React, { useState } from "react";
import { FaMoneyBillWave, FaClock, FaAward, FaThumbsUp } from "react-icons/fa";
import { useAddHiringRequestMutation } from "../redux/services/hireWithUs";


const HireWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const [addHireRequest, { isLoading }] = useAddHiringRequestMutation();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, companyName, email, phone, requirements } = formData;

    // Validation
    if (!name || !companyName || !email || !phone || !requirements) {
      toast.error("All fields are required.");
      return;
    }

    try {
      // API Call
      await addHireRequest(formData).unwrap();
      toast.success("Your request has been submitted successfully!");
      setFormData({ name: "", companyName: "", email: "", phone: "", requirements: "" });
    } catch (error) {
      toast.error(error?.data?.message || "Failed to submit request. Please try again.");
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="display-5 fw-bold mb-4">
            Fastest Way to Hire <span className="text-primary">Job-Ready Developers</span> at Zero Cost
          </h1>
          <div className="row g-3">
            {/* Card 1 */}
            <div className="col-lg-6">
              <div className="card shadow-sm p-3 h-100">
                <div className="d-flex align-items-center">
                  <FaMoneyBillWave className="text-success me-3" size={32} />
                  <div>
                    <h5 className="text-success fw-bold mb-0">ZERO</h5>
                    <p className="mb-0">Hiring fee for recruiters</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-lg-6">
              <div className="card shadow-sm p-3 h-100">
                <div className="d-flex align-items-center">
                  <FaClock className="text-primary me-3" size={32} />
                  <div>
                    <h5 className="text-primary fw-bold mb-0">3 - 5 Days</h5>
                    <p className="mb-0">Time to Hire</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-lg-6">
              <div className="card shadow-sm p-3 h-100">
                <div className="d-flex align-items-center">
                  <FaAward className="text-warning me-3" size={32} />
                  <div>
                    <h5 className="text-warning fw-bold mb-0">TOP 1%</h5>
                    <p className="mb-0">Trained by IIT & IIM graduates</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-lg-6">
              <div className="card shadow-sm p-3 h-100">
                <div className="d-flex align-items-center">
                  <FaThumbsUp className="text-info me-3" size={32} />
                  <div>
                    <h5 className="text-info fw-bold mb-0">80</h5>
                    <p className="mb-0">Net Promoter Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-muted mt-4">
            By continuing to use this website, you accept our{" "}
            <a href="/terms" className="text-decoration-underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="/cookie-policy" className="text-decoration-underline">
              Cookie Policy
            </a>.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h4 className="text-center fw-bold">Hire Tech Talent</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your company name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your work email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">India (+91)</span>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter your requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Start Hiring"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireWithUs;
