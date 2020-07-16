    
//Time variables using moment.js CDN link
var now = moment();
var weekday = moment().format('dddd');
var day = moment().format('Do');
var currentHour=(now.format('HH'));
var currentHourAmPm=(now.format('hA'));
var hour = moment().format('hA')

// Establish color code variables
var past=true;
var present=false;

//Display current date at top of app page
$(currentDay).text(now.format('dddd, MMMM Do, YYYY'));  

//Check for stored entries
var storedEntries = JSON.parse(localStorage.getItem('entryList'))

//Set object for first use if no object currently exists
if (!storedEntries) {
storedEntries = {0: "", 1: "10 AM Meeting", 2: "", 3: "Lunch at Noon", 4: "", 5: "Test at 2PM", 6: "", 7: "", 8: "Miller Time!"}
}

// Build out hour labels using a loop and in moment.js format "HH AM/PM" 
for (var i = 0; i < 9; i++)
{
var hourLabel = moment().hour(i + 9).format('hA')

//Create 2 variables to set color as "present" on the current hour, otherwise "past"
if (hourLabel === hour) {
    past = false;
    present = true;
}

//Build out the input rows for entering tasks and events
var thisRow = $('<div class="row">')
$('.input-boxes').append(thisRow)


//Append the hour label divs to the rows and populate them with hour labels
var hourBlock = $(`<div class="hour-lbls" data-index="${i}">`)
hourBlock.text(`${hourLabel}`);
thisRow.append(hourBlock)

//Add text entry blocks - including any stored entries from the storedEntries object
var entryBlock = $(`<textarea class="input-box" data-index="${i}">`)

entryBlock.text(storedEntries[i])

//Add color classes to the text entry blocks for past / present /future hours
if (past) {
    entryBlock.addClass("past")
} else if (present) {
    entryBlock.addClass("present")
    present = false;
} else {
    entryBlock.addClass("future")
}
thisRow.append(entryBlock)

//Add the save buttons and fontawesome "save" icon
var btn = $(`<button class="col-1 btn saveBtn" data-index="${i}">`)
btn.append(`<i class="far fa-save fa-2x" data-index="${i}">`)
thisRow.append(btn)
}

// Set save clicks to update the entry block line (where data indexes are equal to the reference index) to local storage
$('.saveBtn').click(function () {
var index = $(this).attr('data-index');
var txt = $(`textarea[data-index="${index}"]`)

    if (txt.val()!= null) { //handle empty text
        storedEntries[index] = txt.val();
        localStorage.setItem('entryList', JSON.stringify(storedEntries));

        
     }
 }
)
