import React from 'react';
import MUIDataTable from "mui-datatables";
class ParameterList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <MUIDataTable
                title={this.props.title}
                data={this.props.results}
                columns={this.props.columns}
                options={this.props.options}
                /> 
            </React.Fragment>
        )
    }
}

export default ParameterList;