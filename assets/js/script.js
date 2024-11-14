//Listado con ID unico de las tareas
const listadoTareas = [
    { id: 16, nombre: "Hacer Mercado", completado: false },
    { id: 60, nombre: "Estudiar para la prueba", completado: false },
    { id: 24, nombre: "Sacar a pasear a Tobby", completado: false },
]

// Seleccionar elementos del HTML

const listaDeTareas = document.querySelector("#tareas");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");
const cuentaTareas = document.querySelector("#cuenta-tareas")
const tareasRealizadas = document.querySelector("#tareas-realizadas")


btnAgregar.addEventListener("click" , () => {

    //Agregar la tarea al arreglo
    const tareaNueva = tareaInput.value;
    listadoTareas.push({id: Date.now(), nombre: tareaNueva});
    tareaInput.value = "";
    renderTareas();

});

    // Función para borrar
function borrar (id){
    const index = listadoTareas.findIndex((elemento) => elemento.id == id);
    listadoTareas.splice(index,1);
    renderTareas();
}

//Función para marcar una tarea como completada
function completar(id){
    const tarea = listadoTareas.find((elemento) => elemento.id == id);
    if (tarea){
        tarea.completado = true;
    }
    renderTareas();
}

renderTareas = () => {
    let html = "";
    listadoTareas.forEach((listaTareas) => {
        html += `
        <li ${listaTareas.completado ? 'style="text-decoration: line-through;"' : ""}>
            ${listaTareas.id} : ${listaTareas.nombre}
            <input class ="checkbox" type="checkbox" ${listaTareas.completado ? "checked" : ""} onchange="completar(${listaTareas.id})"/> 
            <button class ="button" onclick="borrar(${listaTareas.id})">Eliminar</button>
        </li>`;
    });
    listaDeTareas.innerHTML = html
    cuentaTareas.textContent = `Total de tareas: ${listadoTareas.length}`;
    const tareasCompletadas = listadoTareas.filter((tarea) => tarea.completado);
    tareasRealizadas.textContent = `Realizadas: ${tareasCompletadas.length}`;
};



