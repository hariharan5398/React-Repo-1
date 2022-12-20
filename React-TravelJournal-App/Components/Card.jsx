import React from 'react'



function CardTile(props){
    return(
        <div className='Card'>
            <div className='Card-img' style={{backgroundImage:`url(${props.props.imageUrl})`}}></div>
            <div className='Card-details'>
                
                    <p className='Card-details-location'>{props.props.location} <span><a href={props.props.googleMapsUrl}>View on Google Maps</a></span></p>
                    <p className='Card-details-title'>{props.props.title}</p>
                    <p className='Card-details-date'>{`${props.props.startDate} - ${props.props.endDate}`}</p>
                    <p className='Card-details-decr'>{props.props.description}</p>
            </div>
            
        </div>
        
    )
}


export default CardTile