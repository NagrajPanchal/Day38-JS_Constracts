// UC2 - Employee Wage Part Time and Full time
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
let empHour =0;
let WAGE_PER_HOURS  = 20;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch(empCheck)
{
    case IS_PART_TIME : 
        empHour = PART_TIME_HOURS;
        console.log("Employee Part Time");
        break;
    case IS_FULL_TIME :
        empHour = FULL_TIME_HOURS;
        console.log("Employee Full Time");
        break;
    default :
        empHour = 0;
        console.log("Employee is Absent");
}
let empWage = empHour*WAGE_PER_HOURS;
console.log("Employee Wage : "+empWage);



