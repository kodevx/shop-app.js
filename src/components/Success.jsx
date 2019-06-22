import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import  AppBar  from 'material-ui/AppBar';

export default class Success extends Component {
    render() {
        const {name,eMail} = this.props.data;
        return (
            
            <div>
               <MuiThemeProvider>
                  <React.Fragment>
                  
                  <AppBar
                  title="Order Confirmed!"
                  secondary='true'
                  />
                  <br/>

                  <h3>Hello {name} ,</h3>
<h4>Your Order is currently being processed and you will soon get a confirmation via E-Mail( {eMail} ) along with your Delivery Address.</h4>
                  
                  

                </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}
