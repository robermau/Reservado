var Reserva = function(horario, cantidad, precio, codigo){
  this.horario = horario;
  this.cantidad = cantidad;
  this.precio = precio;
  this.codigo = codigo;
}

Reserva.prototype.calcularPrecioBase = function(){
  return this.precio * this.cantidad;
}

Reserva.prototype.calcularPrecioFinal = function(){
  let precioBase = this.calcularPrecioBase();
  let dia = this.horario.getDay();
  let hora = this.horario.getHours();
  let adicional = calculcarAdicional(hora, dia, precioBase);
  let descuento = calcularDescuento(this.codigo, this.cantidad, precioBase, this.precio);

  let precioFinal = precioBase + adicional - descuento;

  return precioFinal;
}

const calculcarAdicional = (hora, dia, precioBase) => {

  let adicional = 0;

  if(hora == 13 || hora == 20)
    adicional += calcularPorcentaje(precioBase,5)

  if(dia == 0 || ( dia >= 5 && dia <= 7)){
    adicional += calcularPorcentaje(precioBase,10)
  }

  return adicional
}

const calcularDescuento = (codigo, cantidad, precioBase, precio) => {

  let descuento = 0;
  if(cantidad >= 4 && cantidad <= 6)
    descuento+= calcularPorcentaje(precioBase,5)

  if(cantidad > 6 && cantidad < 8)
    descuento+= calcularPorcentaje(precioBase,10)

  if(cantidad >= 8)
    descuento+= calcularPorcentaje(precioBase,15)

  if(codigo == "DES15")
    descuento+= calcularPorcentaje(precioBase,15)

  if(codigo == "DES200")
    descuento += 200
    
  if(codigo == "DES1")
    descuento += precio
    
  return descuento;

}

const calcularPorcentaje = (porcentaje, cantidad) => (porcentaje*cantidad)/100