import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";

const SignUp = () => {
  const [isPassShow, setIsPassShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email:"",
    password: ""

  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:1337/api/auth/local/register";

    try {
      setIsLoading(true);
      if (user.username && user.password && user.email) {
        const res = await axios.post(url, user);
        console.log("logon res = >", res);

        if (res.data) {
          setIsLoading(false);
          toast.success("Signup Successfully");
        }
        // navigate("/home");
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong");
    }
  };

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
              <ToastContainer />

              <form className="mt-5" onSubmit={handleSubmit}>
              <input
                  type="text"
                  placeholder="Enter username"
                  className="form-control mb-4"
                  required
                  autoComplete="off"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Enter email"
                  className="form-control mb-4"
                  required
                  autoComplete="off"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <div className="input-with-icon">
                  <input
                    type={isPassShow ? "text" : "password"}
                    placeholder="Enter password"
                    className="form-control mb-4 pe-5"
                    required
                    autoComplete="off"
                    name="password"
                    value={user.password}
                    onChange={handleChange}                  />
                  <button
                    type="button"
                    onClick={() => setIsPassShow(!isPassShow)}
                  >
                    {isPassShow ? <IoEyeSharp /> : <BsEyeSlashFill />}
                  </button>
                </div>

                <button className=" auth-btn" type="submit">
                {isLoading && (
                    <Spinner
                      className="me-2"
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}
                  
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

