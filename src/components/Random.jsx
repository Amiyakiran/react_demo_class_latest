import React, { Component } from 'react'

export default class Random extends Component {

    constructor(props){
        super(props)/* to access the shhared data */
        console.log(props);
        this.state={cname:'Auto'}
    }
   change = (data)=>{
      this.setState({cname:data})
    }
  render() {
    return (
     <>
          <div>Random</div>
          <h1>shared data is :{this.props.sub}</h1>
          <h1>car name is : {this.state.cname}</h1>
          <button onClick={()=>this.change('swift')} style={{backgroundColor:'orange',padding:'10px',borderRadius:'5px',color:'white',margin:'10px'}}>change</button>
     </>
    )
  }
}

