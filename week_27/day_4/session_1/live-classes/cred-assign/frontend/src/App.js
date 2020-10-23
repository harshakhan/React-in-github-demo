import React, { Component } from 'react'
import { withStyles,} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const useStyles = () => ({
  table: {
    maxWidth: 700,
  },
});



class App extends Component {
  state = {
    loading:true,
    students:[]
  }

  componentDidMount = () =>{
    axios.get('http://localhost:5001/api/students').then(res => {
      this.setState({
        students:res.data,
        loading: false
      })
    })

  }
  render(){
    const {students,loading} = this.state;
    const {classes} = this.props;
    return (
      <div classes = "App">
        {loading ? (
          <p>Sudents are loading...</p>
        ): 
        (
          <TableContainer align="center" component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">FIRST NAME</StyledTableCell>
              <StyledTableCell align="right">LAST NAME</StyledTableCell>
              <StyledTableCell align="right">EMAIL</StyledTableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <StyledTableRow key={student.id}>
                <StyledTableCell component="th" scope="student">
                  {student.id}
                </StyledTableCell>
                <StyledTableCell align="right">{student.first_name}</StyledTableCell>
                <StyledTableCell align="right">{student.last_name}</StyledTableCell>
                <StyledTableCell align="right">{student.email}</StyledTableCell>
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

        )}
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
