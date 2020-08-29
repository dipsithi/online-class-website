import React from 'react';
import '../../fakeData/courseOnline'
import '../../components/CoursTitle/CourseDetails'
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const courseDetails = cart[i];
        total = total + courseDetails.courseFee;
        
    }

    return (
        <div className="cart">
            <h6>Course Enroll Summary</h6>
            <p>Course Enrolled: {cart.length}</p>
            <p className="fees">Total Fees : {total}</p>
        </div>
    );
};

export default Cart;