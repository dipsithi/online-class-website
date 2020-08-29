import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fakeData from '../../fakeData/courseOnline';
import { useState, useEffect } from 'react';
import './Course.css';
import CourseDetails from '../CoursTitle/CourseDetails';
import Cart from '../Cart/Cart';
import '../../fakeData/courseOnline'

const Course = () => {
    const first12 = fakeData.slice(0, 12);
    const [course, setCourse]= useState(first12);
    const [cart, setCart] = useState([]);
    // const courseOnline

    useEffect(()=>{
        fetch ('../../fakeData/courseOnline')
    .then (res => res.json())
    .then(data => {
        setCourse(data)
    });
    }, [])


    const handleAddCourse = (courseDetails) => {
        const newCart = [...cart,courseDetails];
        setCart (newCart);
    }

    return (
        <div className="course-container">
            <div className="course-detaails-container">
                {
                    course.map(cd => <CourseDetails 
                        handleAddCourse = {handleAddCourse}
                        courseDetails = {cd}>
                        </CourseDetails>)
                }
                 
            </div>
            <div className="cart-conainer">
                <Cart cart={cart}>
                <h5>Course Enroll Summary</h5>
                <h5>Course Summary: {cart.length}</h5>
                </Cart>
            </div>
        </div>
    );
};

export default Course;