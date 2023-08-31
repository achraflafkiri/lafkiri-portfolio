emailjs.init('VPHXCprBTqU0ynXqP'); // Replace 'user_yourUserId' with your actual user ID

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const btn = document.querySelector(".custom-btn");

    // Clear previous alerts and error messages
    clearAlerts();
    clearErrors();

    // Validate the form before sending
    if (validateForm()) {
        btn.innerHTML = "Sending...";

        const serviceID = "service_b3itza8"; // Replace 'your_service_id' with your actual service ID
        const templateID = "template_14kb8at"; // Replace 'your_template_id' with your actual template ID

        emailjs.sendForm(serviceID, templateID, this).then(
            function () {
                btn.innerHTML = "SEND";
                displayAlert("success", "Sent successfully!");
                document.getElementById("form").reset(); // Reset the form
            },
            function (err) {
                btn.innerHTML = "SEND";
                displayAlert("danger", "An error occurred. Please try again.");
            }
        );
    }
});

function validateForm() {
    let isValid = true;

    const fullName = document.getElementById("full_name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (fullName === "") {
        displayError("full_name", "Please enter your full name.");
        isValid = false;
    }

    // Add similar checks for other fields and customize error messages
    
    return isValid;
}

function displayError(fieldId, errorMsg) {
    const errorContainer = document.getElementById(`${fieldId}_error`);
    errorContainer.innerHTML = errorMsg;
    errorContainer.style.display = "block";
}

function displayAlert(type, message) {
    const alertContainer = document.getElementById("alert-container");
    const alert = `
        <div class="notification is-${type}">
            <button class="delete"></button>
            ${message}
        </div>
    `;
    alertContainer.innerHTML = alert;

    const deleteButton = alertContainer.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        clearAlerts();
    });
}

function clearErrors() {
    const errorContainers = document.querySelectorAll(".error-msg");
    errorContainers.forEach(container => {
        container.innerHTML = "";
        container.style.display = "none";
    });
}

function clearAlerts() {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.innerHTML = "";
}
