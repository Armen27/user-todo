import React  from 'react';
import useStyles from "../../useStyles";
import TableCell from "@material-ui/core/TableCell";
import { TextField } from "@material-ui/core";
import validateEmail from "../../../helpers/validateEmail";


const CustomTableCell = ({ row, name, onChange }) => {
    const classes = useStyles();
    const { isEditMode } = row;

    return (
        <TableCell align="left" className={classes.tableCell}>
            {isEditMode ? (
                <TextField
                    error={
                        name === 'phone' ? !parseInt(row[name]) :
                            name === 'email' ? !validateEmail(row[name]) :
                                name === 'name' ? !row[name] : ''
                    }
                    id="outlined-error-helper-text"
                    value={row[name]}
                    helperText={
                        name === 'phone' && !parseInt(row[name]) ? 'Incorrect entry.' :
                            name === 'email' && !validateEmail(row[name]) ? 'Incorrect entry.' :
                                name === 'name' && !row[name] ? 'Incorrect entry.' : ''
                    }
                    variant="filled"
                    name={name}
                    onChange={e => onChange(e, row)}
                    className={classes.editableInput}
                />
            ) : (
                row[name]
            )}
        </TableCell>
    )
};

export default CustomTableCell;