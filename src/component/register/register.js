import { useState } from "react";
import axios from "axios"

function Register () {
    const [name,setName]= useState(null);
    const [email,setEmail]= useState(null);
    const [password,setPassword]= useState(null);
    const [error,seterror] =useState(null)
    const typeChangeName = (e) =>{
        setName(e.target.value)
    }
    const typeChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const typeChangePassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleClick =()=>{
      axios.post("http://localhost:3001/user",{
        userName:name,
        email:email,
        password:password
      })
      .then((result)=>{
        console.log(result.data)
      })
      .catch((err)=>{
        seterror(err.response.data.error.message);
        console.log(err.response.data.error.message)
       
      })
    }
    return ( 
        <div>
            {error && <div>{error}</div>}
            <input type="text" onChange={typeChangeName} />
            <input type="text" onChange={typeChangeEmail} />
            <input type="possword" onChange={typeChangePassword}/>
            <button onClick={handleClick}>login</button>
        </div>
     );
}

export default Register;