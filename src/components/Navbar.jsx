import React, { useState, useEffect } from 'react';
import { Button} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Lottie from 'lottie-react';
import Icon from '../images/91078-crypto-blob.json'
import './navbar.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 850) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
      <Lottie animationData={Icon} style={{width:'100px'}}/>
        <div className="adi">
          <a href="/log/home">
            DankSTocKS
          </a>
        </div>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
        <div className="babu" style={{ color: 'black' }}>
          <ul>
            <li>
              <a href="/log/home" style={{ fontSize: '2vh' }} >Homie Area</a>
            </li>
            <li>
              <a href="/log/cryptocurrencies" style={{ fontSize: '2vh' }}>Cryptocurrencie</a>
            </li>
            <li>
              <a href="/log/news" style={{ fontSize: '2vh' }}>Latest Buzzz</a>
            </li>
            <li>
              <a href='/'>
                <button onClick={()=>{window.localStorage.setItem("logout","true")}} style={{backgroundColor:'#1990ff',border:'none',borderRadius:'5px',height:'40px',color:'white',fontWeight:'bolder'}}>YOu WanNA Go!?</button>
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="blender">
      </div>
    </div>
  );
};

export default Navbar;
