import React from 'react';
import '../src/card.css';

class Card extends React.Component{

    render(){
        return(<div className='container'>
            <div className='img-container'>
                <img alt='Robot' src={`https://robohash.org/${this.props.id}?set=set4`} className='img' ></img>
                </div>    
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.username}</p>
            </div>
        </div>)
    }
}



export default Card;