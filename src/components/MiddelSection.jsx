import React, { useRef, useState, useEffect } from "react";

const TabSwitch = () => {
  const buttonRefs = useRef([]);
  const circleRef = useRef(null);
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const moveSlider = (index) => {
    setActiveIndex(index);
    const btn = buttonRefs.current[index];

    if (sliderRef.current && btn) {
      sliderRef.current.style.width = `${btn.offsetWidth}px`;
      sliderRef.current.style.left = `${btn.offsetLeft}px`;
    }

    if (circleRef.current && btn) {
      const top = btn.offsetTop + btn.offsetHeight / 2 - 10;
      circleRef.current.style.top = `${top}px`;
      circleRef.current.style.left = `${btn.offsetLeft - 25}px`;
    }
  };

  useEffect(() => {
    moveSlider(activeIndex);
    const handleResize = () => moveSlider(activeIndex);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <div
      className="position-relative d-flex justify-content-between align-items-center rounded-pill bg-light mx-auto mt-5 mb-5 px-3 text-center"
      style={{
        maxWidth: "70%",
        minWidth: "350px",
        padding: "12px 24px",
      }}
    >
      {/* sliding  */}
      <div
        ref={sliderRef}
        className="position-absolute rounded-pill"
        style={{
          top: "6px",
          height: "calc(100% - 12px)",
          backgroundColor: "white",
          transition: "left 0.3s ease, width 0.3s ease",
          zIndex: 1,
        }}
      ></div>

      {/* circle  active tab */}
      <div
        ref={circleRef}
        className="position-absolute bg-primary"
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          transition: "left 0.3s ease, top 0.3s ease",
          zIndex: 3,
        }}
      ></div>

      {/* buttons */}
        <div className="d-flex justify-content-center text-center w-100 z-2" role="group" style={{ gap: "10px" }}>
          {["For You", "For Families", "For Teams"].map((label, idx) => (
            <button
              key={idx}
              ref={(el) => (buttonRefs.current[idx] = el)}
              onClick={() => moveSlider(idx)}
              className="btn fw-semibold rounded-pill text-nowrap fs-1 px-4 py-2"
              style={{
                background: "transparent",
                border: "none",
                position: "relative",
                zIndex: 2,
                color: activeIndex === idx ? "#0d6efd" : "#9b9b9b",
              }}
              
            >
              {label}
            </button>
          ))}
        </div>
    </div>
  );
};




// middle

