# brents-daily-planner

Link to application: https://brentp24.github.io/brents-daily-planner/

Description of application:  Daily planner where you can enter and store the tasks / meetings for that hour.  Each hour conditionally formats whether that specific hour is in the past, current or future.  This application uses moment.js to format time.   

![day planner final](./assets/daily-planner.jpg)



## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
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
```