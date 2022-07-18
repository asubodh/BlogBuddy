document.write("<center><font size=+3'>");
var day = new Date();
var hr = day.getHours();
if (hr >= 0 && hr < 12) {
    document.write("Good Morning!");
} else if (hr == 12) {
    document.write("Good Noon!");
} else if (hr >= 12 && hr <= 17) {
    document.write("Good Afternoon!");
} else {
    document.write("Good Evening!");
}
document.write("</font></center>");