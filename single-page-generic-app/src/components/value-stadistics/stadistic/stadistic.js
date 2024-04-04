import "../stadistic/stadistic.css"
import React from "react";

const starPlus = process.env.PUBLIC_URL + "/images/star-plus.png";

const Stadistic = ({ number, text }) => {

    return (
        <div>
            <div className="container-value">
                <h2 className="number">{number}</h2>
                <img src={starPlus} alt="Star plus" className="image-value"/>
            </div>

            <p className="text-stadistic">{text}</p>

        </div>
    )
}

export default Stadistic;