import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "../styles.css";

function Authenticate() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="flex flex-row items-center mx-50">
      <div className="flex-1 text-center">
        <img
          src="https://i.imgur.com/P3Vm1Kq.png"
          alt="Instagram Screenshots"
          className="w-24 mt-24"
        />
      </div>
      <div className="flex-1">
        {active === "login" ? <Login /> : <Signup />}

        <div className="border border-gray-300 p-20 mx-30 my-13 text-center">
          <span className="font-medium text-base">
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={handleChange}
                  className="font-bold forced-colors: text-blue-500 hover:text-blue-600"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Have an Account?
                <button
                  className="font-bold text-blue-500 hover:text-blue-600"
                  onClick={handleChange}
                >
                  Sign Up
                </button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authenticate;
