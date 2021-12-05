import React, {Fragment } from 'react';
import BackImg from '../images/background.jpg';
import Products from './Products';
import "./Home.css";

const Home = () => {
    return ( 
            <Fragment>
                <div className="home" style={{backgroundImage:`url(${BackImg})`}}>
                    <div className="banner">
                        <h1>welcome to our store</h1>
                    </div>
                </div>
                <Products />

            </Fragment>
        
     );
}

export default Home ;