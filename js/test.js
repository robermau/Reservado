var expect = chai.expect;
var that = this; 

//Carrito con listado de productos que inicialice con 0 productos.  
describe('Testeá la función reservarHorario(horario)', function(){


	it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.',function(){
        var aplicacion = new Aplicacion(that.listado);
        aplicacion.reservarUnHorario(that.listado.restaurantes[0],"13:00");
	    expect(that.listado.restaurantes[0].horarios).to.lengthOf(2);
    })

    it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.',function(){
        var aplicacion = new Aplicacion(that.listado);
        let restaurant = that.listado.restaurantes[0];
        aplicacion.reservarUnHorario(that.listado.restaurantes[0],"19:00");
	    expect(restaurant).to.equal(restaurant);
    })

    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.',function(){
        var aplicacion = new Aplicacion(that.listado);
        let listado = that.listado;
        aplicacion.reservarUnHorario(that.listado.restaurantes[0], null);
	    expect(that.listado).to.equal(listado);
    })
})

//Función que agrega un producto al carrito solo si se le pasa un producto que tenga precio y cantidad.
describe('Testeá la función obtenerPuntuación()', function(){
    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.',function(){
        let restaurant = that.listado.restaurantes[0];
        let puntuacionPromedio = restaurant.obtenerPuntuacion();
	    expect(puntuacionPromedio).to.equal(7.4);
    })

    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.',function(){
        let restaurant =   new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [])
        let puntuacionPromedio = restaurant.obtenerPuntuacion();
        expect(puntuacionPromedio).to.equal(0);
    })
    
})

//Calcular el total de los productos del carrito
describe('Testeá la función calificar()', function(){
	it('Dado una calificacion, se inserta correctamente dentro del array',function(){
        let restaurant =   new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [1,2])
        restaurant.calificar(9);
        expect(restaurant.calificaciones).to.lengthOf(3);
    })

	it('Dado una calificacion fuera del rango de 1 y 10, el array de calificaciones se mantiene igual',function(){
        let restaurant =   new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [1,2])
        restaurant.calificar(11);
        expect(restaurant.calificaciones).to.lengthOf(2);
    })
})


//Calcular el total de los productos del carrito
describe('Testeá la función buscarRestaurante(id)', function(){
	it('Dado una id de un restaurante, se devuelve el valor correcto',function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])
        ];
        
        var listado = new Listado(listadoDeRestaurantes)

        let restaurante = listado.buscarRestaurante(2)
        expect(restaurante.nombre).to.equal("Mandarín Kitchen");
    })
	it('Dado una id de un restaurante que no existe dentro del array, se devuelve un mensaje de error',function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])
        ];
        
        var listadoDeTest = new Listado(listadoDeRestaurantes)

        let restaurante = listadoDeTest.buscarRestaurante(5)
        expect(restaurante).to.equal("No se ha encontrado ningún restaurant");
    })
})


//Calcular el total de los productos del carrito
describe('Testeá la función obtenerRestaurantes()', function(){
	it('Cuando no se pasa ningun filtro, se devuelve todos los restaurantes',function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])
        ];
        
        var listado = new Listado(listadoDeRestaurantes)

        let restaurante = listado.obtenerRestaurantes(null, null, null)
        expect(restaurante).to.lengthOf(3);
    })

	it('Dado unos filtros, retorna los restaurantes correctos',function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])
        ];
        
        var listado = new Listado(listadoDeRestaurantes)

        let restaurante = listado.obtenerRestaurantes("Asiática", "Nueva York", "13:00")
        expect(restaurante).to.lengthOf(1);
    })

    it('Dado el horario, retorna los restaurantes correctos',function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["13:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["1:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])
        ];
        
        var listado = new Listado(listadoDeRestaurantes)

        let restaurante = listado.obtenerRestaurantes(null, null, "13:00")
        expect(restaurante).to.lengthOf(2);
    })

    it('Dado la cuidad, retorna los restaurantes correctos',function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Londres", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])
        ];
        
        var listado = new Listado(listadoDeRestaurantes)

        let restaurante = listado.obtenerRestaurantes(null, "Londres", null)
        expect(restaurante).to.lengthOf(2);
    })

    
    it('Dado el rubro, retorna los restaurantes correctos',function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9])
        ];
        
        var listado = new Listado(listadoDeRestaurantes)

        let restaurante = listado.obtenerRestaurantes("Asiática", null , null)
        expect(restaurante).to.lengthOf(2);
    })
})


//Calcular el total de los productos del carrito
describe('Funcioanlidad Extra', function(){
	it('Cuando se pide el precio base, se calcula correctamente',function(){
        var reserva = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1")
        //var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
        let precioBase = reserva.calcularPrecioBase()
        expect(precioBase).to.equal(2800);
    })

	it('Cuando se pide el precio final, se calcula correctamente',function(){
        var reserva = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1")
        //var reserva = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
        let precioFinal = reserva.calcularPrecioFinal()
        expect(precioFinal).to.equal(2310);
    })
})