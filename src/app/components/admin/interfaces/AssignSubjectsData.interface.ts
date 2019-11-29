import { TeacherDTO } from 'src/app/dto/TeacherDTO';
import { SubjectDTO } from 'src/app/dto/SubjectDTO';
import { ClassDTO } from 'src/app/dto/ClassDTO';

export interface AssignSubjectsData {
    teacher : TeacherDTO;
    subject : SubjectDTO;
    classDTO : ClassDTO;
}