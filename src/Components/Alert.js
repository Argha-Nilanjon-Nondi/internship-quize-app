import React, { Component } from 'react'

export default class Alert extends Component {
    render() {
        return (
            <div className="alert">
                <div className="alert-content">
                    <h1 className="alert-logo">X</h1>
                    <h1 className="alert-text">{this.props.text}</h1>
                </div>
            </div>
        )
    }
}
