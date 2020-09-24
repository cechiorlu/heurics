import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../components/Header'
import Instructions from '../components/pages/Instructions'
import Home from '../components/pages/Home'
import About from '../components/pages/Instructions'
import './App.css'


export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/instructions" component={Instructions} />
        </Router>
      </React.Fragment>
    )
  }
}

export default App
