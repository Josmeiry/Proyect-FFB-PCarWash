<template>
  <div class="page">
    <!--<header>
      <h2><img src="/public/logo.png" id="img"> MAJOAD</h2>-->
      <!-- <nav>
        <a href="#" >Inicio</a>
        <a href="#">Servicios</a>
      </nav>
    </header>-->

    <div class="content">
      <!-- Lista de Car Wash -->
      <div class="carwash-list">
        <h2>Ubicaciones de los Car Wash</h2>

        <div
          class="carwash-item"
          v-for="(carwash, index) in carwashes"
          :key="index"
          @click="showOnMap(carwash)"
        >
          <strong>{{ carwash.name }}</strong>
          <p>{{ carwash.address }}</p>
        </div>
      </div>

      <!-- Mapa -->
      <div id="map"></div>
    </div>
    <link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  media="print"
  onload="this.media='all'"
/>


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
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const carwashes = [
  {
    name: 'S52 Auto Spa',
    address: 'Carr. Duarte, Santiago de los Caballeros 51000',
    lat: 19.456393496498297,
    lng: -70.66472146167517
  },
  {
    name: 'H2O Car Wash',
    address: 'C8J9+VR5, C. Mama Tingo, Santiago de los Caballeros 51000',
    lat: 19.433294152871795,
    lng: -70.67915059927826
  },
  {
    name: 'Express Wash Factory',
    address: 'Av. Juan Pablo Duarte, Santiago de los Caballeros 51000',
    lat: 19.454668288796945,
    lng: -70.69556193520054
  }
]

let map

onMounted(() => {
  map = L.map('map').setView([19.445, -70.68], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)
  //  fuerza a Leaflet a recalcular el tamaño después de cargar
  setTimeout(() => {
    map.invalidateSize();
  }, 300);
})

function showOnMap(carwash) {
  map.setView([carwash.lat, carwash.lng], 16)
  L.marker([carwash.lat, carwash.lng])
    .addTo(map)
    .bindPopup(`<b>${carwash.name}</b><br>${carwash.address}`)
    .openPopup()
}



</script>
