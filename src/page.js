import React, { Component } from 'react'
import Write from "./write"
export default class page extends Component {
    constructor(props){
        super(props)

        this.state={
            keytime:0,
            isWrite:true
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.time(),
            10
          );
    }

    time(){
        if(this.state.keyStroketime>800){
            this.setState({isWrite:false})
        }
    }

    keyStroketime(val){
        this.setState({keytime:val})
    }
    render() {
        return (
            <div>
                {(this.state.isWrite)?<Write 
                    totaltime={this.props.totaltime} 
                    zen={this.props.zen}
                    />:null}
            </div>
        )
    }
}
