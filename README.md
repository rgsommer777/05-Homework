## 05 Third-Party APIs: Work Day Scheduler
Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. 
Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.


## User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively


## Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist


The following animation demonstrates the application functionality:
![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)


## My Approach
1. Use jquery to replicate elements for text entry blocks and save buttons. First build the rows, then text blocks, then buttons.
2. Use classes to color code the text entry blocks based on comparison of current hour to moment.js. (past, present, future).
3. Save entries by line using an object (storedEntries) to enable persistance on refresh.

## Files Included
index.html<br>
script.js<br>
style.css<br>
README.md<br>
Assets/screenshots/dayPlannerScreenshot.png

## What I Learned
Used moment.js for the first time and found it useful for time-based manipulations and formatting . Also had a chance to work more in depth with objects and writing and reading them from local storage. Discovered template literals which made for more compact javascript statements.

## Links
GitHub link to project file repo: https://github.com/rgsommer777/05-Homework <br>
GitHub link to hosted page: https://rgsommer777.github.io/05-Homework/

## Screenshots   
https://github.com/rgsommer777/05-Homework/blob/master/Assets/Screenshots/dayPlannerScreenshot.png"

