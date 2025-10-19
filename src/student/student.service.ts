import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        {id:1, name:"Aman", age:20},
        {id:2, name:"Bharat", age:21},
        {id:3, name:"Chaya", age:22},
    ];

    // GET
    getAllStudents(){
        return this.students;
    }

    getStudentById(id:number){
        const student = this.students.find((s) => s.id === id);
        if(!student) throw new NotFoundException("Student Not Found");
        return student;
    }

    // POST
    createStudent(data:{name:string; age:number}){
        const newStudent = {id:Date.now(), ...data};
        this.students.push(newStudent);
        return newStudent;
    }

    // PUT
    updateStudent(id:number, data:{name:string, age:number}){
        const index = this.students.findIndex((s) => s.id === id);
        if(index === -1){
            throw new NotFoundException("Student Not Found");
        }
        this.students[index] = {id, ...data};
        return this.students[index];
    }

    // PATCH
    updateStudentPatch(id:number, data:Partial<{name:string, age:number}>){
        const index = this.students.findIndex((s) => s.id === id);
        if(index === -1){
            throw new NotFoundException("Student Not Found");
        }
        Object.assign(this.students[index], data);
        return this.students[index];
    }

    // DELETE
    deleteStudent(id:number){
        const index = this.students.findIndex((s) => s.id === id);
        if(index === -1){
            throw new NotFoundException("Student Not Found");
        }
        const deletedStudent = this.students.splice(index, 1);
        return {message:"Student Deleted", students:this.students};
    }
}
