function submitForm(event) {
    event.preventDefault();

    if (validateForm()) {
        console.log("Name: ", document.getElementById("name").value);
        console.log("Email: ", document.getElementById("email").value);
        console.log("Phone: ", document.getElementById("phone").value);
        console.log("BITS ID: ", document.getElementById("bitsId").value);
        console.log("Hostel: ", document.getElementById("hostel").value);
        console.log("Size: ", document.querySelector('input[name="size"]:checked').value);
        console.log("Agreed to terms: ", document.getElementById("terms").checked);
    }
}

function validateForm() {
    var name = document.getElementById("name");
    var nameError = document.getElementById("nameError");
    if (name.value.length < 5 || name.value.length > 50) {
        nameError.textContent = "Name must be between 5 and 50 characters";
        return false;
    } else {
        nameError.textContent = "";
    }
    return true;
}