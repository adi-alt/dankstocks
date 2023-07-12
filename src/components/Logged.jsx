import React from 'react'
import {  Navigate, Outlet } from 'react-router-dom';
import Login from '../screen/Login';
function Logged(){
    const user = window.localStorage.getItem("isloggedin");
    console.log(window.localStorage.getItem("isloggedin"));
    const log = window.localStorage.getItem("logout");
    if(log)return <Login/>
    return user?<Outlet/>:<Navigate to={<Login/>}/>;
}
export default Logged;