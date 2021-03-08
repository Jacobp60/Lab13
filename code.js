$(document).ready(function (){

    $("form").submit(createStudent);



});

function createStudent(event){

    event.preventDefault();
    let studentFirstName = $("input#firstname").val();
    let studentLastName = $("input#lastname").val();
    let pointsEarned = $("input#pointsEarned").val();
    let pointsPossible = $("input#pointsPossible").val();
    let percent = ((pointsEarned/pointsPossible) * 100).toFixed(2);
    let grades = "";
    if(percent >= 90.00){
        grades = "A";
    }else if(percent >= 80.00 && percent < 90.00){
        grades = "B";
    }else if(percent >= 70.00 && percent < 80.00){
        grades = "C";
    }else if(percent >= 65.00 && percent < 70.00){
        grades = "D";
    }else{
        grades = "F";
    }
    let Student ={
        Firstname: studentFirstName,
        Lastname: studentLastName,
        Pointsearned: pointsEarned,
        Pointspossible: pointsPossible,
        Precentage: percent,
        Lettergrade: grades
    }
    $("p#fullName").text(`Name: ${Student.Firstname} ${Student.Lastname}`);
    $("p#letterGrade").text(`Percentage: ${Student.Precentage}% Letter Grade: ${Student.Lettergrade}`);
}
