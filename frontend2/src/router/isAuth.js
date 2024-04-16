
// Définir la fonction de middleware
function authMiddleware(to, from, next) {
  // Vérifier si l'utilisateur est authentifié
  const isAuthenticated = checkAuthentication() // Mettez ici votre logique de vérification d'authentification

  if (isAuthenticated) {
    // L'utilisateur est authentifié, continuer le routage
    next()
  } else {
    console.log("saty")
    // L'utilisateur n'est pas authentifié, rediriger vers la page de connexion ou une autre page appropriée
    next('/signin') // Remplacez '/login' par l'URL de votre page de connexion
  }
}


// Vérifier l'authentification de l'utilisateur (ex. en vérifiant la présence du cookie)
function checkAuthentication () {
  // Mettez ici votre propre logique de vérification d'authentification basée sur le cookie
  const cookie = document.cookie // Obtenez le cookie ou utilisez une autre méthode pour vérifier l'authentification
  console.log(cookie)
  // Retournez true si l'utilisateur est authentifié, sinon false
  return cookie !== undefined && cookie !== null && cookie !== ''
}
// Exporter le middleware
export default authMiddleware