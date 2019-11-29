import { AdminNewsDTO } from './AdminNewsDTO';
import { TeacherNewsDTO } from './TeacherNewsDTO';

export class AdminDTO {
    registrationNumber : string;
    fullName : string;
    gender : string;
    password : string;
    destination : string;
    email : string;
    contactNumber : string;
    profile_uri : string;


    teacherNewsList : TeacherNewsDTO[];
    adminNewsList : AdminNewsDTO[];
}