const generateBtn = document.getElementById("generateCoursesBtn");
const coursesForm = document.getElementById("coursesForm");
const courseCountInput = document.getElementById("courseCount");
const result = document.getElementById("result");

generateBtn.addEventListener("click", () => {
    coursesForm.innerHTML = ""; // Clear previous
    const count = parseInt(courseCountInput.value);

    if (isNaN(count) || count < 1) {
        alert("Enter a valid number of courses!");
        return;
    }

    for (let i = 1; i <= count; i++) {
        const courseDiv = document.createElement("div");
        courseDiv.className = "course";

        const creditLabel = document.createElement("label");
        creditLabel.textContent = `Course ${i} Credit Hours:`;
        const creditInput = document.createElement("input");
        creditInput.type = "number";
        creditInput.min = "0";
        creditInput.placeholder = "Enter credit hours";
        creditInput.className = "credit";

        const gradeLabel = document.createElement("label");
        gradeLabel.textContent = `Course ${i} Grade (0-4):`;
        const gradeInput = document.createElement("input");
        gradeInput.type = "number";
        gradeInput.min = "0";
        gradeInput.max = "4";
        gradeInput.step = "0.01";
        gradeInput.placeholder = "Enter grade points";
        gradeInput.className = "grade";

        courseDiv.appendChild(creditLabel);
        courseDiv.appendChild(creditInput);
        courseDiv.appendChild(gradeLabel);
        courseDiv.appendChild(gradeInput);

        coursesForm.appendChild(courseDiv);
    }
});

function calculateGPA() {
    const creditInputs = document.querySelectorAll(".credit");
    const gradeInputs = document.querySelectorAll(".grade");

    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 0; i < creditInputs.length; i++) {
        const credit = parseFloat(creditInputs[i].value);
        const grade = parseFloat(gradeInputs[i].value);

        if (isNaN(credit) || isNaN(grade)) {
            alert("Please fill in all credit hours and grades!");
            return;
        }

        totalCredits += credit;
        totalPoints += credit * grade;
    }

    if (totalCredits === 0) {
        result.textContent = "Your GPA: 0.00";
        return;
    }

    const gpa = totalPoints / totalCredits;
    result.textContent = `Your GPA: ${gpa.toFixed(2)}`;
}