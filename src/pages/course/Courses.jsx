import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetCoursesByCategoryQuery } from "../../redux/services/courseApi";
import { useGetAllCategoriesQuery } from "../../redux/services/categoryApi";
import { Tooltip, Modal } from "antd";
import Login from "../auth/LoginModel";
import Register from "../auth/RegisterModel";
import { useAddToWishlistMutation } from "../../redux/services/wishListApi";
import { toast } from "react-toastify";
import Courses from "../../components/Courses";
import CategoriesSection from "../../components/CategoriesSection";
import CoursesPageComponent from "../../components/CoursesPageComponent";
import BannerCourse from "../../components/BannerCourse";
import MentorCommunity from "../../components/MentorCommunity";

function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  const [addToWishlist]=useAddToWishlistMutation()
  // Redux selector to check if the student is logged in
  const student = useSelector((state) => state.student.student);

  // Fetch all categories
  const { data: categoriesData, isLoading: isCategoriesLoading } = useGetAllCategoriesQuery();

  // Fetch courses based on selected category and search query
  const { data: coursesData, isLoading: isCoursesLoading } = useGetCoursesByCategoryQuery({
    categoryId: selectedCategory,
    page: 1,
    limit: 10,
    search: searchQuery,
  });

  const handleCategoryChange = (e, categoryId) => {
    setSelectedCategory(e.target.checked ? categoryId : "all");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleWishlistClick = async (courseId) => {
    if (!student) {
      setIsLoginModalVisible(true);
      return;
    }

    try {
     const res= await addToWishlist(courseId).unwrap();
     if(res?.data?.status){
        toast.success(res?.data?.message);
      }
    } catch (error) {
      toast.error(error?.data?.message || "Failed to add course to wishlist.");
    }
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalVisible(false);
  };

  const handleShowRegisterModal = () => {
    setIsLoginModalVisible(false);
    setIsRegisterModalVisible(true);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalVisible(false);
  };

  return (
    <main className="main-area fix">
      <BannerCourse/>
      <CategoriesSection/>
       

      {/* Courses Area */}
      <section className="all-courses-area section-py-120">
        <div className="container">
          <div className="row">
          
            <CoursesPageComponent/>
            <MentorCommunity/>

          </div>
        </div>
      </section>

      <Modal
        
        open={isLoginModalVisible}
        onCancel={handleCloseLoginModal}
        footer={null}
      >
        <Login close={handleCloseLoginModal} />
       
         
   
      </Modal>

      
      <Modal
        title="Register"
        open={isRegisterModalVisible}
        onCancel={handleCloseRegisterModal}
        footer={null}
      >
        <Register />
      </Modal>
    </main>
  );
}

export default CoursesPage;
