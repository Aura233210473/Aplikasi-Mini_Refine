document.getElementById("calculateButton").addEventListener("click", function () {
    const crudeVolume = parseFloat(document.getElementById("crudeVolume").value);
    const distillationYield = parseFloat(document.getElementById("distillationYield").value);
    const productionTime = parseFloat(document.getElementById("productionTime").value);
    const energyUsed = parseFloat(document.getElementById("energyUsed").value);

    if (isNaN(crudeVolume) || isNaN(distillationYield) || isNaN(productionTime) || isNaN(energyUsed)) {
        alert("Please fill in all fields with valid values!");
        return;
    }

    // Calculate Fraction Yield
    const fractionYield = (crudeVolume * distillationYield) / 100;

    // Calculate Estimated Production Capacity
    const productionRate = crudeVolume / productionTime;

    // Calculate Energy Efficiency
    const energyEfficiency = productionRate / energyUsed;

    // Display Results
    document.getElementById("distillationResult").innerText = `Fraction Yield: ${fractionYield.toFixed(2)} Barrels`;
    document.getElementById("productionRate").innerText = `Estimated Production Capacity: ${productionRate.toFixed(2)} Barrels/Hour`;
    document.getElementById("energyEfficiency").innerText = `Energy Efficiency: ${energyEfficiency.toFixed(2)} Barrels/kWh`;
});
