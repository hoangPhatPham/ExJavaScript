var month = 0;
var year = 1930	;
var open_time = 0;
function LoadCbYear(){
    for (var i = 1930; i <= 2100; i++) {
        var opt = document.createElement("option");
        var select = document.getElementById("year");
        opt.text = i;
        select.add(opt);
    }
}

function select_month(){
    month = parseInt(document.getElementById("month").value);
    GetSumDayInMonth(month);
    GetCalendar(month, year);
}

function select_year(){
    year = parseInt(document.getElementById("year").value);
    GetSumDayInMonth(month);
    GetCalendar(month, year);
}

// To get sum day of month 
var day_in_month = 0;
function GetSumDayInMonth(month){
    switch(month){
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
           day_in_month = 31;
           break;
        case 3:
        case 5:
        case 8:
        case 10:
           day_in_month = 30;
           break;
        case 1:
           if (year % 4 == 0)
              day_in_month = 29;
           else 
              day_in_month = 28;
           break;
    }
}

var day_go_to = new Date();
var day_count;
function GetCalendar(month, year) {
    day_count = 1; 
    var string_load_div = "";
    GetSumDayInMonth(month);
    day_go_to.setDate(1);
    day_go_to.setMonth(month);
    day_go_to.setYear(year);
    var first_day_in_month = day_go_to.getDay() + 1;
    for(i = 1; i <= 42; i ++){
        if ( i < first_day_in_month || i >= day_in_month + first_day_in_month)
             string_load_div += "<input type = 'button' class = 'div'/> ";
        if (i >= first_day_in_month && i < day_in_month + first_day_in_month){
             string_load_div += "<input type = 'button' id = '" + day_count + "'class = 'day_in_month' value = '" + day_count + "' onClick = 'show_date_time_on_div(" + day_count + ", " + month + ", " + year + ")'/>";
             day_count++;
        }
    }
    document.getElementById("day_in_month_div").innerHTML = string_load_div;
}
function show_date_time(){
    if(document.getElementById("bound_date_time").className == "hide")
        document.getElementById("bound_date_time").className = "show";
}
function hide_date_time(){
    if(document.getElementById("bound_date_time").className == "show")
        document.getElementById("bound_date_time").className = "hide";
}
function show_date_time_on_div(day_to_show, month_to_show, year_to_show){
    var month_txt;
    switch (month_to_show){
        case 0:
            month_txt = "January";
            break;
        case 1:
            month_txt = "February";
            break;
        case 2:
            month_txt = "March";
            break;
        case 3:
            month_txt = "April";
            break;
        case 4:
            month_txt = "May";
            break;
        case 5:
            month_txt = "June";
            break;
        case 6:
            month_txt = "July";
            break;
        case 7:
            month_txt = "August";
            break;
        case 8:
            month_txt = "September";
            break;
        case 9:
            month_txt = "October";
            break;
        case 10:
            month_txt = "November";
            break;
        case 11:
            month_txt = "December";
            break;
    }
    document.getElementById("text_date_time").innerText = day_to_show + ", " + month_txt + ", " + year_to_show;
    hide_date_time();
}

function show_today(){
    if(document.getElementById("bound_date_time").className == "hide")
        document.getElementById("bound_date_time").className = "show";
    var to_day = new Date();
    var day_today = to_day.getDate();
    month = to_day.getMonth();
    year = to_day.getFullYear();
    GetCalendar(month, year);
    document.getElementById("month").value = month;
    document.getElementById("year").value = year;

    for(i = 1; i <= 31; i ++){
        if (i == day_today){
            this_day = "" + i + "";
            document.getElementById(this_day).className = "today";
        }
    }
}

function back_month(){
    if (month > 0)
        month -= 1;
    document.getElementById("month").value = month;
    GetCalendar(month, year);
}


function next_month(){
    if (month < 11)
        month += 1;
    document.getElementById("month").value = month;
    GetCalendar(month, year)
}


function back_year(){
    year -= 1;
    document.getElementById("year").value = year;
    GetCalendar(month, year);
}


function next_year(){
    year += 1;
    document.getElementById("year").value = year;
    GetCalendar(month, year);
}