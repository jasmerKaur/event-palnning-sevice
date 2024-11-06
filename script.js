// Scroll Animation
document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const scrollY = window.scrollY + window.innerHeight;

    elements.forEach(element => {
        if (scrollY > element.offsetTop) {
            element.classList.add("visible");
        }
    });
});

// Event Cost Calculation
function calculateCost() {
    const guests = document.getElementById("guests").value;
    const duration = document.getElementById("duration").value;
    const costPerGuest = 50;
    const cost = guests * duration * costPerGuest;
    document.getElementById("costResult").innerText = `Estimated Cost: $${cost}`;
}

// Send Email Functionality
function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    window.location.href = `mailto:your-email@example.com?subject=Event Inquiry from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${email}`;
}
