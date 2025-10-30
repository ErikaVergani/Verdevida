// Array para almacenar los propósitos
const propositos = [];
const form = document.getElementById("propositoForm");
const input = document.getElementById("propositoInput");
const lista = document.getElementById("propositosList");

// Función para renderizar los propósitos en el DOM
function renderizarPropositos() {
  lista.innerHTML = "";

  // Si no hay propósitos, mostramos un mensaje
  if (propositos.length === 0) {
    lista.innerHTML = `<p class="text-muted">Aún no registraste ningún propósito.</p>`;
    return;
  }

  // Recorremos el array con un bucle y renderizamos con plantillas literales
  for (const item of propositos) {
    const card = `
      <div class="card mx-auto my-2" style="max-width: 400px;">
        <div class="card-body">
          <h5 class="card-title"> ${item}</h5>
        </div>
      </div>
    `;
    lista.innerHTML += card;
  }
}

// Función flecha para mostrar una alerta con SweetAlert2
const mostrarAlerta = (mensaje, tipo) => {
  Swal.fire({
    title: mensaje,
    icon: tipo,
    confirmButtonColor: "#218838",
    timer: 1800,
    showConfirmButton: false
  });
};

// Evento del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nuevoProposito = input.value.trim();

  // Condicional para  verificar que no esté vacío
  if (nuevoProposito === "") {
    mostrarAlerta("Por favor, escribí un propósito 🌿", "warning");
    return;
  }

  // Agregamos el propósito y actualizamos la lista
  propositos.push(nuevoProposito);
  renderizarPropositos();

  // Mostramos mensaje de éxito
  mostrarAlerta("¡Propósito guardado!", "success");

  // Limpio input
  input.value = "";
});
