const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    let resultText = ''; // Initialize an empty result text

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        resultText = `${inputTemp}&#176; Celsius is ${celToFah(inputTemp)}&#176; Fahrenheit`;
    } else {
        resultText = `${inputTemp}&#176; Fahrenheit is ${fahToCel(inputTemp)}&#176; Celsius`;
    }

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = resultText;
    resultElement.classList.add("show"); // Show the result box
}
