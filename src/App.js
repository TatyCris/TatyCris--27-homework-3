import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addModel } from './actions/computers'
import ModelDetails from './components/ModelDetails';
import './App.css';

class App extends Component {
  state = { computer: '' }

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
    if (this.state.computer !== '') {
      this.props.addModel(this.data.find(computer => computer.name === this.state.computer))
    }
  }

  printComputerModels = () => {
    return this.props.computers.map(
      computer =>
        <ModelDetails
          key={this.keyGenerator()}
          name={computer.name}
          manufacturer={computer.manufacturer}
          year={computer.year}
          origin={computer.origin}
        />
    )
  }

  keyGenerator = () => {
    return Math.random()*1000
  }

  render() {
    return (
      <div className="App">
        <select value={this.state.computer} onChange={this.updateSelection}>
          <option key='default' value="">-- pick a model --</option>
          {this.data.map(computer => <option key={computer.name} value={computer.name}>{computer.name} ({computer.year}) </option>)}
        </select>
        <button onClick={this.handleOnClick}>Add</button>
        {this.printComputerModels()}
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    computers: state.computers
  }
}

export default connect(mapStatetoProps, { addModel })(App)