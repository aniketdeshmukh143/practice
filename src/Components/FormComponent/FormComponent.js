import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { allowOnlyAlphabet, allowOnlyAlphaNumeric, allowOnlyNumber, allowOnlyAlphaNumericForAddress } from '../../CommonFunctions/CommonFunction';
import { ValidateForm } from '../../Validations/FormValidation';
import { createUser, updateUser } from '../../Redux/AsyncApi/AsyncAPI';




const FormComponent = (props, ref) => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [isValidForm, setIsValidForm] = useState(null);
    const [editRowId, setEditRowId] = useState(null);


    useImperativeHandle(ref, () => ({
        callSubmitFunction: (type) => {
            handleClickCreateUpdateUser(type);
        },
        callResetAllStateFunction: () => {
            clearAllState();
        },
        callAllStateForEditFunction: (editRowObj) => {
            setEditRowId(editRowObj.id);
            if(editRowObj.hasOwnProperty("username")){
                setUsername(editRowObj.username);
            }else{
                setUsername("");
            }
            setEmail(editRowObj.email);
            setFirstName(editRowObj.first_name ?editRowObj.first_name :editRowObj.firstname);
            setLastName(editRowObj.last_name ?editRowObj.last_name :editRowObj.lastname);

            if(editRowObj.hasOwnProperty("address")){
                setAddress(editRowObj.address);
            }else{
                setAddress("");
            }

            if(editRowObj.hasOwnProperty("phonenumber")){
                setPhoneNumber(editRowObj.phonenumber);
            }else{
                setPhoneNumber("");
            }

            if(editRowObj.hasOwnProperty("pincode")){
                setPinCode(editRowObj.pincode);
            }else{
                setPinCode("");
            }
            setIsValidForm(null);
        }
    }))

    const clearAllState = () => {
        setUsername("");
        setEmail("");
        setFirstName("");
        setLastName("");
        setAddress("");
        setPhoneNumber("");
        setPinCode("");
        setIsValidForm(null);
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
        if (isValidForm !== null) {
            let obj = {
                ...isValidForm,
                usernameError: ""
            }
            setIsValidForm(obj);
        }
    }

    const handleChangeEmail = (e) => {
        let stringVal = e.target.value
        setEmail(stringVal)
        if (isValidForm !== null) {
            let obj = {
                ...isValidForm,
                emailError: ""
            }
            setIsValidForm(obj);
        }
    }

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value)
        if (isValidForm !== null) {
            let obj = {
                ...isValidForm,
                firstNameError: ""
            }
            setIsValidForm(obj);
        }
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
        if (isValidForm !== null) {
            let obj = {
                ...isValidForm,
                lastNameError: ""
            }
            setIsValidForm(obj);
        }
    }

    const handleChangeAddress = (e) => {
        setAddress(e.target.value)
        if (isValidForm !== null) {
            let obj = {
                ...isValidForm,
                addressError: ""
            }
            setIsValidForm(obj);
        }
    }

    const handleChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
        if (isValidForm !== null) {
            let obj = {
                ...isValidForm,
                phoneNumberError: ""
            }
            setIsValidForm(obj);
        }
    }

    const handleChangePinCode = (e) => {
        setPinCode(e.target.value)
        if (isValidForm !== null) {
            let obj = {
                ...isValidForm,
                pinCodeError: ""
            }
            setIsValidForm(obj);
        }
    }


    const handleClickCreateUpdateUser = (type) => {
        const payload = {
            "username": username,
            "email": email,
            "firstname": firstName,
            "lastname": lastName,
            "address": address,
            "phonenumber": phoneNumber,
            "pincode": pinCode
        }

        let validateForm = ValidateForm(payload)
        setIsValidForm(validateForm)

        if (validateForm.isValidFlag) {
            if(type === "update"){
                payload["id"] = editRowId
                dispatch(updateUser(payload));
            }else{
                dispatch(createUser(payload));
            }
            setEditRowId(null);
            props.handleClose();
        } else {
            alert("Please fill all required field")
        }
    }



    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField
                    label="Username"
                    id="outlined-size-small1"
                    size="small"
                    value={username}
                    onChange={handleChangeUsername}
                    onKeyDown={allowOnlyAlphaNumeric}
                    error={isValidForm !== null && isValidForm.usernameError !== ""}
                    helperText={isValidForm !== null ? isValidForm.usernameError : ""}
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Email"
                    id="outlined-size-small2"
                    size="small"
                    value={email}
                    type={"email"}
                    onChange={handleChangeEmail}
                    error={isValidForm !== null && isValidForm.emailError !== ""}
                    helperText={isValidForm !== null ? isValidForm.emailError : ""}
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="First Name"
                    id="outlined-size-small3"
                    size="small"
                    value={firstName}
                    onChange={handleChangeFirstName}
                    onKeyDown={allowOnlyAlphabet}
                    error={isValidForm !== null && isValidForm.firstNameError !== ""}
                    helperText={isValidForm !== null ? isValidForm.firstNameError : ""}
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Last Name"
                    id="outlined-size-small4"
                    size="small"
                    value={lastName}
                    onChange={handleChangeLastName}
                    onKeyDown={allowOnlyAlphabet}
                    error={isValidForm !== null && isValidForm.lastNameError !== ""}
                    helperText={isValidForm !== null ? isValidForm.lastNameError : ""}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Address"
                    id="outlined-size-small6"
                    size="small"
                    value={address}
                    onChange={handleChangeAddress}
                    onKeyDown={allowOnlyAlphaNumericForAddress}
                    error={isValidForm !== null && isValidForm.addressError !== ""}
                    helperText={isValidForm !== null ? isValidForm.addressError : ""}
                    fullWidth
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    label="Mobile No."
                    id="outlined-size-small5"
                    size="small"
                    value={phoneNumber}
                    onChange={handleChangePhoneNumber}
                    onKeyDown={allowOnlyNumber}
                    InputProps={{
                        inputProps: {
                            maxLength: 10,
                            minLength: 10
                        }
                    }}
                    error={isValidForm !== null && isValidForm.phoneNumberError !== ""}
                    helperText={isValidForm !== null ? isValidForm.phoneNumberError : ""}
                    fullWidth
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    label="Pin Code"
                    id="outlined-size-small7"
                    size="small"
                    value={pinCode}
                    onChange={handleChangePinCode}
                    onKeyDown={allowOnlyNumber}
                    InputProps={{
                        inputProps: {
                            maxLength: 6,
                            minLength: 6
                        }
                    }}
                    error={isValidForm !== null && isValidForm.pinCodeError !== ""}
                    helperText={isValidForm !== null ? isValidForm.pinCodeError : ""}
                    fullWidth
                />
            </Grid>
        </Grid>
    )
}

export default forwardRef(FormComponent)




