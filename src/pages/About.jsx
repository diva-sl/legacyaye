import React from 'react'
import Reviews from '../components/Reviews'

function About() {

  return (
    <main className="main-area fix">

    <section
      className="breadcrumb__area breadcrumb__bg"
      data-background="assets/img/bg/breadcrumb_bg.jpg"
      style={{ backgroundImage: 'url("assets/img/bg/breadcrumb_bg.jpg")' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb__content">
              <h3 className="title">Who We Are</h3>
              <nav className="breadcrumb">
                <span property="itemListElement" typeof="ListItem">
                  <a href="index-2.html">Home</a>
                </span>
                <span className="breadcrumb-separator">
                  <i className="fas fa-angle-right" />
                </span>
                <span property="itemListElement" typeof="ListItem">
                  About Us
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb__shape-wrap">
        <img
          src="/images/others/breadcrumb_shape01.svg"
          alt="img"
          className="alltuchtopdown"
        />
        <img
          src="/images/others/breadcrumb_shape02.svg"
          alt="img"
          data-aos="fade-right"
          data-aos-delay={300}
          className="aos-init aos-animate"
        />
        <img
          src="/images/others/breadcrumb_shape03.svg"
          alt="img"
          data-aos="fade-up"
          data-aos-delay={400}
          className="aos-init aos-animate"
        />
        <img
          src="/images/others/breadcrumb_shape04.svg"
          alt="img"
          data-aos="fade-down-left"
          data-aos-delay={400}
          className="aos-init aos-animate"
        />
        <img
          src="/images/others/breadcrumb_shape05.svg"
          alt="img"
          data-aos="fade-left"
          data-aos-delay={400}
          className="aos-init aos-animate"
        />
      </div>
    </section>

    <section className="about-area-three section-py-120">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="about__images-three tg-svg">
              <img src="/images/others/inner_about_img.png" alt="img" />
              <span
                className="svg-icon"
                id="about-svg"
                data-svg-icon="assets/img/others/inner_about_shape.svg"
              />
              <a
                href="https://www.youtube.com/watch?v=b2Az7_lLh3g"
                className="popup-video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={28}
                  viewBox="0 0 22 28"
                  fill="none"
                >
                  <path
                    d="M0.19043 26.3132V1.69421C0.190288 1.40603 0.245303 1.12259 0.350273 0.870694C0.455242 0.6188 0.606687 0.406797 0.79027 0.254768C0.973854 0.10274 1.1835 0.0157243 1.39936 0.00193865C1.61521 -0.011847 1.83014 0.0480663 2.02378 0.176003L20.4856 12.3292C20.6973 12.4694 20.8754 12.6856 20.9999 12.9535C21.1245 13.2214 21.1904 13.5304 21.1904 13.8456C21.1904 14.1608 21.1245 14.4697 20.9999 14.7376C20.8754 15.0055 20.6973 15.2217 20.4856 15.3619L2.02378 27.824C1.83056 27.9517 1.61615 28.0116 1.40076 27.9981C1.18536 27.9847 0.97607 27.8983 0.792638 27.7472C0.609205 27.596 0.457661 27.385 0.352299 27.1342C0.246938 26.8833 0.191236 26.6008 0.19043 26.3132Z"
                    fill="currentcolor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-three">
              <div className="section__title mb-10">
                <span className="sub-title">Get More About Us</span>
                <h2 className="title">
                  Empowering Students to reach their
                  <span className="position-relative">
                    <svg
                      x="0px"
                      y="0px"
                      preserveAspectRatio="none"
                      viewBox="0 0 209 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565"
                        fill="currentcolor"
                      />
                    </svg>
                    potential
                  </span>
                  Goal For Next Level Challenge.
                </h2>
              </div>
              <p className="desc">
                when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting.
              </p>
              <ul className="about__info-list list-wrap">
                <li className="about__info-list-item">
                  <i className="flaticon-angle-right" />
                  <p className="content">The Most World Class Instructors</p>
                </li>
                <li className="about__info-list-item">
                  <i className="flaticon-angle-right" />
                  <p className="content">Access Your Class anywhere</p>
                </li>
                <li className="about__info-list-item">
                  <i className="flaticon-angle-right" />
                  <p className="content">Flexible Course Plan</p>
                </li>
              </ul>
              <div className="tg-button-wrap">
                <a href="contact.html" className="btn arrow-btn">
                  Start Free Trial{" "}
                  <img
                    src="/images/icons/right_arrow.svg"
                    alt="img"
                    className="injectable"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 

    <div className="brand-area">
      <div className="container-fluid">
        <div className="marquee_mode">
          <div
            style={{
              width: 100000,
              transform: "translateX(0px)",
              animation:
                "89.975s linear 0s infinite normal none running marqueeAnimation-8029404"
            }}
            className="js-marquee-wrapper"
          >
            <div
              className="js-marquee"
              style={{ marginRight: 35, float: "left" }}
            >
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand01.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand02.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand03.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand04.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand05.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand06.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand07.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand04.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand03.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
            </div>
            <div
              className="js-marquee"
              style={{ marginRight: 35, float: "left" }}
            >
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand01.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand02.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand03.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand04.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand05.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand06.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand07.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand04.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="/images/brand/brand03.png" alt="brand" />
                </a>
                <img src="/images/icons/brand_star.svg" alt="star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  

    <section className="features__area-three section-pt-120 section-pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section__title text-center mb-40">
              <span className="sub-title">What We Offer</span>
              <h2 className="title">Learn New Skills When And Where You Like</h2>
              <p>when known printer took a galley of type scrambl edmake</p>
            </div>
          </div>
        </div>
        <div className="features__item-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="features__item-two">
                <div className="features__content-two">
                  <div className="content-top">
                    <div className="features__icon-two">
                      <img
                        src="/images/icons/h2_features_icon01.svg"
                        alt="img"
                        className="injectable"
                      />
                    </div>
                    <h2 className="title">Expert Tutors</h2>
                  </div>
                  <p>
                    when an unknown printer took a galley offe type and scrambled
                    makes.
                  </p>
                </div>
                <div className="features__item-shape">
                  <img
                    src="/images/others/features_item_shape.svg"
                    alt="img"
                    className="injectable"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="features__item-two">
                <div className="features__content-two">
                  <div className="content-top">
                    <div className="features__icon-two">
                      <img
                        src="/images/icons/h2_features_icon02.svg"
                        alt="img"
                        className="injectable"
                      />
                    </div>
                    <h2 className="title">Effective Courses</h2>
                  </div>
                  <p>
                    when an unknown printer took a galley offe type and scrambled
                    makes.
                  </p>
                </div>
                <div className="features__item-shape">
                  <img
                    src="/images/others/features_item_shape.svg"
                    alt="img"
                    className="injectable"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="features__item-two">
                <div className="features__content-two">
                  <div className="content-top">
                    <div className="features__icon-two">
                      <img
                        src="/images/icons/h2_features_icon03.svg"
                        alt="img"
                        className="injectable"
                      />
                    </div>
                    <h2 className="title">Earn Certificate</h2>
                  </div>
                  <p>
                    when an unknown printer took a galley offe type and scrambled
                    makes.
                  </p>
                </div>
                <div className="features__item-shape">
                  <img
                    src="/images/others/features_item_shape.svg"
                    alt="img"
                    className="injectable"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  

    <section className="newsletter__area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="newsletter__img-wrap">
              <img src="/images/others/newsletter_img.png" alt="img" />
              <img
                src="/images/others/newsletter_shape01.png"
                alt="img"
                data-aos="fade-up"
                data-aos-delay={400}
                className="aos-init aos-animate"
              />
              <img
                src="/images/others/newsletter_shape02.png"
                alt="img"
                className="alltuchtopdown"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="newsletter__content">
              <h2 className="title">
                Want to stay <span>informed</span> about <br /> new{" "}
                <span>courses &amp; study?</span>
              </h2>
              <div className="newsletter__form">
                <form action="#">
                  <input type="email" placeholder="Type your e-mail" />
                  <button type="submit" className="btn btn-primary">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter__shape">
        <img
          src="/images/others/newsletter_shape03.png"
          alt="img"
          data-aos="fade-left"
          data-aos-delay={400}
          className="aos-init aos-animate"
        />
      </div>
    </section>

    <section className="features__area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section__title white-title text-center mb-50">
              <span className="sub-title">How We Start Journey</span>
              <h2 className="title">Start your Learning Journey Today!</h2>
              <p>
                Groove’s intuitive shared inbox makesteam members together <br />{" "}
                organize, prioritize and.In this episode.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="features__item">
              <div className="features__icon">
                <img
                  src="/images/icons/features_icon01.svg"
                  className="injectable"
                  alt="img"
                />
              </div>
              <div className="features__content">
                <h4 className="title">Learn with Experts</h4>
                <p>Curate anding area share Pluralsight content to reach your</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="features__item">
              <div className="features__icon">
                <img
                  src="/images/icons/features_icon02.svg"
                  className="injectable"
                  alt="img"
                />
              </div>
              <div className="features__content">
                <h4 className="title">Learn Anything</h4>
                <p>Curate anding area share Pluralsight content to reach your</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="features__item">
              <div className="features__icon">
                <img
                  src="/images/icons/features_icon03.svg"
                  className="injectable"
                  alt="img"
                />
              </div>
              <div className="features__content">
                <h4 className="title">Get Online Certificate</h4>
                <p>Curate anding area share Pluralsight content to reach your</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="features__item">
              <div className="features__icon">
                <img
                  src="/images/icons/features_icon04.svg"
                  className="injectable"
                  alt="img"
                />
              </div>
              <div className="features__content">
                <h4 className="title">E-mail Marketing</h4>
                <p>Curate anding area share Pluralsight content to reach your</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  
    <Reviews/>
  </main>
  
  )
}

export default About