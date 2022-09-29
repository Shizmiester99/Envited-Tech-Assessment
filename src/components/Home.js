import React from 'react';
import { Link } from 'react-router-dom';

import imghome from '../img/home.png';

const Home = () => {
    return (
        <div className="home">
            <div className="heading">
            <h1>Imagine if</h1>
            <h1 className="headingSpecial">Snapchat</h1>
            <h1>had events.</h1>
            </div>

            <div className="homeStatement">
            <p>Easily host and share events with your</p>
            <p>Friends across any social media.</p>
            </div>

            <img className="imgHome"src={imghome}></img>

            {/* Linked Button goes to Create Page */}
            <Link to="/create"> <button className="button">🎉 Create my event</button> </Link>
        </div>
    );
}

export default Home;
