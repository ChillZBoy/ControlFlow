const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function weeklyDayLoop (day)
{
    for (let i = 0; i < days.length; i++) {
        if (day == i+1) {
            return days[i];
        }
    }
}
console.log(weeklyDayLoop(2));
