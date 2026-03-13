function getGradeScale(){

return {
"A+": parseFloat(document.getElementById("Aplus").value),
"A": parseFloat(document.getElementById("A").value),
"A-": parseFloat(document.getElementById("Aminus").value),

"B+": parseFloat(document.getElementById("Bplus").value),
"B": parseFloat(document.getElementById("B").value),
"B-": parseFloat(document.getElementById("Bminus").value),

"C+": parseFloat(document.getElementById("Cplus").value),
"C": parseFloat(document.getElementById("C").value),
"C-": parseFloat(document.getElementById("Cminus").value),

"D": parseFloat(document.getElementById("D").value),
"F": parseFloat(document.getElementById("F").value)

};

}

function addCourse(){

const container = document.getElementById("courses");

const course = document.createElement("div");

course.className = "course";

course.innerHTML = `

<input type="text" placeholder="Course Name">

<input type="number" class="credit" placeholder="Credit Hours">

<select class="grade">
<option>A+</option>
<option>A</option>
<option>A-</option>
<option>B+</option>
<option>B</option>
<option>B-</option>
<option>C+</option>
<option>C</option>
<option>C-</option>
<option>D</option>
<option>F</option>
</select>

<button onclick="removeCourse(this)">X</button>

`;

container.appendChild(course);

}

function removeCourse(btn){

btn.parentElement.remove();

}

function calculateGPA(){

const gradeScale = getGradeScale();

let totalCredits = 0;
let totalPoints = 0;

const credits = document.querySelectorAll(".credit");
const grades = document.querySelectorAll(".grade");

for(let i=0;i<credits.length;i++){

const credit = parseFloat(credits[i].value);
const grade = grades[i].value;

if(!credit) continue;

const point = gradeScale[grade];

totalCredits += credit;
totalPoints += point * credit;

}

const gpa = totalPoints / totalCredits;

document.getElementById("gpa").textContent =
gpa ? gpa.toFixed(2) : "0.00";

}

addCourse();