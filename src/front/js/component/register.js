import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {store, actions} = useContext(Context)
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
     if (email !=="" && password !=="") {
       actions.registerUser(email,password)
       navigate("/login")
      } else {
        alert("Please complete all fields on the form");
    }
  };

  return (
    <>
    <div className="d-flex justify-content-center text-center mt-5 align-items-center">
      <p className="d-flex justify-content-center"></p>
      <form onSubmit={handleRegister} id="register1">
        <label className="mb-3">Provide Email and Password</label>
        <div className="mb-3 row">
          <label
            htmlFor="exampleFormControlInput2"
            className=" col-sm-4 col-form-label"
          >
            Email
          </label>
          <div className="col-md-8">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-4 col-form-label">
            Password
          </label>
          <div className="col-md-8">
            <input
              type="password"
              className="form-control"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary rounded-pill" type="submit" form="register1">
            Register
          </button>
        </div>
      </form>
      </div>
    </>
  );
};

export default Register;