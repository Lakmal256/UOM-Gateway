import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Styles/table.css";

function createData(survey_id, survey, action) {
  return { survey_id, survey, action };
}

export default function BasicTable({ data, update }) {
  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Survey Id</TableCell>
              <TableCell align="center">Survey Name</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.survey_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.survey_id}
                </TableCell>
                <TableCell align="center">Survey {row.survey_id}</TableCell>
                <TableCell align="center">
                  <button onClick={() => update(row.survey_id)}>update</button>
                  <button>delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
