import React, { Component } from 'react'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
