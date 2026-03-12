function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const timeInput = document.getElementById("time").value;

    if(!dobInput || !timeInput){
        alert("Please enter your full date and time of birth!");
        return;
    }

    const birthDate = new Date(`${dobInput}T${timeInput}`);
    const result = document.getElementById("result");

    function updateAge() {
        const now = new Date();
        let diff = now - birthDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        diff -= years * (1000 * 60 * 60 * 24 * 365.25);

        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
        diff -= months * (1000 * 60 * 60 * 24 * 30.44);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= days * (1000 * 60 * 60 * 24);

        const hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);

        const minutes = Math.floor(diff / (1000 * 60));
        diff -= minutes * (1000 * 60);

        const seconds = Math.floor(diff / 1000);

        result.innerText = `You are ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds old.`;
    }

    updateAge();
    setInterval(updateAge, 1000);
}
function goBack() {
    window.location.href = "../../index.html";
}