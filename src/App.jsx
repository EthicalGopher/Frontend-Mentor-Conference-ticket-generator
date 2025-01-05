
import React, { useState } from "react";
import "./App.css";
import Gap from "./gap";
import FirstComponent from "./Components/firstcomponent";




export default function App() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <main className="container d-flex flex-column justify-content-center align-items-center text-light">
        {/* <SecondComponent /> */}
        <FirstComponent />
      </main>
    </div>
  );
}
