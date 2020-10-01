import React from 'react';
import { flexContainer, flex, btnStyle } from '../utils/exportStyles'

const ButtonLL = ({ number, engage, setNumber, generateLinkedList }) => {
    return (
        <div style={flexContainer}>
            <div style={flex}>
                <input
                    type="range" 
                    min="5" 
                    max="10" 
                    value={number}
                    className="slider" 
                    onChange={e => setNumber(e.target.value)}
                    disabled={engage}
                />{' '}
                <label style={{ fontSize: '12px' }}>{number} Elements</label>
            </div>

            <div style={flex}>
                <button
                    style={btnStyle}
                    onClick={() => generateLinkedList()}
                    disabled={engage}
                >Generate Linked List</button>
            </div>
        </div>
    );
};

export default ButtonLL;
