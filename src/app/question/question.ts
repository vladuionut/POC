import { QuestionPart } from "./question-part/question-part";
import { ErrorPart } from "./error-part/error-part";
import { QuestionType } from "./question-type.enum"

type Validator = {
    value: number;
    name: string;
}

export class Question {
    questionPart: QuestionPart;
    errorPart :ErrorPart;
    type: QuestionType;
    key: string;
    //https://angular.io/api/forms/Validators
    validation :Validator[];

    /*
       Validators.required,
    Validators.minLength(4),
    Validators.maxLength(24),
    forbiddenNameValidator(/bob/i)
  */
}
