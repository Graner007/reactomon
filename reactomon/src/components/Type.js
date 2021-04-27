import React from 'react'

const Type = ({ type }) => {

    const id = type.url.split("/")[6];

    return (
        <div className="card" key={ id }>
            <h3>{ type.name }</h3>
            <p>{ id }</p>
        </div>
    )
}

export default Type
