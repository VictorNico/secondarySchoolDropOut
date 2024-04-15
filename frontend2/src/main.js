import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";

const appInstance = createApp(App);

// Vérifier l'authentification de l'utilisateur (ex. en vérifiant la présence du cookie)
appInstance.provide('$checkAuthentication' ,() => {
  // Mettez ici votre propre logique de vérification d'authentification basée sur le cookie
  const cookie = document.cookie // Obtenez le cookie ou utilisez une autre méthode pour vérifier l'authentification

  // Retournez true si l'utilisateur est authentifié, sinon false
  return cookie !== undefined && cookie !== null && cookie !== ''
})
appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");
