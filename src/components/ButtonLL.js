import React from 'react';
import { flexContainer, flex, btnStyle } from '../utils/exportStyles'

const ButtonLL = ({ number, engage, setNumber, generateLinkedList, range }) => {

    const customBtnStyle = engage ? {...btnStyle, opacity: 0.5} : btnStyle;

    return (
        <div style={flexContainer}>
            <div style={flex}>
                <input
                    type="range" 
                    min={range[0]} 
                    max={range[1]} 
                    value={number}
                    className="slider" 
                    onChange={e => setNumber(e.target.value)}
                    disabled={engage}
                />{' '}
                <label style={{ fontSize: '12px' }}>{number} Elements</label>
            </div>

            <div style={flex}>
                <button
                    style={customBtnStyle}
                    onClick={() => generateLinkedList()}
                    disabled={engage}
                >Generate Linked List</button>
            </div>
        </div>
    );
};

export default ButtonLL;
