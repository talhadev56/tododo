import React from 'react'

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
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar