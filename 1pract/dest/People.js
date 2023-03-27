"use strict";
function isMyStudent(s, t) {
    if (t.groups === null) {
        return false;
    }
    return true;
}
function getName(o) {
    if ('name' in o && 'surname' in o && 'patronymic' in o) {
        return o.name + o.surname + o.patronymic;
    }
}
let s1 = {
    surname: "Иванов ",
    name: "Иван ",
    patronymic: "Иванович "
};
let s2 = {
    surname: "Иванов ",
    name: "Олег ",
    patronymic: "Иванович "
};
let s3 = {
    surname: "Иванов ",
    name: "Денис "
};
let g1 = {
    groupName: "ИФСТ",
    course: 2,
    students: [s1, s2, s3]
};
console.log(getName(s1));
