import React from "react";
import {Link} from 'react-router-dom' 
import "./Footer.css";
function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <div>
        <footer class="footer-distributed">

			<div class="footer-right">

				<a href="#"><i class="fa fa-facebook"></i></a>
				<a href="#"><i class="fa fa-twitter"></i></a>
				<a href="#"><i class="fa fa-linkedin"></i></a>
				<a href="#"><i class="fa fa-github"></i></a>

			</div>

			<div class="footer-left">

				<p class="footer-links">
					<a class="link-1" href="#">Home</a>
       
                    <a class="#" href="Tags">Resources</a>
      
					<a href="#ab">About</a>

					<a href="/contactus">Contact</a>
				</p>

				<p>CsHut &copy; {currentyear}</p>
              <div class="footer-end">
                <p>Efforts By Shriya</p>
               </div>
			</div>
		</footer>
      </div>
  );
}

export default Footer;
