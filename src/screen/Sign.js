import React, { useState,useContext } from 'react'
import axios from "axios";
import './sign.css'
import { useNavigate } from 'react-router-dom';
import { Context, server } from '../index.js';
function Signup(){
  const { isAuthenticated, setIsAuthenticated } =
    useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg,setErrormsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      await axios.post(
        `${server}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setIsAuthenticated(true);
      if(isAuthenticated){
        navigate('/log/home');
      }
    } catch (error) {
      console.log(error);
      setErrormsg(error.response.data.message);
      setIsAuthenticated(false);
    }
  }
    return (
      <div className='cony'>
          <div className='signscreen'>
          <form onSubmit={(e)=>{handleSubmit(e)}}>
              <h1>Welcome Bruhhh</h1>
              <input placeholder="Email bruh" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <input placeholder="Keep SHHH!" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              <button type="submit" className="signbutt">COME ONN</button>
              <h3>{errormsg}</h3>
          </form>
          </div>
      </div>
    )
  }

export default Signup