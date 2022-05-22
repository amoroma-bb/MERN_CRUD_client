import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Nav from "./Nav";

const SinglePost = () => {
    const { slug_param } = useParams()
    const [post, setPost] = useState('')
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/post/${slug_param}`)
            .then(response => setPost(response.data))
            .catch(err => alert('Error loading single post'))
    }, [])
    // console.log(post);
    return (
        <div className="container pb-5">
            <Nav />
            <br />
            <h1>{post.title}</h1>
            <p className="lead">{post.content}</p>
            <p>
                Author <span className="badge">{post.user}</span>
                <span className="badge">Published on {new Date(post.createdAt).toLocaleString()}</span>
            </p>
        </div>
    )
}

export default SinglePost