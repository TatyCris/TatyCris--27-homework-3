import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
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

  render() {
    return (
      <div className="App">
        <select>
          <option value="">-- pick a model --</option>
          {this.data.map(computer => <option value={computer.name}>{computer.name} ({computer.year}) </option>)}
          {/* label with both the name of the model and the year. */}
          {/* The elements should also have a value attribute consisting of only the name. */}
          {/* Add an extra default <option> element at the beginning (see the expected HTML below). */}
        </select>

      </div>
    )
  }
}