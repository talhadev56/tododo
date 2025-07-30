import React, { useState } from "react";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    const t = newTask.trim();
    if (!t) return;
    setTasks([...tasks, t]);
    setNewTask("");
  };

  return (
    <div className="d-flex">
      <div
        className="sidebar p-4"
        style={{
          width: "260px",
          backgroundColor: "#1f2937",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <div className="d-flex align-items-center mb-4">
          <div
            className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{ width: "32px", height: "32px" }}
          >
            <i className="bi bi-gear-fill text-white"></i>
          </div>
          <div>
            <h5 className="mb-0">Haider</h5>
            <small className="text-secondary">Free Plan</small>
          </div>
        </div>

        <div className="bg-secondary bg-opacity-25 rounded p-3 mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <span className="cursor">Go Premium</span>
            <button className="btn btn-sm btn-outline-primary rounded-5">
              Try It Free
            </button>
          </div>
        </div>

        <h6 className="text-uppercase text-muted small">Navigation</h6>
        <ul className="list-unstyled">
          <li className="mb-2 bg-primary p-2 rounded d-flex justify-content-between align-items-center">
            <span>
              <i className="bi bi-calendar me-2"></i>My Day
            </span>
            <span className="badge bg-primary">1</span>
          </li>
          <li className="mb-2 p-2 rounded text-white">
            <i className="bi bi-calendar me-2"></i>Next 7 Days
          </li>
          <li className="mb-2 p-2 rounded text-white">
            <i className="bi bi-check-circle me-2"></i>All My Tasks
          </li>
          <li className="mb-2 p-2 rounded text-white">
            <i className="bi bi-calendar3 me-2"></i>My Calendar
          </li>
        </ul>

        <h5 className="mt-4">
          <strong>My Lists</strong>
        </h5>
        <ul className="list-unstyled">
          <li className="mb-2 d-flex justify-content-between text-white">
            <span>Personal</span>
            <span className="badge bg-secondary">2</span>
          </li>
          <li className="mb-2 text-white">Work</li>
          <li className="mb-2 text-white">Grocery List</li>
        </ul>

        <h6 className="mt-4">Tags</h6>
        <div className="mb-4">
          <span className="text-warning">#Priority</span>
        </div>

        <button className="btn btn-primary w-100 mt-auto rounded-5">
          <i className="bi bi-plus-lg me-2"></i>Add Shared Space
        </button>
      </div>

      <div
        className="flex-grow-1 position-relative p-4 text-white"
        style={{
          backgroundColor: "#333",
          backgroundImage:
            'url("https://app.any.do/assets/themes/dark/settings-thumbnails/37.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3 border-secondary">
          <div>
            <h3 className="fw-bold mb-0">Good Evening, haider.</h3>
            <small>Run your day or your day will run you</small>
          </div>
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-arrow-repeat text-secondary fs-5"></i>
            <i className="bi bi-bell text-secondary fs-5"></i>
            <div
              className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "32px", height: "32px" }}
            >
              <strong>H</strong>
            </div>
            <i className="bi bi-search text-secondary fs-5"></i>
          </div>
        </div>
        <center className="mt-5">
          <div
            className="p-3 mb-4 rounded w-75"
            style={{ backgroundColor: "#1f2937" }}
          >
            <div className="d-flex justify-content-between">
              <div className="text-center">
                <div className="text-muted small mb-1">WED</div>
                <div className="display-6 fw-bold">30</div>
                <div className="text-muted small">Jul</div>
              </div>
              <div className="ms-4 flex-fill">
                <h5>Join video meetings with one tap</h5>
                <div className="d-flex flex-wrap gap-2">
                  <button className="btn btn-sm btn-primary">
                    📅 Google Calendar
                  </button>
                  <button className="btn btn-sm btn-primary">
                    📧 Outlook Calendar
                  </button>
                  <button className="btn btn-sm btn-primary">
                    ☁️ iCloud Calendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </center>
        <center>
          <div
            className="p-3 mb-4 rounded w-75"
            style={{ backgroundColor: "#1f2937" }}
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control "
                placeholder="Add task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                style={{
                  backgroundColor: "#333",
                  borderColor: "#555",
                  color: "white",
                }}
              />
              <button className="btn btn-secondary" onClick={handleAdd}>
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
            {tasks.length > 0 && (
              <ul className="list-group list-group-flush mt-3">
                {tasks.map((task, i) => (
                  <li
                    key={i}
                    className="list-group-item d-flex justify-content-between align-items-center"
                    style={{
                      backgroundColor: "#1f2937",
                      borderColor: "#555",
                      color: "white",
                    }}
                  >
                    {task}
                    <i
                      className="bi bi-trash"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setTasks(tasks.filter((_, idx) => idx !== i))
                      }
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </center>
      </div>
    </div>
  );
};

export default HomePage;
