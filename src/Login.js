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
                    UserName <input className="input_login">
                    </input>
                    PassWord
                    <input className="input_login" type="password">
                    </input>
                    <button className="button_login" type="submit">Login</button>
                    <div className="info">
                <div className="jarak">Lupa Password?</div>
                <div className="jarak">Buat Akun</div>
                </div>
                </form>         
        </div>
        </div>

    )
} 

export default Login;
