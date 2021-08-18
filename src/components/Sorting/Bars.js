import React from 'react'

const Bars = (
    { 
        containerClass, 
        displayArray, 
        background, 
        range, 
        inputArrayOn,
        comparision
    }) => {
    
    return (
        <div className={containerClass}>
            {
                displayArray.map((number, index) => 
                    inputArrayOn || index < range ?
                    <div
                        key={index}
                        className='number-bar'
                        style={{ width: `${number}%`, background: background }}
                    >{ range <= comparision ? number : null }                        
                    </div> : 
                    null 
                )
            }
        </div>
    )
}

export default Bars
