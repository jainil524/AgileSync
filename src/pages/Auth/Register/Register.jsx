import React, { useState, useContext } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import Input from '../../../components/Form/InputBox/Input'
import Button from '../../../components/UI/Button/Button';
import Form from '../../../components/Form/Form';
import fetchRequest from '../../../utils/fetchAPIRequest';
import useFieldValidator from '../../../hooks/useFieldValidator';
import {UserContext} from '../../../contexts/UserContext';
import '../css/Login.css';


function Login() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [isfetching, setIsFetching] = useState(false);
    
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['token']);

    

    function handleSubmit(e, setFormError) {
        e.preventDefault();

        let [{ name }, { email }, { password }] = useFieldValidator([{ name: "name", value: Name }, { name: "email", value: Email }, { name: "password", value: Password }]);

        let isNameValid = name == true;
        let isEmailValid = email == true;
        let isPasswordValid = password == true;

        setNameError(name == true?null:name);
        setEmailError(email == true?null:email);
        setPasswordError(password == true?null:password);

        if(isNameValid != true || isEmailValid != true || isPasswordValid != true){
            return;
        }

        setIsFetching(true);
        // If validation passes, proceed with form submission
        const p = fetchRequest("https://backend.agilesync.co/register", { method: "POST", body: JSON.stringify({ name: Name, email:Email, password:Password }), headers: { "Content-Type": "application/json" } });
        p.then((data) => {
            
            if(data.status !== "success"){
                setFormError(data.error);
            }else{
                setCookie('token', data.token, { path: '/' });
                let data2 = {
                    token: data.token,
                    email: Email
                };

                localStorage.setItem("user", JSON.stringify(data2));

                setUser(data2);
                navigate("/app/dashboard");
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

                    <h2 className='Title'>AglieSync Register</h2>
                    <Form Submitfun={handleSubmit}>
                        <div>
                            <Input label="Name" id="name" type="text" placeholder="Enter your Name" change={setName} error={nameError} classes='input-box mandatory' />

                            <Input label="Email" id="email" type="email" placeholder="Enter your email" change={setEmail} error={emailError} classes='input-box mandatory' />
                        </div>
                        <div>
                            <Input label="Password" id="password" type="password" placeholder="Enter your password" change={setPassword} error={passwordError} classes='input-box mandatory' />
                        </div>
                        <div>
                            <Button title="Register" hasLoading={isfetching}/>
                        </div>
                    </Form>

                    <div>
                        Already have an account? <Link to="/Login">Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
