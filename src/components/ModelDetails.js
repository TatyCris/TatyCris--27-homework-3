import React, { Component } from 'react'

export default class ModelDetails extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li key={this.props.keyGenerator}>Name: {this.props.name}</li>
                    <li key={this.props.keyGenerator}>Manufacturer: {this.props.manufacturer}</li>
                    <li key={this.props.keyGenerator}>Year: {this.props.year}</li>
                    <li key={this.props.keyGenerator}>Origin: {this.props.origin}</li>
                </ul>
            </div>
        )
    }
}
