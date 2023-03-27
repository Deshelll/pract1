type Student={
    surname:string,
    name:string,
    patronymic?:string
}
type Group ={
    groupName:string,
    course:number,
    students:Student[]
}
type Educator ={
    surname:string,
    name:string,
    patronymic?:string,
    degree?:string,
    groups?:Group[]
}
function isMyStudent(s: Student, t: Educator) : boolean{
    if(t.groups === null){
        return false;
    }   
return true;
}
function getName(o: Student | Educator | Group) : string{
    if('name' in o && 'surname' in o && 'patronymic' in o  ) {
        return o.name + o.surname + o.patronymic ;
    }
}

let s1:Student={
    surname:"Иванов ",
    name:"Иван ",
    patronymic:"Иванович "
}
let s2:Student={
    surname:"Иванов ",
    name:"Олег ",
    patronymic:"Иванович "
}
let s3:Student={
    surname:"Иванов ",
    name:"Денис "
}
let g1:Group={
    groupName:"ИФСТ",
    course:2,
    students: [s1,s2,s3]
}
console.log(getName(s1));