/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.27.744 on 2020-12-13 16:09:21.

export namespace gica.commands {

    export interface CreazaUtilizatorNou extends com.cqrs.base.Command {
        id: string;
        nume: gica.utilizator.NumeComplet;
        stare: gica.utilizator.Stare;
    }

}

export namespace gica.commands {

    export interface CreeazaArticolNou extends com.cqrs.base.Command {
        nume: gica.articol.NumeComplet;
    }

}

export namespace gica.queries {

    export interface CareEsteNumeleUtilizatorului extends gica.base.AnsweredQuery<string, gica.queries.CareEsteNumeleUtilizatorului> {
        answer?: string;
        id: string;
     }

    export module  CareEsteNumeleUtilizatorului{
        export const name = "gica.queries.CareEsteNumeleUtilizatorului";
    }
}

export namespace gica.utilizator {

    export interface NumeComplet {
        nume: string;
        prenume: string;
    }

}

export namespace com.cqrs.base {

    export interface Command {
    }

}

export namespace gica.articol {

    export interface NumeComplet {
        nume: string;
        prenume: string;
    }

}

export namespace gica.base {

    export interface AnsweredQuery<A, Q> extends java.lang.Cloneable {
        answer?: A;
    }

}

export namespace java.lang {

    export interface Cloneable {
    }

}

export namespace gica.utilizator {

    export type Stare = "ACTIVAT" | "DEZACTIVAT";

}
