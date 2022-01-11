import React from "react";
import "./Register.css";


function Login() {
    return(
        <div className="login">
            <div className="header__login">
                Account Register
            </div>
            <div className="form__login">
                <form>
                    Email <input className="input_login">
                    </input>
                    Username <input className="input_login">
                    </input>
                    Password
                    <input className="input_login" type="password">
                    </input>
                    <button className="button_login" type="submit">Login</button>
                </form>         
        </div>
        </div>

    )
} 

export default Login;
