import React from 'react'

function YourOrder(props) {
    const { h1, text } = props
    return (
        <div>
            <h1>{h1}</h1>
            <p style={{color: '#A3A3A3', fontSize: '18px'}}>{text}</p>
        </div>
    )
}

export default YourOrder
