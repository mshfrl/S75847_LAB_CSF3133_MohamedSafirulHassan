function validateNumericInput(){
    let age = document.forms["numericForm"]["age"].value;

    //check if input is empty
    if(age == ""){
        alert("Age field cannot be empty");
        return false;
    }

    //check if input is a numeric value
    if(isNaN(age)){
        alert("Please enter a valid numeric value.");
        return false;
    }

    //check if input is within specific range
    if(age <1 || age > 120){
        alert("Please enter a number between 1 and 120.");
        return false;
    }

    //if all validations pass
    alert("Form submitted successfully!");
    return true;
}