


// Definición del objeto Préstamo
// class Prestamo {
//   constructor(monto, tasaInteres, meses) {
//     this.monto = monto;
//     this.tasaInteres = tasaInteres;
//     this.meses = meses;
//   }

//   // Método para calcular la cuota mensual
//   calcularCuotaMensual() {
//     const tasaMensual = this.tasaInteres / 100 / 12;
//     const cuotaMensual = (this.monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -this.meses));
//     return cuotaMensual.toFixed(2);
//   }

//   // Método para calcular el monto total a pagar
//   calcularMontoTotal() {
//     const cuotaMensual = this.calcularCuotaMensual();
//     const montoTotal = cuotaMensual * this.meses;
//     return montoTotal.toFixed(2);
//   }
// }

// // Función para manejar el envío del formulario
// document.getElementById('formulario').addEventListener('submit', function (event) {
//   event.preventDefault();
//   const monto = parseFloat(document.getElementById('monto').value);
//   const tasaInteres = parseFloat(document.getElementById('tasa').value);
//   const meses = parseInt(document.getElementById('meses').value);

//   if (isNaN(monto) || isNaN(tasaInteres) || isNaN(meses)) {
//     alert('Por favor, ingresa números válidos para todos los campos.');
//     return;
//   }

//   const miPrestamo = new Prestamo(monto, tasaInteres, meses);
//   const cuotaMensual = miPrestamo.calcularCuotaMensual();
//   const montoTotalAPagar = miPrestamo.calcularMontoTotal();

//   const resultadoDiv = document.getElementById('resultado');
//   resultadoDiv.innerHTML = `
//     <h2>Resultados:</h2>
//     <p>Cuota mensual: $${cuotaMensual}</p>
//     <p>Monto total a pagar: $${montoTotalAPagar}</p>
//   `;
// });



class Prestamo {
  constructor(monto, tasaInteres, meses) {
    this.monto = monto;
    this.tasaInteres = tasaInteres;
    this.meses = meses;
  }

  calcularCuotaMensual() {
    const tasaMensual = this.tasaInteres / 100 / 12;
    const cuotaMensual = (this.monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -this.meses));
    return cuotaMensual.toFixed(2);
  }

  calcularMontoTotal() {
    const cuotaMensual = this.calcularCuotaMensual();
    const montoTotal = cuotaMensual * this.meses;
    return montoTotal.toFixed(2);
  }
}

const prestamosArray = []; 

document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault();
  const monto = parseFloat(document.getElementById('monto').value);
  const tasaInteres = parseFloat(document.getElementById('tasa').value);
  const meses = parseInt(document.getElementById('meses').value);

  if (isNaN(monto) || isNaN(tasaInteres) || isNaN(meses)) {
    alert('Por favor, ingresa números válidos para todos los campos.');
    return;
  }

  const miPrestamo = new Prestamo(monto, tasaInteres, meses);
  const cuotaMensual = miPrestamo.calcularCuotaMensual();
  const montoTotalAPagar = miPrestamo.calcularMontoTotal();

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
    <h2>Resultados:</h2>
    <p>Cuota mensual: $${cuotaMensual}</p>
    <p>Monto total a pagar: $${montoTotalAPagar}</p>
  `;

  // Add the loan object to the array
  prestamosArray.push({
    monto: monto,
    tasaInteres: tasaInteres,
    meses: meses,
    cuotaMensual: cuotaMensual,
    montoTotalAPagar: montoTotalAPagar,
  });
});

function filtrarPorMonto(montoFiltrar) {
  return prestamosArray.filter(prestamo => prestamo.monto === montoFiltrar);
}

const montoBusqueda = 1000; 
const prestamosFiltrados = filtrarPorMonto(montoBusqueda);
console.log(prestamosFiltrados);


