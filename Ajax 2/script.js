// TV Schedule example

function retrieveGenres() {
  // AJAX call using JQuery that retrieve and process the result
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function(){
   var response = JSON.parse(this.responseText);
   var categories = response['categories'];
   var title_first_object = response['categories'][0].title;
  //console.log('response is', title_first_object);
  listGenres(categories);
 };

 var query = 'http://www.bbc.co.uk/tv/programmes/genres.json';
  xmlhttp.open("GET", query, true);
  xmlhttp.send();
 return xmlhttp;
 //console.log(xmlhttp);

}

function listGenres(categories){
  $.each(categories, function(index, category){
    $('#genres').append("<ul>"+category.title+"</ul>");
    console.log( index + ":" + category.title);

  });
}

function getTomorrowsSchedule(genre) {
 // call to retrieve TV schedule
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function(){
   var scheduleResponse = JSON.parse(this.responseText);
   var broadcasts = scheduleResponse['broadcasts'];
   //var title_first_object = scheduleResponse['broadcasts'][0]['programme']['title'];
  //console.log('response is', title_first_object);
  listProgrammes(broadcasts);
 };

 var query2 = 'http://www.bbc.co.uk/tv/programmes/genres/drama/schedules/tomorrow.json';
  xmlhttp.open("GET", query2, true);
  xmlhttp.send();
 //return xmlhttp;
}

function listProgrammes(broadcasts){
  $.each(broadcasts, function(index, broadcast){
    var durationAdjusted = broadcast.duration/60;
    $('#programmes').append("<li>"+broadcast.programme.display_titles.title+"</li>");
    $('#programmes').append("<img src=http://ichef.bbci.co.uk/images/ic/272x153/"+broadcast.programme.image.pid+".jpg />");
    $('#programmes').append("<h2> Synopsis: "+broadcast.programme.short_synopsis+"</h2>");
    $('#programmes').append("<h2> Date: "+formatDate(broadcast.start, broadcast.end)+"</h2>");
    $('#programmes').append("<h2> Programme Duration: "+durationAdjusted+" minutes</h2>");
    $('#programmes').append("<span> Channel: "+broadcast.service.title+"</span>");
    console.log( index + ":" + broadcast.programme.display_titles.title);

  });
}




function formatDate(start, end) {
  start_date = new Date(start);
  end_date = new Date(end);

  day = start_date.getDate();
  month = start_date.getMonth() + 1; // the returned months are 0-11
  year = start_date.getFullYear();

  start_hour = start_date.getHours();
  start_mins = start_date.getMinutes();

  end_hour = end_date.getHours();
  end_mins = end_date.getMinutes();

  date = day + "/" + month + "/" + year + " ";
  
  // add leading 0 and return last two characters to make sure we use 00:00 format
  date +=  ("0"+start_hour).slice(-2) + ":" + ("0"+start_mins).slice(-2) + " - " +
           ('0' + end_hour).slice(-2) + ":" +  ( "0" + end_mins).slice(-2); 
  return date;
}