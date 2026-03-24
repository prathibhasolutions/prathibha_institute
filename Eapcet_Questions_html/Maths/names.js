function isStudentAllowed(studentName) {
    const allowedStudents = []; // Add more names

    return allowedStudents.some(name => name.toLowerCase() === studentName.toLowerCase());
}
