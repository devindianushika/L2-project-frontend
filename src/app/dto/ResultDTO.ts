import { ExaminationDTO } from './ExaminationDTO';
import { StudentDTO } from './StudentDTO';

export class ResultDTO{

    id : number;
    mark : number;
    examination : ExaminationDTO;
    student : StudentDTO;
}