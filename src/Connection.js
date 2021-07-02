import React, { Component } from 'react'

export default class Connection extends Component {
    componentDidMount(){
        const apiUrl = 'http://127.0.0.1:8000/api/';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    render() {
        return (
            <div>
                Example Connection
            </div>
        )
    }
}
