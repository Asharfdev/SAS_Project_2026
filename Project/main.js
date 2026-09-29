const read = require("prompt-sync")();

const candidats = [
        {
                cin: "C1",
                nom: "Boushaba",
                prenom: "Soufiane",
                partiPolitique: "PJD",
                age: 40,
                electeurs: ["E1", "E2"]
        },

        {
                cin: "C2",
                nom: "Khalid",
                prenom: "Ouazzani",
                partiPolitique: "RNI",
                age: 40,
                electeurs: ["E3", "E4", "E5", "E6"]
        },
        {
                cin: "C3",
                nom: "Dahman",
                prenom: "BOUELAM",
                partiPolitique: "PAN",
                age: 40,
                electeurs: ["E7", "E8", "E9"]


        }
];

let choix = 0;
do {

        displayMenu()

        switch (choix) {
                case 1:

                        addCandidate();

                        break;
                case 2:
                        DisipalyCandidtes();

                        break;
                case 3:
                        voter();

                        break;
                case 4:
                        modifierInfo()
                        break;
                case 5:
                        sumprimerCandidat();

                        break;
                case 6:
                        recherchcandidat();
                        break;

                // case 7:
                //         console.log("Coming soon....");
                //         break;

                case 0:

                        break;
                default:
                        console.log("Choix n est pas valide");
                        break;
        }

} while (choix !== 0);



///////////////////////////Functions to be called/////////0

function displayMenu() {
        ////////////Menu ///////////
        console.log("-------Menu Principale-------");
        console.log("1. ajouter un condidat");
        console.log("2. afficer la list de candidats");
        console.log("3. voter ");
        console.log("4. modifier les information ");
        console.log("5. suprimer un candidat ");
        console.log("6. rechercher ");
        console.log("7. statistique ");
        console.log("0. quitter");
        choix = +read("Enter votre choix :")
        console.log("--------------------");

}

function addCandidate() {
        console.log("*********Menu D ajoute Principlae******");
        console.log("1. ajouter un candidat");
        console.log("2. ajouter plusieur candidat");
        console.log("0. revenir au menu principale");
        choix = +read("enter votre choix :")
        console.log("------------------------");


        switch (choix) {
                case 1:

                        addSingleCandidate();

                        break;
                case 2:

                        addMultycandidates();

                        break;
                case 0:

                        displayMenu();
                        break;

                default:
                        console.log("Choix n est pas valide");
                        break;
        }

}


function addSingleCandidate() {
        let cin = read("CIN :").toUpperCase();
        let candidatExists = false;
        for (let i = 0; i < candidats.length; i++) {
                if (candidats[i].cin === cin) {
                        candidatExists = true;
                        break;
                }
        }

        if (candidatExists) {

                console.log("CIN already exixts");

        } else {

                let nom = read("NOM :");
                let prenom = read("PRENOM :");
                let partiPolitique = read("Parti politique :");
                let age = read("Age :");

                let candidat = {
                        cin: cin,
                        nom: nom,
                        prenom: prenom,
                        partiPolitique: partiPolitique,
                        age: age,
                        electeurs: []
                };

                candidats.push(candidat);

                console.table(candidats);
        }
}


function addMultycandidates() {

        let numberP = +read("Enter Un Number de candidat :");
        for (let i = 1; i <= numberP; i++) {
                addSingleCandidate();
        }

}

function DisipalyCandidtes() {

        console.log("-------Menu D affichage------");
        console.log("1. Afficher la list des candidats");
        console.log("2. Afficher par trie");
        console.log("3. Afficher par filter");
        console.log("0. Revenir Au Menu Principale");
        choix = +read("enter votre choix :")
        console.log("------------------");


        switch (choix) {
                case 1:

                        for (let i = 0; i < candidats.length; i++) {
                                console.log("CIN :", candidats[i].cin);
                                console.log("NOM :", candidats[i].nom);
                                console.log("PRENOM :", candidats[i].prenom);
                                console.log("PARTIEPOLITIQUE:", candidats[i].partiPolitique);
                                console.log("AGE :", candidats[i].age);
                                console.log("ELECTEUR :", candidats[i].electeurs.length);

                        }

                        break;
                case 2:


                        for (let i = 0; i < candidats.length; i++) {
                                for (let j = 0; j < candidats.length - 1; j++) {
                                        if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {
                                                let temp = candidats[j + 1];
                                                candidats[j + 1] = candidats[j];
                                                candidats[j] = temp
                                        }
                                }
                        }
                        console.table(candidats);

                        break;
                case 3:

                        let filtrerbyparty = read("Entrer le parti : ");

                        let counter = 0;

                        for (let i = 0; i < candidats.length; i++) {

                                if (candidats[i].partiPolitique === filtrerbyparty) {

                                        console.log("Candidat " + (i + 1));
                                        console.log("CIN : " + candidats[i].cin);
                                        console.log("NOM : " + candidats[i].nom);
                                        console.log("PRENOM : " + candidats[i].prenom);
                                        console.log("Parti politique : " + candidats[i].partiPolitique);
                                        console.log("AGE : " + candidats[i].age);
                                        console.log("ELECTEURS : " + candidats[i].electeurs.length);

                                        counter++;
                                }
                        }

                        if (counter === 0) {
                                console.log("Aucun candidat trouvé");
                        }
                        break;
                case 0:

                        displayMenu();

                        break;

                default:
                        console.log("Choix n est pas valide");
                        break;

        }
        console.log("-------------------");

}

