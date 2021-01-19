let submit = document.getElementById('submitButton')

submit.addEventListener('click', () => {
	let assignments = parseInt(document.getElementById('assignments').value) || 0
	let projects = parseInt(document.getElementById('projects').value) || 0 
	let quizzes = parseInt(document.getElementById('quizzes').value) || 0 
	let exams = parseInt(document.getElementById('exams').value) || 0 
	let intex = parseInt(document.getElementById('intex').value) || 0

	console.log(assignments, projects, quizzes, exams, intex)

	let score = (.5 * assignments) + (.1 * projects) + (.1 * quizzes) + (.2 * exams) + (.1 * intex)
	score = score.toFixed(2)

	alert("Your score is: " + score + "%")

	document.getElementById('output').value = score + "%";

})

function updateAssignments(val) {
	document.getElementById('assignments').value = val;
}
function updateProjects(val) {
	document.getElementById('projects').value = val;
}
function updateQuizzes(val) {
	document.getElementById('quizzes').value = val;
}
function updateExams(val) {
	document.getElementById('exams').value = val;
}
function updateINTEX(val) {
	document.getElementById('intex').value = val;
}