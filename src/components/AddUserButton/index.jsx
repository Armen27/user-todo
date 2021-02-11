import React from 'react';
import Grid from "@material-ui/core/Grid";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}))

const AddUserButton = ({ toggleShowAddNewUserDialog })  => {
    const classes = useStyles();

    return (
        <Grid container>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<AddCircleOutlineIcon />}
                onClick={toggleShowAddNewUserDialog}
            >
                Create User
            </Button>
        </Grid>
    )
};

export default AddUserButton;