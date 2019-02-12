// create your App component here
import React from 'react'

export default class App extends React.Component{


  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json").then(resp => res.json()).then(json => this.setState({data: json}))
  }

  render(){
    return (<div></div>)
  }
}
