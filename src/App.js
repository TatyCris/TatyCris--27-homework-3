import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addModel } from './actions/computers'

import './App.css';

class App extends Component {
  state = { computer: {} }

  data = [
    {
      name: "Ivel Z3",
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    {
      name: "Bally Astrocade",
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    {
      name: "Sord M200 Smart Home Computer",
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    {
      name: "Commodore 64",
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  ]

  updateSelection = (event) => {
    this.setState({
      computer: event.target.value
    })
  }

  handleOnClick = () => {
    console.log('this.state.computer:',this.state.computer);
    console.log('objectComputer:', this.data.find(computer => computer.name === this.state.computer));
    
    this.props.addModel(this.data.find(computer => computer.name === this.state.computer))
  }

  render() {
    return (
      <div className="App">
        <select value={this.state.computers} onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
          {this.data.map(computer => <option value={computer.name}>{computer.name} ({computer.year}) </option>)}
        </select>
        <button onClick={this.handleOnClick}>Add</button>

      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    model: state.computers
  }
}

export default connect(mapStatetoProps, { addModel })(App)