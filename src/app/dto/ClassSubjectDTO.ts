import { TeacherDTO } from './TeacherDTO';
import { ClassDTO } from './ClassDTO';
import { LearningMaterialsDTO } from './LearningMaterialsDTO';
import { ExaminationDTO } from './ExaminationDTO';
import { StudentClassSubjectDTO } from './StudentClassSubjectDTO';
import { SubjectDTO } from './SubjectDTO';

export class ClassSubjectDTO{

    id : number;
    aClass : ClassDTO;
    subject : SubjectDTO;
    teacher : TeacherDTO;


    learningMaterialsList : LearningMaterialsDTO[];
    examinationList : ExaminationDTO[];
    studentClassSubjects : StudentClassSubjectDTO[];
}