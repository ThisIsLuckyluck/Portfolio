document.addEventListener("DOMContentLoaded", function() {
    // Obtenir la date actuelle
    var dateActuelle = new Date();

    // Année de naissance
    var anneeDeNaissance = 2004;

    // Mois de naissance
    var moisDeNaissance = 5;

    // Jour de naissance
    var jourDeNaissance = 26;

    // Calculer l'âge
    var age = dateActuelle.getFullYear() - anneeDeNaissance;

    // Vérifier si l'anniversaire est déjà passé cette année
    if (
        dateActuelle.getMonth() < moisDeNaissance ||
        (dateActuelle.getMonth() === moisDeNaissance && dateActuelle.getDate() < jourDeNaissance)
    ) {
        age--;
    }

    document.getElementById("age").textContent = age;
});
