import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import '../CSS/Navbar1.css'
import { IconContext } from 'react-icons';
import * as IoIcons from "react-icons/io";

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {


  const Navbar1 = () => {
    const [sidebar, setSidebar] = useState(false);
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
          <ul className="nav-menu-items" onClick={showSidebar} style={{display:'flex', flexDirection:'column'}}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose className="cross" style={{color:'white'}}/>
              </Link>
            </li>
              <h1 className="top-header" style={{marginTop:'-60px', color:'white'}}>WebDevPool</h1>
              <h4 className="top-header" style={{letterSpacing:'2px'}}>Welcome {user && user.name}</h4>
              <div className="nav-text">
                <li className='arrow'>
                  <Link to="/dashboard" style={{color:'white'}}>Dashboard </Link>
                  <IoIcons.IoIosArrowForward style={{color:'white'}}/>
                </li>
                <li className='arrow'>
                  <Link to="/profiles" style={{color:'white'}}>Profiles</Link>
                  <IoIcons.IoIosArrowForward style={{color:'white'}}/>
                </li>
                <li className='arrow'>
                  <Link to="/posts" style={{color:'white'}}>Posts Feed</Link>
                  <IoIcons.IoIosArrowForward style={{color:'white'}}/>
                </li>
              </div>
          </ul>
        </nav>
        </IconContext.Provider>
      </>
    );
  }

  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-power-off" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  // guest links
  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Join Now</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  const leftNavBar = () => {
    if(!loading && isAuthenticated){
      return(
        <Fragment>
          {Navbar1()}
        </Fragment>
      )
    }
  }
  return (
    <div>
      <nav className="navbar bg-dark" style={{background:"DodgerBlue"}}>
        <p style={{display:'flex',flexDirection:'row'}}>
          {leftNavBar()}
          {/* {Navbar1()} */}
          <Link to="/">
            <i className="fas fa-users" /> WebDevPool
          </Link>
        </p>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);




