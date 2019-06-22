import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';

export default class CustDetails extends Component {
    render() {
        const { values,handleTxt,nextStep } = this.props;
        console.log(this.props);
        return (
        
        <MuiThemeProvider>
           <React.Fragment>
            
                <div>
                 <AppBar
                 title="Customer Details"
                 secondary='true'
                 />

                 
                 <br/>
                 <h6>                                                       {  /*Username TextField*/  }
                 <span className="badge badge-primary m-4">1</span>  
                 <TextField
                 hintText="Enter your Name"
                 floatingLabelText="Name"
                 onChange={handleTxt('name')}
                 defaultValue={values.name}
                 />
                 </h6>                                          
                 
                 
                 <h6>                                                       {  /*PhoneNumber TextField*/  }
                 <span className="badge badge-primary m-4">2</span> 
                 <TextField
                 hintText="Enter your Phone Number"
                 floatingLabelText="Phone Number"
                 onChange={handleTxt('phnNumber')}
                 defaultValue={values.phnNumber}
                 />
                 </h6>


                 <h6>                                                       {  /*EM@iL TextField*/  }
                 <span className="badge badge-primary m-4">3</span> 
                 <TextField
                 hintText="Enter your E-Mail"
                 floatingLabelText="E-Mail"
                 onChange={handleTxt('eMail')}
                 defaultValue={values.eMail}
                 />
                 </h6>
                 <br/>
                <RaisedButton 
                className="ml-5"
                primary='true'
                label='CONTINUE'
                onClick={nextStep}
                />
                </div>
           
           </React.Fragment>
        </MuiThemeProvider>
                                       
        
        );
    }
}
