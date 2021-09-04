// listado de imagenes con su texto correspondiente

let eventos = [
    'images/eventos/1.jpg',
    'images/eventos/2.jpg',
    'images/eventos/3.jpg',
];

let contenedorEventos = document.getElementById('contenedor-eventos');
let eventoTemplate = '';

for (i = 0; i < eventos.length; i++) {
    eventoTemplate = `<div class="col">
            <div class="card shadow-sm">
              <img src="${eventos[i]}" class="img-fluid">

              <div class="card-body">
                <p class="card-text">Texto 1</p>
              </div>
            </div>
          </div>`;

    contenedorEventos.innerHTML += eventoTemplate;
}



let titulo = 'The amazing album example';
let text = 'Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.';

let h1 = document.getElementById('h1_titulo');
let p = document.getElementById('p_texto');

h1.innerHTML = titulo;
p.innerHTML = text;