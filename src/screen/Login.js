import React,{useState} from 'react'
import './login.css'
import vidbg from './mainbg.mp4'
import Sign from './Sign';
import Lottie from 'lottie-react';
import Icon from '../images/91078-crypto-blob.json'
import Stock from './stocks.json';
import Signup from './Signup';
function Login(){
    const [signIn,setsignIn] = useState(false);
    const [newBie,setnewBie] = useState(false);
  return (
    <div className="login">
        <video src={vidbg} autoPlay loop muted/>
        {/* <div className="loginbg">
        <Lottie animationData={Icon} style={{width:'100px'}}/>
            <h1 style={{color:'#1990ff'}}>DankSTocKS</h1>
        </div> */}
        <div className="nav-container" style={{justifyContent:'flex-start',paddingLeft:'2%'}}>
            <div className="logo-container" > 
            <Lottie animationData={Icon} style={{width:'100px'}}/>
            <div className="adi2">
                <a href="/">
                    DankSTocKS
                </a>
            </div>
        <div className="blender">
                h
        </div>
            </div>
        </div>
        <div className='loginbody'>
        <div className='mb'>
                <Lottie animationData={Stock}/>
            </div>
            {(signIn || newBie)?(
                <>
                {signIn?(<Sign/>):(<Signup/>)}
                </>
            ):(
                <>
                <div className='cont' style={{color:'#21292f'}}>
                <h1>
                    Welcome Back King!! Let The GrinDD Seshhh Beginn
                </h1>
                <h3>Enter The login Info Bruh if not then make it fasssss!!!!!</h3>
                <div className="logininput">
                    <form>
                        <button onClick={()=> setnewBie(true)}
                            className="NewB">NewBie</button>
                        <button onClick={()=> setsignIn(true)}
                            className="logininbutton">come on</button>
                    </form>
                </div>
                </div>
                </>
            )}
        </div>
    </div>
  )
}

export default Login;



                