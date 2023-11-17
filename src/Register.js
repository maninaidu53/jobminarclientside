import { useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function SignUp(){
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
        axios.post('http://localhost:3003/register',data)
        .then(res=>{console.log(res)
        navigate('/login')
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 vw-100">
            <div className="bg-white p-3 rounded w-45 m-3">
                <h2>Register</h2>
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
                    <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                    
                </form>
                <span>Already have an Account? <Link to="/login">Login</Link></span>
            </div>
        </div>
    )
}

export default SignUp