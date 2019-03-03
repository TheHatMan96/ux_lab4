import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class UnitecClass extends React.Component{
	constructor(props){
		super(props);
		this.state = {UnitecClassName:'CCC 307'};
		this.continue = this.continue.bind(this);
	}

  handleChange(event){
    this.setState({UnitecClassName:event.target.value})
  }

	continue=()=>{
		this.setState({UnitecClassName:'CCC 307'})
	}


	render(){
		return (
		<div>
		<TextField
        id="outlined-name"
        label="Nombre de clase"
        margin="normal"
        variant="outlined"
        />
		<span> </span>
		<TextField
        id="outlined-name2"
        label="Nota de Parcial 1"
        margin="normal"
        variant="outlined"
        />
		<p> </p>
		<TextField
        id="outlined-name"
        label="Nombre de clase"
        margin="normal"
        variant="outlined"
        />
		<span> </span>
		<TextField
        id="outlined-name2"
        label="Nota de Parcial 1"
        margin="normal"
        variant="outlined"
        />
		<p> </p>
		<TextField
        id="outlined-name"
        label="Nombre de clase"
        margin="normal"
        variant="outlined"
        />
		<span> </span>
		<TextField
        id="outlined-name2"
        label="Nota de Parcial 1"
        margin="normal"
        variant="outlined"
        />
		<p> </p>
			<Button  variant="contained" color="primary" onClick={this.continue}>Continuar</Button>
		<p> </p>

		<Paper>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Clase</TableCell>
            <TableCell align="right">Parial 1</TableCell>
            <TableCell align="right">Parcial 2</TableCell>
            
          </TableRow>
        </TableHead>
        
      </Table>
    </Paper>

		</div>		
		);
	}
}

UnitecClass.defaultProps ={
	unitecStudentName : 'name student'
};

UnitecClass.propTypes ={
	unitecStudentName : PropTypes.string.isRequired
};



export default UnitecClass;
