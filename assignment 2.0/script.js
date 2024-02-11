function randomQuote(){
    words = ["The only way to do great work is to love what you do.",
 "In three words I can sum up everything I've learned about life: it goes on.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
   "The only limit to our realization of tomorrow will be our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts."];
ranint = Math.floor(Math.random()*5)+0;  
return words[ranint];
}

function changeStyle(style) {
    var myDiv = document.getElementById("myDiv");
    myDiv.className = style;
}

function convert(){
    const weightInput = document.getElementById('weight').value;
    const unitSelect = document.getElementById('unit');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    if (isNaN(weightInput) || weightInput === '') {
        alert('Please enter a valid number for weight.');
        return;
    }
    if (selectedUnit === 'kg') {
        result = weightInput * 2.20462;
    } else {
        result = weightInput / 2.20462;
    };
    const res = document.getElementById('result');
    res.textContent =`Result: ${weightInput} ${selectedUnit} is ${result.toFixed(2)} ${selectedUnit === 'kg' ? 'lb' : 'kg'}.`
    
}

function part3(x){
    
    let z = x.trim().split(',');
    let m = z.map(Number);

    let maxNumber = Math.max(...m);
    const max = document.getElementById('max');
    max.textContent = `Max: ${maxNumber}`;

    let minNumber = Math.min(...m);
    const min = document.getElementById('min');
    min.textContent = `Min: ${minNumber}`;

    let sumvalue = m.reduce((acc, currentValue) => acc + currentValue, 0);
    const sum = document.getElementById('sum');
    sum.textContent = `Sum: ${sumvalue}`;

    let avgvalue = sumvalue / m.length;
    const avg = document.getElementById('avg');
    avg.textContent = `Average: ${avgvalue}`;

    let revvalue = m.slice().reverse().join(', ');
    const rev = document.getElementById('rev');
    rev.textContent = `Reversed: ${revvalue}`;
    
}
function clearText() {
    document.getElementById('text-area').value = '';
}
function toggleCapitalize() {
    let textArea = document.getElementById('text-area');
    if (textArea.value === '') return;

    if (textArea.style.textTransform === 'uppercase') {
        textArea.style.textTransform = 'lowercase';
    } else {
        textArea.style.textTransform = 'uppercase';
    }
}
function sortLines() {
    let textArea = document.getElementById('text-area');
    let lines = textArea.value.split('\n').filter(line => line.trim() !== '');
    lines.sort();
    textArea.value = lines.join('\n');
}
function reverseLines() {
    let textArea = document.getElementById('text-area');
    let lines = textArea.value.split('\n').filter(line => line.trim() !== '');
    lines.reverse();
    textArea.value = lines.join('\n');
}
function stripBlank() {
    let textArea = document.getElementById('text-area');
    let lines = textArea.value.split('\n').filter(line => line.trim() !== '');
    textArea.value = lines.join('\n');
}
function addNumbers() {
    let textArea = document.getElementById('text-area');
    let lines = textArea.value.split('\n').filter(line => line.trim() !== '');
    for (let i = 0; i < lines.length; i++) {
        lines[i] = (i + 1) + '. ' + lines[i];
    }
    textArea.value = lines.join('\n');
}
function shuffleLines() {
    let textArea = document.getElementById('text-area');
    let lines = textArea.value.split('\n').filter(line => line.trim() !== '');

    const randomComparator = () => Math.random() - 0.5;

    lines.sort(randomComparator);

    textArea.value = lines.join('\n');
}