import React from "react";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#646464ff" }}>
        <div className="container-fluid my-5">
          <div
            className="text-center text-lg-start text-white rounded shadow"
            
          >
          
            <div className="container p-4 pb-0">
              <section>
                <div className="row">
                 
                  <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase fw-bold">ANY.DO</h5>
                    <p className="small">
                      Any.do is your smart task manager, combining to-do lists,
                      reminders, calendar, and productivity tools in one place —
                      helping you stay organized, focused, and achieve more
                      every single day.
                    </p>
                  </div>

                 
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase fw-bold">Resources</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#" className="text-white text-decoration-none">
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white text-decoration-none">
                          Company
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white text-decoration-none">
                          Blogs
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white text-decoration-none">
                          Press Kit
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white text-decoration-none">
                          Tutorials
                        </a>
                      </li>
                    </ul>
                  </div>

                  
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase fw-bold">Solutions</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#" className="text-white text-decoration-none">
                          Project Management
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white text-decoration-none">
                          Sales & CRM
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white text-decoration-none">
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white text-decoration-none">
                          Design & Creative
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-white text-decoration-none">
                          Remote Work
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="mb-4" />

             
              <section>
                <p className="d-flex justify-content-center align-items-center mb-0">
                  <span className="me-2 fw-semibold">
                    Register for free • Manage your day with Any.do
                  </span>
                </p>
              </section>
            </div>

      
            <div
              className="text-center p-3 mt-3"
              style={{ backgroundColor: "rgba(99, 98, 98, 0.2)" }}
            >
              © 2025 Any.do | All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
