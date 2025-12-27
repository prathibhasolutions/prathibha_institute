function isStudentAllowed(studentName) {
    const allowedStudents = ["sravan", "shashank", "Akhilesh","snehitha","siddartha"]; // Add more names

    return allowedStudents.some(name => name.toLowerCase() === studentName.toLowerCase());
}
