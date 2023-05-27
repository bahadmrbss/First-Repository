import React, { Component } from 'react'

export default class BlogForm extends Component {
  constructor(props) {
    super(props)
  
    // this.props.blogTestFunc()
    // }
  }


    clickButton()
    {
        alert("Button Clicked!")
        console.log("Buton runned")
    }
    
    render() {
        console.log("Props::",this.props)
        const appClick = ()=>{
            console.log("Shown from app Clic Func!")
        }
      
        return (
      <div style={{border:"1px solid red",margin:"20px 10px"}}>
        Form Comp
        <br/>
        <button onClick={this.clickButton}>Send</button>
        <button onClick={appClick}>Send2</button>
        <button onClick={this.props.blogTestFunc}>Send3</button>
        
        </div>
    )
  }
}
