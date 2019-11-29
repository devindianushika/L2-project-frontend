import { ClassSubjectDTO } from './ClassSubjectDTO';
import { ResultDTO } from './ResultDTO';

export class ExaminationDTO{

    id : number;
    description : string;
    date : string;
    type : string;
    classSubject : ClassSubjectDTO;
    
    resultList : ResultDTO[];
}