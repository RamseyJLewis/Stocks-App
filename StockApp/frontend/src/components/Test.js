import React, {Component} from 'react'

class Test extends Component{
    constructor(props){
        super(props)
        this.state ={}
    }
    componentDidMount(){
        return fetch ('http://localhost:3002/users')
        .then(res => res.json())
        .then(res => this.setState({users: res}))
        .catch(err => console.log(err))
    }
    render(){
        console.log(this.state.users)
        return(
        <h1>{this.state.users ? this.state.users[0].username :'no fetch' }</h1>
        
        )
    }
}

export default Test;