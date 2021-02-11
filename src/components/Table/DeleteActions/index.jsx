import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import useStyles from "../../useStyles";


const EditDeleteActions = ({ onToggleRemoveMode, onToggleEditMode, row }) => {
    const classes = useStyles();

    return (
        <div className={classes.actionButtons}>
            <IconButton
                aria-label="edit"
                onClick={() => onToggleEditMode(row.id)}
            >
                <EditIcon />
            </IconButton>
            <IconButton
                aria-label="delete"
                onClick={() => onToggleRemoveMode(row.id)}
            >
                <DeleteForeverIcon />
            </IconButton>
        </div>
    )
};

export default EditDeleteActions;