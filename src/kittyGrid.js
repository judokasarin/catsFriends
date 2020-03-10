import React from 'react';
import Card from './card';



class KittyGrid extends React.Component{
 
render(){
    
    const cats = this.props.cats.map(cats =>{
        return (
            <Card key={cats.id} id= {cats.id} name={cats.name} username={cats.username}/>
            );
        });


    return(
        <div>
            <div className='grid'>{cats}</div>
        </div>    
        );        
    
    };
};



export default KittyGrid;