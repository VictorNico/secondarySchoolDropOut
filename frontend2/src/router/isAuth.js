
// Définir la fonction de middleware
function authMiddleware(to, from, next) {
  // Vérifier si l'utilisateur est authentifié
  const isAuthenticated = this.checkAuthentication() // Mettez ici votre logique de vérification d'authentification

  if (isAuthenticated) {
    // L'utilisateur est authentifié, continuer le routage
    next()
  } else {
    // L'utilisateur n'est pas authentifié, rediriger vers la page de connexion ou une autre page appropriée
    next('/signin') // Remplacez '/login' par l'URL de votre page de connexion
  }
}



// Exporter le middleware
export default authMiddleware