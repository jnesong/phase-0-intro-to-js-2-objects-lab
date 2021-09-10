// Write your solution in this file!
const employee = {
    "harry" : "cupboard under the stairs",
    "ron" : "the burrow", 
    "hermione" : "the library",
}

function updateEmployeeWithKeyAndValue(employee, name, address){
    const newEmployee = {...employee};
    newEmployee[name] = address;
    return newEmployee;
}

console.log(employee)
console.log (updateEmployeeWithKeyAndValue(employee, "mcgonagall", "Hogwarts"));

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, address){
    employee[name] = address;
    return employee;
}

console.log (destructivelyUpdateEmployeeWithKeyAndValue(employee, "sirius", "Grimmauld Place 12"));

function deleteFromEmployeeByKey(employee, name){
    let lessEmployee = {...employee};
    delete lessEmployee[name];
    return lessEmployee;
}

console.log(deleteFromEmployeeByKey(employee, "ron"));

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee[name];
    return employee;
}

console.log(employee)
console.log(destructivelyDeleteFromEmployeeByKey(employee, "harry"));