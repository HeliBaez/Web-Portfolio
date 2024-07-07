document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio("souns/jazz.mp3"); 
      console.log("Reproducción automática iniciada");
    }).catch(e => {
      console.error("La reproducción automática falló", e);
      mostrarBotonReproduccion();
    });
  });
  
  function mostrarBotonReproduccion() {
    const boton = document.createElement("button");
    boton.innerText = "Reproducir Música";
    boton.onclick = function() {
      const audio = new Audio("souns/jazz.mp3"); 
      audio.play().catch(e => console.error("Error al intentar reproducir el audio:", e));
    };
    document.body.appendChild(boton);
  }