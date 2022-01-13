// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// Calculate function:

$("#calculate").click(function () {

    // - reads in values from the DOM
    // - multiplies the values by the correct weights
    // - Assigns values to variables
    
    iAScore = $("#assignmentsScore").val() * .55; // 55%
    iGScore = $("#groupProjectScore").val() * .05; // 5%
    iQScore = $("#quizzesScore").val() * .1; // 10%
    iEScore = $("#examsScore").val() * .2; // 20%
    iIScore = $("#intexScore").val() * .1; // 10%

    // - Adds the variables

    iTotalScore = iAScore + iGScore + iQScore + iEScore + iIScore;

    // - Use an if statment to determine correct letter grade

    if (iTotalScore >= 94) {
        sLetterGrade = "A";
    }
    else if (iTotalScore >= 90) {
        sLetterGrade = "A-";
    }
    else if (iTotalScore >= 87) {
        sLetterGrade = "B+";
    }
    else if (iTotalScore >= 84) {
        sLetterGrade = "B";
    }
    else if (iTotalScore >= 80) {
        sLetterGrade = "B-";
    }
    else if (iTotalScore >= 77) {
        sLetterGrade = "C+";
    }
    else if (iTotalScore >= 74) {
        sLetterGrade = "C";
    }
    else if (iTotalScore >= 70) {
        sLetterGrade = "C-";
    }
    else if (iTotalScore >= 67) {
        sLetterGrade = "D+";
    }
    else if (iTotalScore >= 64) {
        sLetterGrade = "D";
    }
    else if (iTotalScore >= 60) {
        sLetterGrade = "D-";
    }
    else {
        sLetterGrade = "E";
    };

    $("#LetterGrade").html(sLetterGrade);

})

// Resets form values and letter grade on DOM

$('#reset').click(function () {
    $("#assignmentsScore").val("");
    $("#groupProjectScore").val("");
    $("#quizzesScore").val("");
    $("#examsScore").val("");
    $("#intexScore").val("");
    $("#LetterGrade").html("");

});