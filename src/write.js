import React, { Component } from 'react'
import "./write.css"
import Blur from "./Components/blur"
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from "./Components/progressbar"

export default class write extends Component {
    constructor(props){
        super(props)

        this.state = {
            mode:"Dark Mode",
            mode_rn:"true",
            bgc_clr:"white",
            font_clr:"#2C3335",
            value:'',
            curr:"",
            time:0,
            keyinterval:0,
            timeoutclr:"green",
            opacity:"1",
            valid:true
        }
        this.changecolor=this.changecolor.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.keyStroke=this.keyStroke.bind(this)
        this.tick=this.tick.bind(this)
        this.goBack=this.goBack.bind(this)


    }
    
    changecolor(){
        var val;
        (this.state.mode_rn)?val="Light Mode":val="Dark Mode"
        var f;
        (this.state.mode_rn)?f="#DAE0E2":f="#2C3335"
        var b;
        (this.state.mode_rn)?b="#2F363F":b="white"
        
        this.setState( prevstate =>({
            mode_rn:!prevstate.mode_rn,
            mode: val,
            font_clr: f,
            bgc_clr:b
                }))
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    isgreater(){
        if(this.state.keyinterval>400){
            this.setState({
                timeoutclr:`rgb(255,48,49)`,
                opacity:`${this.state.keyinterval/800}`
            })
        }
    }

    keyStroke(e){
        this.setState({
            curr:(e.key),
            keyinterval:0
        })

        this.timerID = setInterval(
            () => this.ticktime(),
            10
          );

    }

    goBack(){
        if(this.state.keyinterval>800){
            this.setState({
                value:""
            })
        }

    }

    ticktime(){
        this.setState((prevstate) => ({
            keyinterval: prevstate.keyinterval + 1 })
        )
        this.isgreater()
        this.goBack()
        
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
        
      }

    tick(){
        this.setState((prevstate) => ({
            time: prevstate.time + 1 })
        )
    }
    

    render() {
        
        const text_id=(this.props.zen)?"t":"f"
        let perc=100*(this.state.time)/(this.props.totaltime*60)
        
        return (
            
            <div style={{backgroundColor:this.state.bgc_clr,color:this.state.font_clr,width:'100%',height:"100vh"}}>
                <h1>
                {this.state.keyinterval}

                </h1>
                
                <button className="mode-btn" onClick={this.changecolor} style={{color:"inherit",backgroundColor:"inherit"}}>
                {this.state.mode}
            </button>
            <textarea value={this.state.value} 
                onChange={this.handleChange}
                onKeyUp={this.keyStroke}
                placeholder="Start Typing ..." 
                style={{color:"inherit",
                        backgroundColor:"inherit",}}
                id={text_id}/>
             {(this.props.zen)?<Blur curr={this.state.curr}/>:null}
            
            <div className="progressbar">
            <ProgressBar percentage={perc} clr={this.state.timeoutclr} opacity={this.state.opacity}/>                
            </div>           
            </div>
        )
    }   
}

  /*


*/