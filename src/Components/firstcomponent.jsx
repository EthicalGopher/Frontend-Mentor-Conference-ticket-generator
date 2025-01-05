import Gap from "../gap";
import React, { useState } from "react";
import SecondComponent from "./secondcomponent";
import logoimage from "/home/sankhya/Desktop/Coding/Web/conference-ticket-generator-main/Frontend/assets/images/icon-upload.svg";
import logo from "/home/sankhya/Desktop/Coding/Web/conference-ticket-generator-main/Frontend/assets/images/logo-full.svg";

export default function FirstComponent() {
    const [handleClick, setHandleClick] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [github, setGithub] = useState("");
  
    const isFormComplete =
      avatar && fullname.includes(" ") && email.includes("@" && ".com") && github;
    const handleAvatar = (e) => {
      setAvatar(e.target.files[0]);
    };
    function Clicked() {
      setHandleClick(true);
    }
    return (
      <main>
        {handleClick ? (
          <SecondComponent
            name={fullname}
            email={email}
            github={github}
            avatar={avatar}
          />
        ) : (
          <div className="container text-center ">
            <div className="py-5 my-5">
              <img src={logo} alt="Logo" />
            </div>
            <h1 className="" style={{ fontWeight: "700",fontSize:"3em" }}>
              Your Journey to Coding Conf 2025 Starts Here!
            </h1>
            <h3 className="my-5">
              Secure your spot at next year's biggest coding conference.
            </h3>
            <div className="w-100 d-flex flex-column justify-content-center align-items-center  text-left w-75 ">
              <form onSubmit={(e) => e.preventDefault()}>
                <div>
                  <div className="my-3">Upload Avatar</div>
  
                  <div
                    className=" rounded text-center p-5 inputbg "
                    style={{
                      borderStyle: "dashed",
                      borderWidth: "2px",
                      borderColor: "hsl(245, 19%, 35%)",
                      
                    }}
                  >
                    <label
                      htmlFor="avatar"
                      className="p-3 rounded"
                      style={{
                        backgroundColor: "hsl(245, 19%, 35%)",
                        cursor: "pointer",
                      }}
                    >
                      {avatar ? (
                        <img
                          src={URL.createObjectURL(avatar)}
                          alt="avatar"
                          width={"55"}
                          height={"55"}
                        />
                      ) : (
                        <img src={logoimage} alt="avatar" />
                      )}
                    </label>
                    <h6 className="my-2">Drag and drop or click to upload</h6>
                  </div>
                  <p className="my-2" style={{ fontSize: "0.6rem" }}>
                    <span className="border rounded-circle px-1">i</span> Upload
                    your photo (JPG or PNG, max size: 500KB).
                  </p>
                  <br />
                  <input
                    type="file"
                    name="avatar"
                    onChange={handleAvatar}
                    id="avatar"
                    accept="image/*"
                    style={{ display: "none" }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="fullname" className="form-label">
                    Full Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    id="fullname"
                    className="text-white inputbg my-2 w-100 py-3 border-light"
                    style={{ borderRadius: "20px" }}
                    required
                  />
                </div>
                {fullname.includes(" ")||!fullname?"":<p className="Error mx-3">
                    Invalid full name
                </p>}
                
                <div className="my-2">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <br />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    className="text-white inputbg my-1 w-100 py-3 border-light"
                    style={{ borderRadius: "20px" }}
                    placeholder="example@email.com"
                    required
                  />
                  {email.includes("@" && ".com") || !email ? (
                    ""
                  ) : (
                    <p className="Error">Invalid email address</p>
                  )}
                </div>
                <div>
                  <label htmlFor="github" className="form-label">
                    Github Username
                  </label>
                  <br />
                  <input
                    type="text"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    name="github"
                    id="github"
                    className="text-white inputbg my-2 w-100 py-3 border-light"
                    style={{ borderRadius: "20px" }}
                    required
                    placeholder="@yourusername"
                  />
                </div>
                <div>
                  <button
                    to={isFormComplete ? "/second" : "#"}
                    className={`btn w-100 p-3 my-3 ${
                      isFormComplete ? "" : "disabled"
                    }`}
                    onClick={Clicked}
                    style={{
                      backgroundColor: isFormComplete
                        ? "hsl(7, 88%, 67%)"
                        : "gray",
                      borderRadius: "15px",
                      fontWeight: "600",
                      pointerEvents: isFormComplete ? "auto" : "none",
                    }}
                  >
                    Generate My Ticket
                  </button>
                </div>
              </form>
            </div>
            <Gap gap={5} />
          </div>
        )}
      </main>
    );
  }