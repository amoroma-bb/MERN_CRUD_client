import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App'
import Create from './Create'
import SinglePost from './SinglePost'
import UpdatePost from './UpdatePost'
import Login from './Login'

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App/>} />
                <Route path="/create" element={<Create/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/post/:slug_param" element={<SinglePost/>} />
                <Route path="/post/update/:slug_param" element={<UpdatePost/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes