import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#1c2331" }}
    >
      <section className="py-1">
        <div className="container-fluid text-center text-md-start mt-5">
          <div className="row mt-5">
            <div className="col-12 col-md-12 col-lg-4 col-xl-3 mx-auto mb-4">
              <h3 style={{ color: "blue" }}>pacebook</h3>
              <h5>A simple Social Media App</h5>
              <p style={{ fontSize: "13px" }}>
                Created using React JS as a beginner level project.
              </p>
            </div>
            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">FEATURES</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "40px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p style={{ fontSize: "14px" }}>Authentication</p>
              <p style={{ fontSize: "14px" }}>View post</p>
              <p style={{ fontSize: "14px" }}>Comment on post</p>
              <p style={{ fontSize: "14px" }}>Delete post</p>
              <p style={{ fontSize: "14px" }}>Development</p>
              <p style={{ fontSize: "14px" }}>Like Post</p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">
                GUIDING CHANNELS ON REACT
              </h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "40px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p style={{ fontSize: "14px" }}>Pedrotech</p>
              <p style={{ fontSize: "14px" }}>Code With Harry</p>
              <p style={{ fontSize: "14px" }}>CodeEvolution</p>
              <p style={{ fontSize: "14px" }}>FreeCodeCamp</p>
              <p style={{ fontSize: "14px" }}>WebDevs Simplified</p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">OTHER SITES</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "40px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p style={{ fontSize: "14px" }}>ChatGPT</p>
              <p style={{ fontSize: "14px" }}>StackOverFlow</p>
              <p style={{ fontSize: "14px" }}>W3Schools</p>
              <p style={{ fontSize: "14px" }}>React Documentation</p>
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
