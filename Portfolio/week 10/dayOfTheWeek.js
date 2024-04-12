document.getElementById("dayForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the input day number
    var dayNumber = parseInt(document.getElementById("dayNumber").value);

    // Initialize a variable to store the name of the day
    var dayName;

    // Use switch case to determine the day name based on the input number
    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid";
    }

    // Display the day name on the webpage
    var dayResultContainer = document.getElementById("dayResult");
    dayResultContainer.textContent = "Day: " + dayName;
});
