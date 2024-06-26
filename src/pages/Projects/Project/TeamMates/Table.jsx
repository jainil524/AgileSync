
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

const columns = [
  { id: 'name', label: 'Name', minWidth: 250 },
  { id: 'skills', label: 'Skills', minWidth: 100 },
  { id: 'remove', label: 'Remove', minWidth: 100, align: 'right' },
];

function createData(name, email, skills) {
  return { name, email, skills };
}

const rows = [

];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (index) => {
    // Implement your delete logic here
    console.log(`Deleting row with index ${index}`);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell>
                    <div>{row.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#888' }}>{row.email}</div>
                  </TableCell>
                  <TableCell>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {row.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          style={{
                            backgroundColor: getSkillColor(skill),
                            color: '#fff',
                            padding: '5px 10px',
                            margin: '2px',
                            borderRadius: '5px',
                          }}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </TableCell>
                      
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

function getSkillColor(skill) {
  const colors = ['#FFADAD', '#FFD6A5', '#A0CED9', '#66a266', '#E26D5C', '#746AB0']; // Available colors excluding white
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}




