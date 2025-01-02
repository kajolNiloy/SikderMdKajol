//This function will be called when the user clicks the 'Calculate Age' button

function calculateAge() {
    const dob = document.getElementById('dob').value;


if (!dob) {
    alert("Please enter a valid date of birth.");
    return;
}

const birthDate = new Date(dob);

const today = new Date();

//calculate the difference in years

let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();

if (m < 0 || (m === 0 &&  today.getDate() < birthDate.getDate())) {
    age--;
}

//Display the result in the 'result' paragraph

document.getElementById('result').textContent = "Your Age: " + age;
}