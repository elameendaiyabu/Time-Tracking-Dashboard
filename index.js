//buttons
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
//period
const period1 = document.getElementById("period1");
const period2 = document.getElementById("period2");
const period3 = document.getElementById("period3");
const period4 = document.getElementById("period4");
const period5 = document.getElementById("period5");
const period6 = document.getElementById("period6");
//current hours
const workhrs = document.getElementById("work-hour");
const playhrs = document.getElementById("play-hour");
const studyhrs = document.getElementById("study-hour");
const exercisehrs = document.getElementById("exercise-hour");
const socialhrs = document.getElementById("social-hour");
const selfCare = document.getElementById("self-care-hour");
//previous hours
const prevWork = document.getElementById("previous-work");
const prevPlay = document.getElementById("previous-play");
const prevStudy = document.getElementById("previous-study");
const prevExercise = document.getElementById("previous-exercise");
const prevSocial = document.getElementById("previous-social");
const prevSelfCare = document.getElementById("previous-self-care");

//array of periods
const periodArray = [period1, period2, period3, period4, period5, period6];

//array of current hours
const currentArray = [
  workhrs,
  playhrs,
  studyhrs,
  exercisehrs,
  socialhrs,
  selfCare,
];

//array of previous hours
const previousArray = [
  prevWork,
  prevPlay,
  prevStudy,
  prevExercise,
  prevSocial,
  prevSelfCare,
];

//current hours array in this format work,play,study,exercise,social,selfCare
const dailyHours = [5, 2, 3, 1, 3, 1];

const weeklyHours = [32, 10, 4, 4, 5, 2];

const monthlyHours = [75, 16, 9, 14, 12, 9];

//previous hours array
const previousDayHours = [3, 4, 2, 4, 2, 5];

const previousWeekHours = [36, 8, 7, 5, 5, 2];

const previousMonthHours = [65, 32, 24, 10, 30, 21];

//////////Daily button
daily.addEventListener("click", function () {
  for (let i = 0; i < 6; i++) {
    periodArray[i].textContent = "Yesterday";
    for (let j = i; j < 6; j++) {
      currentArray[j].textContent = dailyHours[j] + "hrs";
      for (let k = j; k < 6; k++) {
        previousArray[k].textContent = previousDayHours[k] + "hrs";
      }
    }
  }
});
//////////Weekly button
weekly.addEventListener("click", function () {
  for (let i = 0; i < 6; i++) {
    periodArray[i].textContent = "Last Week";
    for (let j = i; j < 6; j++) {
      currentArray[j].textContent = weeklyHours[j] + "hrs";
      for (let k = j; k < 6; k++) {
        previousArray[k].textContent = previousWeekHours[k] + "hrs";
      }
    }
  }
});
//////////Monthly button
monthly.addEventListener("click", function () {
  for (let i = 0; i < 6; i++) {
    periodArray[i].textContent = "Last Month";
    for (let j = i; j < 6; j++) {
      currentArray[j].textContent = monthlyHours[j] + "hrs";
      for (let k = j; k < 6; k++) {
        previousArray[k].textContent = previousMonthHours[k] + "hrs";
      }
    }
  }
});