let MiddelSection = () => {
  const cards = [
    {
      id: 1,
      title: "Tasks & Lists",
      text: "Easily manage all your tasks and lists",
      img: "/images/pic1.webp",
    },
    {
      id: 2,
      title: "Calendar",
      text: "Organize all your calendar events and tasks in one place",
      img: "/images/pic2.webp",
      dark: true,
    },
    {
      id: 3,
      title: "Daily Planner",
      text: "What’s your plan for today?",
      img: "/images/pic3.webp",
    },
    {
      id: 4,
      title: "Widgets",
      text: "Review your upcoming events, tasks, and conference calls at a glance.",
      img: "/images/pic4.webp",
    },
    {
      id: 5,
      title: "Reminders",
      text: "Set time based, location and recurring reminders",
      img: "/images/pic5.webp",
    },
    {
      id: 6,
      title: "WhatsApp 🤝 Any.do",
      text: "Easily create tasks and get reminders in WhatsApp",
      img: "/images/pic6.webp",
    },
    {
      id: 7,
      title: "Turbocharge with AI",
      text: "Save precious time and effort with your all-new AI assistant",
      img: "/images/pic7.svg",
      dark: true,
    },
    {
      id: 8,
      title: "Break It Down",
      text: "Get more done by breaking down task into sub-tasks",
      img: "/images/pic8.webp",
    },
    {
      id: 9,
      title: "Visually Organized",
      text: "Get color tags to visually organize your tasks",
      img: "/images/family1.webp",
    },
    {
      id: 10,
      title: "Organize Your Family",
      text: "Create a family board to easily manage your household",
      img: "/images/family2.webp",
    },
    {
      id: 11,
      title: "Shared Grocery List",
      text: "A shared list that auto groups your grocery items by aisle",
      img: "/images/family3.webp",
    },
    {
      id: 12,
      title: "Manage Family Projects",
      text: "Plan a vacation or a household renovation with a project board",
      img: "/images/family4.webp",
    },
    {
      id: 13,
      title: "Schedule and Assign Tasks",
      text: "Set clear responsibilities and deadlines to your loved ones",
      img: "/images/team1.webp",
    },
    {
      id: 14,
      title: "Templates",
      text: "Get started in seconds with over +100 custom made templates",
      img: "/images/team6.webp",
    },
    {
      id: 15,
      title: "Chat In Context",
      text: "Chat on tasks in context to keep things organized",
      img: "/images/team3.webp"
    },
    {
      id: 16,
      title: "Unlimited Boards",
      text: "Easily manage any team, project, client or workflow",
      img: "/images/team4.webp",
    },
    {
      id: 17,
      title: "Assign Tasks",
      text: "Assign tasks and sub-tasks to promote ownership",
      img: "/images/team5.webp",
    },
    {
      id: 18,
      title: "Templates",
      text: "Get started in seconds with over +100 custom made templates",
      img: "/images/team6.webp",
    },
    {
      id: 19,
      title: "Kanban View",
      text: "Use kanban view to easily manage any workflow",
      img: "/images/team7.webp"
    },
    {
      id: 20,
      title: "Calendar View",
      text: "Use calendar view to easily track due dates and deliverables",
      img: "/images/team9.webp",
    },
    {
      id: 21,
      title: "Table View",
      text: "Track your team’s progress visually with Table view",
      img: "/images/team10.webp",
    },
    {
      id: 22,
      title: "Chat In Context",
      text: "Chat on tasks in context to keep things organized",
      img: "/images/team3.webp",
    },
    {
      id: 23,
      title: "Custom Views",
      text: "Create a bird-eye view for all of your team’s work",
      img: "/images/team11.webp"
    },
    {
      id: 24,
      title: "Integrations",
      text: "Any.do works with over +6000 apps to automate your work",
      img: "/images/team12.webp",
    },
    {
      id: 25,
      title: "Automations",
      text: "Auto assign tasks, due dates, update status and more",
      img: "/images/team13.webp",
    },
    {
      id: 26,
      title: "Custom fields",
      text: "Add custom fields to enrich your tasks with important context",
      img: "/images/team14.webp",
    },
    {
      id: 27,
      title: "Board notifications",
      text: "Customize board notifications to get only the updates you care about",
      img: "/images/team15.webp"
    },
    {
      id: 28,
      title: "Private Boards",
      text: "Managing sensitive information? We got you covered",
      img: "/images/team16.webp",
    },
    {
      id: 29,
      title: "Live Chat Support",
      text: "Get 24/7 support from our AI agents and customer support team",
      img: "/images/team17.webp",
    },
    {
      id: 30,
      title: "Import",
      text: "Instantly import your work from other tools automatically",
      img: "/images/team18.webp",
    },
    {
      id: 31,
      title: "Time Tracking",
      text: "Track time and view reports of your time from anywhere",
      img: "/images/team19.webp",
    },
    {
      id: 32,
      title: "Completed Tasks Report",
      text: "An easy way to keep track of who did what when",
      img: "/images/team20.webp",
    },
    {
      id: 33,
      title: "Gantt chart",
      text: "Streamline work, prioritize deadlines, and more with powerful drag&drop Gantt view",
      img: "/images/team21.webp",
    },
  ];

  return (
    <div className="main" style={{ backgroundColor: "white" }}>
      <div className="container py-5">
        <div className="row gy-3"> 
          {cards.map((card) => (
            <div
              key={card.id}
              className="col-lg-6 col-md-6 col-sm-12"
            >
              <div
                className={`card border-0 rounded-5 shadow-sm d-flex flex-column justify-content-between ${
                  card.dark ? "text-white bg-black" : ""
                }`}
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  minHeight: "340px",
                  overflow: "hidden",
                  position: "relative",
                  paddingBottom: "190px",
                }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>

                <img
                  src={card.img}
                  alt={card.title}
                  className="position-absolute bottom-0 start-50 translate-middle-x"
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "contain",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// get button

const GetStartedButton = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "16px 32px",
          fontSize: "18px",
          fontWeight: "bold",
          border: "none",
          borderRadius: "999px",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        Get Started. It's FREE →
      </button>
      <div
        style={{
          marginTop: "12px",
          color: "#6c757d",
          fontSize: "14px",
          fontWeight: "500",
          textTransform: "uppercase",
        }}
      >
        FREE FOREVER. NO CREDIT CARD.
      </div>
    </div>
  );
};

export { TabSwitch, MiddelSection, GetStartedButton };
