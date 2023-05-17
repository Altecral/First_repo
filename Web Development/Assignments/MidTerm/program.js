//Author: Alejandro Manrique
//Date: 03-19-2023
function addressFunction() {
    if (document.getElementById("same").checked) {
        copyFieldValue("fname", "fname1");
        copyFieldValue("lname", "lname1");
        copyFieldValue("primaryaddress", "secondaryaddress");
        copyFieldValue("city", "city1");
        copyFieldValue("state", "state1");
        copyFieldValue("primaryzip", "secondaryzip");
        copyFieldValue("phone", "phone1");
    } else {
        clearFieldValue("fname1");
        clearFieldValue("lname1");
        clearFieldValue("secondaryaddress");
        clearFieldValue("city1");
        clearFieldValue("state1");
        clearFieldValue("secondaryzip");
        clearFieldValue("phone1");
    }
}

function copyFieldValue(fromId, toId) {
    const fromField = document.getElementById(fromId);
    const toField = document.getElementById(toId);

    if (fromField.value === "") {
        toField.style.backgroundColor = "pink";
        toField.setCustomValidity("Please fill out this field.");
        showTooltip(fromId);
    } else {
        toField.value = fromField.value;
        toField.style.backgroundColor = "";
        toField.setCustomValidity("");
    }
}

function clearFieldValue(fieldId) {
    const field = document.getElementById(fieldId);
    field.value = "";
    field.classList.add("invalid-field");
    field.setCustomValidity("Please fill out this field.");
}