import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import Nav from "./Nav";

const Login = () => {
    const [state, setState] = useState({
        name: '',
        password: ''
    })

    const {name, password} = state //destucture values from state

    const handleChange = name => event => {
        setState({...state, [name]:event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        axios.post(`${process.env.REACT_APP_API}/login`, {name, password})
            .then(response => {
                console.log(response);
                // response will contain token and nanme
                // redirect to create page
                
            })
            .catch(error => {
                console.log(error.response);
                alert(error.response.error)
            })
    }

    return (
        <div className="container pb-5">
            <Nav />
            <br />
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input onChange={handleChange('name')} value={name} type="text" className="form-control" placeholder="Your Name" required/>
                </div>
                <div className="form-group">
                    <label className="text-muted">password</label>
                    <input onChange={handleChange('password')} value={password} type="password" className="form-control" placeholder="Your Password" required/>
                </div>
                <div>
                    <button className="btn btn-primary">
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login