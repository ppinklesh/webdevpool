import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';
// import '../CSS/Education.css';
import Footer from '../layout/footer';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    description,
    current
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <p className="large text-primary">Add Your Education</p>
      <p className="lead"  style={{fontSize:"18px"}}>
        <i className="fas fa-code-branch" /> Add any school or bootcamp that you
        have attended
      </p>
      {/* <small>* = required field</small> */}
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="School or Bootcamp"
            name="school"
            value={school}
            onChange={onChange}
            required
            style={{fontSize:"15px",borderRadius:"4px",height:"45px"}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Degree or Certificate"
            name="degree"
            value={degree}
            onChange={onChange}
            required
            style={{fontSize:"15px",borderRadius:"4px",height:"45px"}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={onChange}
            style={{fontSize:"15px",borderRadius:"4px",height:"45px"}}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={onChange} style={{fontSize:"15px",borderRadius:"4px",height:"45px"}}/>
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => setFormData({ ...formData, current: !current })}
            />{' '}
            Current School
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
            style={{fontSize:"15px",borderRadius:"4px",height:"45px"}}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" style={{backgroundColor:"darkOrange",borderRadius:"4px",border:"none"}}/>
        <Link className="btn btn-light my-1" to="/dashboard" style={{border:"none",borderRadius:"4px"}}>
          Go Back
        </Link>
      </form>
      <Footer />
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(AddEducation);