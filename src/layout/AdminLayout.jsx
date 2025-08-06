import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useGetAdminProfileQuery } from "../redux/services/adminApi";
 


export default function AdminLayout() {
  // const navigate = useNavigate();
  // const location = useLocation();
  const [toggled,setToggled]=useState(false)
  const {data,isLoading,isError}=useGetAdminProfileQuery()
  useEffect(()=>{
  if(isError){
    localStorage.removeItem("authToken")
    window.location.href="/"
  }
  },[isError])

//   if(isLoading){
//     return(
//       <div id="preloader">
//   <div id="loader" className="loader">
//     <div className="loader-container">
//       <div className="loader-icon">
//         <img src="/fav.png" alt="Preloader" />
//       </div>
//     </div>
//   </div>
// </div>
//     )
//   }

  return (
    <div id="db-wrapper" className={toggled?`toggled`:''}>
 
 <nav className="navbar-vertical navbar">
  <div className="vh-100 simplebar-scrollable-y" data-simplebar="init">
    <div className="simplebar-wrapper" style={{ margin: 0 }}>
      <div className="simplebar-content" style={{ padding: 0 }}>
        {/* Brand logo */}
        <a className="navbar-brand" href="/">
          <img
            src="/logo.png"
            alt="Logo"
          />
        </a>
        <ul className="navbar-nav flex-column" id="sideNavbar">
          <li className="nav-item">
            <a className="nav-link" href="/admin/dashboard">
              <i className="nav-icon fe fe-home me-2" />
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navCourses"
              aria-expanded="false"
              aria-controls="navCourses"
            >
              <i className="nav-icon fe fe-book me-2" />
              Courses
            </a>
            <div id="navCourses" className="collapse show" data-bs-parent="#sideNavbar">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="/admin/manage-courses">
                    All Courses
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/category">
                    Categories
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navUser"
              aria-expanded="false"
              aria-controls="navUser"
            >
              <i className="nav-icon fe fe-user me-2" />
              Users
            </a>
            <div id="navUser" className="collapse" data-bs-parent="#sideNavbar">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="/admin/leads">
                Leads
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/students">
                    Students
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/admin/payments"
              
            >
              <i className="nav-icon fe fe-user me-2" />
              Payments
            </a>
        
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/admin/hire-with-us"
              
            >
              <i className="nav-icon fe fe-user me-2" />
              Hire With Us
            </a>
        
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="/admin/applicationsList"
              
            >
              <i className="nav-icon fe fe- me-2" />
    Job Applications List
            </a>
        
          </li>
        </ul>
  
      </div>
    </div>
  </div>
</nav>

  
    <main id="page-content">
      <div className="header">
        
        {/* <nav className="navbar-default navbar navbar-expand-lg">
          <a id="nav-toggle" style={{cursor:'pointer'}} onClick={()=>toggled?setToggled(false):setToggled(true)}>
            <i className="fe fe-menu" />
          </a>
          <div className="ms-lg-3 d-none d-md-none d-lg-block">
           
            <form className="d-flex align-items-center">
              <span className="position-absolute ps-3 search-icon">
                <i className="fe fe-search" />
              </span>
              <input
                type="search"
                className="form-control ps-6"
                placeholder="Search Entire Dashboard"
              />
            </form>
          </div>
      
          <div className="ms-auto d-flex">
            <div className="dropdown">
              <button
                className="btn btn-light btn-icon rounded-circle d-flex align-items-center"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                aria-label="Toggle theme (auto)"
              >
                <i className="bi theme-icon-active">
                  <i className="bi theme-icon bi-circle-half" />
                </i>
                <span className="visually-hidden bs-theme-text">
                  Toggle theme
                </span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end shadow"
                aria-labelledby="bs-theme-text"
              >
                <li>
                  <button
                    type="button"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-theme-value="light"
                    aria-pressed="false"
                  >
                    <i className="bi theme-icon bi-sun-fill" />
                    <span className="ms-2">Light</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item d-flex align-items-center"
                    data-bs-theme-value="dark"
                    aria-pressed="false"
                  >
                    <i className="bi theme-icon bi-moon-stars-fill" />
                    <span className="ms-2">Dark</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item d-flex align-items-center active"
                    data-bs-theme-value="auto"
                    aria-pressed="true"
                  >
                    <i className="bi theme-icon bi-circle-half" />
                    <span className="ms-2">Auto</span>
                  </button>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav navbar-right-wrap ms-2 d-flex nav-top-wrap">
              <li className="dropdown stopevent">
                <a
                  className="btn btn-light btn-icon rounded-circle indicator indicator-primary"
                  href="#"
                  role="button"
                  id="dropdownNotification"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fe fe-bell" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end dropdown-menu-lg"
                  aria-labelledby="dropdownNotification"
                >
                  <div>
                    <div className="border-bottom px-3 pb-3 d-flex justify-content-between align-items-center">
                      <span className="h4 mb-0">Notifications</span>
                      <a href="# ">
                        <span className="align-middle">
                          <i className="fe fe-settings me-1" />
                        </span>
                      </a>
                    </div>
                    <ul
                      className="list-group list-group-flush simplebar-scrollable-y"
                      data-simplebar="init"
                      style={{ maxHeight: 300 }}
                    >
                      <div className="simplebar-wrapper" style={{ margin: 0 }}>
                        <div className="simplebar-height-auto-observer-wrapper">
                          <div className="simplebar-height-auto-observer" />
                        </div>
                        <div className="simplebar-mask">
                          <div
                            className="simplebar-offset"
                            style={{ right: 0, bottom: 0 }}
                          >
                            <div
                              className="simplebar-content-wrapper"
                              tabIndex={0}
                              role="region"
                              aria-label="scrollable content"
                              style={{
                                height: "auto",
                                overflow: "hidden scroll"
                              }}
                            >
                              <div
                                className="simplebar-content"
                                style={{ padding: 0 }}
                              >
                                <li className="list-group-item bg-light">
                                  <div className="row">
                                    <div className="col">
                                      <a className="text-body" href="#">
                                        <div className="d-flex">
                                          <img
                                            src="../../assets/images/avatar/avatar-1.jpg"
                                            alt=""
                                            className="avatar-md rounded-circle"
                                          />
                                          <div className="ms-3">
                                            <h5 className="fw-bold mb-1">
                                              Kristin Watson:
                                            </h5>
                                            <p className="mb-3">
                                              Krisitn Watsan like your comment on
                                              course Javascript Introduction!
                                            </p>
                                            <span className="fs-6">
                                              <span>
                                                <span className="fe fe-thumbs-up text-success me-1" />
                                                2 hours ago,
                                              </span>
                                              <span className="ms-1">
                                                2:19 PM
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="col-auto text-center me-2">
                                      <a
                                        href="#"
                                        className="badge-dot bg-info"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        aria-label="Mark as read"
                                        data-bs-original-title="Mark as read"
                                      />
                                      <div>
                                        <a
                                          href="#"
                                          className="bg-transparent"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="top"
                                          aria-label="Remove"
                                          data-bs-original-title="Remove"
                                        >
                                          <i className="fe fe-x" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="row">
                                    <div className="col">
                                      <a className="text-body" href="#">
                                        <div className="d-flex">
                                          <img
                                            src="../../assets/images/avatar/avatar-2.jpg"
                                            alt=""
                                            className="avatar-md rounded-circle"
                                          />
                                          <div className="ms-3">
                                            <h5 className="fw-bold mb-1">
                                              Brooklyn Simmons
                                            </h5>
                                            <p className="mb-3">
                                              Just launched a new Courses React
                                              for Beginner.
                                            </p>
                                            <span className="fs-6">
                                              <span>
                                                <span className="fe fe-thumbs-up text-success me-1" />
                                                Oct 9,
                                              </span>
                                              <span className="ms-1">
                                                1:20 PM
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="col-auto text-center me-2">
                                      <a
                                        href="#"
                                        className="badge-dot bg-secondary"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        aria-label="Mark as unread"
                                        data-bs-original-title="Mark as unread"
                                      />
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="row">
                                    <div className="col">
                                      <a className="text-body" href="#">
                                        <div className="d-flex">
                                          <img
                                            src="../../assets/images/avatar/avatar-3.jpg"
                                            alt=""
                                            className="avatar-md rounded-circle"
                                          />
                                          <div className="ms-3">
                                            <h5 className="fw-bold mb-1">
                                              Jenny Wilson
                                            </h5>
                                            <p className="mb-3">
                                              Krisitn Watsan like your comment on
                                              course Javascript Introduction!
                                            </p>
                                            <span className="fs-6">
                                              <span>
                                                <span className="fe fe-thumbs-up text-info me-1" />
                                                Oct 9,
                                              </span>
                                              <span className="ms-1">
                                                1:56 PM
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="col-auto text-center me-2">
                                      <a
                                        href="#"
                                        className="badge-dot bg-secondary"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        aria-label="Mark as unread"
                                        data-bs-original-title="Mark as unread"
                                      />
                                    </div>
                                  </div>
                                </li>
                                <li className="list-group-item">
                                  <div className="row">
                                    <div className="col">
                                      <a className="text-body" href="#">
                                        <div className="d-flex">
                                          <img
                                            src="../../assets/images/avatar/avatar-4.jpg"
                                            alt=""
                                            className="avatar-md rounded-circle"
                                          />
                                          <div className="ms-3">
                                            <h5 className="fw-bold mb-1">
                                              Sina Ray
                                            </h5>
                                            <p className="mb-3">
                                              You earn new certificate for
                                              complete the Javascript Beginner
                                              course.
                                            </p>
                                            <span className="fs-6">
                                              <span>
                                                <span className="fe fe-award text-warning me-1" />
                                                Oct 9,
                                              </span>
                                              <span className="ms-1">
                                                1:56 PM
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="col-auto text-center me-2">
                                      <a
                                        href="#"
                                        className="badge-dot bg-secondary"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        aria-label="Mark as unread"
                                        data-bs-original-title="Mark as unread"
                                      />
                                    </div>
                                  </div>
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="simplebar-placeholder"
                          style={{ width: 328, height: 594 }}
                        />
                      </div>
                      <div
                        className="simplebar-track simplebar-horizontal"
                        style={{ visibility: "hidden" }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{ width: 0, display: "none" }}
                        />
                      </div>
                      <div
                        className="simplebar-track simplebar-vertical"
                        style={{ visibility: "visible" }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{
                            height: 151,
                            transform: "translate3d(0px, 0px, 0px)",
                            display: "block"
                          }}
                        />
                      </div>
                    </ul>
                    <div className="border-top px-3 pt-3 pb-0">
                      <a
                        href="https://geeksui.codescandy.com/geeks/pages/notification-history.html"
                        className="text-link fw-semibold"
                      >
                        See all Notifications
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dropdown ms-2">
                <a
                  className="rounded-circle"
                  href="#"
                  role="button"
                  id="dropdownUser"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="avatar avatar-md avatar-indicators avatar-online">
                    <img
                      alt="avatar"
                      src="../../assets/images/avatar/avatar-1.jpg"
                      className="rounded-circle"
                    />
                  </div>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownUser"
                >
                  <div className="dropdown-item">
                    <div className="d-flex">
                      <div className="avatar avatar-md avatar-indicators avatar-online">
                        <img
                          alt="avatar"
                          src="../../assets/images/avatar/avatar-1.jpg"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="ms-3 lh-1">
                        <h5 className="mb-1">Annette Black</h5>
                        <p className="mb-0">annette@geeksui.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-divider" />
                  <ul className="list-unstyled">
                    <li className="dropdown-submenu dropstart-lg">
                      <a
                        className="dropdown-item dropdown-list-group-item dropdown-toggle"
                        href="#"
                      >
                        <i className="fe fe-circle me-2" />
                        Status
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <span className="badge-dot bg-success me-2" />
                            Online
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <span className="badge-dot bg-secondary me-2" />
                            Offline
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <span className="badge-dot bg-warning me-2" />
                            Away
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <span className="badge-dot bg-danger me-2" />
                            Busy
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://geeksui.codescandy.com/geeks/pages/profile-edit.html"
                      >
                        <i className="fe fe-user me-2" />
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://geeksui.codescandy.com/geeks/pages/student-subscriptions.html"
                      >
                        <i className="fe fe-star me-2" />
                        Subscription
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-settings me-2" />
                        Settings
                      </a>
                    </li>
                  </ul>
                  <div className="dropdown-divider" />
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://geeksui.codescandy.com/geeks/index.html"
                      >
                        <i className="fe fe-power me-2" />
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav> */}
      </div>
      
      <div >
       <Outlet/>
      </div>
    </main>
  </div>
  
  );
}
 