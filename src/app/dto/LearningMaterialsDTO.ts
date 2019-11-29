import { ClassSubjectDTO } from './ClassSubjectDTO';

export class LearningMaterialsDTO{

    id : number;
    type : string;
    date : string;
    description : string;
    materialUri : string;
    classSubject : ClassSubjectDTO;
}