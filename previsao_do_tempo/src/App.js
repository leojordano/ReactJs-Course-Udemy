import React from 'react';
import axios from 'axios'

import './App.css'

const API = "https://api.hgbrasil.com/weather?woeid=455827&format=json-cors"

export default class App extends React.Component {
  state = {
    city: "",
    forecast: []
  }

  componentDidMount() {
    axios.get(API)
      .then(res => this.setState({ city: res.data.results.city_name, forecast: res.data.results.forecast }))
  }

  render() {
  return (
    <div className="App">
        <h1>{this.state.city}</h1>
        <table className='striped centered'>
          <thead>
            <tr>
              <th>Data</th>
              <th>Min</th>
              <th>Max</th>
              <th>Previsão</th>
            </tr>
          </thead>
          <tbody>
            {this.state.forecast.map(day => {
              return (
                <tr key={day.date}>
                  <td>{day.date}</td>
                  <td>{day.min}</td>
                  <td>{day.max}</td>
                  <td>{day.description}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </div>
  )};
}
