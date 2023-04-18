function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Coloque o Nome para continuar")
        return false;
    }
}