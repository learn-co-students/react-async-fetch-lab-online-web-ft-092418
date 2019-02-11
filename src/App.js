import React , {Component} from 'react'

export default class App extends Component{

state = { astros: []}

render(){
  return (
    <div>
    {this.state.astros.map(astr => astr.name)}
    </div>
  )

}

componentDidMount(){
fetch('http://api.open-notify.org/astros.json')
.then(response =>    response.json())
 .then(data => {this.setState({astros: data.people})})

}


}
