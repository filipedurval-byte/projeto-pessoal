// Mostrar a Potência automaticamente



// Temperatura Ambiente (°C)

for (let i = 5; i < 65; i = i + 5) {
    document.getElementById("ambiente").innerHTML += `<option value="${i}">${i}°C</option>`;
}

// Circuitos Agrupados (N°)

for (let i=1; i < 21; i++){
    document.getElementById("agrupado").innerHTML += `<option value="${i}">${i}</option>`;
}