import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#1c2331" }}
    >
      {/* <section
        className="d-flex justify-content-between p-4"
        style={{ backgroundColor: "#61CE70" }}
      >
        <div className=" me-5">
          <h5>
            <strong>Do You Have Questions?</strong>
          </h5>
          <p style={{ fontSize: "14px" }}>
            We’ll help you to grow your career and growth.
          </p>
        </div>
        <div className="py-3">
          <button
            className="contact-button btn rounded-pill px-3 p-2"
            style={{
              backgroundColor: "white",
              fontSize: "14px",
              boxShadow: "0px 0px 0px 8px  rgb(62 28 131 / 7%)",
            }}
          >
            <b>Contact Us Today</b>
          </button>
        </div>
      </section> */}
      <section className="py-1">
        <div className="container-fluid text-center text-md-start mt-5">
          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-4 col-xl-3 mx-auto mb-4">
              <h3>SkillUP</h3>
              <h5>Do You Need Help With Anything?</h5>
              <p style={{ fontSize: "13px" }}>
                Here you can use rows and columns to organize your footer
                content.
              </p>
              <div className="input-group mb-5">
                <input className="form-control" placeholder="Email Address" />
                <button
                  className="btn hover py-3 px-3"
                  style={{ color: "white", backgroundColor: "green" }}
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">COURSES LIST</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "40px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p style={{ fontSize: "14px" }}>Lifestyle</p>
              <p style={{ fontSize: "14px" }}>Marketing</p>
              <p style={{ fontSize: "14px" }}>Development</p>
              <p style={{ fontSize: "14px" }}>Health & Fitness</p>
              <p style={{ fontSize: "14px" }}>Development</p>
              <p style={{ fontSize: "14px" }}>Health & Fitness</p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">HELPFUL ARTICLES</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "40px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p style={{ fontSize: "14px" }}>Accounting</p>
              <p style={{ fontSize: "14px" }}>Business</p>
              <p style={{ fontSize: "14px" }}>Marketing</p>
              <p style={{ fontSize: "14px" }}>Sign In</p>
              <p style={{ fontSize: "14px" }}>Our Service</p>
              <p style={{ fontSize: "14px" }}>About Us</p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">QUICK LINKS</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "40px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p style={{ fontSize: "14px" }}>Blog</p>
              <p style={{ fontSize: "14px" }}>Shop</p>
              <p style={{ fontSize: "14px" }}>FAQ's</p>
              <p style={{ fontSize: "14px" }}>About Us</p>
              <p style={{ fontSize: "14px" }}>Contact Us</p>
              <p style={{ fontSize: "14px" }}>Pricing</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-3" style={{ fontSize: "13px" }}>
        © 2022 – Skillup. All Rights Reserved. Powered by ApusTheme
      </div>
    </footer>
  );
}
