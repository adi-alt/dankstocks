import React, { useState } from 'react'
import './sign.css'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
function Signup(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [errormsg,setErrormsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((authUser)=>{
      window.localStorage.clear("logout");
      window.localStorage.setItem("isloggedin","true");
      window.localStorage.setItem("signdata","welcome back");
      navigate('/log/home');
      console.log(window.localStorage.getItem("isloggedin"));
      console.log(authUser);
    }).catch((error)=>{
      console.log(window.localStorage.getItem("isloggedin"));
      setErrormsg(helper(error.message));
      console.log(errormsg)
    });
  }
  function helper(str){
    const n = str.length;
    var bool = 0;
    var temp = "";
    for (let i = 0; i < n; i++) {
      const ele = str[i];
      if(bool && ele!==')')temp+=ele;
      if(ele==='('){
        bool = 1;
      }
      if(ele===')'){
        break;
      }
    }
    return temp;
  }
    return (
      <div className='cony'>
          <div className='signscreen'>
          <form onSubmit={(e)=>{handleSubmit(e)}}>
              <h1>Welcome Bruhhh</h1>
              <input placeholder="Email bruh" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <input placeholder="Keep SHHH!" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              <button type="submit" className="signbutt">COME ONN</button>
              <h4>{errormsg}</h4>
          </form>
          </div>
      </div>
    )
  }

export default Signup
