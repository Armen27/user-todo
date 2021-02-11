import React, { memo, useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import useStyles from "../../useStyles";
import { useDispatch } from "react-redux";

const AddNewUser = memo(({ open, toggleShowAddNewUserDialog }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [value, setValue] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Preform when component unmounted
    useEffect(() => {
        return () => {
            setValue({
                name: '',
                email: '',
                phone: ''
            });
        }
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValue(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // Used Redux dispatch hook
    const handleSubmit = () => {
        dispatch({
            type: 'CREATE_USER_REQUEST',
            ...value
        });
        setValue({
            name: '',
            email: '',
            phone: ''
        });
        toggleShowAddNewUserDialog();
    }

    const handleClose = () => {
        toggleShowAddNewUserDialog();
        setValue({
            name: '',
            email: '',
            phone: ''
        });
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={toggleShowAddNewUserDialog}
                fullWidth={true}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Create New User</DialogTitle>
                <ValidatorForm
                    ref={useRef()}
                    onSubmit={handleSubmit}
                    onError={errors => console.log(errors)}
                >
                <DialogContent>
                            <TextValidator
                                label="Name"
                                onChange={(e) => handleChange(e)}
                                name="name"
                                value={value.name}
                                validators={['required']}
                                className={classes.validationTextFields}
                                errorMessages={['this field is required', 'incorrect value']}
                            />
                            <TextValidator
                                label="Email"
                                name="email"
                                onChange={(e) => handleChange(e)}
                                value={value.email}
                                validators={['required', 'isEmail']}
                                className={classes.validationTextFields}
                                errorMessages={['email is not valid', 'incorrect value']}
                            />
                            <TextValidator
                                label="Phone"
                                onChange={(e) => handleChange(e)}
                                name="phone"
                                value={value.phone}
                                validators={['required', 'isNumber']}
                                className={classes.validationTextFields}
                                errorMessages={['phone is not valid', 'incorrect value']}
                            />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button color="primary" autoFocus type="submit">
                        Create
                    </Button>
                </DialogActions>
            </ValidatorForm>
            </Dialog>
        </div>
    );
});

export default AddNewUser;