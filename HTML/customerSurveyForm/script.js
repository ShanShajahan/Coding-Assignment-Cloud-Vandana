
alert("hii");
function submitForm() {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var gender = document.querySelectorAll('input[name="gender"]:checked');
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    // Check if gender is selected
    var genderValue = [];
    for (var i = 0; i < gender.length; i++) {
        genderValue.push(gender[i].value);
    }

    if (!firstName || !lastName || !dob || !country || genderValue.length === 0 || !profession || !email || !mobile) {
        alert('Please fill in all required fields');
        return;
    }


    var resultMessage = "Survey Results:\n" +
        "First Name: " + firstName + "\n" +
        "Last Name: " + lastName + "\n" +
        "Date of Birth: " + dob + "\n" +
        "Country: " + country + "\n" +
        "Gender: " + genderValue.join(", ") + "\n" +
        "Profession: " + profession + "\n" +
        "Email: " + email + "\n" +
        "Mobile Number: " + mobile;

    alert(resultMessage);

    resetForm();
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}