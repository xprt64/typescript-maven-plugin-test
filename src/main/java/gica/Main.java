package gica;

import gica.queries.CareEsteNumeleUtilizatorului;

public class Main {
    public static void main(String[] args){
        CareEsteNumeleUtilizatorului q = new CareEsteNumeleUtilizatorului("123");
        CareEsteNumeleUtilizatorului r = q.withAnswer("adafs");
        System.out.println(r == q);
    }
}
