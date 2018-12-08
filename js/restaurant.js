var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}



Restaurant.prototype.reservarHorario = function(horarioReservado) {
    let horariosConReservaciones =  this.horarios.filter(horario => horario != horarioReservado);
    this.horarios = horariosConReservaciones;
    return true;

}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        let sumatoriaDePuntiaciones = sumatoria(this.calificaciones);
        let promedioDePuntuaciones = sumatoriaDePuntiaciones / this.calificaciones.length;
        return Math.round(promedioDePuntuaciones * 10) / 10;
    }
}

const sumatoria = numeros =>{
    var sumatoria = 0;
    for (var i = 0; i < numeros.length; i++) {
        sumatoria += numeros[i]
    }
    return sumatoria;
}

const promedio = numeros => {
    var sumatoria = sumatoria(numeros)
    var promedio = sumatoria / numeros.length
    return promedio
}
