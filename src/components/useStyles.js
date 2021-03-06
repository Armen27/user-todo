import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(3),
        overflowX: "auto"
    },
    table: {
        minWidth: 650
    },
    selectTableCell: {
        width: 60
    },
    tableCell: {
        width: 450,
        height: 40
    },
    input: {
        width: 130,
        height: 40
    },
    actionButtons: {
        width: "100%",
        marginTop: theme.spacing(3),
        overflowX: "auto",
        display: "flex",

    },
    validationTextFields: {
        width: '100%',
        margin: theme.spacing(1),
    },
    editableInput: {
        width: '100%',
    }
}));