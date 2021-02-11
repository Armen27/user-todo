import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import useStyles from "../../useStyles";

const EditActions = (props) => {
    const { handleDoneEdit, onRevert, row } = props;
    const classes = useStyles();

    return (
        <div className={classes.actionButtons}>
            <IconButton
                aria-label="done"
                onClick={() => handleDoneEdit(row.id)}
            >
                <DoneIcon />
            </IconButton>
            <IconButton
                aria-label="revert"
                onClick={() => onRevert(row.id)}
            >
                <RevertIcon />
            </IconButton>
        </div>
    )
};

export default EditActions;