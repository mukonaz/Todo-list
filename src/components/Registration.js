import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.get(`http://localhost:8000/users?email=${email}`);
            if (res.data.length > 0) {
                alert('User already exists');
            } else {
                await axios.post('http://localhost:8000/users', { email, password });
                localStorage.setItem('user', JSON.stringify({ email }));
                navigate('/home', { state: { id: email } });
            }
        } catch (e) {
            console.log(e);
            alert('An error occurred');
        }
    }

    return (
        <div className="container" style={{ marginTop: "30vh" }}>
            <form className="modal-content" onSubmit={submit}>
                <h2>Create your account</h2>
                <p>Welcome</p>
                <div className='label-input'>
                    <label htmlFor="email">Email address :</label>
                    <input onChange={e => setEmail(e.target.value)} type="email" id="email" />
                </div>
                <div className='label-input'>
                    <label htmlFor="password">Password :</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" id="password" />
                </div>
                <button type="submit">Register</button>
                <p>Have an account?<Link to='/login'>Login</Link></p>
            </form>
        </div>
    );
}
