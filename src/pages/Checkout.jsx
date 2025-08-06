import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useInitiatePaymentMutation } from "../redux/services/paymentApi";

function Checkout() {
  const student = useSelector((state) => state.student.student);
  const [initiatePayment, { isLoading, isError, error }] = useInitiatePaymentMutation();
  const [address, setAddress] = useState(student?.address || {});
  const [errors, setErrors] = useState({}); // State for field errors

  const cart = student?.cart;
  const courses = cart?.courses || [];
  const subtotal = courses.reduce((sum, item) => sum + item.course.price, 0);

  // Validate fields before submitting
  const validateFields = () => {
    const newErrors = {};
    if (!address.street) newErrors.street = "Street address is required.";
    if (!address.city) newErrors.city = "City is required.";
    if (!address.state) newErrors.state = "State is required.";
    if (!address.postalCode) newErrors.postalCode = "Postal code is required.";
    if (!address.country) newErrors.country = "Country is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // If no errors, validation passes
  };

  const handlePlaceOrder = async () => {
    // Validate fields
    if (!validateFields()) return;

    try {
      const paymentData = {
        userId: student._id,
        courses: courses.map((item) => item.course._id),
        amount: subtotal,
        address: {
          street: address.street,
          city: address.city,
          state: address.state,
          postalCode: address.postalCode,
          country: address.country,
        },
      };

      const response = await initiatePayment(paymentData).unwrap();

      if (response.success) {
        // Redirect to the PhonePe payment page
        window.location.href = response.redirectUrl;
      } else {
        console.error("Payment initiation failed:", response.message);
      }
    } catch (err) {
      console.error("Error during payment initiation:", err.message || err);
    }
  };

  return (
    <>
      <section
        className="breadcrumb__area breadcrumb__bg"
        style={{ backgroundImage: 'url("assets/img/bg/breadcrumb_bg.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb__content">
                <h3 className="title">Checkout</h3>
                <nav className="breadcrumb">
                  <span property="itemListElement" typeof="ListItem">
                    <a href="/">Home</a>
                  </span>
                  <span className="breadcrumb-separator">
                    <i className="fas fa-angle-right" />
                  </span>
                  <span property="itemListElement" typeof="ListItem">
                    Checkout
                  </span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="checkout__area section-py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <form className="customer__form-wrap">
                <span className="title">Billing Details</span>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="name">Name *</label>
                      <input
                        className="border rounded"
                        type="text"
                        id="name"
                        defaultValue={student?.name || ""}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="email">Email address *</label>
                      <input
                        className="border rounded"
                        type="email"
                        id="email"
                        defaultValue={student?.email || ""}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="phone">Phone *</label>
                      <input
                        className="border rounded"
                        type="text"
                        id="phone"
                        defaultValue={student?.phone || ""}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="street-address">Street address *</label>
                      <input
                        className="border rounded"
                        type="text"
                        id="street-address"
                        value={address.street || ""}
                        onChange={(e) => setAddress({ ...address, street: e.target.value })}
                      />
                      {errors.street && <span className="text-danger">{errors.street}</span>}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="city">City *</label>
                      <input
                        className="border rounded"
                        type="text"
                        id="city"
                        value={address.city || ""}
                        onChange={(e) => setAddress({ ...address, city: e.target.value })}
                      />
                      {errors.city && <span className="text-danger">{errors.city}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="state">State *</label>
                      <input
                        className="border rounded"
                        type="text"
                        id="state"
                        value={address.state || ""}
                        onChange={(e) => setAddress({ ...address, state: e.target.value })}
                      />
                      {errors.state && <span className="text-danger">{errors.state}</span>}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="postalCode">Postal Code *</label>
                      <input
                        className="border rounded"
                        type="text"
                        id="postalCode"
                        value={address.postalCode || ""}
                        onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
                      />
                      {errors.postalCode && <span className="text-danger">{errors.postalCode}</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="country">Country *</label>
                      <input
                        className="border rounded"
                        type="text"
                        id="country"
                        value={address.country || ""}
                        onChange={(e) => setAddress({ ...address, country: e.target.value })}
                      />
                      {errors.country && <span className="text-danger">{errors.country}</span>}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5">
              <div className="order__info-wrap">
                <h2 className="title">YOUR ORDER</h2>
                <ul className="list-wrap">
                  <li className="title">
                    Product <span>Subtotal</span>
                  </li>
                  {courses.map((item) => (
                    <li key={item._id}>
                      {item.course.title} × 1{" "}
                      <span>₹{item.course.price.toLocaleString()}</span>
                    </li>
                  ))}
                  <li>
                    Subtotal <span>₹{subtotal.toLocaleString()}</span>
                  </li>
                  <li>
                    Total <span>₹{subtotal.toLocaleString()}</span>
                  </li>
                </ul>
                <button
                  className="btn btn-primary"
                  onClick={handlePlaceOrder}
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Place order"}
                </button>
                {isError && <p className="text-danger mt-2">{error?.data?.message || "Error occurred"}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
