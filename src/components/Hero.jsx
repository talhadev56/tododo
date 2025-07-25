import React from "react";

const Hero = () => {
  return (
    <>
      <section  className="container">
        <div className="text-center mt-5">
          <div className="fs-1 fw-bolder line">
            <strong>
              A simple to do list <br />
            </strong>
            <strong>to manage it all</strong>
          </div>
          <p className="fs-5 mt-5">
            Easily manage your personal tasks, family projects, and <br />
            team’s work all in one place. Trusted by +40M people
          </p>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button
            type="button"
            className="btn btn-primary btn-lg rounded-5 px-4 py-3 "
          >
            Get Started. It's FREE{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>{" "}
          </button>
        </div>
        <div className="text-center mt-4 ">
          <span>Free Forever. No credit card.</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
