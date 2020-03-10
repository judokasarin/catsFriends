import React from 'react';
import KittyGrid from './kittyGrid';
import SerchBox from './serchbox';



class App extends React.Component{

    state={
        cats:[],
        serchfield: '',
    };


    serchChange= (e) =>{
        this.setState({serchfield: e.target.value});
    };

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json()
        }).then(users => {
            this.setState({cats: users})
        })
    }



    render(){

        const filtercats = this.state.cats.filter(cat => {
            return cat.name.toLowerCase().includes(this.state.serchfield.toLowerCase())
         });



        return(<div>
                <h1>Cat Friends</h1>
                < SerchBox serchChange={this.serchChange}/>
                <KittyGrid cats= {filtercats} />
            </div>)
    }
};

export default App;