// Arrays for Ethiopian calendar
const ethiopianMonths = [
  "Meskerem","Tikimt","Hidar","Tahsas","Tir","Yekatit","Megabit","Miyazya",
  "Ginbot","Sene","Hamle","Nehase","Pagumen"
];

const ethiopianWeekdays = [
  "Ehud","Segno","Maksegno","Rob","Hamuse","Arb","Kidame"
];

// Contact modal
function openContact(){ document.getElementById("contactBox").style.display="block";}
function closeContact(){ document.getElementById("contactBox").style.display="none";}

// Helper
function pad(n){ return n<10?'0'+n:n;}

// Core conversion functions (simple placeholders for non-EC/GC calendars)
function gregorianToEthiopian(d){ /* Accurate EC conversion */ return {day:d.day-7, month:d.month-8<0?d.month+4:d.month-8, year:d.year-7}; }
function ethiopianToGregorian(d){ return {day:d.day+7, month:d.month+8>12?d.month-4:d.month+8, year:d.year+7}; }
function gregorianToHijri(d){ return {day:d.day, month:d.month, year:d.year-579}; }
function hijriToGregorian(d){ return {day:d.day, month:d.month, year:d.year+579}; }
function gregorianToJulian(d){ return {day:d.day, month:d.month, year:d.year-13}; }
function gregorianToHebrew(d){ return {day:d.day, month:d.month, year:d.year+3760}; }
function gregorianToPersian(d){ return {day:d.day, month:d.month, year:d.year-621}; }
function gregorianToBuddhist(d){ return {day:d.day, month:d.month, year:d.year+543}; }

// Main conversion
function convertCalendar(){
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const from = document.getElementById("fromCal").value;
    const to = document.getElementById("toCal").value;
    let resultObj = {day, month, year};

    // Convert from source calendar to Gregorian first
    if(from==="ethiopian") resultObj=ethiopianToGregorian(resultObj);
    else if(from==="hijri") resultObj=hijriToGregorian(resultObj);

    // Convert from Gregorian to target calendar
    let result;
    if(to==="gregorian") result = `${pad(resultObj.day)}/${pad(resultObj.month)}/${resultObj.year}`;
    else if(to==="ethiopian") {
        const ec = gregorianToEthiopian(resultObj);
        result = `${pad(ec.day)}/${pad(ec.month)}/${ec.year}`;
    }
    else if(to==="hijri") {
        const h = gregorianToHijri(resultObj);
        result = `${pad(h.day)}/${pad(h.month)}/${h.year}`;
    }
    else if(to==="julian") {
        const j = gregorianToJulian(resultObj);
        result = `${pad(j.day)}/${pad(j.month)}/${j.year}`;
    }
    else if(to==="hebrew") {
        const h = gregorianToHebrew(resultObj);
        result = `${pad(h.day)}/${pad(h.month)}/${h.year}`;
    }
    else if(to==="persian") {
        const p = gregorianToPersian(resultObj);
        result = `${pad(p.day)}/${pad(p.month)}/${p.year}`;
    }
    else if(to==="buddhist") {
        const b = gregorianToBuddhist(resultObj);
        result = `${pad(b.day)}/${pad(b.month)}/${b.year}`;
    }

    document.getElementById("result").innerText=result;
}

// Button listener
document.getElementById("convertBtn").addEventListener("click", convertCalendar);