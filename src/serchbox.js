import React from 'react';



class SerchBox extends React.Component{

    render(){
      
        return(<div className='input-container'>
            <input  type='text' placeholder='Cat' className='input' onChange ={this.props.serchChange}></input>
        </div>)
    };
};



export default SerchBox;