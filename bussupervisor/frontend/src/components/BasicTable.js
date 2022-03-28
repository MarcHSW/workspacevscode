import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';


export default (props) => {

    const columns = props.columns;
    const rows = props.rows;

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const tableContainerStyle = {
        margin: "auto",
        width: "60%",
        marginTop: "3rem"
    }

    return (
        <div style={tableContainerStyle}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: "650px" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                columns.map(column => {
                                    return <TableCell align="center">{column}</TableCell>
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map(row => {
                                return <StyledTableRow key={row.id}>
                                    {
                                        Object.entries(row).map(entry => {
                                            return <TableCell component="td" scope="row" align="center">
                                                {entry[1]}
                                            </TableCell>
                                        })
                                    }
                                </StyledTableRow>

                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}