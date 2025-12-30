// Al cargar, conectamos eventos a todos los botones
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn");
  const resultado = document.getElementById("resultado");

  // Un solo objeto de audio
  const musica = new Audio();
  musica.volume = 0.9;

  // Mensajes con HTML para que se vean más bonitos e incluyan imagen
  const mensajes = {
    "1": `
      <div class="respuesta-card feliz">
        <h2>Loco (tu forma de ser)</h2>
        <p>simplemente vienes a mi cabeza cuando suena esta canción</p>
        <img src="assets/img/LocoAlbum.webp" alt="Portada del álbum Loco" class="album-img"/>
      </div>
    `,
    "4": `
      <div class="respuesta-card especial">
        <h2>Mas Que Tu Amigo</h2>
        <p>esta la recuerdo porque la escuchava mucho antes de decirte que me gustabas y moria por enseñartela</p>
        <img src="assets/img/MeGustasTanto.webp" alt="Portada del álbum especial" class="album-img"/>
      </div>
    `,
    "2": `
      <div class="respuesta-card dulce">
        <h2>Me Gustas Tú</h2>
        <p>otra canción que suena y es inevitable no pensar en ti mi amor</p>
        <img src="assets/img/MeGustasTu.webp" alt="Portada del álbum Más que tu amigo" class="album-img"/>
      </div>
    `,
    "3": `
      <div class="respuesta-card divertida">
        <h2>Necesito decírtelo</h2>
        <p>como te digo que Necesito Decírtelo, te pienso y no puedo evitarlo</p>
        <img src="assets/img/NecesitoDecirtelo.webp" alt="Imagen divertida" class="album-img"/>
      </div>
    `
  };

  // Canciones para cada respuesta
  const canciones = {
    "1":"assets/musica/Loco.mp3",
    "4":"assets/musica/MeGustasTanto.mp3", // nueva canción
    "2":"assets/musica/MeGustasTu.mp3",
    "3":"assets/musica/NecesitoDecirtelo.mp3"
  };

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const clave = boton.dataset.respuesta;

      // Caso especial para la cuarta (misteriosa)
      if (clave === "3") {
        resultado.innerHTML = `
          <div class="respuesta-card misteriosa">
            <h2>¿Estás lista para escucharla?</h2>
            <div class="opciones">
              <button class="opcion-btn" id="si1">Sí</button>
              <button class="opcion-btn" id="no1">No</button>
            </div>
          </div>
        `;

        // Botón "Sí" primera vez
        document.getElementById("si1").addEventListener("click", () => {
          resultado.innerHTML = `
            <div class="respuesta-card misteriosa">
              <h2>¿Segura segurita?</h2>
              <div class="opciones">
                <button class="opcion-btn" id="si2">Sí</button>
                <button class="opcion-btn" id="no2">No</button>
              </div>
            </div>
          `;

          // Botón "Sí" segunda vez → reproduce canción
          document.getElementById("si2").addEventListener("click", () => {
            resultado.innerHTML = mensajes["3"];
            musica.pause();
            musica.currentTime = 0;
            musica.src = canciones["3"];
            musica.play().catch(() => {});
          });

          // Botón "No" segunda vez
          document.getElementById("no2").addEventListener("click", () => {
            resultado.innerHTML = `
              <div class="respuesta-card divertida">
                <h2>Bueno ok, solo tres canciones 💖</h2>
              </div>
            `;
          });
        });

        // Botón "No" primera vez
        document.getElementById("no1").addEventListener("click", () => {
          resultado.innerHTML = `
            <div class="respuesta-card divertida">
              <h2>Bueno ok, solo tres canciones 💖</h2>
            </div>
          `;
        });

      } else {
        // Para las canciones normales (1, 2 y 4)
        resultado.innerHTML = mensajes[clave];
        musica.pause();
        musica.currentTime = 0;
        musica.src = canciones[clave];
        musica.play().catch(() => {});
      }
    });
  });
});
