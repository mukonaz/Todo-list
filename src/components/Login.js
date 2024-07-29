import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.get(`http://localhost:8000/users?email=${email}&password=${password}`);
            if (res.data.length > 0) {
                localStorage.setItem('user', JSON.stringify({ email }));
                navigate('/home', { state: { id: email } });
            } else {
                alert('Wrong details or user does not exist');
            }
        } catch (e) {
            console.log(e);
            alert('An error occurred');
        }
    }

    return (
        <div className="container" style={{ marginTop: "30vh" }}>
            <form className="modal-content" onSubmit={submit}>
                <h2>Login to your account</h2>
                <p>Welcome back!</p>
                <div className='label-input'>
                    <label htmlFor="email">Email address :</label>
                    <input className='login-inputs' onChange={e => setEmail(e.target.value)} type="email" id="email" />
                </div>
                <div className='label-input'>
                    <label htmlFor="password">Password :</label>
                    <input className='login-inputs' onChange={e => setPassword(e.target.value)} type="password" id="password" />
                </div>
                <button className='login-buttons' type="submit">LOG IN</button>
                <p>Don't have an account?<Link to='/registration'>Register</Link></p>
            </form>
        </div>
    );
}
