<template>
  
  
  <head>
    <title>MAJOAD - Inicios</title>

    <meta name="description" content="Encuentra las mejores ofertas de trabajo para
     desarrolladores en DevJobs.">

     <link rel="stylesheet" href="style.css">
     <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css">

  </head>
    <body>

      <header>
              <h2><img src="#" > MAJOAD</h2>
          <nav>
            <a href="#" target="_blank"  rel="noopener noreferrer" >Inicio</a> <!--o  _self-->
            <a href="#">Servicios</a>
         </nav>

        
      </header>


      <div class="carwash-list">
    <h2>Ubicaiones de los  Car Wash</h2>

    <!-- Aquí estan los car wash -->
    <div class="carwash-item" data-lat="19.456393496498297" data-lng="-70.66472146167517">S52 auto spa   
        <p>Carr. Duarte, Santiago de los Caballeros 51000</p>
    </div>
    <div class="carwash-item" data-lat="19.433294152871795" data-lng="-70.67915059927826">H2O Car Wash
        <p>C8J9+VR5, C. Mama Tingo, Santiago de los Caballeros 51000</p>
    </div>
    <div class="carwash-item" data-lat="19.454668288796945" data-lng="-70.69556193520054" >Express Wash Factory
        <p>Av. Juan Pablo Duarte, Santiago de los Caballeros 51000</p>
    </div>  
  </div>

  <div id="map"></div>     

  
    </body>  
      
   <footer>
           

            <article>
              <h3>Links</h3>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Contact Us</p>
            </article>

            <article>
              <h3>Follow Us</h3>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </article>  

             <small>&copy;2025 MAJOAD</small>
        </footer>
</template>


  <script src="https://unpkg.com/leaflet/dist/leaflet.js" >
     
    // Inicializar el mapa (zona promedio de los car wash en santiago)
    const map = L.map('map').setView([19.445, -70.68], 13);

    // Cargar mapa normal (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Función para clic en un car wash
    document.querySelectorAll('.carwash-item').forEach(item => {
      item.addEventListener('click', () => {
        const lat = parseFloat(item.dataset.lat);
        const lng = parseFloat(item.dataset.lng);

        // Mover el mapa y agregar marcador
        map.setView([lat, lng], 16);
        L.marker([lat, lng]).addTo(map)
          .bindPopup(`<b>${item.textContent}</b>`)
          .openPopup();
      });
    });
  </script>