function inputData() {
    // Prompt the user to input their name
    var name = prompt("Please enter your name:");

    // Prompt the user to input their student ID
    var studentId = prompt("Please enter your student ID:");

    // Display the entered name and student ID on the webpage
    var userDataContainer = document.getElementById("userData");
    userDataContainer.innerHTML = "<p><strong>Name:</strong> " + name + "</p><p><strong>Student ID:</strong> " + studentId + "</p>";
}
