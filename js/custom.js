$('document').ready(function(){

var song = new Audio();
song.volume=0.50;
var status=0;

song.src = 'musics/run_boy_run.mp3';

song.addEventListener('loadedmetadata',function(){

  $('#duration').attr('max',song.duration);
  var duration = song.duration;
  $('.fulltime').text(formatSecondsAsTime(duration));
});

$('.play').on("click",function(){
    var _this = $(this);

      if(status == 0)
      {
        _this.text('pause_circle_outline');
        song.play();
        status = 1;
      }
      else if(status == 1)
      {
        _this.text('play_circle_outline');
        song.pause();
        status = 0;
      }

});

  song.addEventListener('timeupdate',function (){

    $(".currenttime").text(formatSecondsAsTime(song.currentTime));

    curtime = parseInt(song.currentTime, 10);
    w = curtime / song.duration*100;

      $('.fancythumb').css({
        width:w+'%',
      });
      $("#duration").val(curtime);
  });

  song.addEventListener("ended", function(){
      song.currentTime=0;
      song.play();
  });

  $("#duration").on("change", function() {
        var select = $(this).val();
        song.currentTime = select;
        console.log(select);
        $("#duration").attr("max", song.duration);

    });

    var fav = 0;
    $('.fav').on("click",function(){
      _this = $(this);
      if(!fav){
        _this.text('favorite');
        fav = 1;
      }
      else{
        _this.text('favorite_border');
        fav = 0;

      }
    });



function formatSecondsAsTime(secs) {
  var hr  = Math.floor(secs / 3600);
  var min = Math.floor((secs - (hr * 3600))/60);
  var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

  if (min < 10){
    min = "0" + min;
  }
  if (sec < 10){
    sec  = "0" + sec;
  }

  return min + ':' + sec;
}





});
