package gica.commands;

import com.cqrs.base.Command;
import gica.utilizator.NumeComplet;
import gica.utilizator.Stare;
import lombok.Value;

@Value
public class CreazaUtilizatorNou implements Command {
    private String id;
    private NumeComplet nume;
    private Stare stare;
    private int cateMesage;

    @Override
    public String getAggregateId() {
        return null;
    }
}
