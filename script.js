// Open developer contact popup
function openContact() {

    const contactBox = document.getElementById("contactBox");
    contactBox.style.display = "block";

}


// Close developer contact popup
function closeContact() {

    const contactBox = document.getElementById("contactBox");
    contactBox.style.display = "none";

}



// Close popup if user clicks outside it
window.onclick = function(event) {

    const contactBox = document.getElementById("contactBox");

    if (event.target === contactBox) {

        contactBox.style.display = "none";

    }

};



// Small hover sound effect for tool buttons (optional fun UI)
const tools = document.querySelectorAll(".tool-card");

tools.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = "0.3s";

    });

});



// Simple entrance animation when page loads
window.addEventListener("load", () => {

    const cards = document.querySelectorAll(".tool-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "0.5s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});