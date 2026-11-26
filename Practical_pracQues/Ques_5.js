
const EventEmitter = require('events');

// Create a custom EventEmitter class
class AttendanceEmitter extends EventEmitter {}

const attendance = new AttendanceEmitter();

// Counters
let presentCount = 0;
let absentCount = 0;

// Event 1: Student Present
attendance.on('studentPresent', (name, rollNo, subject) => {
    presentCount++;

    console.log("\n--- Student Attendance Details ---");
    console.log("Name       :", name);
    console.log("Roll Number:", rollNo);
    console.log("Subject    :", subject);
    console.log("Status     : Present");
});

// Event 2: Student Absent
attendance.on('studentAbsent', (name, rollNo) => {
    absentCount++;

    console.log("\n--- Student Absent Notification ---");
    console.log("Name       :", name);
    console.log("Roll Number:", rollNo);
    console.log("Status     : Absent");
});

// Event 3: Attendance Summary
attendance.on('attendanceSummary', () => {
    console.log("\n--- Attendance Summary ---");
    console.log("Total Present Students:", presentCount);
    console.log("Total Absent Students :", absentCount);
    console.log("Total Students        :", presentCount + absentCount);
});

// Trigger events
attendance.emit('studentPresent', 'Rahul', 101, 'JavaScript');
attendance.emit('studentPresent', 'Priya', 102, 'Node.js');
attendance.emit('studentAbsent', 'Amit', 103);

// Display attendance summary
attendance.emit('attendanceSummary');










const EventEmitter = require('events');

// Create a single EventEmitter object
const exam = new EventEmitter();

// 1. examStarted event
exam.on('examStarted', () => {
    console.log("Online Examination has started!");
});

// 2. answerSubmitted event
exam.on('answerSubmitted', (rollNo, answer) => {
    console.log("\nAnswer Submitted Successfully");
    console.log("Roll Number:", rollNo);
    console.log("Submitted Answer:", answer);
});

// 3. timeWarning event
exam.on('timeWarning', () => {
    console.log("\nWarning! Only 5 minutes remaining.");
});

// 4. examCompleted event
exam.on('examCompleted', () => {
    console.log("\nExamination has been completed.");
});

// 5. examSubmitted event
exam.on('examSubmitted', (rollNo) => {
    console.log("Student with Roll Number", rollNo,
                "has submitted the examination.");
});

// Trigger all events using the same object
exam.emit('examStarted');

exam.emit('answerSubmitted', 101, 'EventEmitter is used to handle events in Node.js.');

exam.emit('timeWarning');

exam.emit('examCompleted');

exam.emit('examSubmitted', 101);
