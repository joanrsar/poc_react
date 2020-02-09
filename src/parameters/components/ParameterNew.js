import React from 'react';
import Select from 'react-select';

import './styles/ParameterNew.css';

const appOptions = [
    { value: '01', label: 'Dataloading' },
    { value: '02', label: 'Extracupos' },
    { value: '03', label: 'Reconocer' },
];

const typeOptions = [
    { value: '01', label: 'String' },
    { value: '02', label: 'Boolean' },
    { value: '03', label: 'Date' },
];
class ParameterNew extends React.Component{
    
    state ={
        loading:false,
        error: null,
        form:{
            application: '',
            nit: '999999',
            parameterName: '',
            parameterValue: '',
            typeValue: '',
        }
      }
    

    handleChange = e =>{
         this.setState({
             form: {
                 ...this.state.form,
                 [e.target.name]: e.target.value
             }
         })
     }

     handleSubmit = async e =>{
        e.preventDefault();
        if( this.state.form.application === '' ){
            alert('Seleccione aplicación');
            return;
        }
        if( this.state.form.typeValue === '' ){
            alert('Seleccione Tipo');
            return;
        }
 
        /*this.setState({loading:true, error: null});
        try{
            await api.badges.create(this.state.form);
            this.setState({loading:false, error: null});
            this.props.history.push('/badges');
        }
        catch(error){
            this.setState({
                loading: false,
                error : error
            })
        }*/
    }

    render(){

  
        return(
            <div className="Parameters__container">
                <h1> Nuevo Parametro </h1>
                <div className ="container">
                  <div> 
                      <form onSubmit={this.handleSubmit}>  
                        <div className="form-group">
                        <label htmlFor="">Aplicación:</label>
                            <Select onChange={
                                    e => this.setState({
                                        form:{
                                            ...this.state.form,
                                            application: e.value
                                        }
                                    })
                                    }
                                    name="application"
                                    options={appOptions}
                                    />
                        </div>

                        <div className="form-group">
                        <label htmlFor="">Nit:</label>
                        <input onChange={this.handleChange} 
                                type="text" 
                                name="nit" 
                                className="form-control" 
                                value={this.state.form.nit}
                                required
                                />
                        
                        </div>

                        <div className="form-group">
                        <label htmlFor="">Nombre parametro:</label>
                        <input onChange={this.handleChange} 
                                type="text" 
                                name="parameterName" 
                                className="form-control" 
                                value={this.state.form.parameterName}
                                required
                                />
                        
                        </div>

                        <div className="form-group">
                        <label htmlFor="">Valor parametro:</label>
                        <input onChange={this.handleChange} 
                                type="text" 
                                name="parameterValue" 
                                className="form-control" 
                                value={this.state.form.parameterValue}
                                required
                                />
                        
                        </div>

                        <div className="form-group">
                        <label htmlFor="">Tipo:</label>
                            <Select onChange={
                                    e => this.setState({
                                        form:{
                                            ...this.state.form,
                                            typeValue: e.value
                                        }
                                    })
                                    }
                                    name="typeValue"
                                    options={typeOptions}
                                    required
                                    />
                        </div>

                        <button type="submit" onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ParameterNew;