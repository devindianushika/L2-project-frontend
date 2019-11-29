import { AdminDTO } from './AdminDTO';
import { TeacherDTO } from './TeacherDTO';
export class TeacherNewsDTO {
        id : number;
        date : string;
        description : string;
        title: string;
        profile_uri : string;
        approvedBy : AdminDTO;
        teacher : TeacherDTO;
        state: string;
}