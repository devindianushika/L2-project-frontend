import { StudentDTO } from './StudentDTO';

export class ParentDTO{

    registrationNumber : string;
    fullName : string;
    address : string;
    gender : string;
    email : string;
    password : string;
    contactNumber : string;
    profile_uri : string;
    
    student : StudentDTO[];
}