import React from "react";

export default function App() {
  return (
    <>
      <div>

    
        <div
          className="bg-dark text-white px-4 py-3 d-flex justify-content-between align-items-center"
          style={{
            width: "100%",
            position: "fixed",
            top: 0,
            zIndex: 1000,
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEhQZ7bBe-dlQ7donVHDETR7DY3MCo29pnA&s"
              alt="profile"
              className="rounded-circle"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                border: "2px solid white",
              }}
            />

            <h4 className="mb-0">Jaimish Limbachiya</h4>
          </div>

          <ul className="nav d-flex flex-row gap-3">
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link text-white">
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#resume" className="nav-link text-white">
                Resume
              </a>
            </li>

            <li className="nav-item">
              <a href="#portfolio" className="nav-link text-white">
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div style={{ marginTop: "90px" }}>

          
          <div
            className="vh-100 d-flex align-items-center text-white"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MjFJw9_Wg1UHO8WWGHIuV4CqwlifU5ReeQ&s')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container">
              <h1 className="display-3 fw-bold">
                Jaimish limbachiya
              </h1>

              <h3>
                <span className="text-warning">web Developer</span>
              </h3>
            </div>
          </div>

          {/* About */}
          <div className="container py-5" id="about">
            <h2 className="fw-bold">About</h2>

            <div
              style={{
                width: "60px",
                height: "3px",
                background: "#12ef0a",
              }}
            ></div>

            <p className="mt-4 text-muted">
              Magnam dolores commodi suscipit.
            </p>

            <div className="row mt-5 align-items-center">

              <div className="col-md-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuohzIFm4SovHXOc979io2-PxNdEEssoPBww&s"
                  alt="profile"
                  className="img-fluid rounded"
                />
              </div>

              <div className="col-md-8">
                <h3 className="fw-bold">
                  Frontend Developer 
                </h3>

                <p className="fst-italic text-muted">
                  Lorem ipsum dolor sit amet.
                </p>

                <div className="row mt-4">

                  <div className="col-md-6">
                    <p>
                      <strong>Birthday:</strong> 01 JAN 2006
                    </p>

                    <p>
                      <strong>Website:</strong> www.example.com
                    </p>

                    <p>
                      <strong>Phone:</strong> +91 8154827127
                    </p>

                    <p>
                      <strong>City:</strong> Dhansura, India
                    </p>
                  </div>

                  <div className="col-md-6">
                    <p>
                      <strong>Age:</strong> 20
                    </p>

                    <p>
                      <strong>Degree:</strong> diploma in information technology
                    </p>

                    <p>
                      <strong>Email:</strong> jaimishlimbachiya@gmail.com
                    </p>
    
                  </div>

                </div>
              </div>

            </div>
          </div>

       
          <div className="container py-5">

            <h2 className="fw-bold">Skills</h2>

            <div
              style={{
                width: "60px",
                height: "3px",
                background: "   #7d04ff",
              }}
            ></div>

            <div className="row mt-5">

              <div className="col-md-6">

                <p className="d-flex justify-content-between">
                  <span>HTML</span>
                  <span>100%</span>
                </p>

                <div className="progress mb-4">
                  <div
                    className="progress-bar"
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <p className="d-flex justify-content-between">
                  <span>CSS</span>
                  <span>90%</span>
                </p>

                <div className="progress mb-4">
                  <div
                    className="progress-bar"
                    style={{ width: "90%" }}
                  ></div>
                </div>

              </div>

              <div className="col-md-6">

                <p className="d-flex justify-content-between">
                  <span>JavaScript</span>
                  <span>75%</span>
                </p>

                <div className="progress mb-4">
                  <div
                    className="progress-bar"
                    style={{ width: "75%" }}
                  ></div>
                </div>

                <p className="d-flex justify-content-between">
                  <span>React</span>
                  <span>80%</span>
                </p>
                

                <div className="progress mb-4">
                  <div
                    className="progress-bar"
                    style={{ width: "80%" }}
                  ></div>


                  
                </div>

              </div>

            </div>
          </div>

          <div className="container py-5" id="portfolio">

            <h2 className="fw-bold">Portfolio</h2>

            <div className="row mt-5 g-4">

              <div className="col-md-4">
                <img
                  src="https://i.pinimg.com/736x/66/01/43/660143948271fc5cf9dc2b7b4769ea12.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>

              <div className="col-md-4">
                <img
                  src="https://tse3.mm.bing.net/th/id/OIP.5xzLeogLqJw67yoUuM1HNAHaF-?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>

              <div className="col-md-4">
                <img
                  src="https://tse2.mm.bing.net/th/id/OIP.4t1ZmGrVnTnRS5zGqltWwAHaFj?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>

            </div>
          </div>

         
          <div className="container py-5" id="resume">

            <h2 className="fw-bold">Resume</h2>

            <div className="row mt-5">

              <div className="col-md-6">
                <h4>Education</h4>

                <div className="border-start border-3 ps-3">
                  <h5>diploma in information technology</h5>
                  <small>2022 - 2025</small>

                  <p className="text-muted">
                    Goverment poyltechinc,himatnagar
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <h4>Experience</h4>

                <div className="border-start border-3 ps-3">
                  <h5>Full stack Developed</h5>
                  <small>running</small>

                  <p className="text-muted">
                    html&css&java
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="container py-5" id="contact">

            <h2 className="fw-bold">Contact</h2>

            <div className="row mt-5">

              <div className="col-md-8">
                <div className="p-4 shadow bg-light rounded">

                  <form>

                    <div className="row">

                      <div className="col-md-6 mb-3">
                        <label>Your Name</label>

                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Your Email</label>

                        <input
                          type="email"
                          className="form-control"
                        />
                      </div>

                    </div>

                    <div className="mb-3">
                      <label>Subject</label>

                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <label>Message</label>

                      <textarea
                        className="form-control"
                        rows="5"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Send Message
                    </button>

                  </form>

                </div>
              </div>

            </div>
          </div>

          <footer className="bg-dark text-white text-center py-4">

            <p className="mb-1">
              © Copyright <strong>icretate</strong>
            </p>

            <p className="mb-0">
              Developed by <strong>JAIMISH LIMBACHIYA</strong>
            </p>

          </footer>

        </div>
      </div>
    </>
  );
}