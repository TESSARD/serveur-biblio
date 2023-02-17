var express = require("express")//recupération
var router = express.Router()
const twig = require("twig")//recupération

router.get("/",  (requete, reponse)=> {
    // console.log("Page d'accueil démandé ")
    // reponse.end("Page d'accueil démandé")
    reponse.render("accueil.html.twig")
})
router.get("/livres",  (requete, reponse)=> {
    reponse.render("livres/liste.html.twig")//rendrer le fichier
})
router.get("/livres/:nom",  (requete, reponse)=> {
    reponse.render("livres/livre.html.twig", {nom:requete.params.nom})//rendrer avec param :nom
})
router.post("/test",  (requete, reponse)=> {
    console.log("Reception d'une demande client")
    reponse.end("Demande POST Client page /test")
})

router.use((requete, reponse, suite) =>{//sur toutes les adresses => perte erreur 404
    const error = new Error("Page non trouvée")//création objet Error
   
    error.status = 404//status
    suite(error)
    // reponse.end("err")
})
router.use((error, requete, reponse)=>{//génération de l'erreur 404
    reponse.status(error.status || 500) //500 error server
    reponse.end(error.message)
})

module.exports = router