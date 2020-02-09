import React, { Component } from 'react';

import Select from 'react-select';

class Parameter extends Component{
    render(){
        return(
            <React.Fragment>
            <div className="form-group">
            <label htmlFor="">Aplicación:</label>
                <Select onChange={
                        e => this.setState({
                            values:{
                                ...this.props.values,
                                this.props.values.application: e.value
                            }
                        })
                        }
                        name="application"
                        options={this.props.appOptions}
                        />
            </div>

            <div className="form-group">
            <label htmlFor="">Nit:</label>
            <input onChange={this.props.handleChange} 
                    type="text" 
                    name="nit" 
                    className="form-control" 
                    value={this.props.values.nit}
                    required
                    />
            
            </div>

            <div className="form-group">
            <label htmlFor="">Nombre parametro:</label>
            <input onChange={this.props.handleChange} 
                    type="text" 
                    name="parameterName" 
                    className="form-control" 
                    value={this.props.values.parameterName}
                    required
                    />
            
            </div>

            <div className="form-group">
            <label htmlFor="">Valor parametro:</label>
            <input onChange={this.props.handleChange} 
                    type="text" 
                    name="parameterValue" 
                    className="form-control" 
                    value={this.props.values.parameterValue}
                    required
                    />
            
            </div>

            <div className="form-group">
            <label htmlFor="">Tipo:</label>
                <Select onChange={
                        e => this.setState({
                            form:{
                                ...this.props.values,
                                typeValue: e.value
                            }
                        })
                        }
                        name="typeValue"
                        options={this.props.typeOptions}
                        value={this.values.typeValue}
                        required
                        />
            </div>
            </React.Fragment>
        );
    }
}

export default Parameter;