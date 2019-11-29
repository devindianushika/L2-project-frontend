import { TeacherNewsDTO } from 'src/app/dto/TeacherNewsDTO';
import { AdminNewsDTO } from 'src/app/dto/AdminNewsDTO';

export interface News {
    teacherNews : TeacherNewsDTO;
    adminNews : AdminNewsDTO;
}