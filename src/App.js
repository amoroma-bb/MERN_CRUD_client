import Nav from "./Nav";
import axios from "axios";
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    axios.get(`${process.env.REACT_APP_API}/posts`)
      .then(response => {
        // console.log(response.data);
        setPosts(response.data)
      })
      .catch(err => alert('Err fetching posts'))
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const deleteConfirm = (slug) => {
    let answer = window.confirm('Are you sure you want to delete this post?')
    if(answer){
      deletePost(slug)
    }

  }

  const deletePost = (slug) =>{
    axios.delete(`${process.env.REACT_APP_API}/post/${slug}`)
      .then(response => {
        alert(response.data.message)
        fetchPosts()
      })
      .catch(error => alert('Error deleting post'))
  }

  return (
    <div className="container pb-5">
      <Nav />
      <h1>
        MERN CRUD
      </h1>
      <br />
      {
        posts.map((post, i) => {
          return (
            <div className="row" key={post._id} style={{ borderBottom: '1px solid silver' }}>
              <div className="col pt-3 pb-2">
                <div className="row">
                  <div className="col-md-10">
                    <Link to={`/post/${post.slug}`}>
                      <h2>{post.title}</h2>
                    </Link>
                    <p className="lead">{post.content}</p>
                    <p>
                      Author <span className="badge">{post.user}</span>
                      <span className="badge">Published on {new Date(post.createdAt).toLocaleString()}</span>
                    </p>
                  </div>
                  <div className="col-md-2">
                    <Link to={`/post/update/${post.slug}`} className="btn btn-sm btn-outline-warning">
                      Update
                    </Link>
                    <button onClick={() => deleteConfirm(post.slug)} className="btn btn-sm btn-outline-danger ml-1">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>)
        })
      }
    </div>
  )
}

export default App;
