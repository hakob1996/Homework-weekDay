$(document).ready(function () {



var scheduledHours = [];

for (var hour = 9; hour < 18; hour++) {
    scheduledHours.push(moment({
        hour
    }).format('h  a'));
    $('.container').append(`<div class="row time-block" data-time=${hour}> 
           <div class="col-sm col-md-2 hour" data-time=${hour}> 
             <p class=dayHour>${moment({hour}).format('h  a')}</p>
           </div> 
           
           <div class="col-sm col-md-8 d-flex description" data-time=${hour}> 
             <textarea class=textArea></textarea> 
           </div> 
      
           <div class="col-sm col-md-2 saveBtn" data-time=${hour}>
           <i class="far fa-save fa-2x" id=icon> SAVE </i>  
           </div>`);
}


var m = moment();
$.each($(".time-block"), function (index, value) {
    var dateHour = $(value).attr("data-time");
    if (Number(dateHour) === m.hour()) {
        $(this).find("textarea").addClass('present');
    } else if (Number(dateHour) < m.hour()) {
        $(this).find("textarea").addClass('past');
    } else {
        $(this).find("textarea").addClass('future');
    }
});

let timeObject = {};
  if (localStorage.getItem('timeObject')) {
      timeObject = JSON.parse(localStorage.getItem('timeObject'));
  }else{
    timeObject = {
      '9': { time: "9", value: ""},
      '10':{ time: "10", value: ""},
      '11':{ time: "11", value: ""},
      '12':{ time: "12", value: ""},
      '13':{ time: "13", value: ""},
      '14':{ time: "14", value: ""},
      '15':{ time: "15", value: ""},
      '16':{ time: "16", value: ""},
      '17':{ time: "17", value: ""}
    };
  }

$(".description").each(function(){
   $(this).find(".textArea").val(timeObject[$(this).attr("data-time")].value);
  });



 
});