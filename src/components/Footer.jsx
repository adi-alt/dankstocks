import React from 'react';
import './footer.css';
import Lottie from 'lottie-react';
import Icon from '../images/91078-crypto-blob.json'
import Linkedin from '../images/linkedin.json';
import Github from '../images/github.json'
function Footer() {
  return (
    <>
      <div className="blend" style={{ fontSize: '0px' }}>
        s
      </div>
      <div className="footerarea">
        <div className="headingm">
        <Lottie animationData={Icon} style={{width:'100px'}}/>
          {/* <img className="img1" alt='yo' style={{ margin: '15px' }} src={icon} /> */}
          <div className="tinku">
            <p style={{ margin: '0' }}>
              <a href="/log/home" style={{ fontSize: '40px', margin: '0', color: 'white' }}>DankSTocKS</a>
            </p>
            <p style={{ fontSize: '15px', margin: '0', color: '#1890ff' }}>All Rights Reserved</p>
          </div>
        </div>
        <div className="conw">
          <div className="contacts1">
            <h1>About Us</h1>
            <p>
              We are here to provide free services to our BROS. Providing BROS the necessary info about events
              happening in the word of Cryptocurrencies.
              We also provide real time chart services to our BROS
              Do support us and follow us on github and linkedin for further updates.
            </p>
          </div>
          <div className="contacts">
            <h1>Contact Us On</h1>
            <ul>
              {/* <li>
                <a href="https://leetcode.com/AD23315/">
                <Lottie animationData={linkedin}/>
                  Leetcode
                </a>
              </li> */}
              <li>
                <a href="https://www.linkedin.com/in/aditya-verma-089746203/">
                <Lottie animationData={Linkedin} style={{width:'50px'}}/>
                </a>
              </li>
              <li>
                <a href="https://github.com/adi-alt">
                <Lottie animationData={Github} style={{width:'50px'}}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
