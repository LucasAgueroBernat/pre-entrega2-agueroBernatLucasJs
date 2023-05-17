//Comenzamos con el juego

alert("CONOCE A LOS PERSONAJES DE STAR WARS?");

let nombre = prompt("INGRESA TU NOMBRE");

function bienvenida() {
   let mensaje = `Bienvenido/a ${nombre} yo soy el Padawan Lucas Aguero y voy a enseñarte sobre alguno de nuestros personajes de STAR WARS`;
   alert(mensaje);
};

bienvenida();

 const misPersonajes=[
   {
    nombre:"Anakin Skywalker", 
    planetaNatal: "Tatooine",
    especie: "humano", 
    Edad: `9(ep.1) 19(ep.2) 19-22(clone wars) 22(ep.3) 32(obi-wan) 36-41(rebels) 41(rogue one y ep.4) 44(ep.5) 45(ep.6)`, 
    hijos:`"Luke Skywalker" "Leia Organa"`, 
    padres:"Shmi Skywalker", 
    afiliacion:"Orden jedi (Alto Consejo Jedi),Republica Galactica (Legion 501), Sith, Imperio Galactico( Alto Mando Imperial y Escuadron de la Muerte)",
    maestros:"Qui-Gon jinn, Obi-Wan Kenobi, Darth Sidious, Yoda ", 
    aprendices:"Ahsoka Tano, Inquisicion",
    muerte:"4 DBY estrella de la muerte",
},
    {
    nombre:"Obi-Wan Kenobi", 
    planetaNatal:"Stewjon", 
    especie:"Humano", 
    edad: `25(ep.1), 35(ep.2), 35-38(clone wars), 38 (ep,3), 48(obi-wan kenobi), 56(rebels), 57(ep.4)`, 
    afiliacion:"Orden Jedi(Alto Consejo Jedi), Republica Galactica(7mo Cuerpo Aereo) Alianza para Restaurar la Republica", 
    maestros:"Qui-Gon Jinn, Yoda", 
    aprendices:"Anakin Skywalker, Luke Skywalker", 
    muerte:"0 ABY Estrella de la Muerte"
},
    {
    nombre:"Darth Sidiuos",
    planetaNatal:"Naboo", 
    especie:"Humano",
    edad:`52(ep,1), 62(ep.2), 62-65(clone wars), 65(ep.3 y the bad batch), 75(Obi-Wan kenobi), 79-84(rebels), 87(ep.5), 88(ep.7), 119(ep.9)`, 
    afiliacion: "Familia Palpatine, Sith, Casa Real de Naboo, Rep. Galactica(Delegacion de Naboo,Oficina de Canciller),Federacion de Comercio, Confederacion de Sistemas Independientes, Imerio Galactico, Sith eterno, Primera Orden, Orden Final", 
    maestros: "Darth Plagueis", 
    aprendices: "Wilhuff Tarkin, Dart Maul,Dart Tyranus, Gallius Rax, Dart Vader, Inquisicion, Snoke, Kylo Ren", 
    muerte: "35 DBY Exegol"
},
]
    
    


const personajeElejidoPorUsuario = prompt("Ingrese a quien desea conocer. /n -Anakin Skywalker /n -Obi-Wan Kenobi /n -Darth Sidious")
 
const personajeEncontrado = misPersonajes.find( item => item.nombre === personajeElejidoPorUsuario);
alert(personajeEncontrado);


function despedida() {
    let mensaje = `Gracias ${nombre} por elegirnos para seguir aprendiendo de star wars`;
    alert(mensaje) 
 }
 
despedida()