import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import Purchased from './Purchased'
import RaisedButton  from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge'


export default class ConfirmDetails extends Component {
  
    render() {
        const { mCost,brCost,btCost,jCost } = this.props.data;           //Getting the Cost of all purchased and non purchased item
        
        const products = [                                               //Creating an array products and assigning name and cost for each item
            { name:"Milk",cost:mCost },
            { name:"Bread",cost:brCost },
            { name:"Butter",cost:btCost },
            { name:"Jam",cost:jCost }
        ]
         
        
        let Purchase = products.filter(prod => prod.cost!==0);          //Filtering out all Unpurchased item from [products] and dynamically assigning it to [purchase] array containing all purchased item
        let nItem = Purchase.length;
        const tCost = Purchase.reduce((acc,val) => {                    //Calculating the Totalcost of all purchased item
              return acc + val.cost;
         },0);
        
        
        return (
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        
                        <AppBar                                                                       
                         title="Confirm Order"
                         primary='true'
                        /> <br/>
                                                                                                    
                        <div align="left" className="form-inline ml-4">                                          
                        <Badge badgeContent={nItem} secondary='true'>  
                           <h3>  Order Details  </h3>
                        </Badge>   
                        </div> <br/>
                          
                        <h3 align="left" className="ml-5">Hello {this.props.data.name} ,</h3>
                        <br/>
                                {/* Displaying the Purchased Component (Displays all purchased Items) by passing the purchased product details  */}
                        { Purchase.map(product=>(<Purchased  name={product.name} value={product.cost}/>)) }   
                        <br/>

                        <div className="form-inline">
                        <h3  align ="left" className="ml-5">Total Cost <span className="badge badge-danger ml-3"> ${tCost} </span>  </h3>
                        </div>
                        <br/>
                          
                        <RaisedButton
                         label="Proceed to Checkout"
                         primary='true'
                         onClick={this.props.nextStep}
                        />   

                    
                    </React.Fragment>
                </MuiThemeProvider>
              </div>
        )
    }
}
