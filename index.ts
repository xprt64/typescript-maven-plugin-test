import {gica} from "./api";
import {answerQuestion, dispatchCommand} from "./cqrs";
import CreeazaArticolNou = gica.commands.CreeazaArticolNou;
import CareEsteNumeleUtilizatorului = gica.queries.CareEsteNumeleUtilizatorului;

const command: CreeazaArticolNou = {
    nume: {
        nume: "",
        prenume: "asdf"
    }
};

const q: CareEsteNumeleUtilizatorului = {
    id: "123"
};


dispatchCommand("gica.commands.CreeazaArticolNou",command);
answerQuestion(CareEsteNumeleUtilizatorului.name, q).answer;