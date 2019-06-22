import React, { Component } from 'react'

export default class Purchased extends Component {
    render() {
        return (
            <div>
              <div className="form-inline">
                          
                <span className="ml-5"><h4>{this.props.name} : </h4> </span>
                <h3> <span className="badge badge-warning m-2 ml-3"> ${this.props.value} </span> </h3>
              
              </div>
            </div>
        )
    }
}
