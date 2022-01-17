import React, { useEffect, useState } from "react";
import "./Register.css";
import axios from "axios";

function Login() {
  let [acc, setAcc] = useState({
    email: null,
    username: null,
    password: null,
  });
  const onChangeField = (e) => {
    const { name, value } = e.target;
    setAcc((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const newAccount = {
      email: acc.email,
      username: acc.username,
      password: acc.password,
    };
    axios
      .post("http://localhost:8000/api/accounts", newAccount)
      .then((res) => console.log(res.data));

    setAcc({ email: null, username: null, password: null });
  };
  return (
    <div className="login">
      <div className="header__login">Account Register</div>
      <div className="form__login">
        <form>
          Email{" "}
          <input
            className="input_login"
            name="email"
            onChange={onChangeField}
          ></input>
          Username{" "}
          <input
            className="input_login"
            name="username"
            onChange={onChangeField}
          ></input>
          Password
          <input
            className="input_login"
            type="password"
            name="password"
            onChange={onChangeField}
          ></input>
          <button className="button_login" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
