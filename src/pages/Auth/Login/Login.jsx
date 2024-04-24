import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import Input from '../../../components/Form/InputBox/Input'
import Button from '../../../components/UI/Button/Button'
import Form from '../../../components/Form/Form';
import fetchRequest from '../../../utils/fetchAPIRequest';
import useFieldValidator from '../../../hooks/useFieldValidator';
import { UserContext } from '../../../contexts/UserContext';

import '../css/Login.css';



function Login() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const { setUser } = useContext(UserContext);
    const [cookies, setCookie] = useCookies(['token']);
    const [isfetching, setIsFetching] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e, setFormError) {
        e.preventDefault();

        let [{ email }, { password }] = useFieldValidator([{ name: "email", value: Email }, { name: "password", value: Password }]);

        console.log(email, password, typeof email, typeof password);

        let isEmailValid = email == true;
        let isPasswordValid = password == true;

        setEmailError(email == true ? null : email);
        setPasswordError(password == true ? null : password);

        if (isEmailValid != true || isPasswordValid != true) {
            return;
        }

        setIsFetching(true);
        // If validation passes, proceed with form submission
        const p = fetchRequest("https://backend.agilesync.co/login", { method: "POST", body: JSON.stringify({ email: Email, password: Password }), headers: { "Content-Type": "application/json" } });
        p.then((data) => {
            console.log(data);
            if (data.status !== "success") {
                setFormError(data.message);
            } else {
                setCookie('token', data.token, { path: '/' });
                let data2 = {
                    token: data.token,
                    email: Email,
                };
                localStorage.setItem("user", JSON.stringify(data2));
                setUser(data2);
                if(data.role === "faculty"){
                    navigate("/app/facultydashboard");
                }else if(data.role === "user"){
                    navigate("/app/dashboard");
                }

            }
            setIsFetching(false);
        }).catch((err) => {
            console.log(err);
        });

    }

    return (
        <>
            <div className="Login-wrapper">
                <div className="LoginForm">

                    <h2 className='Title'>AglieSync Login</h2>
                    <Form Submitfun={handleSubmit}>
                        <div>
                            <Input label="Email" id="email" type="email" placeholder="Enter your email" change={setEmail} error={emailError} classes='input-box mandatory' />
                        </div>
                        <div>
                            <Input label="Password" id="password" type="password" placeholder="Enter your password" change={setPassword} error={passwordError} classes='input-box mandatory' />
                        </div>
                        <div>
                            <Button title="Login" hasLoading={isfetching} />
                        </div>
                    </Form>

                    <div>
                        Don't have account? <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
