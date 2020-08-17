import React from 'react';
// import web from "../src/images/radha-krishna.jpg";
import web from "../src/images/ship.svg";
import Common from './Common';

const Home = () => {

    return (
        <>
            <Common
                name="Grow your business with"
                imgsrc={web}
                visit="/service"
                btname="Get started"
            />
        </>
    );
}

export default Home;