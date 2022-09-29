import React from 'react';
import { Link } from 'react-router-dom';

import birthday from '../img/birthday.png';
import { FaCalendar } from 'react-icons/fa';
import { GrFormNext} from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import { IconContext } from "react-icons";

const Event = () => {
    return (
        <IconContext.Provider value={{ color: "#501FC1", className: "global-class-name" }}>
        <div className="event">
            <img className="birthday" src={birthday} alt="Birthday Cake"/>
            <h1 className="eventtitle">Birthday Bash</h1>
            <p className="host">Hosted by <span className="bold">Elysia</span></p>
            
            <div className="details">
                <div className="iconAndInfo">
                    <div className="icon">
                        <FaCalendar />
                    </div>
                    <div className="info">
                        <p className="bold purple">18 August 6:00PM</p>
                        <p>to <span className="bold">19 August 1:00PM</span> UTC +10</p>
                    </div>
                </div>
                <div className="next">
                    <GrFormNext />
                </div>
            </div>

            <div className="details">
                <div className="iconAndInfo">
                    <div className="icon">
                        <GoLocation />
                    </div>
                    <div className="info">
                        <p className="bold purple">Street Name</p>
                        <p>Suburb, State, Postcode</p>
                    </div>
                </div>
                <div className="next">
                    <GrFormNext />
                </div>
            </div>
            <div className="spacing"></div>
        </div>
        </IconContext.Provider>
    );
}

export default Event;
