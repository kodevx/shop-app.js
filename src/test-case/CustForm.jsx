import React, { Component } from 'react';
import Product from './Product';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import ConfirmDetails from './ConfirmDetails'

export default class CustForm extends Component {
  constructor(props){
    super(props);
    this.state = {
       step:1,
       name:"ram",
       eMail:"",
       phnNumber:"",
       mName:"Milk",
       brName:"Bread",
       btName:"Butter",
       jName:"Jam",
       mCost:50,
       brCost:0,
       btCost:50,
       jCost:50,
         
    }
   this.handleChange=this.handleChange.bind(this);
} 
  
  
  
   handleChange= (cost,id) =>{
    console.log("inside handle change");
    console.log(id);
    console.log(cost);
    
    if(id===1){
    this.setState({
        mCost: cost
    });
    }else if(id===2){
        this.setState({
            brCost: cost
        });
    }else{
        console.log("id: 3");
    }
    console.log(this.state);   
    }
   
    render(){
        const { step,mCost } = this.state;
        let cost = mCost;
        
        //console.log(this.state);     
        switch(step){
                    
                case 0: return(
                            <MuiThemeProvider>
                              <React.Fragment>
                                
                                <div>
                                <AppBar
                                 title="Home"
                                 primary="true"
                                 
                                />
                                <Product cost={5}
                                 id={1}
                                 title={"Milk"}
                                 fieldChange={this.handleChange}
                                /> 
                                 
                                {/*
                                 <Product cost={4}
                                 id={2}
                                 title={"Bread"}
                                 fieldChange={this.handleChange}
                                /> 
                                
                                <Product cost={2}
                                 id={3}
                                 title={"Butter"}
                                 fieldChange={this.handleChange}
                                /> 

                                <Product cost={1}
                                 id={4}
                                 title={"Jam"}
                                 fieldChange={this.handleChange}
                                />  */}
                                </div>
                                
                                </React.Fragment>
                               </MuiThemeProvider>
                
                             );
             
            case 1: return(<ConfirmDetails values={this.state}    />
            
            );    
    
        
                default:;
        }
    }
}

