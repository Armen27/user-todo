import React, { useState } from "react";
import UsersTable from './components/Table';
import Grid from '@material-ui/core/Grid';
import AddUserButton from "./components/AddUserButton";
import { makeStyles } from '@material-ui/core/styles';
import AddNewUserDialog from "./components/Dialog/AddNewUser";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(5),
    }
}));

const App = () => {

    const classes = useStyles();
    const [isShowAddNewUserDialog, setIsShowAddNewUserDialog] = useState(false);

    const toggleShowAddNewUserDialog = () => setIsShowAddNewUserDialog(!isShowAddNewUserDialog);

    return (
        <div className={classes.root}>
            <AddNewUserDialog
                open={isShowAddNewUserDialog}
                toggleShowAddNewUserDialog={toggleShowAddNewUserDialog}
            />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container justify={'center'}>
                        <Grid item xs={8}>
                            <AddUserButton toggleShowAddNewUserDialog={toggleShowAddNewUserDialog} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify={'center'}>
                        <Grid item xs={8}>
                            <UsersTable />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default App;
