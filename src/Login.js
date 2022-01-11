import React from "react";
import "./Login.css";


function Login() {
    return(
        <div className="login">
            <div className="header__login">
                Account Login
            </div>
            <div className="form__login">
                <form>
                    Username <input className="input_login">
                    </input>
                    Password
                    <input className="input_login" type="password">
                    </input>
                    {/* <Link to="Home"> */}
                    <button className="button_login" type="submit">Login</button>
                    {/* </Link> */}
                    <div className="info">
                <div className="jarak">Buat Akun</div>
                </div>
                </form>         
        </div>
        </div>

    )
} 

export default Login;
