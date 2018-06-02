//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty')
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.key == 'G'){
      alert("You have pressed the G key");
    }
  });
}

function submitIt() {
  
}

$(document).ready(function(){
  // call functions here
  getIt();
  frameIt();
  pressIt();
});