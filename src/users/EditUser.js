import React, { useEffect, useState } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

export default function Edituser() {
    let navigate =useNavigate()

    const {id}=useParams()


    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })

    const{name,username,email}=user
    
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    useEffect( ()=>{
        loadUser()

    },[]);

    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.put(`http://fullstack-javaspringboot-env.eba-bbmfskxq.us-east-2.elasticbeanstalk.com/user/${id}`,user)
        navigate("/")
    };

    const loadUser = async()=>{
        const result = await axios.get(`http://fullstack-javaspringboot-env.eba-bbmfskxq.us-east-2.elasticbeanstalk.com/user/${id}`)
        setUser(result.data)
    }

  return <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-centre m-4">Edit User</h2>

            <form onSubmit={(e)=>onSubmit(e)}> 
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                    Name
                </label>
                <input
                type={"text"}
                className="form-control"
                Placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                    Username
                </label>
                <input
                type={"text"}
                className="form-control"
                Placeholder="Enter your Username"
                name="username"
                value={username}
                onChange={(e)=>onInputChange(e)}
                />
            </div><div className="mb-3">
                <label htmlFor="E-mail" className="form-label">
                    E-mail
                </label>
                <input
                type={"text"}
                className="form-control"
                Placeholder="Enter your E-mail"
                name="email"
                value={email}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <button type="submit" className="btn btn-outline-primary">
                Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to ="/">
                Cancel
            </Link>
            </form>

        </div>
    </div>
  </div> 
  
}