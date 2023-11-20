// Fungsi tambah nilai ke layar kalkulator
function appendToDisplay(value) {
    // var display = document.getElementById('display');
    // var currentValue = display.value.replace(/\./g, '');
    // display.value = formatNumber(parseFloat(currentValue + value.replace(/\./g, '')));
    document.getElementById('display').value += value;
}

// // Format Angka
// function formatNumber(number) {
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// }

// Hapus Semua
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Hapus Satu
function clearLast() {
    const value = document.getElementById('display').value;
    var displayValue = value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

// Hasil
function calculateResult() {
    try {
        // var result = eval(document.getElementById('display').value);
        // document.getElementById('display').value = formatNumber(result.toFixed(2));
         document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculate() {
    try {
        var expression = document.getElementById('display').value.replace(/\s/g, '');
        var result = eval(expression);
        document.getElementById('display').value = formatNumber(result.toFixed(2));
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
