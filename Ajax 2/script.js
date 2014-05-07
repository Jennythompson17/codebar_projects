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