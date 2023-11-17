import { useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login(){
    const [data,setData]=useState({
        email:'',
        password:''
    })
    const navigate=useNavigate()
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandle=e=>{
        e.preventDefault()
        axios.post('http://localhost:3003/login',data)
        .then(res=>{console.log(res)
            if(res.data==="Success"){
                navigate('/home')
                
            }
        
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 vw-100">
            <div className="bg-white p-3 rounded w-45 m-3">
                <h2>Login</h2>
                <form onSubmit={submitHandle}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0" onChange={changeHandler}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input type="password" placeholder="Enter Password" autoComplete="off" name="password" className="form-control rounded-0" onChange={changeHandler}/>
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                    
                </form>
                <span>You don't have account? <Link to="/register">Register</Link></span>
            </div>
        </div>
    )
}

export default Login