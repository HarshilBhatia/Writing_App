import {Link} from 'react-router-dom'
import './button.css'

import React, { Component } from 'react'

export default class button extends Component {

  constructor(props){
    super(props)

    this.handlezen=this.handlezen.bind(this)
  }


  handlezen(){
    this.props.zenval(this.props.zen)
  }
  
  render() {
    return (
      <div class="button">
      <span class="button__mask"></span>
      <span class="button__text">{this.props.name}</span>
      <span class="button__text button__text--bis" onClick={this.handlezen}> 
      <Link to='./write' style={{all:"inherit"}}>
        {this.props.name}
       </Link>
       </span>
    </div>
    )
  }
}
