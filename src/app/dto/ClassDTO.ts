import { TeacherDTO } from './TeacherDTO';

export class ClassDTO{

    grade : string;
    id : string;
    year : string;
    location : string;
    medium : string;
    stream : string;
    teacher : TeacherDTO;
}