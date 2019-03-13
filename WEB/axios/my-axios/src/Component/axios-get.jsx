import React, { Component } from 'react'

class fetch extends Component{
    constructor(props){
        super(props)
        this.state ={
            items : [],
            isLoaded : false,
        }
    }

    render(){
        return(
            <div>
                Hallo
            </div>
        )
    }
}

export default fetch;