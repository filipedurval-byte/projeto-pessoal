// Mostrar a Potência automaticamente
 document.addEventListener('DOMContentLoaded', function() {
  function calcular() {
      var luz = parseInt(document.getElementById('n1').value) || 0
      var seco = parseInt(document.getElementById('n2').value) || 0
      var umido = parseInt(document.getElementById('n3').value) || 0
      
      document.getElementById('w1').value = luz * 100;
      document.getElementById('w2').value = seco * 100;
      document.getElementById('w3').value = umido * 600;
  }

  // Adiciona os event listeners
  document.getElementById('n1').addEventListener('input', calcular);
  document.getElementById('n2').addEventListener('input', calcular);
  document.getElementById('n3').addEventListener('input', calcular);
  
  // Calcula inicialmente
  calcular();
});


// Temperatura Ambiente (°C)

for (let i = 5; i < 65; i = i + 5) {
    document.getElementById("ambiente").innerHTML += `<option value="${i}">${i}°C</option>`;
}

// Circuitos Agrupados (N°)

for (let i=1; i < 21; i++){
    document.getElementById("agrupado").innerHTML += `<option value="${i}">${i}</option>`;
}