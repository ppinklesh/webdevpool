import React from 'react';
import '../CSS/footer.css';
import {Link} from 'react-router-dom';
function footer(){
	return(
			<div className="footer_main">
				<div className="footer_topbutton">
					<h4><a href="/dashboard">Back to Top</a></h4>
				</div>
				<div className="footer_body">
					<div className='footer_body1'>
						<h4>Get to know</h4>
						<Link to="/dashboard">About Us</Link>
						<Link to="/dashboard">Careers</Link>
						<Link to="/dashboard">Press Release</Link>
						<Link to="/dashboard">WebDevPool</Link>
						<Link to="/dashboard">Gift a Smile</Link>
					</div>
					<div className='footer_body1'>
						<h4>Connect with Us</h4>
						<Link to="/dashboard">Twitter</Link>
						<Link to="/dashboard">Instagram</Link>
						<Link to="/dashboard">Facebook</Link>
					</div>
					<div className='footer_body1'>
						<h4>Make Money with us</h4>
						<Link to="/dashboard">Sell on WebDevPool</Link>
						<Link to="/dashboard">Sell Under WebDevPool</Link>
						<Link to="/dashboard">Because on Afflicate</Link>
						<Link to="/dashboard">Fulfilment by WebDevPool</Link>
						{/* <a href="/About">Advertise Your Products</a> */}
						<Link href="/About">Advertise Pay on Merchants</Link>
					</div>
					<div className='footer_body1'>
						<h4>Let Us Help You</h4>
						<Link to="/dashboard">Covide-19 and WebDevPool</Link>
						<Link to="/dasboard">Your Account</Link>
						<Link to="/dashboard">Return Center</Link>
						{/* <a href="/About">100% Purchase Protection</a> */}
						{/* <a href="/About">s App Download</a> */}
						{/* <a href="/About">Soal Assiabt Download</a> */}
						<Link to="/dashboard">Help</Link>
					</div>
				</div>
				<div className="footer_bottom">
					<Link className="footer_bottom_link" to='/dashboard'>Condition Of Use</Link>
					<Link className="footer_bottom_link" to='/dashboard'>Privacy Notice</Link>
					<Link className="footer_bottom_link" to='/dashboard'>Interest-Based Ads</Link>
					<Link className="footer_bottom_link" to='/'><i class="fas fa-copyright" /> 2019-2020, WebDevPool. or its afflicate</Link>
				</div>
			</div>
		);
}

export default footer;