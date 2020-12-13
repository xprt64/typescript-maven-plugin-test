package gica.utilizator;

public enum Stare {
    ACTIVAT(1),
    DEZACTIVAT(2);

    private final int value;

    Stare(int value) {
        this.value = value;
    }
}
