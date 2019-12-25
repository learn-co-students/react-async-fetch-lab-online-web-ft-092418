import React, { Component } from 'react'

export default class App extends React.Component {

    constructor() {
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => {
                return response.json()
            })
            .then(myJson => {
                this.setState({
                    people: new Array(...myJson.people)
                })
            })
    }

    render () {
        return <div> - {this.state.people.map(person => person.name + ' - ')}</div>
    }
}