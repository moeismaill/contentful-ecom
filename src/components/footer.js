import React from 'react'
import './layout.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
    return (
        <footer>
          <div className="footer">
            <ul className="social">
              <a href="https://facebook.com" ><FacebookIcon style={{fontSize: "1.7rem", color: "black"}} /></a>
              <a href="https://instagram.com" ><InstagramIcon style={{fontSize: "1.7rem", color: "black"}} /></a>
            </ul>
          © Copyright {new Date().getFullYear()},
          {` `}
          <a href="/">Jumpstart</a>
          </div>
        </footer>
    )
}

export default Footer