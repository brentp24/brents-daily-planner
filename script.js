
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

//get data on refresh of page.  
$(document).ready(function () {
    for (i = 0; i < timeStops.length; i++) {
   var currentText = (localStorage.getItem("description" + timeStops[i]));
        document.getElementById("description_" + timeStops[i]).value = currentText;  
    }
});

// click Save button
$("body").on("click", ".saveBtn", function () {
    let buttonNumber = this.value;
      console.log(buttonNumber);
    localStorage.setItem( "description" + buttonNumber, document.getElementById("description_" + buttonNumber).value)
})

// function saveData
function saveData() {
   
}

var largeBlock = $(".large-block");

function renderTimeBlocks() {
    for (i = 0; i < timeStops.length; i++) {

        // declare variables
        var newTimeBlock = $("<div/>").attr({
            class: "time-block",
        });
        var newRow = $("<div/>").attr({
            class: "row",
        });
        var newHour = $("<div/>").attr({
            class: "hour",
            id: "hour_" + timeStops[i]
        });
        var newDescription = $("<input/>").attr({
            class: "description",
            id: "description_" + timeStops[i]
        });
        var newSaveBtn = $("<button/>").attr({
            class: "saveBtn fas fa-save",
            id: "btn_" + timeStops[i],
            value: timeStops[i],
        })
        //var newSaveBtn = document.createElement("button");

        // append elements
        largeBlock.append(newTimeBlock);
        newTimeBlock.append(newRow);
        newRow.append(newHour, newDescription, newSaveBtn);
        $(newHour).append(timeStops[i] + ":00");


        //conditional classes
        if (currentTime > timeStops[i]) {
            $(newDescription).attr("class", "past");
        } else if (currentTime === timeStops[i]) {
            $(newDescription).attr("class", "present");
        } else { $(newDescription).attr("class", "future") }

    }
}

renderTimeBlocks();

