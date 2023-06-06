import React from "react";
import Image from "next/image";
import Shirt from "../assets/750x750-smilingManHeadshotGlassesPinkShirt.jpg";
import FullBG from "../assets/hack-reactor_logo_full-color_dark-background.png";

const Main = () => {
  return (
    <div>
      <main>
        {/* <!-- About --> */}
        <section className="bg-blue section-padding-right" aria-label="About">
          <div id="about-container" className="bg-navy-blue">
            <div className="center-container">
              <div className="center-wrapper-left">
                <div className="content font-color-white">
                  <div id="about-context">
                    <p className="pre-title">HACK REACTOR BY GALVANIZE</p>
                    <h1>Coding Bootcamps for Aspiring Software Engineers</h1>
                    <p className="intro-text">
                      Learn and grow in a supportive online coding community
                      dedicated to building tomorrow.
                    </p>
                    <a
                      className="btn-primary"
                      href="https://admissions.galvanize.com/?_ga=2.36187040.1424400670.1681500274-1662624598.1681500274"
                      target="_blank"
                    >
                      Apply Now{" "}
                      <i
                        className="fa-solid fa-external-link-alt fa-xs"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </div>
                  <div
                    id="primary-inquiry-container"
                    className="display-flex flex-center-vertical"
                  >
                    <div
                      className="relative flex-nobasis"
                      style={{ flexGrow: 1.35 }}
                    >
                      <div className="display-flex flex-center-vertical">
                        <Image alt="" src={Shirt} id="primary-inquiry-model" />
                      </div>
                      <div
                        className="absolute fill-width display-flex"
                        style={{ bottom: "15px", left: "15px" }}
                      >
                        <div id="primary-inquiry-model-mask"></div>
                        <Image
                          alt=""
                          src={FullBG}
                          id="primary-inquiry-model-logo"
                        />
                      </div>
                    </div>
                    <div
                      className="flex-nobasis flex-grow-1"
                      style={{ flexGrow: 1, zIndex: 1 }}
                    >
                      <form id="primary-inquiry-form">
                        <div className="form-input-container">
                          <input
                            placeholder=" "
                            className="primary-input"
                            type="text"
                          />
                          <label>First Name *</label>
                        </div>
                        <div className="form-input-container">
                          <input
                            placeholder=" "
                            className="primary-input"
                            type="text"
                          />
                          <label>Last Name *</label>
                        </div>
                        <div className="form-input-container">
                          <input
                            placeholder=" "
                            className="primary-input"
                            type="text"
                          />
                          <label>Email *</label>
                        </div>
                        <div className="form-input-container">
                          <input className="primary-input" type="text" />
                          <label>Phone</label>
                        </div>
                        <div className="form-select-container">
                          <select className="primary-select">
                            <option disabled selected value="">
                              Please select...
                            </option>
                            <option value="option1">Full-time beginner</option>
                            <option value="option2">
                              Full-time intermediate
                            </option>
                            <option value="option3">I'm not sure</option>
                          </select>
                          <label>What program interests you? *</label>
                        </div>
                        <label
                          id="terms-and-service"
                          className="underslide-out-wrapper display-flex"
                        >
                          <input type="checkbox" />
                          <div className="font-color-dark-gray">
                            I agree to Galvanize’s{" "}
                            <a
                              href="https://www.galvanize.com/privacy/"
                              className="font-700 font-color-navy-blue"
                            >
                              Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a
                              className="font-700 font-color-navy-blue"
                              href="https://www.galvanize.com/terms-of-use"
                            >
                              Terms of Service
                            </a>
                            .
                          </div>
                        </label>
                        <a
                          className="btn-primary absolute"
                          href="https://admissions.galvanize.com/?_ga=2.36187040.1424400670.1681500274-1662624598.1681500274"
                          target="_blank"
                        >
                          Send me more information
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Careers --> */}
        <div className="bg-light-blue">
          <div className="bottom-transition-right bg-navy-blue"></div>
        </div>
        <section
          className="bg-navy-blue section-padding-left"
          aria-label="Careers"
        >
          <div className="bg-light-blue top-rounded-left">
            <div className="center-container">
              <div className="center-wrapper-right">Careers placeholder</div>
            </div>
          </div>
        </section>

        {/* <!-- Partners --> */}
        <section
          className="bg-navy-blue section-padding-left"
          aria-label="Partners"
        >
          <div className="bg-light-blue">
            <div className="center-container">
              <div className="center-wrapper-right">Partners placeholder</div>
            </div>
          </div>
        </section>

        {/* <!-- Explore --> */}
        <div className="bg-white">
          <div className="bottom-transition-left bg-light-blue"></div>
        </div>
        <section
          className="bg-light-blue section-padding-right"
          aria-label="Explore"
        >
          <div className="bg-white top-rounded-right">
            <div className="center-container">
              <div className="center-wrapper-left">Explore placeholder</div>
            </div>
          </div>
        </section>

        {/* <!-- Reviews --> */}
        <section
          className="bg-light-blue section-padding-right"
          aria-label="Reviews"
        >
          <div className="bg-white">
            <div className="center-container">
              <div className="center-wrapper-left">Reviews placeholder</div>
            </div>
          </div>
        </section>

        {/* <!-- Community --> */}
        <div className="bg-navy-blue">
          <div className="bottom-transition-right bg-white"></div>
        </div>
        <section
          className="bg-white section-padding-left"
          aria-label="Community"
        >
          <div className="bg-navy-blue top-rounded-left">
            <div className="center-container">
              <div className="center-wrapper-right">Community placeholder</div>
            </div>
          </div>
        </section>

        {/* <!-- Feedback --> */}
        <section
          className="bg-white section-padding-left"
          aria-label="Feedback"
        >
          <div className="bg-navy-blue">
            <div className="center-container">
              <div className="center-wrapper-right">Feedback placeholder</div>
            </div>
          </div>
        </section>

        {/* <!-- Build --> */}
        <div className="bg-light-blue">
          <div className="bottom-transition-left bg-navy-blue"></div>
        </div>
        <section
          className="bg-navy-blue section-padding-right"
          aria-label="Build"
        >
          <div className="bg-light-blue top-rounded-right">
            <div className="center-container">
              <div className="center-wrapper-left">Build placeholder</div>
            </div>
          </div>
        </section>

        {/* <!-- Invest --> */}
        <section
          className="bg-navy-blue section-padding-right"
          aria-label="Invest"
        >
          <div className="bg-light-blue">
            <div className="center-container">
              <div className="center-wrapper-left">Invest placeholder</div>
            </div>
          </div>
        </section>

        {/* <!-- Alumnis --> */}
        <section
          className="bg-navy-blue section-padding-right"
          aria-label="Alumnis"
        >
          <div className="bg-light-blue">
            <div className="center-container">
              <div className="center-wrapper-left">Alumnis placeholder</div>
            </div>
          </div>
        </section>

        {/* <!-- Session --> */}
        <div className="bg-white">
          <div className="bottom-transition-right bg-light-blue"></div>
        </div>
        <section
          className="bg-light-blue section-padding-left"
          aria-label="Session"
        >
          <div className="bg-white top-rounded-left">
            <div className="center-container">
              <div className="center-wrapper-right">Session placeholder</div>
            </div>
          </div>
        </section>

        {/* <!-- Apply --> */}
        <div className="bg-navy-blue">
          <div className="bottom-transition-left bg-white"></div>
        </div>
        <section className="bg-white section-padding-right" aria-label="Apply">
          <div className="bg-navy-blue top-rounded-right">
            <div className="center-container">
              <div className="center-wrapper-left">Apply placeholder</div>
            </div>
          </div>
        </section>
        <div className="bg-white">
          <div className="bottom-transition-right bg-navy-blue"></div>
        </div>
      </main>
    </div>
  );
};

export default Main;
