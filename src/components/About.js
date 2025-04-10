import React, { useContext } from "react";


const About = () => {
    const { loggedInUser } = useContext(UserContext);
    return (
        <div className="text-center p-4 bg-gray-100">
        <h3>User Details</h3>
        <h4>Name: Kavita Tripathi</h4>
        <h4>Location: Bengaluru</h4>
        <h4>Contact: @kavitaTripathi</h4>
        </div>
    );
}

export default About;