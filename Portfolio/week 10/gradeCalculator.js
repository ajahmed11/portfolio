document.getElementById("marksForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get the value of marks entered by the user
    var marks = parseInt(document.getElementById("marks").value);
    
    // Check the marks and determine the grade
    var grade;
    if (marks >= 80 && marks <= 100) {
        grade = "Distinction";
    } else if (marks >= 60 && marks < 80) {
        grade = "First Division";
    } else if (marks >= 50 && marks < 60) {
        grade = "Second Division";
    } else if (marks >= 40 && marks < 50) {
        grade = "Third Division";
    } else {
        grade = "Fail";
    }
    
    // Display the grade on the webpage
    document.getElementById("gradeResult").innerHTML = "<p>Your grade: <strong>" + grade + "</strong></p>";
});
