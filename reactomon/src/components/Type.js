import React from 'react'

const Type = ({ type, index }) => {

    const id = type.url.split("/")[6];

    return (
        <div className="card" key={ index }>
            <h3>{ type.name }</h3>
            <p>{ id }</p>
        </div>
    )
}

export default Type
