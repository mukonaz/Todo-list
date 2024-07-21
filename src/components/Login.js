import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'

export const Login = () => {


    const history=useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function submit(e){
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})

                }

                else if(res.data=="notexist"){
                    alert("user have not sign up")

                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e)
            })
        }
        catch (e){
            console.log(e)
            
        }
    }
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/home')
    }
    return (
        <div className="container" style={{ marginTop: "10vh" }}>
            <form >
                <h2>Login to your account</h2>
                <p>Welcome back!</p>
                <div>
                    <label htmlFor="email" >Email address :</label>
                    <input onChange={e => { setEmail(e.target.value) }} type="email" id="email" />
                </div>
                <div >
                    <label htmlFor="password" >Password :</label>
                    <input onChange={e => { setPassword(e.target.value) }} type="password" id="password" />
                </div>
                <button onClick={handleLogin} >LOG IN</button>

                <p style={{ marginTop: "2vh" }}>Don't an account?<Link to={'/registration'}>Registration</Link></p>



            </form>
        </div>
    )
}
