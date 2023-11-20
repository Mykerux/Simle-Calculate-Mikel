// Fungsi untuk menambahkan nilai ke layar kalkulator
function appendToDisplay(value) {
    // document.getElementById('display').value += value;
    let display = document.getElementById('display');
    display.value += value;
    display.value = formatNumber(display.value);
}

// Fungsi untuk menghapus isi layar kalkulator
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Fungsi untuk mengevaluasi dan menampilkan hasil perhitungan
function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearLast() {
    const value = document.getElementById('display').value;
    let displayValue = value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

