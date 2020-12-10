import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  // checking if the profile is loaded
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div>
      <Fragment>
        <div style={{textAlign:"center",height:"400px",backgroundColor:"LightBlue"}}>
          <h1 style={{paddingTop:'60px',fontSize:"40px",letterSpacing:"5px"}}>Welcome to WebDevPool</h1>
        </div>
      <div className="profile bg-light" style={{display:"flex",flexDirection:"row",justifyContent:"space-around",position:"relative",top:"-200px",margin:"50px"}}>
        <img src={user.avatar} alt="" className="round-img" />
        <p className="large text-primary">{user && user.name}</p>
      </div>
        <p className="lead">
          <i className="fas fa-user-secret" style={{color: "Gray"}} /> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <Fragment>
            <DashboardActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />

            <div className="my-2">
              <button className="btn btn-danger" style={{border:"none",backgroundColor:"DarkOrange"}}onClick={() => deleteAccount()}>
                Delete My Account
            </button>
            </div>
          </Fragment>
        ) : (
            <Fragment>
              <p>You have not yet setup a profile, please add some info</p>
              <Link to="/create-profile" style={{backgroundColor:"darkorange"}}className="btn btn-primary my-1">
                Create Profile
          </Link>
            </Fragment>
          )}
      </Fragment>
      </div>
    );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
