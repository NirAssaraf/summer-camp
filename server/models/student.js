class Student {
constructor( studentID, name, grade,school,parentName,parentPhone,parentEmail,SocialDifficulties,WayHome) {
        this.id="";
        this.name = name;
        this.studentID =studentID;
        this.grade=grade;
        this.school=school;
        this.parentName=parentName;
        this.parentPhone=parentPhone;
        this.parentEmail=parentEmail;
        this.SocialDifficulties=SocialDifficulties;
        this.WayHome=WayHome;
        this.photoId="";
    }
}

module.exports = Student;