import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerState;
  const dispatch = useDispatch();

  function register() {
    if (password !== cpassword) {
      alert("Passwords don't match");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <section className="vh-200" style={{ backgroundColor: "#ADC4CE" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              {loading && <Loading />}
              {success && <Success success="User Registered Successfully" />}
              {error && <Error error="Email Already Registered" />}
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">

                        <span className="h1 fw-bold mb-0">Register</span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                        Create an account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="name"
                          className="form-control form-control-lg"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="cpassword"
                          className="form-control form-control-lg"
                          value={cpassword}
                          onChange={(e) => setCPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="cpassword">
                          Confirm Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={register}
                        >
                          Register
                        </button>
                      </div>

                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Already have an account? <a href="/login" style={{ color: "#393f81" }}>Login here</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
