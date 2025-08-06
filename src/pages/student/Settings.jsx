import React from 'react'
import StudentLayout from './StudentLayout'

function Settings() {
  return (
<StudentLayout>

<div className="col-lg-9">
  <div className="dashboard__content-wrap">
    <div className="dashboard__content-title">
      <h4 className="title">Settings</h4>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="dashboard__nav-wrap">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="itemOne-tab"
                data-bs-toggle="tab"
                data-bs-target="#itemOne-tab-pane"
                type="button"
                role="tab"
                aria-controls="itemOne-tab-pane"
                aria-selected="true"
              >
                Profile
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="itemTwo-tab"
                data-bs-toggle="tab"
                data-bs-target="#itemTwo-tab-pane"
                type="button"
                role="tab"
                aria-controls="itemTwo-tab-pane"
                aria-selected="false"
                tabIndex={-1}
              >
                Password
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="itemThree-tab"
                data-bs-toggle="tab"
                data-bs-target="#itemThree-tab-pane"
                type="button"
                role="tab"
                aria-controls="itemThree-tab-pane"
                aria-selected="false"
                tabIndex={-1}
              >
                Social Share
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade active show"
            id="itemOne-tab-pane"
            role="tabpanel"
            aria-labelledby="itemOne-tab"
            tabIndex={0}
          >
            <div
              className="instructor__cover-bg"
              data-background="assets/img/bg/student_bg.jpg"
              style={{ backgroundImage: 'url("assets/img/bg/student_bg.jpg")' }}
            >
              <div className="instructor__cover-info">
                <div className="instructor__cover-info-left">
                  <div className="thumb">
                    <img
                      src="/images/courses/details_instructors02.jpg"
                      alt="img"
                    />
                  </div>
                  <button title="Upload Photo">
                    <i className="fas fa-camera" />
                  </button>
                </div>
                <div className="instructor__cover-info-right">
                  <a href="#" className="btn btn-two arrow-btn">
                    Edit Cover Photo
                  </a>
                </div>
              </div>
            </div>
            <div className="instructor__profile-form-wrap">
              <form action="#" className="instructor__profile-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="firstname">First Name</label>
                      <input id="firstname" type="text" defaultValue="John" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="lastname">Last Name</label>
                      <input id="lastname" type="text" defaultValue="Due" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="username">User Name</label>
                      <input id="username" type="text" defaultValue="johndue" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="phonenumber">Phone Number</label>
                      <input
                        id="phonenumber"
                        type="tel"
                        defaultValue="+123 599 8989"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="skill">Skill/Occupation</label>
                      <input
                        id="skill"
                        type="text"
                        defaultValue="Full Stack Developer"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp select-grp">
                      <label htmlFor="displayname">
                        Display Name Publicly As
                      </label>
                      <select id="displayname" name="displayname">
                        <option value="Emily Hannah">Emily Hannah</option>
                        <option value="John">John</option>
                        <option value="Due">Due</option>
                        <option value="Due John">Due John</option>
                        <option value="johndue">johndue</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-grp">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    id="bio"
                    defaultValue={
                      "I am eager to bring my passion for creating user-friendly and efficient web interfaces to your dynamic team. I am applying for Front End Developer position in your company."
                    }
                  />
                </div>
                <div className="submit-btn mt-25">
                  <button type="submit" className="btn btn-primary">
                    Update Info
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="itemTwo-tab-pane"
            role="tabpanel"
            aria-labelledby="itemTwo-tab"
            tabIndex={0}
          >
            <div className="instructor__profile-form-wrap">
              <form action="#" className="instructor__profile-form">
                <div className="form-grp">
                  <label htmlFor="currentpassword">Current Password</label>
                  <input
                    id="currentpassword"
                    type="password"
                    placeholder="Current Password"
                  />
                </div>
                <div className="form-grp">
                  <label htmlFor="newpassword">New Password</label>
                  <input
                    id="newpassword"
                    type="password"
                    placeholder="New Password"
                  />
                </div>
                <div className="form-grp">
                  <label htmlFor="repassword">Re-Type New Password</label>
                  <input
                    id="repassword"
                    type="password"
                    placeholder="Re-Type New Password"
                  />
                </div>
                <div className="submit-btn mt-25">
                  <button type="submit" className="btn btn-primary">
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="itemThree-tab-pane"
            role="tabpanel"
            aria-labelledby="itemThree-tab"
            tabIndex={0}
          >
            <div className="instructor__profile-form-wrap">
              <form action="#" className="instructor__profile-form">
                <div className="form-grp">
                  <label htmlFor="facebook">Facebook</label>
                  <input
                    id="facebook"
                    type="url"
                    placeholder="https://facebook.com/"
                  />
                </div>
                <div className="form-grp">
                  <label htmlFor="twitter">Twitter</label>
                  <input
                    id="twitter"
                    type="url"
                    placeholder="https://twitter.com/"
                  />
                </div>
                <div className="form-grp">
                  <label htmlFor="linkedin">Linkedin</label>
                  <input
                    id="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/"
                  />
                </div>
                <div className="form-grp">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="url"
                    placeholder="https://website.com/"
                  />
                </div>
                <div className="form-grp">
                  <label htmlFor="github">Github</label>
                  <input
                    id="github"
                    type="url"
                    placeholder="https://github.com/"
                  />
                </div>
                <div className="submit-btn mt-25">
                  <button type="submit" className="btn btn-primary">
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</StudentLayout>
  )
}

export default Settings