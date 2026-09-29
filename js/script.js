// =========================
// INICIO DE SESIÓN
// =========================

const formularioLogin = document.getElementById("formularioLogin");

if (formularioLogin) {

    formularioLogin.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const correo = document.getElementById("correo").value
            .toLowerCase()
            .trim();

        const contrasena = document.getElementById("contrasena").value;

        const mensaje = document.getElementById("mensaje");


        // Verificar que los campos estén completos

        if (correo === "" || contrasena === "") {

            mensaje.textContent =
                "Completa tu correo y contraseña.";

            return;
        }


        // Identificar el área por el correo

        if (correo === "estudiante@mistareas.com") {

            mensaje.textContent =
                "Acceso correcto. Entrando como estudiante...";

            setTimeout(function () {
                window.location.href = "estudiante.html";
            }, 700);

        }

        else if (correo === "profesor@mistareas.com") {

            mensaje.textContent =
                "Acceso correcto. Entrando como profesor...";

            setTimeout(function () {
                window.location.href = "profesor.html";
            }, 700);

        }

        else if (correo === "admin@mistareas.com") {

            mensaje.textContent =
                "Acceso correcto. Entrando como administrador...";

            setTimeout(function () {
                window.location.href = "administrador.html";
            }, 700);

        }

        else {

            mensaje.textContent =
                "El correo no corresponde a un área registrada.";

        }

    });

}


// =========================
// BUSCADOR DE TAREAS
// =========================

function buscarTarea() {

    const entrada = document
        .getElementById("buscarTarea");

    const tabla = document
        .getElementById("tablaTareas");

    if (!entrada || !tabla) {
        return;
    }

    const textoBuscado = entrada
        .value
        .toLowerCase()
        .trim();

    const filas = tabla
        .querySelectorAll("tbody tr");


    filas.forEach(function (fila) {

        const contenido = fila
            .textContent
            .toLowerCase();

        if (
            textoBuscado === "" ||
            contenido.includes(textoBuscado)
        ) {

            fila.style.display = "";

        } else {

            fila.style.display = "none";

        }

    });

}


// =========================
// REGISTRAR TAREA
// =========================

const formularioTarea = document.getElementById(
    "formularioTarea"
);

if (formularioTarea) {

    formularioTarea.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();

            const mensaje = document.getElementById(
                "mensajeRegistro"
            );

            mensaje.textContent =
                "La tarea se registró correctamente.";

            formularioTarea.reset();

        }
    );

}


// =========================
// FILTRAR TAREAS DEL PROFESOR
// =========================

const btnFiltrar = document.getElementById("btnFiltrar");

if (btnFiltrar) {

    btnFiltrar.addEventListener("click", function () {

        const materia = document
            .getElementById("filtroMateria")
            .value
            .toLowerCase();

        const estado = document
            .getElementById("filtroEstado")
            .value
            .toLowerCase();

        const filas = document.querySelectorAll(
            "#tablaConsulta tbody tr"
        );

        filas.forEach(function (fila) {

            const contenido = fila
                .textContent
                .toLowerCase();

            const coincideMateria =
                materia === "" ||
                contenido.includes(materia);

            const coincideEstado =
                estado === "" ||
                contenido.includes(estado);

            if (coincideMateria && coincideEstado) {

                fila.style.display = "";

            } else {

                fila.style.display = "none";

            }

        });

    });

}


// =========================
// COMPLETAR TAREA
// =========================

const completarTarea = document.getElementById(
    "completarTarea"
);

if (completarTarea) {

    completarTarea.addEventListener(
        "click",
        function () {

            const mensaje = document.getElementById(
                "mensajeTarea"
            );

            const estado = document.querySelector(
                ".detalle-encabezado .estado"
            );

            const datosEstado = document.querySelector(
                ".dato-tarea strong:last-child"
            );


            // Cambiar el estado visual

            if (estado) {

                estado.textContent = "Realizada";

                estado.classList.remove("pendiente");

                estado.classList.add("realizada");

            }


            // Mostrar mensaje

            if (mensaje) {

                mensaje.textContent =
                    "✓ La tarea fue marcada como realizada.";

            }


            // Cambiar el botón

            completarTarea.textContent =
                "Tarea realizada";

            completarTarea.disabled = true;

        }
    );

}