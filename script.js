// Contact Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We’ll get back to you soon.');
    this.reset();
});

// Duplicate gallery images for seamless scroll
const track = document.querySelector('.gallery-track');
track.innerHTML += track.innerHTML; // Duplicate content for infinite loop