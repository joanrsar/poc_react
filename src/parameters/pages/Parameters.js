import React from "react";
import "./styles/Parameters.css";
import Select from 'react-select';

import ParameterList from './../components/ParametersList'; 


const appOptions = [
    { value: '01', label: 'Dataloading' },
    { value: '02', label: 'Extracupos' },
    { value: '03', label: 'Reconocer' },
];

const cols = ["userId", "id", "title", "body"];
const options = {
    filterType: 'textField',
  };



class Parameters extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    form: {
        application:'',
        nit: '999999',
        parameterName: '',
        parameterValue: '',
        typeValue: '',
    },
    results: []
  };


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
    const url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url,{
            method: "GET"
        }).then(response => response.json())
        .then(posts =>{
           this.setState({
                results: posts
            })
        })

  
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
         <!-- Datatable options={this.state.table} -->
    }*/
    }

    componentDidMount(){
        
    }


    handleClean = e =>{
     this.setState({
         results: []
     });
        
    }
  render() {

    return (
     <React.Fragment>
    <div className="Parameters__container">
    <h1> Consultar Parametro </h1>
        <div className="container">
           <form onSubmit={this.handleSubmit} >
            <div className="row">
                <div className="col-6">
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
                <div className="col-6">
                <label htmlFor="">Nit:</label>
                        <input onChange={this.handleChange} 
                                type="text" 
                                name="nit" 
                                className="form-control" 
                                value={this.state.form.nit}
                                />
                </div>

                <div className="col-6">
                <label htmlFor="">Nombre parametro:</label>
                        <input onChange={this.handleChange} 
                                type="text" 
                                name="parameterName" 
                                className="form-control" 
                                value={this.state.form.parameterName}
       
                                />
                </div>

            </div>
                <div className="button__div">
                  <button type="submit" onClick={this.handleClick} className="btn btn-primary ">Consultar</button>  
                  <button type="button" onClick={this.handleClean} className="btn btn-primary Limpiar ">Limpiar</button>                  
                </div>                           
            </form> 
            { this.state.results.length > 0  ? 
            <div className="Datatable">
                <ParameterList 
                    title = "Lista de Parametros"
                    results ={this.state.results}
                    columns = {cols}
                    options ={options}
                />                    
            
            </div>
        : null }
                             
            
         </div>
         
         
               
      
    </div>
  
    </React.Fragment>
    );
  }
}

export default Parameters;
