import React from 'react'
import "./progressbar.css"

export default function progressbar(props) {
    return (
            <div className="progress-bar" >
            <div className="fillerbgc" style={{backgroundColor:props.clr}}>
            </div>
            <div className="filler" style={{ width: `${props.percentage}%`,backgroundColor:props.clr , opacity:`${props.opacity}`}} >
            </div>
            </div>
        
    )
}
  
 