import Page from './page'
import {BrowserRouter as Router, Route,Switch ,Link} from "react-router-dom"
import Home from "./Home"
import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super()

    this.state={
      time:5,
      zen:false
    }

    this.changeTime=this.changeTime.bind(this)
    this.changeZen=this.changeZen.bind(this)
  }

  changeTime(t){
    this.setState({time:t})
  }

  changeZen(v){
    this.setState({zen:v})
  }

  render() {
    return (
      <Router>
      <Route path="/write"  render={()=><Page totaltime={this.state.time} zen={this.state.zen}/>}/>
      <Route exact path="/" render={()=><Home changetime={this.changeTime} changezen={this.changeZen}/>} />
    
      </Router>
      
    )
  }
}

