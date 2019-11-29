import { AttendanceDTO } from './AttendanceDTO';
import { ClassDTO } from './ClassDTO';
import { ArticlesDTO } from './ArticlesDTO';
import { ClassSubjectDTO } from './ClassSubjectDTO';

    export class TeacherDTO{

    registrationNumber : string;
    fullName : string;
    gender : string;
    email : string;
    password : string;
    contactNumber : string;
    profile_uri : string;


    classList : ClassDTO[];
    attendanceList : AttendanceDTO[];
    articles : ArticlesDTO[];
    classSubjectList : ClassSubjectDTO[];
    }