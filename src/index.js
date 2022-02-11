import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import HolidaysService from './js/holidays-service.js';

function getResults(response) {
  $("#holidays").empty();
  if (response instanceof Error) {
    $("#showErrors").text(response)
  }
  else if (response) {
    for(let i=0; i<response.length; i++) {
      $("#holidays").append(`<li>${response[i].name}</li>`)
    }
   
  }
  else {
    $("#showErrors").text(`${response}`);
  }
}

$(document).ready(function() {
  $("#submit").click(function() {
    let day = $("#day").val();
    let month = $("#month").val();
    HolidaysService.getHoliday(day, month)
      .then(function(response) {
        console.log(response);
        getResults(response);
      })
  })
});