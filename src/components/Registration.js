import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/registration", {
                email, password
            })
            .then(res => {
                if (res.data === "exist") { // Use === for comparison
                    alert("user already exists");
                    navigate("/home", { state: { id: email } });
                } else if (res.data === "notexist") { // Use === for comparison
                    navigate("/home", { state: { id: email } });
                }
            })
            .catch(e => {
                alert("wrong details");
                console.log(e);
            });
        } catch (e) {
            console.log(e);
        }
    }

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div className="container" style={{ marginTop: "10vh" }}>
            <form>
                <h2> Create your account</h2>
                <p>Welcome </p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address :</label>
                    <input onChange={e => { setEmail(e.target.value) }} type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password :</label>
                    <input onChange={e => { setPassword(e.target.value) }} type="password" className="form-control" id="password" />
                </div>
                <button type="button" onClick={handleLogin}>LOG IN</button>
                <p style={{ marginTop: "2vh" }}>Have an account?<Link to={'/login'}>Login</Link></p>
               
            </form>
        </div>
    );
}
