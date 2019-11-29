import { TeacherDTO } from './TeacherDTO';
import { ClassDTO } from './ClassDTO';
import { StudentDTO } from './StudentDTO';
import { ClassSubjectDTO } from './ClassSubjectDTO';

export class AttendanceDTO {
    
    date: string;
    classSubjectDTO :ClassSubjectDTO;
    teacher : TeacherDTO;
    status : boolean;    
}