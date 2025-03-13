function StudentId(name,age,admissionYear,enroled){
    this.name = name;
    this.age = age;
    this.admissionYear = admissionYear;
    this.enroled = enroled
    this.study = function(){
         console.log("ima lready studying");
        }
    this.matricnumber = "BU"+Math.floor(Math.random()*200 + 1)

}

var jonathan = new StudentId("jonathan",16,2022,"enroled");
jonathan.study();

