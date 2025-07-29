import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="main bg-black p-5 ">
      <div className="d-flex justify-content-center align-items-center vh-100 text-white m-1 rounded-5 w-auto">
        <div
          className="d-flex  rounded-4 overflow-hidden w-100"
          style={{ maxWidth: "800px", backgroundColor: "#1e1e1e" }}
        >
          <div className="d-none d-md-block w-100 ">
            <img
              src="/images/login.png"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="w-100 w-md-50 p-4 d-flex flex-column align-items-center justify-content-center bg-dark">
            <button className="btn btn-primary d-flex align-items-center gap-2 rounded-pill mb-3 px-4 py-2">
              <i class="fab fa-google" />
              Continue with Google
            </button>

            <div className="input-group mb-3" style={{ maxWidth: "300px" }}>
              <input
                type="email"
                className="form-control rounded-start-pill bg-dark text-white border-secondary"
                placeholder="name@example.com"
              />
               <Link to="/HomePage">
              <button className="btn btn-outline-light rounded-end-pill" type="button">
                →
              </button>
               </Link>
            </div>

            <div className="text-secondary mb-2">or</div>

            <div className="d-flex justify-content-center gap-3 mb-4">
              <button className="btn btn-outline-light rounded-pill px-3">
                <i class="fa-brands fa-apple"></i>
              </button>
              <button className="btn btn-outline-light rounded-pill px-3">
                <i class="fa-brands fa-facebook-f"></i>
              </button>
            </div>

            <div className="text-center text-white small ">
              🌐English
              <br />
              <small> 
                By using Any.do you accept <br />
                our Terms of Service and Privacy Policy
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
