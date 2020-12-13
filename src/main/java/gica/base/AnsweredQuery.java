package gica.base;

public class AnsweredQuery<A, Q> implements Cloneable {

    @Nullable private A answer;

    public A getAnswer(){
        return answer;
    }

    public Q withAnswer(A answer) {
        AnsweredQuery<A, Q> c = null;
        try {
            c = (AnsweredQuery<A, Q>) this.clone();
        } catch (CloneNotSupportedException e) {
            //e.printStackTrace();
        }
        c.answer = answer;
        return (Q) c;
    }

    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}
