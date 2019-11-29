export class TableData {
    subjectID : string;
    subjectName : string;
    teacherID : string;
    teacherName : string;

    constructor(subjectID : string,
        subjectName : string,
        teacherID : string,
        teacherName : string){
            this.subjectID = subjectID;
            this.teacherID = teacherID;
            this.subjectName = subjectName;
            this.teacherName = teacherName;
    }
  }