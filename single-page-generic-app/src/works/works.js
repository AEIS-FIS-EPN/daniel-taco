import "../works/works.css"
import React from "react";
import ValueStadistic from "../components/value-stadistics/value-stadistics";

const image1 = process.env.PUBLIC_URL + "/images/portrait-1.png";
const image2 = process.env.PUBLIC_URL + "/images/portrait-2.jpg";
const image3 = process.env.PUBLIC_URL + "/images/portrait-3.jpg";

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
        <div className="container-work-principal">
            <div className="container-description">
                <div className="container-description-left">
                    <h3>Our Works</h3>
                    <h1>Projects We've Worked On</h1>
                </div>
                <div className="container-description-rigth" >
                    <p>{text}</p>
                </div>
            </div>

            <div className="container-images">
                <div>
                    <img src={image1}></img>
                </div>
                <div>
                    <img src={image2}></img>
                </div>
                <div>
                    <img src={image3}></img>

                </div>

            </div>

            <ValueStadistic statistics={statisticsData} />



        </div>
    )
}

export default Works;