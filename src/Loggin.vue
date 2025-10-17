<template>
  <div class="login">
    <h2>Iniciar Sesión</h2>

    <form @submit.prevent="iniciarSesion">
      <input v-model="correo" type="email" placeholder="Correo" required />
      <input v-model="nombre" type="text" placeholder="Nombre" required />
      <button type="submit">Entrar</button>
    </form>

    <p v-if="mensaje" class="msg">{{ mensaje }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const nombre = ref("");
const correo = ref("");
const mensaje = ref("");

const API_URL = "http://localhost:2629/Usuario";

const iniciarSesion = async () => {
  try {
    const res = await axios.post(API_URL, {
      nombre: nombre.value,
      correo: correo.value
    });

    mensaje.value = res.data.mensaje;
    console.log(res.data.usuario);

    // Limpiar inputs si quieres
    nombre.value = "";
    correo.value = "";
  } catch (err) {
    console.error("Error al iniciar sesión:", err);
    mensaje.value = "❌ No se pudo iniciar sesión";
  }
};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
input, button {
  padding: 8px;
  width: 200px;
}
.msg {
  margin-top: 10px;
  color: red;
}
</style>
