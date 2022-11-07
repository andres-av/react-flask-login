import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions} = useContext(Context)
	return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container">
        <div>
          <Link to="/" className="navbar-brand mb-0 h1 text-light">Authentication System</Link>
        </div>
        <div className="d-flex">
          <div className="me-2">
            {store.authenticated === true ? (
              <Link to="/">
                <button className="btn btn-secondary rounded-pill" onClick={actions.logout}>
                  Logout
                </button>
              </Link>
            ) : (
				<>
			  <Link to="/register">
				<button className="btn btn-success rounded-pill">Register</button>
			  </Link>
              <Link to="/login">
                <button className="btn btn-primary rounded-pill">Login</button>
              </Link>
			  </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
