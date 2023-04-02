var time = dayjs().format('HH');
var userList = [];
var timeList = [
  "8 am",
  "9 am",
  "10 am",
  "11 am",
  "12 am",
  "1 pm",
  "2 pm",
  "3 pm",
  "4 pm",
  "5 pm",
  "6 pm",
  "7 pm",
  "8 pm",
  "9 pm",
  "10 pm"
];

var Container = document.querySelector("#timeslots-container");

//date and time
window.setInterval(function () {
  $("#currentDay").text(dayjs().format("ddd MM/DD h:mm:ss a"));
}, 1000);

var displayTime = function () {
    localTask();

  //for loop to dynamically store each time
  for (i = 0; i < timeList.length; i++) {
    //create div for taskRows
    var taskRows = document.createElement("div");
    taskRows.classList = "row time-block justify-content-center";
    //sets the id of each element to the index of our timeList
    taskRows.id = timeList.indexOf(timeList[i]);

    //creates timeSlot for each time
    var timeSlot = document.createElement("h4");
    timeSlot.classList = "hour col-1";
    timeSlot.id = timeList.indexOf(timeList[i]);
    timeSlot.textContent = timeList[i];
    //append to task row
    taskRows.appendChild(timeSlot);

    //creates input field
    var taskInp = document.createElement("input");
    taskInp.classList = "time-block clearable col-md-9 description p-0";
    taskInp.id = "input" + timeList.indexOf(timeList[i]);

if (userList[i]) {
    taskInp.value = userList[i];
  }
  taskRows.appendChild(taskInp);
    
    //create save and delete button
    var saveBtn = document.createElement("button");
    saveBtn.classList = "saveBtn col-1";
    saveBtn.id = "btn" + timeList.indexOf(timeList[i]);
    saveBtn.innerHTML = "<i class='far fa-save fa-lg'></i>";

    var deleteBtn = document.createElement("button");
    deleteBtn.classList = "deleteBtn col-1";
    deleteBtn.id = "btn" + timeList.indexOf(timeList[i]);
    deleteBtn.innerHTML = "<i class='far fa-trash-alt fa-lg'></i>";
    
    //adds save and delete button to task row
    taskRows.appendChild(saveBtn);
    taskRows.appendChild(deleteBtn);

//append to taskRows
    Container.appendChild(taskRows);


    var timeTest = i + 8;
    timeTest.toString();
    
    // variables to be used for comparison
    var timeBlock = dayjs('2023-01-01 ' + timeTest).format('HH');  // 0-24 hr format



   // present if the current time is equal or in between the block time
   if (time == timeBlock) {
            taskInp.classList = "present col-md-9 description p-0"
        }
        // past if the block time is before the current time
        else if (timeBlock < time) {
            taskInp.classList = "past col-md-9 description p-0"
        }
        // future if the block time is after the current time
        else if (timeBlock > time) {
            taskInp.classList = "future col-md-9 description p-0"
            }
  }
};


displayTime();

//grab local storage
function localTask() {
  if (JSON.parse(localStorage.getItem("tasks"))){
    userList = JSON.parse(localStorage.getItem("tasks"));
  }
}

//save button
$(".saveBtn").on("click", function () {
    var taskTest = [];
    for (var i = 0; i < timeList.length; i++){
      taskTest.push(document.getElementsByTagName("input")[i].value);
    }
    userList = taskTest;
    localStorage.setItem("tasks", JSON.stringify(userList));
});

//delete button
$(".deleteBtn").on("click", function () {
  userList = $(this).siblings("input").val("");
  userList = $(this).siblings("input").val();
  var taskTest = [];
    for (var i = 0; i < timeList.length; i++){
      taskTest.push(document.getElementsByTagName("input")[i].value);
    }
    userList = taskTest;
    localStorage.setItem("tasks", JSON.stringify(userList));
});






