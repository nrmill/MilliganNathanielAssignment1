$('#submitButton').click(() => {
	let assignments = parseInt($('#assignments').val()) || 0
	let projects = parseInt($('#projects').val()) || 0 
	let quizzes = parseInt($('#quizzes').val()) || 0 
	let exams = parseInt($('#exams').val()) || 0 
	let intex = parseInt($('#intex').val()) || 0

	console.log(assignments, projects, quizzes, exams, intex)

	let score = (.5 * assignments) + (.1 * projects) + (.1 * quizzes) + (.2 * exams) + (.1 * intex)
	score = score.toFixed(2)

	alert("Your score is: " + score + "%")
	$('#output').val(score + "%");

})


function updateAssignments(val) {
	$('#assignmentsShow').val(val);
}
function updateProjects(val) {
	$('#projectsShow').val(val);
}
function updateQuizzes(val) {
	$('#quizzesShow').val(val);
}
function updateExams(val) {
	$('#examsShow').val(val);
}
function updateINTEX(val) {
	$('#intexShow').val(val);
}