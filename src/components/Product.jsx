import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import 'bootstrap/dist/css/bootstrap.css'

export default class Product extends Component {
    state = {
       count:0,
    }
  
                                                          //AddCount handler : Increment Count (Nos) for each Product
    addCount= () =>{
      const { count } = this.state;
        this.setState(
          { count: count + 1 }
        );

    }

                                                          //SubCount Handler : Decrement Count (Nos) for each Product
    subCount= () =>{
      const { count } = this.state;
        if(count===0){
        this.setState(
            { count: 0 }
          );
        } else{
          this.setState(
            { count: count - 1 }
          );
        }
    }


   render() {
        const { count } = this.state                       //Get count from state
        let value = count;                               
        
        let p = this.props.cost;                          //Get the original price of the product ($/item)
        let tCost = value*p;                              //Get the total Cost of the product ($ x No of items)
        
        return(
            
            <MuiThemeProvider>
              <React.Fragment>
                 
                 <div>  
                   
                    <div className="form-inline ml-5" >
                      <h4> {this.props.title} (${this.props.cost}) : </h4>   
                      <h5> <badge className="badge badge-primary ml-4">{value}</badge> </h5>
                     
                     <RaisedButton                                //addCount button
                     className="m-5" 
                     onClick={this.addCount} 
                     primary='true' 
                     label="+Add"/>
                     
                     <RaisedButton                                //SubCount button
                     onClick={this.subCount} 
                     secondary='true' 
                     label="-Discard"/>
                                                                  {/*Pass total cost of product and its id*/}
                     <h4> <badge className="badge badge-xll badge-success m-5">${value*p}</badge> </h4>
                     <RaisedButton 
                     label="Confirm" 
                     onClick={()=>this.props.fieldChange(tCost,this.props.id)}>             
                     </RaisedButton>
                    </div>
                 
                </div>   
                 
              </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
