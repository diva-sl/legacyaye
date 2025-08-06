import React from "react";
import { useSelector } from "react-redux";
import { useRemoveFromWishlistMutation } from "../redux/services/wishListApi";

function Cart() {
  const student = useSelector((state) => state.student.student);
  const [removeFromCart] = useRemoveFromWishlistMutation(); // Assuming this API handles cart removal

  const cart = student?.cart;
  const courses = cart?.courses || [];

  const handleRemoveFromCart = async (courseId) => {
    try {
      const response = await removeFromCart({ courseId }).unwrap(); // Adjust payload as required by your API
      if (response.success) {
        window.location.reload(); // Reload page after successful removal
      } else {
        console.error("Failed to remove course from cart:", response.message);
      }
    } catch (error) {
      console.error("Error removing course from cart:", error);
    }
  };

  return (
    <>
     
      <div className="cart__area section-py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {courses.length === 0 ? (
                <h3>Your cart is empty.</h3>
              ) : (
                <table className="table cart__table">
                  <thead>
                    <tr>
                      <th className="product__thumb">&nbsp;</th>
                      <th className="product__name">Course</th>
                      <th className="product__price">Price (₹)</th>
                      <th className="product__remove">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((item) => (
                      <tr key={item._id}>
                        <td className="product__thumb">
                          <a href="#">
                            <img
                              src={item.course.thumbnail}
                              alt={item.course.title}
                              style={{ width: "100px" }}
                            />
                          </a>
                        </td>
                        <td className="product__name">
                          <a href="#">{item.course.title}</a>
                        </td>
                        <td className="product__price">
                          ₹{item.course.price.toLocaleString()}
                        </td>
                        <td className="product__remove">
                          <button
                            onClick={() => handleRemoveFromCart(item.course._id)}
                            className="btn btn-danger"
                          >
                            ×
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            {courses.length > 0 && (
              <div className="col-lg-4">
                <div className="cart__collaterals-wrap">
                  <h2 className="title">Cart totals</h2>
                  <ul className="list-wrap">
                    <li>
                      Subtotal{" "}
                      <span>
                        ₹
                        {courses
                          .reduce((sum, item) => sum + item.course.price, 0)
                          .toLocaleString()}
                      </span>
                    </li>
                    <li>
                      Total{" "}
                      <span className="amount">
                        ₹
                        {courses
                          .reduce((sum, item) => sum + item.course.price, 0)
                          .toLocaleString()}
                      </span>
                    </li>
                  </ul>
                  <a href="/checkout" className="btn btn-primary">
                    Proceed to checkout
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* cart-area-end */}
    </>
  );
}

export default Cart;
