import React from 'react'
import pikachu from 'src/pikachu.png';

const BottomLeftPicture = () => {
    return (
        <img src={pikachu} alt="pikachu" style={{ position:"relative", bottom:"0px", left:'0px', width:'150px', height:'200px' }} />
    )
}

export default BottomLeftPicture