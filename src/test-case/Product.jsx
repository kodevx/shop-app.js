import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import 'bootstrap/dist/css/bootstrap.css'

export default class Product extends Component {
    state = {
       count:0,
    }
  
   addCount= ()=>{ 
     const { count } = this.state;
     
     this.setState({
        count: count + 1
    });
     
    
    //console.log(this.state.count);
     // console.log(this.props);
    }

    subCount= ()=>{
        const { count } = this.state;
        this.setState({
            count: count - 1
        });
        
       }

    /*   
    costUpdate = () =>{
    const { count } = this.state;
    let price = this.props.cost;
    this.setState({
        pCost : count * price
    });
      
    }
    */

    
   render() {
        const { count } = this.state
        
        let value = count;
        //let price = pCost;
        let p = this.props.cost;
        let tCost = value*p; 
        console.log("Cost of milk"+tCost);
        console.log("Inside render");
        console.log(this.state);
        console.log(this.props);
        return(
                 <MuiThemeProvider>
                 <React.Fragment>
                 
                 
                 
                 <div>  
                   
                 
                   <div className="form-inline ml-5" >
                     <h4> {this.props.title}: </h4>   
                     <badge className="badge badge-primary ml-4">{value}</badge> 
                     <RaisedButton className="m-5" onClick={this.addCount} primary='true' label="+Add"/>
                     <RaisedButton onClick={this.subCount} secondary='true' label="-Discard"/>
                     <badge className="badge badge-xll badge-success m-5">${value*p}</badge> 
                     <RaisedButton label="Confirm" onClick={()=>this.props.fieldChange(tCost,this.props.id)}></RaisedButton>
                   </div>
                 
                 
                 </div>   
                 
                 
                 
                 </React.Fragment>
                 </MuiThemeProvider>
        );
    }
}
