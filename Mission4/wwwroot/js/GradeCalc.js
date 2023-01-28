

$("#submitButton").click(function () {

    // assign variables for each grade category and weight them according to the syllabus
    let assignment = parseFloat($("#assignments").val() * 0.50)
    let group = parseFloat($("#group").val() * 0.10)
    let quizzes = parseFloat($("#quizzes").val() * 0.10)
    let midterm = parseFloat($("#midterm").val() * 0.10)
    let final = parseFloat($("#final").val() * 0.10)
    let intex = parseFloat($("#INTEX").val() * 0.10)

    // calculate final grade based on weights and user input
    let finalGrade = assignment + group + quizzes + midterm + final + intex

    let letterGrade = ''

    // determine the final letter grade
    if (finalGrade >= 94) {
        letterGrade = 'A'
    }
    else if (finalGrade >= 90 & finalGrade < 94) {
        letterGrade = 'A-'
    }
    else if (finalGrade >= 87 & finalGrade < 90) {
        letterGrade = 'B+'
    }
    else if (finalGrade >= 84 & finalGrade < 87) {
        letterGrade = 'B'
    }
    else if (finalGrade >= 80 & finalGrade < 84) {
        letterGrade = 'B-'
    }
    else if (finalGrade >= 77 & finalGrade < 80) {
        letterGrade = 'C+'
    }
    else if (finalGrade >= 74 & finalGrade < 77) {
        letterGrade = 'C'
    }
    else if (finalGrade >= 70 & finalGrade < 74) {
        letterGrade = 'C-'
    }
    else if (finalGrade >= 67 & finalGrade < 70) {
        letterGrade = 'D+'
    }
    else if (finalGrade >= 64 & finalGrade < 67) {
        letterGrade = 'D'
    }
    else if (finalGrade >= 60 & finalGrade < 64) {
        letterGrade = 'D-'
    }
    else {
        letterGrade = 'E'
    }

    // the final letter grade and grade percentage values that will print below the form
    $('#finalPercent').html("Final Grade Percentage: " + finalGrade + "%")
    $('#finalLetter').html("Final Letter Grade: " + letterGrade)

})