// Add functionality to the icons (e.g., open respective links)

document.getElementById('gmailIcon').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "mailto:youremail@gmail.com";
  });
  
  document.getElementById('whatsappIcon').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "https://wa.me/yourphonenumber";
  });
  
  document.getElementById('telegramIcon').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "https://telegram.me/yourusername";
  });

  
  function subscribe() {
    // Disable the submit button to prevent multiple submissions
    document.getElementById('submitButton').textContent = "Subscribing...";
    document.getElementById('submitButton').disabled = true;

    // Simulate a server delay (replace with actual server-side subscription process)
    setTimeout(function() {
        // Display success message
        document.getElementById('success').textContent = "You've successfully subscribed!";
        
        // Reset button text after displaying success message
        setTimeout(function() {
            document.getElementById('submitButton').textContent = "Subscribe";
            document.getElementById('submitButton').disabled = false;
        }, 3000); // Change the delay time (in milliseconds) as needed
    }, 2000); // Change the delay time (in milliseconds) as needed

    // Prevent the form from actually submitting
    return false;
}