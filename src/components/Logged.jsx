import React,{ useContext} from 'react'
import {  Navigate, Outlet } from 'react-router-dom';
import Login from '../screen/Login';
import { Context} from '../index.js';
function Logged(){
    const { isAuthenticated } =
    useContext(Context);
    console.log(isAuthenticated);
    if(isAuthenticated )return <Login/>
    return isAuthenticated ?<Outlet/>:<Navigate to={<Login/>}/>;
}
export default Logged;