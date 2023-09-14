var today = new Date();
// Calculate the minimum birthdate (55 years ago from today)
var minBirthdate = new Date(today);
minBirthdate.setFullYear(minBirthdate.getFullYear() - 55);
// Calculate the maximum birthdate (18 years ago from today)
var maxBirthdate = new Date(today);
maxBirthdate.setFullYear(maxBirthdate.getFullYear() - 18);
// Convert the minimum and maximum birthdates to string format (yyyy-mm-dd)
var minDateStr = minBirthdate.toISOString().split("T")[0];
var maxDateStr = maxBirthdate.toISOString().split("T")[0];
// Set the 'min' and 'max' attributes of the input field
document.getElementById("birthdate").setAttribute("min", minDateStr);
document.getElementById("birthdate").setAttribute("max", maxDateStr);
var student = [];
function addstudent(e) {
    e.preventDefault();
    var ob1 = {
        name: "",
        email: "",
        password: "",
        dob: "",
        terms: "",
    };
    ob1.name = document.registrationForm.name.value;
    ob1.email = document.registrationForm.email.value;
    ob1.password = document.registrationForm.password.value;
    ob1.dob = document.registrationForm.dob.value;
    ob1.terms = document.registrationForm.terms.checked ? "Yes" : "No";
    student.push(ob1);
    genUI();
}

function genUI() {
    document.getElementById("d").innerHTML = "";
    student.forEach(function (student, b) {
        var ntr = document.createElement("tr");
        for (var k in student) {
            var ntd = document.createElement("td");
            ntd.innerHTML = student[k];
            ntr.appendChild(ntd);
        }
        document.getElementById("d").appendChild(ntr);
    });
}
