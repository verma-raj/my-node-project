var bttn = document.getElementById("submitButton");

function showAlert() {
    var name = document.getElementById("fullName").value;
    alert("Hello " + name + "!");
}

//Used onclick event handler property to call showAlert() function
bttn.onclick = showAlert;
