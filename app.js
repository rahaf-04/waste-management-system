// Sample waste data (can be replaced with real data or backend later)
const wasteData = [
    { month: "January", total: 40, recycled: 25 },
    { month: "February", total: 35, recycled: 22 },
    { month: "March", total: 45, recycled: 28 }
];

const tableBody = document.getElementById("wasteTable");

let totalWaste = 0;
let recycledWaste = 0;

wasteData.forEach(item => {
    const nonRecycled = item.total - item.recycled;

    totalWaste += item.total;
    recycledWaste += item.recycled;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.month}</td>
        <td>${item.total}</td>
        <td>${item.recycled}</td>
        <td>${nonRecycled}</td>
    `;
    tableBody.appendChild(row);
});

document.getElementById("totalWaste").textContent = totalWaste + " kg";
document.getElementById("recycledWaste").textContent = recycledWaste + " kg";
document.getElementById("nonRecycledWaste").textContent = (totalWaste - recycledWaste) + " kg";

// Simple CO2 reduction calculation (example logic)
const co2Reduction = recycledWaste * 0.4;
document.getElementById("co2Reduction").textContent = co2Reduction.toFixed(1) + " kg";
