import React from 'react';
import "./LoginText.css";

function LoginText() {
    return (
        <div className="loginText">
            <hr />
            <h2>Waste Management</h2>
            <div className="loginText__text">
                <p>We all are responsible for it knowingly
                    or unknowingly. We cannot go back in
                    time machine and
                    change it like in movies. We have to
                    take steps andaware of the root cause
                    and try to make the
                    world as it was. We all experience the
                    change during lockdown when the
                    atmosphere was clean
                    and green.
                </p>
            </div>
            
            <a href="/" className="loginText__btn">Register Now</a>
        </div>
    )
}

export default LoginText;
