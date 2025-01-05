import Gap from "../gap";
import logo from "/home/sankhya/Desktop/Coding/Web/conference-ticket-generator-main/Frontend/assets/images/logo-full.svg";

import ticket from "/home/sankhya/Desktop/Coding/Web/conference-ticket-generator-main/Frontend/assets/images/pattern-ticket.svg";
export default function SecondComponent(props) {
    return (
      <div className="container-fluid w-100 text-center min-vh-100 d-flex flex-column justify-content-center align-items-center text-light">
        {/* Logo at the top */}
        <img src={logo} alt="Conference Logo" className="my-5" />
  
        {/* Congratulations message */}
        <div className=" my-3" style={{ fontWeight: "700", fontSize: "3rem" }}>
          Congrats, <span className="text">{props.name}</span>! Your ticket is ready.
        </div>
  
        {/* Ticket email message */}
        <div className=" my-3">
          <h5>
            We've emailed your ticket to <strong>{props.email}</strong> and will
            send updates in the run-up to the event.
          </h5>
        </div>
  
        {/* Ticket Design */}
        <div className="w-100 ">
          <div
            className="container-fluid  ticket text-left  "
            style={{
              backgroundImage: `url(${ticket})`, // Add ticket background pattern
              backgroundSize: "cover",
            }}
          >
         
            {/* Logo inside the ticket */}
            <img
              src={logo}
              alt="Logo"
              className="mb-1 my-2 "
              style={{ width: "50%" }}
            />
  
            {/* Event details */}
            <div className="mx-4 ">
              <h6 style={{ fontSize: "1rem" }}>Jan 31, 2025 / Austin, TX</h6>
            </div>
  
            {/* User information */}
            <div className="my-5 d-flex  container-fluid ">
              <div className="">
                {/* Avatar (optional) */}
                {props.avatar ? (
                  <img
                    src={URL.createObjectURL(props.avatar)}
                    alt="Avatar"
                    className="rounded-circle"
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                  />
                ) : (
                  <div
                    className="rounded-circle bg-secondary"
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                    }}
                  >
                    ?
                  </div>
                )}
              </div>
  
              {/* User details */}
              <div className="mx-3">
                <h3>{props.name}</h3>
                <h6>{props.github}</h6>
              </div>
            </div>
          </div>
        </div>
        <Gap gap={5} />
      </div>
    );
  }
  