const ventaDiv = document.querySelector("#venta");
const ventaRow = ventaDiv.querySelector(".row");

let contadorVenta = 0;

for (let i = 0; i < 3; i++) {
    const venta = propiedades_venta[i];
    
 ventaRow.innerHTML +=`
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${venta.src}" class="card-img-top" alt="Imagen del departamento" />
                <div class="card-body">
                    <h5 class="card-title">${venta.nombre}</h5>
                    <p class="card-text">${venta.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}</p>
                    <p>
                        <i class="fas fa-bed"></i> ${venta.habitaciones}
                        <i class="fas fa-bath"></i> ${venta.banios}
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
                    <p class="${venta.smoke ? 'text-success' : 'text-danger'}">
                    ${venta.smoke
            ? '<i class="fas fa-smoking"></i>Se permite fumar'
            : '<i class="fas fa-smoking-ban"></i>No se permite fumar'}
                    </p>
                    <p class="${venta.pets ? 'text-success' : 'text-danger'}">
                        ${venta.pets
            ? '<i class="fas fa-paw"></i> Se permiten mascotas'
            : '<i class="fas fa-ban"></i> No se permiten mascotas'}
                    </p>
                </div>
            </div> 
        </div>`;
};


const alquilerDiv = document.querySelector("#alquiler");
const alquilerRow = alquilerDiv.querySelector(".row");

let contadorAlquiler = 0;


for (let i = 0; i < 3; i++) {
    const alquiler= propiedades_alquiler[i];

    alquilerRow.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${alquiler.src}" class="card-img-top" alt="Imagen del departamento" />
                <div class="card-body">
                    <h5 class="card-title"> ${alquiler.nombre}</h5>
                    <p class="card-text">${alquiler.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}</p>
                    <p>
                        <i class="fas fa-bed"></i> ${alquiler.habitaciones}
                        <i class="fas fa-bath"></i> ${alquiler.banios}
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
                    <p class="${alquiler.smoke ? 'text-success' : 'text-danger'}">
                    ${alquiler.smoke
            ? '<i class="fas fa-smoking"></i>Se permite fumar'
            : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}
                    </p>
                    <p class="${alquiler.pets ? 'text-success' : 'text-danger'}">
                        ${alquiler.pets
            ? '<i class="fas fa-paw"></i> Se permiten mascotas'
            : '<i class="fas fa-ban"></i> No se permiten mascotas'}
                    </p>
                </div>
            </div> 
        </div>`};