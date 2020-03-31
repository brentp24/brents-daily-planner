
//today's date
let todayDate = moment().format('LL');
let currentTime = moment().format("HH");
$("#currentDay").html(todayDate);

//create all the hours
let startTime = moment().utc().set({ hour: 9, minute: 00 });
let endTime = moment().utc().set({ hour: 18, minute: 59 });
let timeStops = [];
while (startTime <= endTime) {
    timeStops.push(new moment(startTime).format('HH'));
    startTime.add(60, 'minutes');
}

//get data
$(document).ready(function () {
    let hour1Description = localStorage.getItem("description");
    $(".description").val(hour1Description);
});

// click Save button
$(".saveBtn").click(function () {
    saveData();
});

// function saveData
function saveData() {
    let enteredDescription = $("#description").val();
    localStorage.setItem("description", enteredDescription)
}

var largeBlock = $(".large-block");

function renderTimeBlocks() {
    for (i = 0; i < timeStops.length; i++) {

        // declare variables
        var newTimeBlock = document.createElement("div");
        var newRow = document.createElement("div");
        var newHour = document.createElement("div");
        var newDescription = document.createElement("input");
        var newSaveBtn = document.createElement("div");

        // append elements
        largeBlock.append(newTimeBlock);
        newTimeBlock.append(newRow);
        newRow.append(newHour, newDescription, newSaveBtn);
        $(newHour).append(timeStops[i]);


     // give classes
        $(newTimeBlock).attr("class", "time-block");
        $(newRow).attr("class", "row");
        $(newHour).attr("class", "hour");
        $(newDescription).attr("class","description");
        $(newDescription).attr("id","description");
        $(this).attr("id","description" + timeStops[i])
        $(newSaveBtn).attr("class", "saveBtn fas fa-save");
        $(newSaveBtn).attr("type", "button");

        //conditional classes
        if (currentTime > timeStops[i]) {
           $(newDescription).attr("class","past");
        } else if (currentTime === timeStops[i])  {
            $(newDescription).attr("class","present");
        } else {$(newDescription).attr("class","future")}
            
    }
}

renderTimeBlocks();
console.log(currentTime)
