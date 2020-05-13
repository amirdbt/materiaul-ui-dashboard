import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  Paper,
  Typography,
  Chip
} from "@material-ui/core";

const createData = (name, start_date, end_date, state, assignee) => {
  return { name, start_date, end_date, state, assignee };
};

const rows = [
  createData("Project Aurora", "01/01/2020", "31/06/2020", "In Progress", "Amir Dambatta"),
  createData("Project Eagle", "01/01/2020", "31/06/2020", "In Progress", "Karima Dambatta"),
  createData("Project Fireball", "01/01/2020", "31/06/2020", "In Progress", "Sadiq Dambatta"),
  createData("Project Yoda", "01/01/2020", "31/06/2020", "In Progress", "Mukhtar Dambatta"),
  createData("Project Zulu", "01/01/2020", "31/06/2020", "In Progress", "Hasina Dambatta"),
];

const useStyles =makeStyles((theme)=>({
    root:{
        marginTop: "20px"
    }
}))

const TableDetails = () => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
      <TableContainer component={Paper} elevation={0}>
      <Typography variant="h6" style={{margin :"15px"}}>Latest Projects</Typography>
        <Table>
            
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">End Date</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">Assignee</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.start_date}</TableCell>
              <TableCell align="right">{row.end_date}</TableCell>
              <TableCell align="right"> <Chip label={row.state} color="secondary" size="small" /> </TableCell>
              <TableCell align="right">{row.assignee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableDetails;
