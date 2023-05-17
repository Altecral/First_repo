class Student {
    //constructor to initialize the object
    constructor(studentName){
        this.studentName = studentName;
    }

    //return student name
    toString() {
        return "My name is : " + this.studentName;
    }
}

class Centennial extends Student{

    constructor(studentname,program){
        super(studentname);
        this.program = program;

    }

    toString(){
        return "Name: " + this.studentName + " Program" + this.program;
    }

}

//let firstStudent = new Student("Louie");
//console.log(firstStudent.toString()); 

let centennialStudent = new Centennial("Armando","Software Engineering Techinician");
console.log(centennialStudent.toString());