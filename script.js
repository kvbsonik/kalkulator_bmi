const resultBox = document.getElementById('resultBox');

function BMI() {
    const h = document.getElementById('h').value;
    const w = document.getElementById('w').value;
    const bmi = w/(h/100*h/100);
    const bmio = bmi.toFixed(2);

    if (!h || !w) {
        alert('Uzupełnij wymagane pola!');
        return false;
    }

    if (h < 0 || h > 230) {
        alert('Podano nieprawidłowy wzrost!');
        return false;
    }

    if (w < 0 || w > 300) {
        alert('Podano nieprawidłową wagę!');
        return false;
    }

    resultBox.style.display = "block";
    document.getElementById("result").innerHTML=bmio;
}