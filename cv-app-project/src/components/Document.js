import React, { Component } from 'react'

export default class Documentt extends Component {
    state = {
        isActive:false
    }

    handleShow = () => {
        this.setState({
            isActive:true
        })
    }

    handleHide = () => {
        this.setState({
            isActive:false
        })
    }
    render(){
        return (
            <div>
                {this.state.isActive ? <h1>DOCUMENTT</h1> : null}
                <button onClick={this.handleShow}>Show</button>
                <button onClick={this.handleHide}>Hide</button>
            </div>
        )
    }
    
}