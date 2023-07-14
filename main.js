
function calcularCuotas() {
  let monto = parseFloat(document.getElementById("monto").value);
  let plazo = parseInt(document.getElementById("plazo").value);
  let tasa = parseFloat(document.getElementById("tasa").value);
  
  let interes = monto * (tasa / 100);
  let totalPrestamo = monto + interes;
  let cuotaMensual = totalPrestamo / plazo;
  
  let resultado = "Monto del préstamo: $" + monto.toFixed(2) + "\n" +
                  "Intereses: $" + interes.toFixed(2) + "\n" +
                  "Total del préstamo: $" + totalPrestamo.toFixed(2) + "\n" +
                  "Cuota mensual: $" + cuotaMensual.toFixed(2);
                  
  alert(resultado);
}
