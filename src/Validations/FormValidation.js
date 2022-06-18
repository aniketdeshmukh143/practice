import {checkIsvalidEmail} from '../CommonFunctions/CommonFunction';


const ValidateForm = (formObj) => {
    let returnObj = {
        usernameError: "",
        emailError: "",
        firstNameError: "",
        lastNameError: "",
        addressError: "",
        phoneNumberError: "",
        pinCodeError: "",
        isValidFlag: true
    }

    const isValidEmail = checkIsvalidEmail(formObj.email)

    if(formObj.username.length === 0){
        returnObj.usernameError = "Username is required"
        returnObj.isValidFlag = false
    }

    if(formObj.email.length === 0 || !isValidEmail){
        returnObj.emailError = "Email is required"
        returnObj.isValidFlag = false
    }

    if(formObj.firstname.length < 3){
        returnObj.firstNameError = "First Name is required"
        returnObj.isValidFlag = false
    }

    if(formObj.lastname.length < 3){
        returnObj.lastNameError = "Last Name is required"
        returnObj.isValidFlag = false
    }

    if(formObj.address.length === 0){
        returnObj.addressError = "Address is required"
        returnObj.isValidFlag = false
    }

    if(formObj.phonenumber.length <= 9){
        returnObj.phoneNumberError = "Please type correct Phone Number"
        returnObj.isValidFlag = false
    }

    if(formObj.pincode.length <= 5){
        returnObj.pinCodeError = "Please type correct PinCode"
        returnObj.isValidFlag = false
    }

    return returnObj
}

export {
    ValidateForm
}