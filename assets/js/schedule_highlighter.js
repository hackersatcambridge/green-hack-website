// Highlight the current event in the schedule
// Works by grabbing all schedule-time elements, and iterating through their
// HTML content, and then setting their parent element to the ".active" class
// if they should be highlighted
function highlightSchedule()
{
    // Set the current schedule position
    const current = new Date();

    var h = current.getHours();
    var m = current.getMinutes();

    let needs_highlighting = document.getElementsByClassName("schedule-time");
    var highlight_index = -1;
    for(i = 0; i < needs_highlighting.length;i++) {
        needs_highlighting[i].parentElement.className = "";
        var time = needs_highlighting[i].innerHTML;
        if(time === "|") continue;
        var hour = parseInt(time.substr(0, 2));
        var mins = parseInt(time.substr(3, 2));
        // if the current time hasn't reached this part yet
        if(hour > h || hour == h && mins > m) {
            break;
        }
        highlight_index++;
    }
    if(highlight_index < 0) return;
    needs_highlighting[highlight_index].parentElement.className = "active";
    console.log(highlight_index);
}
highlightSchedule();
setInterval(highlightSchedule,1000 * 60);
