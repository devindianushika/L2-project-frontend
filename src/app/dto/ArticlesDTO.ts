import { TeacherDTO } from './TeacherDTO';
import { StudentDTO } from './StudentDTO';

export class ArticlesDTO{

    id : number;
    date : string;
    title : string;
    description : string;
    imageUri : string;
    status : string;
    teacher : TeacherDTO;
    uploadBy : StudentDTO;
}