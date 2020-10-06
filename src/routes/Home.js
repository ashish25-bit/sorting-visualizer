import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gridContainer } from '../utils/exportStyles';
import { home } from '../utils/exportContent';

const Home = () => {

    useLayoutEffect(() => { document.title="Data Structure Visualizer" } , [])

    return (
        <div className="home-page">
            <h3 style={{ fontSize: "3vw" }}>Data Structure and Algorithms Visualizer</h3>
            <div style={gridContainer}>
                {
                    home.map(({ url, name, src, alt }, index) => (
                        <div key={index}>
                            <Link to={url}>
                                <span>{name}</span>
                                <img src={src} alt={alt} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Home;
