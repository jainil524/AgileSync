// Login.jsx
import React, { useState, useContext } from 'react';
import { useNavigate,Link } from 'react-router-dom';

import Input from '../../../components/Form/InputBox/Input'
import SubmitButton from '../../../components/Form/SubmitButton/SubmitButton';
import Form from '../../../components/Form/Form';
import fetchRequest from '../../../utils/fetchAPIRequest';
import useFieldValidator from '../../../hooks/useFieldValidator';
import {UserContext} from '../../../contexts/UserContext';
import { useEffect } from 'react';
import '../css/Login.css';

function Login() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        let userDetails = { username: Email.split("@")[0], email: Email}
        localStorage.setItem("user",userDetails.username);
        setUser(userDetails);
    }, [Email]);

    function handleSubmit(e, setFormError) {
        e.preventDefault();

        let [{ email }, { password }] = useFieldValidator([{ name: "email", value: Email }, { name: "password", value: Password }]);

        console.log(email,password,typeof email,typeof password);

        let isEmailValid = email == true;
        let isPasswordValid = password == true;

        setEmailError(email == true?null:email);
        setPasswordError(password == true?null:password);

        if(isEmailValid != true || isPasswordValid != true){
            return;
        }


        // If validation passes, proceed with form submission
        const p = fetchRequest("https://backend.agilesync.co/login", { method: "POST", body: JSON.stringify({ email:Email, password:Password }), headers: { "Content-Type": "application/json" } });
        p.then((data) => {
            
            if(data.error){
                setFormError(data.error);
            }else{
                navigate("/app");
            }


        }).catch((err) => {
            console.log(err);
        });


    }

    return (
        <>
            <div className="Login-wrapper">
                <div className="LoginForm">

                    <h2 className='Title'>AglieSync Login</h2>
                    <Form actionUrl="http://localhost:3000/login" method="post" Submitfun={handleSubmit}>
                        <div>
                            <Input label="Email" id="email" type="email" placeholder="Enter your email" change={setEmail} error={emailError} classes='input-box mandatory' />
                        </div>
                        <div>
                            <Input label="Password" id="password" type="password" placeholder="Enter your password" change={setPassword} error={passwordError} classes='input-box mandatory' />
                        </div>
                        <div>
                            <SubmitButton title="Login"/>
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
