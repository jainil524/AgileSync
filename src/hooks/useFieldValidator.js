function useFieldValidator(Fields) {
    
    let FieldFunction = {
        "email": validateEmail,
        "password": passwordValidator,
        "name": textValidator,
        "text": textValidator
    };
    
    if(Fields.length === 0) return [true, true];

    let VaildationResult = Fields.map((field) => {
        let val = FieldFunction[field.name](field.value)
        return {
            [field.name]: val
        };
    });

    return VaildationResult;

}

function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length === 0) return "Email is required";

    // Check if the email matches the regular expression
    if (!emailRegex.test(email)) {
        return "Invalid email format";
    }

    // If the email format is valid, return null (no error)
    return true;
}

function passwordValidator(password) {

    if (password.length === 0) return "Password is required";

    // Check for at least 8 characters
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter";
    }

    // Check for at least one number
    if (!/\d/.test(password)) {
        return "Password must contain at least one number";
    }

    // Check for at least one special character
    if (!/[^A-Za-z0-9]/.test(password)) {
        return "Password must contain at least one special character";
    }

    // If all conditions pass, return null (no error)
    return true;
}

function textValidator(name){
    if(name.length === 0) return "Name is required";
    

    let textFormatChecker = /^[a-zA-Z]+$/;


    if(!textFormatChecker.test(name)) return "Name must contain only alphabets";
    
    return true;

}


export default useFieldValidator
