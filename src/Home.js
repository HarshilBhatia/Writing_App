import React, { Component } from 'react'
import "./Home.css"
import {Link} from 'react-router-dom'
import Work from './Images/work.png'
import Btn from './Components/button'

export default class Home extends Component {

  constructor(props){
    super(props)

    this.state={
      time:4
    }
    this.changetimechild=this.changetimechild.bind(this)
  }
    

  changetimechild(e){
    this.setState({time:e.target.value})
    this.props.changetime(e.target.value)
}


    render() {
        return (
          <div className="grid">
            <div className="wrap">
            <div className="heading-intro">
                A <b style={{color: "#40e0d0"}}>Distraction</b> free Writing App
              </div>
              <div className="subheading-intro">
                If you stop Writing or clear words your progress will be lost
              </div>
              <div className="btn-flex">
              <Btn name="classic" linkto='./write' zenval={this.props.changezen} zen={false}/>
              <Btn name="Zen" linkto='./write' zenval={this.props.changezen} zen={true}/>

              </div>
              
            </div>
            <div className="img_class">
              <img src={Work} />
            </div>  

          </div>
        )
    }
}


/*
  <button className="btn">
                <Link to="/write" className="btn-link">
                Dare to Start writing ?
                </Link>
              </button>
              
              <input type="text" value={this.state.value}  onChange={this.changetimechild} placeholder="Enter Session length" className="time"/>
              
            */