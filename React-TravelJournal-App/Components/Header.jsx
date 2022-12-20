import React from 'react';
import travel from '../public/travel-1.svg'
function Header(){

    return (
        <div className='Header'>
            <h2><img src={travel}></img>My Travel Journal</h2>
        </div>
    )
}


export default Header;