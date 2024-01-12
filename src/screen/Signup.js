import React, { useState,useContext } from 'react'
import './sign.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Context,server } from '../index';
function Signup(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg,setErrormsg] = useState("")
  const { isAuthenticated, setIsAuthenticated, setLoading } =
    useContext(Context);
  const navigate = useNavigate();
  const handleSubmit = async(e) =>{
    try {
      const { data } = await axios.post(
        `${server}/users/register`,
        {
          name,
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
      console.log(data)
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      setIsAuthenticated(false);
      setErrormsg(error.response.data.message)
      setLoading(false);
    }
  }

    return (
      <div className='cony'>
          <div className='signscreen'>
          <form onSubmit={(e)=>{handleSubmit(e)}}>
              <h1>Welcome Bruhhh</h1>
              <input placeholder="Name" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
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