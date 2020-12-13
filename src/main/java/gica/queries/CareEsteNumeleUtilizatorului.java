package gica.queries;

import gica.base.AnsweredQuery;
import gica.base.Query;
import lombok.Value;

@Value
public class CareEsteNumeleUtilizatorului extends AnsweredQuery<String, CareEsteNumeleUtilizatorului> implements Query {
    String id;
}
