import React from "react";
import ValueStadistic from "../components/value-stadistics/value-stadistics";

const Works = () => {

    const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    const statisticsData = [
        { number: 100, text: 'Total users' },
        { number: 50, text: 'Active users' },
        { number: 20, text: 'New users' },
      ];

    return (
        <div>
            <h3>Our Works</h3>
            <div>
                <h1>Projects We've Worked On</h1>
                <p>{text}</p>
            </div>

            <div>
                <img></img>
                <img></img>
                <img></img>
            </div>

            <ValueStadistic statistics={statisticsData} />



        </div>
    )
}

export default Works;