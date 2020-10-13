import React from 'react';
import { Link } from 'react-router-dom';
import { gridContainer } from '../utils/exportStyles';
import { home } from '../utils/exportContent';
import url from '../utils/url';

const NotFound = () => {
    return (
        <div className="home-page">
            <h1 style={{ margin: "40px 0", textAlign: "center", textTransform: "uppercase" }}>Page Not Found</h1>
            <div style={gridContainer}>
                <div>
                    <Link to={url.main}>
                        <span>Home</span>
                        <img src={require('../assets/home.png')} alt="Home Page" />
                    </Link>
                </div>
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
}

export default NotFound
