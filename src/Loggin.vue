<template>
  <div class="login">
    <h2>Iniciar Sesión o Registrarse</h2>

    <form @submit.prevent="accion">
      <input v-model="correo" type="email" placeholder="Correo" required />
       <input v-model="contrasena" type="password" placeholder="Contraseña" required />
      <input v-model="nombre" type="text" placeholder="Nombre (solo registro)" />
     

      <div class="botones">
        <button type="button" @click="iniciarSesion">Iniciar Sesión</button>
        <button type="button" @click="registrarUsuario">Registrar</button>
      </div>
    </form>

    <p v-if="mensaje" class="msg">{{ mensaje }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const correo = ref("");
const nombre = ref("");
const contrasena = ref("");
const mensaje = ref("");

// 🔹 REGISTRO
const registrarUsuario = async () => {
  try {
    const res = await axios.post("http://localhost:2629/registrar", {
      nombre: nombre.value,
      correo: correo.value,
      contrasena: contrasena.value,
    });
    mensaje.value = res.data.mensaje;
    console.log("Usuario creado:", res.data.usuario);
  } catch (err) {
    console.error("Error al registrar:", err);
    mensaje.value = "❌ Error al registrar usuario";
  }
};

// 🔹 LOGIN
const iniciarSesion = async () => {
  try {
    const res = await axios.post("http://localhost:2629/login", {
      correo: correo.value,
      contrasena: contrasena.value,
    });
    mensaje.value = res.data.mensaje;
    console.log("Usuario logueado:", res.data.usuario);
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
  margin-top: 40px;
}

input, button {
  padding: 10px;
  width: 230px;
  margin: 5px;
}

.botones {
  display: flex;
  gap: 10px;
}

.msg {
  margin-top: 10px;
  font-weight: bold;
  color: red;
}
</style>
