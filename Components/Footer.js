import React from 'react';

export default function Footer(){
    /* i dont use some of media so im not linking them to anything */
    return (
      <footer className="footer-Container">
      <ol>
      <li>
      <a href="#" >
        <img src="./Images/TwitterIcon.png" alt="" />
      </a>
      </li>
      <li>
      <a href="www.facebook.com/herojk65" target="_blank">
        <img src="./Images/FacebookIcon.png" alt="" />
      </a>
      </li>
      <li>
      <a href="https://www.instagram.com/herojk65/" target="_blank">
        <img src="./Images/InstagramIcon.png" alt="" />
      </a>
      </li>
      <li>
      <a href="#">
        <img src="./Images/LinkedinIcon.png" alt="" />
      </a>
      </li>
      <li>
      <a href="https://github.com/herojk64" target="_blank">
      <img src="./Images/GitHubIcon.png" alt="" />
      </a>
      </li>
      </ol>
      </footer>  
    );
}