import React, { Component } from 'react'
import axios from 'axios'

class fetch extends Component{
    state = {
        persons : [],
    }

    //https://jsonplaceholder.typicode.com/users
    //http://unikom.ac.id/api/v1/event

    componentDidMount(){
        // axios.get('https://jsonplaceholder.typicode.com/users')
        axios.get('http://unikom.ac.id/api/v1/event')
        .then(res => {
            console.log(res);
            this.setState({persons: res.data.result });
        
    });
}


    render(){
        return(
            <div>
                {this.state.persons.map(person => <li>
                    {person.nama_event} | {person.pengirim} |
                    
                    <img src={`http://unikom.ac.id/img_event/${person.foto}`} />
                </li>
                )}
            </div>
            // <div>
               
            //     <ul>
            //         {this.state.persons.map(person => <li>
            //             {person.name}
            //         </li>)}
            //     </ul>
            // </div>
        )
    }
}

export default fetch;