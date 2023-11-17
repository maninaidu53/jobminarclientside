// import { useState } from "react";
// import {Link, redirect} from 'react-router-dom'
// import axios from 'axios'
import { useHistory } from "react-router-dom";

function First(){
//     const navigate=useNavigate()
// return(b
//     <div>{navigate("/register")}</div>
// )
    // return <h1>hello world</h1>
    const history = useHistory();
    history.push("/register")
}

export default First