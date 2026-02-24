<script>
/* ===============================
   CONFIGURACIÓN POR PÁGINA
================================= */

const AUTH_CONFIG = {
  apiUrl: "https://script.google.com/macros/s/AKfycbyIj6vZKcYvhVPG3VUQxucT1AeQkArSU8TiAIdcR2WKQryE1YwAEqBSU3IdX9o6oCy1Og/exec",
  requiredEstado: "Habilitado", // null si no quieres validar estado
  requiredEquipo: null,         // ejemplo: "Equipo A"
  redirectOnFail: null          // ejemplo: "no-autorizado.html"
};

/* ===============================
   LOGIN AUTOMÁTICO
================================= */

document.addEventListener("DOMContentLoaded", () => {

  const savedUser = localStorage.getItem("authUser");

  if (!savedUser) {
    showLogin();
    return;
  }

  const user = JSON.parse(savedUser);

  if (!validateUser(user)) {
    localStorage.removeItem("authUser");
    showLogin();
  }
});

/* ===============================
   VALIDAR REGLAS
================================= */

function validateUser(user) {

  if (AUTH_CONFIG.requiredEstado &&
      user.estado !== AUTH_CONFIG.requiredEstado) {
    return false;
  }

  if (AUTH_CONFIG.requiredEquipo &&
      user.equipo !== AUTH_CONFIG.requiredEquipo) {
    return false;
  }

  return true;
}

/* ===============================
   MOSTRAR LOGIN
================================= */

function showLogin() {

  const modal = document.createElement("div");
  modal.innerHTML = `
    <div style="
      position:fixed;
      inset:0;
      background:#0009;
      display:flex;
      justify-content:center;
      align-items:center;
      z-index:9999;">
      
      <div style="
        background:white;
        padding:30px;
        border-radius:12px;
        width:300px;
        text-align:center;">
        
        <h2>Acceso requerido</h2>
        <input id="login-id" placeholder="ID" style="width:100%;margin:10px 0;padding:8px;">
        <input id="login-pass" type="password" placeholder="Contraseña" style="width:100%;margin:10px 0;padding:8px;">
        <button onclick="doLogin()" style="padding:10px 20px;">Ingresar</button>
        <p id="login-msg" style="color:red;"></p>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

/* ===============================
   LOGIN
================================= */

async function doLogin() {

  const id = document.getElementById("login-id").value;
  const password = document.getElementById("login-pass").value;

  const params = new URLSearchParams();
  params.append("action", "login");
  params.append("id", id);
  params.append("password", password);

  const response = await fetch(AUTH_CONFIG.apiUrl, {
    method: "POST",
    body: params
  });

  const data = await response.json();

  if (!data.success) {
    document.getElementById("login-msg").innerText = data.message;
    return;
  }

  if (!validateUser(data.user)) {
    document.getElementById("login-msg").innerText =
      "No tienes permisos para esta sección.";
    return;
  }

  localStorage.setItem("authUser", JSON.stringify(data.user));
  location.reload();
}
</script>
