function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}

$(function() {

  for(var i = 1; i <36; i++)
    preloadImage('img3d/'+i+'.jpg');

  $('#imgModel').attr('draggable', false);

  var imgContainer = $('#imgContainer').get(0);
  var mc = new Hammer(imgContainer);

  mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

  var count = 15;

  mc.on("panleft panright", function(ev) {

    var imgModel = $('#imgModel'),
        currentImg = parseInt(imgModel.attr('src').split('/')[1].split('.')[0]);

     speed = 0.3;

    if(ev.type == 'panleft') {
      count = count + speed
      newImg = Math.floor(count);
    }
    else if(ev.type == 'panright') {
      count = count - speed
      newImg = Math.floor(count);
    }

    // console.log(ev.type);
    console.log(count);

    if(count > 35)
      count = 35;

    if(count <= 0) 
      count = 1;

    if(newImg > 35)
      newImg = 35;

    if(newImg <= 0) 
      newImg = 1;

     imgModel.attr('src', 'img3d/' + newImg + '.jpg');

  });

});