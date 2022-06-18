const createHeaders=(arr)=>{
    const headers = {
        "Accept":"application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Frame-Options":"Deny"
    }

    if(arr && arr.length > 0){
        arr.map((singleHeader) => {
            return headers[singleHeader.key] = singleHeader.value
        })
    }

    return headers
}


const allowOnlyNumber = (event) => {
    let regex = new RegExp("^[0-9]+$");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if(event.which === 8 || event.which === 9){
        return true
    }else{
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    }
}

const allowOnlyAlphaNumeric = (event) => {
    let regex = new RegExp("^[a-zA-Z0-9]+$");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if(event.which === 8 || event.which === 9){
        return true
    }else{
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    }
}

const allowOnlyEmailFormat = (event) => {
    let regex = new RegExp("^[a-zA-Z0-9.@]+$");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if(event.which === 8 || event.which === 9 ){
        return true
    }else{
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    }
}

const allowOnlyAlphabet = (event) => {
    let regex = new RegExp("^[a-zA-Z]+$");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if(event.which === 8 || event.which === 9){
        return true
    }else{
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    }
}

const allowOnlyAlphaNumericForAddress = (event) => {
    let regex = new RegExp("^[a-zA-Z0-9]+$");
    let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if(event.which === 8 || event.which === 32 || event.which === 9){
        return true
    }else{
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    }
}

const checkIsvalidEmail = (email) => {
    if ((email.endsWith('.com') || email.endsWith('.in')) && email.includes("@")) {
        let slicedString = email.split("@");
        if (/[^a-zA-Z0-9]+$/.test(slicedString[0])) {
            alert("Please provide valid email address");
            return false;
        }else{
            return true;
        }
    }else{
        alert("Please provide valid email address");
        return false;
    }
}

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

export{
    createHeaders,
    allowOnlyNumber,
    allowOnlyAlphaNumeric,
    allowOnlyEmailFormat,
    allowOnlyAlphabet,
    checkIsvalidEmail,
    allowOnlyAlphaNumericForAddress,
    range
}