function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value)
    .then(() => {
      // Show a toast message when the text is copied successfully
      var toast = document.getElementById("toast");
      toast.className = "show";
      setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    })
    .catch(() => {
      // If copying text fails, show an error message
      alert("Copying text failed!");
    });
}
