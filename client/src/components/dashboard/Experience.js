import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";
import Footer from '../layout/footer';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{moment.utc(exp.from)}</Moment> -{" "}
        {exp.to === null ? (
          " Now"
        ) : (
            <Moment format="YYYY/MM/DD">{moment.utc(exp.to)}</Moment>
          )}
      </td>
      <td>
        <i className="fas fa-trash-alt"
          onClick={() => deleteExperience(exp._id)}
          style={{color:"red",cursor:"pointer"}}
        />
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th style={{borderRadius:"4px", height:"10px"}}>Company</th>
            <th className="hide-sm" style={{borderRadius:"4px", height:"10px"}}>Title</th>
            <th className="hide-sm" style={{borderRadius:"4px"}}>Years</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
      {/* <Footer /> */}
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
