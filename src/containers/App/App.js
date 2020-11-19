import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Instructions from '../../components/pages/Instructions/Instructions'
import Home from '../../components/pages/Home/Home'
import About from '../../components/pages/About/About'
import './App.css'


export class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/instructions" component={Instructions} />
      </Router>
    )
  }
}

export default App
