//let api ="https://randomuser.me/api/"


/*fetch(api) //URL
.then(response => response.json()) //Formato sepador por funcion de flecha =>
.then(data =>{

    alert(JSON.stringify(data)) //la data es la promesa que les cumplio el API

} )*/


function Verinfo() {
    let url ="https://randomuser.me/api/"
    let contenido = document.getElementById("contenido")
    let nombre ;
    let imagen;
    let miinformacion }

    fetch(url)
.then(response => response.json())
.then(data => {
nombre =data.results[0].name.first
imagen = data.results[0].picture.large

miinformacion =` 
        <img src="${imagen}" alt="" class="img-fluid rounded-circle">
        <p>Nombre : ${nombre} </p>

    `
    contenido.innerHTML = miinformacion
   

console.log(nombre)
console.log(imagen)



})

