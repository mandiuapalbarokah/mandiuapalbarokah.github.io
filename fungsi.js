var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 3 seconds
}
// Fungsi untuk mengirim data email ke server
function sendNewsletterData(email) {
  // kode untuk mengirim data email ke server
  // misalnya menggunakan fetch() atau XMLHttpRequest
}

// Event listener untuk form newsletter
var newsletterForm = document.getElementById("newsletter-form");
newsletterForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var email = document.getElementById("email").value;
  sendNewsletterData(email);
});
