import React from 'react';
import './CourseDetails.css';
import '../Header/Course';
import '../../fakeData/courseOnline';

const CourseDetails = (props) => {
    const {courseName, courseSummary, courseDuration, courseFee, img} = props.courseDetails;
    console.log(props.courseDetails);

    return (
        <div className="courseDetails">
          <div>
                <img src={img} alt=""/>
          </div>
          <div>
                <h2 className="courseName">{courseName}</h2>
                <h4 className="description"> <span style={{backgroundColor:'lightBlue'}}>Course Description:</span> {courseSummary}</h4>
                <h5> Course Duration : {courseDuration}</h5>
                <h5> Course Fee: {courseFee}</h5>
                <button 
                className="btn btn-primary" 
                onClick={() => props.handleAddCourse(props.courseDetails)}> Enroll Now
                </button>
          </div>
        </div>
    );
};

export default CourseDetails;