import React from 'react';
import '../CSS/footer.css';
import {Link} from 'react-router-dom';
function footer(){
	return(
			<div className="footer_main">
				<div className="footer_topbutton">
					<h4><a href="/">Back to Top</a></h4>
				</div>
				<div className="footer_body">
					<div className='footer_body1'>
						<h4>Get to know</h4>
						<a href="/About">About Us</a>
						<a href="/About">Careers</a>
						<a href="/About">Press Release</a>
						<a href="/About">Soal</a>
						<a href="/About">Gift a Smile</a>
					</div>
					<div className='footer_body1'>
						<h4>Connect with Us</h4>
						<a href="/About">Facebook</a>
						<a href="/About">Twitter</a>
						<a href="/About">Instagram</a>
					</div>
					<div className='footer_body1'>
						<h4>Make Money with us</h4>
						<a href="/About">Sell on Soal</a>
						<a href="/About">Sell Under Soal Accelerator</a>
						<a href="/About">Because on Affillate</a>
						<a href="/About">Fulfilment by Soal</a>
						<a href="/About">Advertise Your Products</a>
						<a href="/About">Advertise Pay on Merchants</a>
					</div>
					<div className='footer_body1'>
						<h4>Let Us Help You</h4>
						<a href="/About">Covide-19 and Soal</a>
						<a href="/About">Your Account</a>
						<a href="/About">Return Center</a>
						<a href="/About">100% Purchase Protection</a>
						<a href="/About">soal App Download</a>
						<a href="/About">Soal Assiabt Download</a>
						<a href="/About">Help</a>
					</div>
				</div>
			</div>
		);
}

export default footer;