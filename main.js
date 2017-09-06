
$(document).ready(function() {
  $("#getResult").click(function() {
    // clearing the content of the list
    $("ul").empty();
    var search = $("#search").val();
    $.ajax({
      type: 'GET',
      url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + search,
      dataType: 'jsonp',
      success: function(result) {
        console.log(result);
        var obj = result.query.pages;
        for (var prop in obj) {
          $("ul").append('<a target="_blank" href="https://en.wikipedia.org/wiki?curid=' + obj[prop].pageid + '">' + '<li><h1 ">' + obj[prop].title + '</h1><p>' + obj[prop].extract + '</p></li></a>');
        }
      }
    });
  });

  // starting a search after enter is pressed
  $("#search").keypress(function(e) {
    if (e.which == 13) {
      $("#getResult").click();
    }
  });

});