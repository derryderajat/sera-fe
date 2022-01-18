import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";

function Register() {
  const { REACT_APP_APP_DB_URI } = process.env;
  let navigate = useNavigate();
  console.log(REACT_APP_APP_DB_URI.concat("/api/accounts"));
  let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeUser = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      const newAccount = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      };
      const response = await fetch(
        REACT_APP_APP_DB_URI.concat("/api/accounts"),
        newAccount
      );

      const data = await response.json();

      if (data.status === "ok") {
        navigate("/login");
        setEmail("");
        setUsername("");
        setPassword("");
        setMessage("Account Created");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(
    JSON.stringify({
      email,
      username,
      password,
    })
  );
  return (
    <div className="login">
      <div className="header__login">Account Register</div>
      <div className="form__login">
        <form onSubmit={onSubmit}>
          Email{" "}
          <input
            className="input_login"
            name="email"
            onChange={onChangeEmail}
          ></input>
          Username{" "}
          <input
            className="input_login"
            name="username"
            onChange={onChangeUser}
          ></input>
          Password
          <input
            className="input_login"
            type="password"
            name="password"
            onChange={onChangePassword}
          ></input>
          <input className="button_login" type="submit" value={"Register"} />
          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    </div>
  );
}

export default Register;
