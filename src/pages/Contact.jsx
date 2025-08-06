import React from "react";
import BookDemoForm from "../components/BookDemoForm";
import { FaAddressCard, FaMailBulk } from "react-icons/fa";

function Contact() {
  return (
    <>
      {/* Breadcrumb Section */}
      <section
        className="breadcrumb-area py-5 text-white text-center"
        style={{
          backgroundImage: 'url("assets/img/bg/breadcrumb_bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h3 className="display-4 fw-bold">Contact With Us</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mt-3">
              <li className="breadcrumb-item">
                <a href="index-2.html" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-area py-5 bg-light">
        <div className="container">
          <div className="row gy-5">
            {/* Contact Info */}
            <div className="col-lg-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    {/* Address */}
                    <li className="mb-4 d-flex align-items-start">
                      <div className="me-3 text-primary fs-2">
                        <FaAddressCard />
                      </div>
                      <div>
                        <h5 className="fw-bold">Address</h5>
                        <p className="mb-0 text-muted">
                          Bus Stop, 3rd Floor, Tower - A, Ardente Office One, beside Hoodi,
                          <br />
                          Whitefield, Hoodi, Bengaluru, Karnataka 560048
                        </p>
                      </div>
                    </li>

                    {/* Emails */}
                    <li className="mb-4 d-flex align-items-start">
                      <div className="me-3 text-danger fs-2">
                        <FaMailBulk />
                      </div>
                      <div>
                        <h5 className="fw-bold">E-mail Address</h5>
                        <p className="mb-0">
                          <a href="mailto:support@legacyaye.com" className="text-decoration-none text-primary">
                            support@legacyaye.com
                          </a>
                          <br />
                          <a href="mailto:hr@legacyaye.com" className="text-decoration-none text-primary">
                            hr@legacyaye.com
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h3 className="fw-bold mb-4 text-center">Book a Demo</h3>
                  <BookDemoForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      {/* <section className="py-5">
        <div className="container">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Contact;
