// Only add the listener after the html document is fully loaded
document.addEventListener("DOMContentLoaded", function(){
    // Get the submit button from the html by its id
    var myButton = document.getElementById("myBtn");
    var primaryButton = document.getElementsByClassName("btn btn-primary");

    // When the submit button is clicked, execute myFunction
    myButton.addEventListener("click", myFunction);
    primaryButton.addEventListener("click", primaryFunction);

    function myFunction(){
        // This function is our event handler. An alert shows when the submit button is clicked.
        alert("Assignment Submitted!");
    }
    function primaryFunction(){
        // This function is our event handler. An alert shows when the submit button is clicked.
        alert("Upload Complete");
    }
});
