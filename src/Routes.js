import React, { Component } from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Work from './work/Work'
import Contact from './contact/Contact'
import Resume from './resume/Resume'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
