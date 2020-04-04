$(function() {

  $.getJSON( "flowchat-js/demo-data/data.json", function( dataJSON ) {

    $('#fc-container-1').flowchat({
      dataJSON: dataJSON,
      startMessageId: 2,
      autoStart: true,
      // startButtonId: "#startButton1",
      delay: 1500
    });
  });

  $.getJSON( "flowchat-js/demo-data/simple-data.json", function( dataJSON2 ) {

    $('#fc-container-2').flowchat({
      dataJSON: dataJSON2,
      startMessageId: 1,
      autoStart: true,
      // startButtonId: "#startButton2",
      delay: 1500
    });

    var editor = new JsonEditor('#json-display', dataJSON2);
  });

  $('#applyButton').click(function() {
    html = $('#json-display').html();
    str = html.replace(/(<([^>]+)>)/ig,"");

    var obj = JSON.parse(str);

    $( "#fc-container-2 .options li").off("click",  "**");

    $('#fc-container-2').flowchat({
      dataJSON: obj,
      startMessageId: 1,
      autoStart: true,
      // startButtonId: "#startButton2",
      delay: 1500
    });

    $('.img-section').scrollLeft(200);

  });

  $('#resetButton').click(function() {

    $.getJSON( "flowchat-js/demo-data/simple-data.json", function( dataJSON2 ) {

      $('#fc-container-2').flowchat({
        dataJSON: dataJSON2,
        startMessageId: 1,
        autoStart: true,
        // startButtonId: "#startButton2",
        delay: 1500
      });

      var editor = new JsonEditor('#json-display', dataJSON2);
    });

  });


});