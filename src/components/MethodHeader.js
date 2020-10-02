import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import url from '../utils/url';


const MethodHeader = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='methods-container'>
            <div> 
                <button 
                    onClick={() => setIsOpen(prevState => !prevState)}
                >
                    <img width="30px" src={require('../assets/arrow_back.png')} alt="back arrow" />
                </button> 
            </div>
            {
                isOpen && 
                <div style={{ flex:"2" }}>
                    <Link to={url.main}>Sorting</Link>
                    <Link to={url.sLLTraversing}>Single Linked List Traversal</Link>
                </div>
            }
        </div>
    )
};

export default MethodHeader;
