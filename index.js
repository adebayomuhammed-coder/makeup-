const profileImg = document.getElementById("profile");

let imageNumber = 1;


function handleClick () {if (imageNumber === 1) {
    profileImg.src = "profile2.jpeg";
    imageNumber = 2;
  } else if (imageNumber === 2) {
    profileImg.src = "profile3.jpeg";
    imageNumber = 3;
  } else {
    profileImg.src = "profile1.jpeg";
    imageNumber = 1;
  } }

profileImg.addEventListener("click", handleClick);


// WhatsApp function - matches name="fullname", name="phone", etc
function sendToWhatsApp() {
  let name = document.querySelector('[name="fullname"]').value || 'Customer';
  let phone = document.querySelector('[name="phone"]').value || 'Not provided';
  let service = document.querySelector('[name="service"]').value || 'Not selected';
  let date = document.querySelector('[name="date"]').value || 'Not selected';
  let message = document.querySelector('[name="message"]').value || 'No message';
  
  let msg = `Hi, I want to book an appointment%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0ADate: ${date}%0AMessage: ${message}`;
  
  window.open(`https://wa.me/2348056447725?text=${msg}`, '_blank');
}

// Submit booking function
function submitBooking(e) {
  e.preventDefault();
  alert('Booking submitted! We will get back to you.');
  e.target.reset();
}

// Connect buttons
document.querySelector('.btn-whatsapp').onclick = sendToWhatsApp;
document.querySelector('#booking-form').onsubmit = submitBooking;