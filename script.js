

//setting curent date 
var currentDate = moment().format('MMMM Do, YYYY')
$("#currentDay").text(currentDate);



 
// creating and appending new elements 
function todoList() {
    var updateDiv = $(".container");
    for (var i=9; i <=17; i++){
        var newRow = $("<div>").attr("class","row");
        var timeCol =$("<div>").attr("class","hour");

        if ([i] <= 12) {
        timeCol.text([i] + "a.m");
        } 
        else {
        timeCol.text(([i]-12) + "p.m");
        }

     var noteAdd = $("<textarea>").attr("class", "description");
     noteAdd.attr("hour-now", [i]);
     noteAdd.attr("id", `textarea${[i]}`);
     noteAdd.attr("value",[i]);
     
     var saveBtn = $("<button>").attr("class", "saveBtn");
     var iconImg = $("<i>").attr("class","far fa-save fa-2x")
   
     updateDiv.append(newRow);
     newRow.append(timeCol);
     newRow.append(noteAdd);
     newRow.append(saveBtn);
     saveBtn.append(iconImg);
    }
}

//working with save button and setting info to local storage






//changing colors according time 

function replaceColor(){
 var currentTime = moment().hours();
 //console.log(currentTime);
     
    for (i=9; i <= 17; i++){
     var addCol = $(`#textarea${[i]}`);

     if (addCol.attr("value") == currentTime) {
        addCol.addClass("present");
     }
     else if (addCol.attr("value") > currentTime) {
        addCol.addClass("past");
     }
     else if (addCol.attr("value") < currentTime) {
        addCol.addClass("future")
     }
   }
}; 
//adding saved infro from storage to the page 
function myTask() {
    for(i = 9 ; i < 17; i++){
        var time = JSON.parse(localStorage.getItem(`textarea${[i]}`));
        $(`#textarea${[i]}`).text(time);
    }
}
function saveInfo(e) {
    e.preventDefault();
  //console.log("click")
  var text = $(this).siblings('textarea').val().trim();
  var id = $(this).siblings('textarea').attr('id');

  localStorage.setItem(id, JSON.stringify(text));

};


todoList();
replaceColor()
myTask();
$('.saveBtn').on('click', saveInfo);
