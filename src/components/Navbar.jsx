import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light p-4">
        <div className="container-fluid">
          <a className="navbar-brand fs-3 logo" href="#">
            <strong>
              Any
              <span style={{ color: "blue" }} className="rounded-5">
                .
              </span>
              do
            </strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse fs-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Meet Any.do
                </a>
                <ul className="dropdown-menu rounded-5">
                  <li>
                    <a className="dropdown-item" href="#">
                      To-do list & Tasks
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Project management
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Daily planner (My Day)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Calender
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Reminder
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Chat & collaboration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Integration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Imports
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Solutions
                </a>
                <ul className="dropdown-menu rounded-5">
                  <div className="d-flex">
                    <div>
                      <li>
                        <a className="dropdown-item" href="#">
                          <strong>Plans</strong>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Teams
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Family
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Premium
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Personal
                        </a>
                      </li>
                    </div>
                    <div>
                      <li>
                        <a className="dropdown-item" href="#">
                          <strong>By use case</strong>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Project Managment
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sale & CRM
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Remote Work
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Design & Creative
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Software Development
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          HR
                        </a>
                      </li>
                    </div>
                    <div>
                      <li>
                        <a className="dropdown-item" href="#">
                          <strong>By Template</strong>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sprint Planing
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Agile Mangement
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Content Calender
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Budget
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Event Mangement
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Inventory Tracking
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Design sprint
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Roadmap
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          +100 more template...
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resourses
                </a>
                <ul className="dropdown-menu rounded-5">
                  <li>
                    <a className="dropdown-item" href="#">
                      Help center
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Video toturial
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ambassadors Programe
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Contact us
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Download
                </a>
                <ul className="dropdown-menu rounded-5">
                  <li>
                    <a className="dropdown-item" href="#">
                      Any.do for IOS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Any.do for Andriod
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Any.do for Windows
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Any.do for Mac
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Any.do Chrome Extension
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Any.do Edge Addon
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Any.do Firefox Addon
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Any.do Safari Extension
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Any.do for Gmail
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <a href="#" className="px-4 text-decoration-none text-primary">
                Book a demo
              </a>
              <button
                className="btn btn-outline-primary rounded-5 px-4 fs-5"
                type="submit" 
                data-bs-toggle="modal" data-bs-target="#exampleModal"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
  
<div className="modal fade" id="exampleModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Form</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
         <div class="d-grid gap-2">
          <h3 className="text-center">Sign Up</h3>
  <button class="btn btn-primary py-2 px-3 mt-2">Continue with Google</button>

  <div class="input-group mt-3 mb-3">
    <input
      type="email"
      class="form-control border-end-0 rounded-start-pill"
      placeholder="Enter your work email"
    />
    <span class="input-group-text bg-white border-start-0 rounded-end-pill"
       className="input-group-text bg-white border-start-0 rounded-end-5"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16" > <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" /> </svg>
    </span>
  </div>
</div>
<p className="text-center">By using <a href="#"> Any.do</a> you accept our <br />
Terms of Service and Privacy Policy</p>

        </form>
      </div>
    </div>
  </div>
</div>



    </>
  );
};

export default Navbar;
