import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import StudentLayout from "./StudentLayout";
import { message } from "antd";
import { useUpdateStudentMutation } from "../../redux/services/studentApi";
import { setStudent } from "../../redux/slices/studentSlice";
import { useLocation, useParams } from "react-router-dom";

function Profile() {
  const student = useSelector((state) => state.student.student);
 const {token}=useParams()

  const [formData, setFormData] = useState({
    name: student?.name || "",
    phone: student?.phone || "",
    biography: student?.biography || "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const [updateProfile] = useUpdateStudentMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(formData).unwrap();
      message.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      message.error("Failed to update profile.");
    }
  };
useEffect(()=>{
if(student){
  setStudent({
    name: student?.name || "",
    phone: student?.phone || "",
    biography: student?.biography || "",
  })
}
},[student])


const location = useLocation();

  useEffect(() => {
    // Extract token from URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (token) {
      
      localStorage.setItem("authToken", token);
      console.log("Token:", token);
      // window.location.reload()
    } else {
      console.error("No token found in URL");
    }
  }, [location]);
  return (
    <StudentLayout>
      <div className="col-lg-9">
        <div className="dashboard__content-wrap">
          <div className="dashboard__content-title" style={{display:'flex',justifyContent:'space-between'}}>
            <h4 className="title mt-2 ">My Profile</h4>
            <button className="btn btn-primary" style={{height:'40px'}} onClick={handleEditToggle}>
            <span>
              
              {isEditing ? "Cancel" : "Edit Profile"}
              </span>  
            </button>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="profile__content-wrap">
                <ul className="list-wrap">
                  <li>
                    <span>Registration Date</span> February 28, 2026 8:01 am
                  </li>
                  <li>
                    <span>Full Name</span>
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      student?.name.toUpperCase()
                    )}
                  </li>
                  <li>
                    <span>Email</span> {student?.email}
                  </li>
                  <li>
                    <span>Phone Number</span>
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    ) : (
                      student?.phone
                    )}
                  </li>
                  <li>
                    <span>Biography</span>
                    {isEditing ? (
                      <textarea
                        className="form-control"
                        name="biography"
                        value={formData.biography}
                        onChange={handleInputChange}
                      />
                    ) : (
                      student?.biography || "No biography provided."
                    )}
                  </li>
                </ul>
                {isEditing && (
                  <div className="profile__action-buttons mt-3">
                    <button
                      className="btn btn-success me-2"
                      onClick={handleUpdateProfile}
                    >
                      Save Changes
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={handleEditToggle}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}

export default Profile;
