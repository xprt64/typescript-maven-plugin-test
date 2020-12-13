import {com, gica} from "./api";
import Command = com.cqrs.base.Command;
import AnsweredQuery = gica.base.AnsweredQuery;

export function dispatchCommand(commandType: string, cmdBody: Command) {
    type a = Parameters<typeof dispatchCommand>;
}

export function answerQuestion<Q extends AnsweredQuery<any, any>>(questionType: string, question: Q): Q {
    return question;
}