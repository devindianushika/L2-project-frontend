import { ParentDTO } from './ParentDTO';
import { StudentClassSubjectDTO } from './StudentClassSubjectDTO';
import { ResultDTO } from './ResultDTO';
import { ClassStudentDTO } from './ClassStudentDTO';

    export class StudentDTO{

        registrationNumber : string;
        parent : ParentDTO;
        fullName : string;
        birthday : string;
        gender : string;
        currentAddress : string;
        contactNumber : string;
        password : string;
        profile_uri : string;

        
        resultList : ResultDTO[];
        studentClassSubjects : StudentClassSubjectDTO[];
        classStudents : ClassStudentDTO[];

        
        
    }