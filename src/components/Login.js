import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css'

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
        <form className="form" onSubmit={submit}>
        <p className="form-title">Sign in to your account</p>
         <div className="input-container">
           <input placeholder="Enter email" onChange={e => setEmail(e.target.value)} type="email" id="email" />
           <span>
           </span>
       </div>
       <div className="input-container">
           <input placeholder="Enter password" onChange={e => setPassword(e.target.value)} type="password" id="password" />
         </div>
          <button type="submit" class="submit">
         Sign in
       </button>
 
       <p className="signup-link">
         No account?
         <a href="">Sign up</a>
       </p>
    </form>
    );
}
