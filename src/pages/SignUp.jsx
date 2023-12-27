import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [isPassShow, setIsPassShow] = useState(false);

  return (
    <div className="cx-auth-main">
      <div className="row m-0 p-0">
        <div className="col-md-8 m-0 p-0">
          <div className="left-wrapper">
            <div className="">
              <img src={logo} alt="" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                ex nulla sed id sint dolorum nam officia corrupti a numquam
                quis, amet, incidunt iure eos harum totam in inventore deserunt.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 m-0 p-0">
          <div className="righ-wrapper">
            <div className="inner">
              <h3>Sign Up</h3>
              <hr />

              <form className="mt-5">
              <input
                  type="text"
                  placeholder="Enter username"
                  className="form-control mb-4"
                  required
                  autoComplete="off"
                />
                <input
                  type="email"
                  placeholder="Enter email"
                  className="form-control mb-4"
                  required
                  autoComplete="off"
                />
                <div className="input-with-icon">
                  <input
                    type={isPassShow ? "text" : "password"}
                    placeholder="Enter password"
                    className="form-control mb-4 pe-5"
                    required
                    autoComplete="off"
                    name="password"
                  />
                  <button
                    type="button"
                    onClick={() => setIsPassShow(!isPassShow)}
                  >
                    {isPassShow ? <IoEyeSharp /> : <BsEyeSlashFill />}
                  </button>
                </div>

                <button className=" auth-btn" type="submit">
                  Signup
                </button>
                <div className="text-center mt-2">or</div>
                <div className="text-center mt-2">
                  Click here for <Link to="/">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

