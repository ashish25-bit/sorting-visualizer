import React from 'react'

const MarkNumber = ({ customStyle }) => {
    return (
        <div style={customStyle}>{
            [...Array(10).keys()].map(num => {
                return <div key={num} className='mark-num-style'>{(num+1)*10}</div>
            })

        }</div>
    )
}

export default MarkNumber
