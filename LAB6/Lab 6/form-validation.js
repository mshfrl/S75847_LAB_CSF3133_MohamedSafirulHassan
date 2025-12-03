function validateForm(){
    let fname = document.forms["myform"]["fname"].value;

    if(fname == ""){
        alert("First Name must be filled out");
        return false;
    }
}