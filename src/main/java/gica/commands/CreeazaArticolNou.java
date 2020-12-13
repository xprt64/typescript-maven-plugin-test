package gica.commands;

import com.cqrs.base.Command;
import gica.articol.NumeComplet;

public class CreeazaArticolNou implements Command {
    public NumeComplet nume;
    @Override
    public String getAggregateId() {
        return null;
    }
}
