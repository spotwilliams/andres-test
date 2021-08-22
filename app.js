// listado de imagenes con su texto correspondiente

let eventos = [
    'images/eventos/1.jpg',
    'images/eventos/2.jpg',
    'images/eventos/3.jpg',
];

let contenedorEventos = document.getElementById('contenedor-eventos');

for (i = 0; i < eventos.length; i++) {
    eventoTemplate = `<div class="col">
            <div class="card shadow-sm">
              <img src="${eventos[i]}" class="img-fluid">

              <div class="card-body">
                <p class="card-text">Texto 1</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>`;

    contenedorEventos.innerHTML += eventoTemplate
}