function voter() {
        voterCin = read("Enter Your CIN :")
        if (isElecteuralreadyVoted(voterCin)) {
                console.log("You have already voted")

        } else {
                console.log("chose a CIN from the list");

                displayCandidateurToVoteFor();

                CandidatToVoteCin = read("Enter Candidate CIN :")

                doVote(CandidatToVoteCin, voterCin);

                console.log("Vote successfully added!");

        }
        console.log("-----------------------");
}


function isElecteuralreadyVoted(electeurCin) {

        for (const candidat of candidats) {
                for (const cin of candidat.electeurs) {
                        if (cin === electeurCin) return true
                }
        }
        return false
}

function displayCandidateurToVoteFor() {
        for (const candidat of candidats) {
                console.log("CIN :", candidat.cin);
                console.log("NOM :", candidat.nom);
                console.log("PRENOM :", candidat.prenom);
                console.log("PARTIEPOLITIQUE:", candidat.partiPolitique);
                console.log("AGE :", candidat.age);
                console.log("-----------------------");
        }

}

function doVote(candidatCin, electeurCin) {

        for (let i = 0; i < candidats.length; i++) {

                if (candidats[i].cin === candidatCin) {
                        candidats[i].electeurs.push(electeurCin)

                }

        }


}

function modifierInfo() {

        console.log("---------Menu De Modification-----------");
        console.log("1. Modifier Parti Politique");
        console.log("2. Modifier L'age");
        console.log("0. revenir au menu principale");
        choix = +read("enter votre choix :")
        console.log("----------------------");

        switch (choix) {
                case 1:
                        let cinSearsh = read("Entrer CIN de candidat :")
                        for (let i = 0; i < candidats.length; i++) {
                                if (candidats[i].cin === cinSearsh) {
                                        let newPart = read("Entre Nouveau Parti Politque :")
                                        candidats[i].partiPolitique = newPart;
                                        console.log("Candidat modifie avec succe");
                                        console.table(candidats);
                                        return;
                                }


                        }
                        break;
                case 2:
                        let ageSearsh = read("Entrer CIN de candidat")
                        for (let i = 0; i < candidats.length; i++) {
                                if (candidats[i].age === ageSearsh) {
                                        let newAge = read("Entre Nouveau age.")
                                        candidats[i].age = newAge;
                                        console.log("l'age modifie avec succee.");
                                        console.table(candidats);
                                        return;
                                }
                        }
                        break;
                case 0:
                        displayMenu();
                        break;

        }
        console.log("Candidat introuvable.");
}

function sumprimerCandidat() {

        let cinSearsh = read("Enter le CIN de Candidat a supprime :")

        for (let i = 0; i < candidats.length; i++) {

                if (candidats[i].cin === cinSearsh) {
                        candidats.splice(i, 1)

                        console.log("Candidat supprime avec succe.");
                        return;

                }

        }
        console.log("Candidat n'exist pas.");

}

function recherchcandidat() {

        cinSearsh = read("Enter Cin de candidat :")
        let candidatfound = false
        for (let i = 0; i < candidats.length; i++) {
                if (candidats[i].cin === cinSearsh) {
                        console.log("candidat exist :")
                        console.log("cin : " + candidats[i].cin)
                        console.log("prenom : " + candidats[i].prenom)
                        console.log("nom : " + candidats[i].nom)
                        console.log("parti politique : " + candidats[i].partiPolitique)
                        console.log("age : " + candidats[i].age)
                        candidatfound = true
                        break;

                }


        }
        if (candidatfound == false) {
                console.log("Candidat doesnt exixt");
        }





}






