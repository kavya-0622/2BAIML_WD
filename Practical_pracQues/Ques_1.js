//Student Notification System :--
const EventEmitter = require("events");

const student = new EventEmitter();

student.on('StudentRegistered', (name, rollno) => {
    console.log("Student Name: ", name);
    console.log("Student Roll Number: ", rollno);
});

student.on('StudentLogout', () => {
    console.log("Student has logged out");
});

student.emit('StudentRegistered', 'Ram', 101);
student.emit('StudentLogout');