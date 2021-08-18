import React from 'react';
import { colors } from '../../utils/exportContent';
import { divStyle, getStyle } from '../../utils/exportStyles';

const Nodes = ({ color }) => {
    return (
        <div style={divStyle}>{
            colors[color].map(({ name, color }, index) => (
                <div key={index} style={getStyle(color)}>{name}</div>
            ))
        }</div>
    )
};

export default Nodes;
