import React, {Component} from 'react'

class Test extends Component{
    constructor(props){
        super(props)
        this.state ={}
    }
    componentDidMount(){
        return fetch ('http://54.243.0.162:3030/users')
        .then(res => res.json())
        .then(res => this.setState({users: res}))
        .catch(err => console.log(err))
    }
    render(){
        return(
        <h1>{this.state.users ? this.state.users[0].username :'no fetch' }</h1>
        )
    }
}

export default Test;