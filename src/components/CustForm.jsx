import React, { Component } from 'react';
import CustDetails from './CustDetails'
import Product from './Product';
import ConfirmDetails from './ConfirmDetails'
import Success from './Success'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';



export default class CustForm extends Component {
  
  constructor(props){
    super(props);
    this.state = {
       step:1,
       name:"",
       eMail:"",
       phnNumber:"",
       mName:"Milk",
       brName:"Bread",
       btName:"Butter",
       jName:"Jam",
       mCost:0,
       brCost:0,
       btCost:0,
       jCost:0
    }
   this.handleChange=this.handleChange.bind(this);
   this.handleTxt=this.handleTxt.bind(this);
   this.nextStep=this.nextStep.bind(this);
} 
  

                                                                              //Update cost of each Product
    handleChange= (cost,id) =>{
      if(id===1){
            this.setState(
               { mCost: cost }
            );
      }else if(id===2){
            this.setState(
               { brCost: cost }
            );
      }else if(id===3){
            this.setState(
             { btCost: cost }
            );
      }else if(id===4){
            this.setState(
             { jCost: cost }
            );
      }else{
              console.log("No id!")
      }
    }
   
   
                                                             //Update Customer name,number,email
    handleTxt= input => e => {
     this.setState({[input]: e.target.value});
    }


                                                            //Increment step to switch to next component
    nextStep = () =>{
     const {step}=this.state;
     this.setState({ step: step + 1 });
    }
   
   
    render(){
        const { step } = this.state;
        const { name, eMail, phnNumber } = this.state;
        let values ={ name, eMail, phnNumber };
        //console.log(this.state);     
        
        switch(step){
                    
            case 1: return(
                             <CustDetails 
                             values={values}
                             handleTxt={this.handleTxt}
                             nextStep={this.nextStep}
                             />   
            );    
            
            
            case 2: return(
                        <MuiThemeProvider>
                           <React.Fragment>
                                     
                                 <AppBar
                                  position="static"
                                  title="Product List"
                                  color="primary"
                                  />
                                    
                                  <div>
                                                                              {/* list of Product Component*/}
                                        <Product cost={10}
                                        id={1}
                                        title={"Milk"}
                                        fieldChange={this.handleChange}
                                        /> 
                                 
                                        <Product cost={4}
                                        id={2}
                                        title={"Bread"}
                                        fieldChange={this.handleChange}
                                        /> 
                                  
                                        <Product cost={5}
                                        id={3}
                                        title={"Butter"}
                                        fieldChange={this.handleChange}
                                        /> 
                                  
                                        <Product cost={5}
                                        id={4}
                                        title={"Jam"}
                                        fieldChange={this.handleChange}
                                        />   
                                  
                                  
                                  </div>
                                  <br/>
                                                                                              {/*Final Confirmation*/}
                                  <RaisedButton primary='true'                                  
                                  label='Confirm Order'
                                  onClick={this.nextStep}
                                  />
                                   
                                  
                                  
                                  </React.Fragment>
                                </MuiThemeProvider>
                
                
                );

                case 3:return(
                                <ConfirmDetails data={this.state} nextStep={this.nextStep} />



                );
                case 4: return(

                                <Success  data={this.state} />

                ); 
        
                default:;
        }
    }
}

