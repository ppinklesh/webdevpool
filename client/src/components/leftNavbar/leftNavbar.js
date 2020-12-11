import React,{useState} from 'react';
// import './CSS/Navbar.css';
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from "./SidebarData";
import { IconContext } from 'react-icons';
// import {NextSidebarData} from "./NextSidebarData";
import '../CSS/leftNavbar.css';

function Navbar1() {

	const [sidebar, setSidebar] = useState(false);
    {/* Using a Hooks*/}
	const showSidebar = () => setSidebar(!sidebar);
	return(
		<>
		<div className="navbar1">
				<Link to="#" className="menu-bars">
					<FaIcons.FaBars onClick={showSidebar}/>
				</Link>
		</div>
		<IconContext.Provider value={{color: '#787878'}} > 
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className="nav-menu-items" onClick={showSidebar}>
					<li className="navbar-toggle">
						<Link to="#" className="menu-bars">
							<AiIcons.AiOutlineClose className="cross"/>
						</Link>
					</li>
					<p className="top-header">SHOP BY CATEGORY</p>

					{/*Fetching all the data from SidebarData by using map*/}

					{SidebarData.map((items, index) => {
						return(
							<li key={index} className={items.cName}>
								<Link to={items.path}>
									<span>{items.title}</span>
									<div className="icons">
										{items.icon}
									</div>
								</Link>
							</li>
						)
					})}
					<div className="border">
					</div>

					{/*Fetching all the data from NextSidebarData by using map*/}

					{/* {NextSidebarData.map((items, index) => {
						return(
							<li key={index} className={items.cName}>
								<Link to={items.path}>
									<span>{items.title}</span>
									<div className="icons">
										{items.icon}
									</div>
								</Link>
							</li>
						)
					})} */}
					<div className="border">
					</div>
					<p className="bottom-header">HELP & SETTINGS</p>
					<div className="footer">
						<p><Link className="link" to='/checkout'>Your Account</Link></p>
						<p><Link className="link" to='/'>Customer Service</Link></p>
						<p><Link className="link" to='/Register'>Sign In</Link></p>
					</div>
				</ul>
			</nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar1;