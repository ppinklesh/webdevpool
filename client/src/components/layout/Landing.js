import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h3 style={{ color: "grey" }} className="large">Welcome to your most Professional Community</h3>
          <p style={{ color: "grey" }} className="lead">
            WebDevPool helps you connect with other developers from all over the world.
          </p>
          <div className="buttons">
            <Link style={{ backgroundColor: "black", color: "white" }} to="/register" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);


// <h1 className="x-large name-span">WebDevPool</h1>
// <div className="buttons">
// <Link style={{ backgroundColor: "black", color: "white" }} to="/register" className="btn btn-primary">
//   Get Started
// </Link>
// <Link to="/login" className="btn btn-light">
//   Login
// </Link>
// </div>
