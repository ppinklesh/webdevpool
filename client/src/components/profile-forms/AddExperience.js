import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <p className="large text-primary">Add An Experience</p>
      <p className="lead" style={{fontSize:"18px"}}>
        <i className="fas fa-code-branch" /> Add any developer/programming
        positions that you have had in the past
      </p>
      {/* <small>* = required field</small> */}
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addExperience(formData, history);
        }}
        style={{marginRight:"120px",marginTop:"60px"}}
      >
        <div className="form-group">
          <input
            type="text"
            className="input_field"
            placeholder="Job Title"
            name="title"
            value={title}
            onChange={onChange}
            required
            style={{fontSize:"15px",borderRadius:"4px",height:"45px"}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
            required
            style={{fontSize:"15px",borderRadius:"4px",height:"45px"}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
            style={{fontSize:"15px",borderRadius:"4px",paddingTop:"8px",height:"45px"}}
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
              onChange={() => {
                setFormData({ ...formData, current: !current });
              }}
              style={{fontSize:"15px",borderRadius:"4px"}}
            />{' '}
            Current Job
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
            placeholder="Job Description"
            value={description}
            onChange={onChange}
            style={{fontSize:"15px",borderRadius:"4px"}}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" style={{backgroundColor:"darkorange",border:"none",borderRadius:"4px"}}/>
        <Link className="btn btn-light my-1" to="/dashboard" style={{borderRadius:"4px"}}>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(AddExperience);