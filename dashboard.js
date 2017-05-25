// Only add the listener after the html document is fully loaded
document.addEventListener("DOMContentLoaded", function(){
    // Get the submit button from the html by its id
    var btnupload = document.getElementById("btnup");
    var btnsubmit = document.getElementById("btnsub");

    // When the submit button is clicked, execute myFunction
    btnupload.addEventListener("click", upload);
    btnsubmit.addEventListener("click", submit);

    function upload(){
        // This function is our event handler. An alert shows when the submit button is clicked.
        alert("Upload Complete");
    }
    function submit(){
        // This function is our event handler. An alert shows when the submit button is clicked.
        alert("Assignment Submitted!");
    }
});
