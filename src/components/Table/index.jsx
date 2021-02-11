import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteActions from "./DeleteActions";
import EditActions from "./EdtiActions";
import useStyles from "../useStyles";
import { useSelector } from "react-redux";
import { RemoveUserRequest, UpdateUserRequest } from "../../redux/users/actions";
import usePrevious from "../../customHooks/usePrevious";
import CustomTableCell from "./CustomTableCell";

const UsersTable = ({ RemoveUser, UpdateUser }) => {
    const classes = useStyles();

    // get store data using useSelector
    const {
        usersData,
        createUserSuccess,
        removeUserSuccess,
        updateUserSuccess
    } = useSelector(state => state.user);
    const [rows, setRows] = useState([]);
    const [previous, setPrevious] = useState({});
    const previousCreateUserSuccess = usePrevious(createUserSuccess);


    // Perform when crate is successfully
    useEffect(() => {
        if (createUserSuccess && previousCreateUserSuccess === false) {
            setRows(usersData);
        }
    }, [usersData, createUserSuccess, previousCreateUserSuccess]);


    // Perform when remove user is successfully
    useEffect(() => {
        if (removeUserSuccess && createUserSuccess === false) {
            setRows(usersData);
        }
    }, [removeUserSuccess, usersData, createUserSuccess]);


    useEffect(() => {
        if (updateUserSuccess) {
            setRows(usersData);
        }
    }, [updateUserSuccess, usersData]);

    const onToggleEditMode = id => {
        setRows(state => {
            return rows.map(row => {
                if (row.id === id) {
                    return { ...row, isEditMode: !row.isEditMode };
                }
                return row;
            });
        });
    };

    const onToggleRemoveMode = id => RemoveUser(id);

    const onChange = (e, row) => {
        if (!previous[row.id]) {
            setPrevious(state => ({ ...state, [row.id]: row }));
        }
        const value = e.target.value;
        const name = e.target.name;
        const { id } = row;
        const newRows = rows.map(row => {
            if (row.id === id) {
                return { ...row, [name]: value };
            }
            return row;
        });
        setRows(newRows);
    };


    const handleUpdate = id => {
       const filteredData = rows.find(row => row.id === id);
       const { name, phone, emial } = filteredData;
       if (!name || !phone || !emial) {
           return
       }
       UpdateUser(filteredData);

    }

    const onRevert = id => {
        const newRows = rows.map(row => {
            if (row.id === id) {
                previous[id].isEditMode = false;
                return previous[id] ? previous[id] : row;
            }

            return row;
        });
        setRows([...newRows]);
    };

    return (
        <Paper className={classes.root}>
                <Table className={classes.table} aria-label="caption table">
                    <caption>Users Data Table</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left" />
                            <TableCell align="left" />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <CustomTableCell {...{row, name: "name", onChange}} />
                                <CustomTableCell {...{row, name: "email", onChange}} />
                                <CustomTableCell {...{row, name: "phone", onChange}} />
                                <TableCell className={classes.selectTableCell}>
                                    {row.isEditMode ? (
                                        <EditActions handleDoneEdit={handleUpdate} onRevert={onRevert} row={row}/>
                                    ) : (
                                        <DeleteActions  onToggleEditMode={onToggleEditMode} onToggleRemoveMode={onToggleRemoveMode} row={row}/>

                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
    );
}

// Dispatch Redux
const mapDispatchToProps = (dispatch) => ({
    RemoveUser: (data) => dispatch(RemoveUserRequest(data)),
    UpdateUser: (data) => dispatch(UpdateUserRequest(data))
});

export default connect(null, mapDispatchToProps)(UsersTable);
