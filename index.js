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
  