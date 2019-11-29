import { Student } from 'src/app/modules/Student';
import { StudentDTO } from 'src/app/dto/StudentDTO';
import { ParentDTO } from 'src/app/dto/ParentDTO';

export interface StudentDialogData {
    student : StudentDTO;
    parent : ParentDTO;
} 