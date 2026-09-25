const read = require("prompt-sync")();

const candidats = [

{
cin : "AB1231",
nom : "Boushaba",
prenom : "Soufiane",
partiPolitique : "Indépendant",
age: 40,
electeurs: []
},
{
cin : "AB1232",
nom : "Boushaba",
prenom : "Soufiane",
partiPolitique : "Indépendant",
age: 40,
electeurs: []
},
{
cin : "AB1233",
nom : "Boushaba",
prenom : "Soufiane",
partiPolitique : "Indépendant",
age: 40,
electeurs: []
},
];


let choix = 0;

while (choix !== 8 ) {
        ////////////Menu principale///////////
        console.log("*********  e1lections ******");
        console.log("1. ajouter un condidat");
        console.log("2. afficer la list de candidats");
        console.log("3. voter ");
        console.log("4. modifier les information ");
        console.log("5. suprimer un candidat ");
        console.log("6. rechercher ");
        console.log("7. statistique ");
        console.log("8. quitter");

        
        choix  = +read("enter votre choix :")


    switch (choix) {
    case 1:
            /////////////////Menu de ajpouter un candidat//////
           console.log("1. ajouter un condidat");
           console.log("2. ajouter un plusieur candidat");
           console.log("0. revenire au menu principale");
        break;
        case 2 :

           console.log("test case 2");   
        break;
                case 3 :

           console.log("test case 3");   
        break;
                case 4 :

           console.log("test case 4");   
        break;
                case 5 :

           console.log("test case 5");   
        break;
                case 6 :

           console.log("test case 6");   
        break;
                case 7 :

           console.log("test case 7");   
        break;
                case 8 :
             
           console.log("test case 8");   
        break;
          
    default:
        console.log("Choix invalide");
        break;
}
}
