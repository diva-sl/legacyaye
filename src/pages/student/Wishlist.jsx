import React from "react";
import StudentLayout from "./StudentLayout";
import { useSelector } from "react-redux";
import { useGetWishlistQuery, useRemoveFromWishlistMutation } from "../../redux/services/wishListApi";
import { Tooltip, message } from "antd";

function Wishlist() {
  const { data: wishlistData, isLoading } = useGetWishlistQuery();
  const [removeFromWishlist] = useRemoveFromWishlistMutation();

  const handleRemoveFromWishlist = async (courseId) => {
    try {
      await removeFromWishlist({ courseId }).unwrap();
      message.success("Course removed from wishlist successfully!");
    } catch (error) {
      console.error(error);
      message.error("Failed to remove course from wishlist.");
    }
  };
console.log(wishlistData)
  return (
    <StudentLayout>
      <div className="col-lg-9">
        <div className="dashboard__content-wrap dashboard__content-wrap-two">
          <div className="dashboard__content-title">
            <h4 className="title">Wishlist</h4>
          </div>
          <div className="row">
            {isLoading ? (
              <div>Loading wishlist...</div>
            ) : wishlistData?.data?.courses?.length > 0 ? (
              wishlistData.data?.courses?.map((wishlistItem) => (
                <div className="col-xl-4 col-md-6" key={wishlistItem.course._id}>
                  <div className="courses__item courses__item-two shine__animate-item">
                    <div className="courses__item-thumb courses__item-thumb-two">
                      <a
                        href={`/course-details/${wishlistItem.course._id}`}
                        className="shine__animate-link"
                      >
                        <img
                          src={wishlistItem.course.thumbnail}
                          alt={wishlistItem.course.title}
                        />
                      </a>
                    </div>
                    <div className="courses__item-content courses__item-content-two">
                      <ul className="courses__item-meta list-wrap">
                        <li className="courses__item-tag">
                          <a href={`/category/${wishlistItem.course.category}`}>
                            {wishlistItem.course.category || "Category"}
                          </a>
                        </li>
                        <li className="price">${wishlistItem.course.price}</li>
                      </ul>
                      <h5 className="title">
                        <a href={`/course-details/${wishlistItem.course._id}`}>
                          {wishlistItem.course.title}
                        </a>
                      </h5>
                      <div className="courses__item-content-bottom">
                      <div className=" btn btn-primary text-white">
  <a href={`/course/${wishlistItem?._id}`}>
    <span className="text-white">Enroll Now</span>
    <i className="flaticon-arrow-right" />
  </a>
</div>

                        <Tooltip title="Remove from Wishlist">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/5016/5016735.png"
                            alt="Remove from Wishlist"
                            style={{ cursor: "pointer", marginLeft: "10px",width:'15px' }}
                            onClick={() => handleRemoveFromWishlist(wishlistItem.course._id)}
                          />
                        </Tooltip>
                      </div>
                    </div>
                    
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>Your wishlist is empty.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}

export default Wishlist;
