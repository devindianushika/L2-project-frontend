import { ClassSubjectDTO } from './ClassSubjectDTO';
import { StudentDTO } from './StudentDTO';

export class StudentClassSubjectDTO{

    id : number;
    classSubject : ClassSubjectDTO;
    student : StudentDTO;
}