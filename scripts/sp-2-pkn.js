$( document ).ready(function() {
  console.log( "ready!" );
  console.log(userInput);

  var pumpkinReplacer = function (string){
    let temp = string.split();
    for (let i = 0; i < temp.length; i++){
      if (string[i] === ' '){
        string.i = String.fromCharCode(0xD83C, 0xDF83);
      }
    }
    temp.join('');
    let p1 = document.createElement('p')
    p1.innerHTML = $('#textarea1').val()
    document.getElementById('textdiv').appendChild(p1);
  }

  $('#button1').on('click', function() {
    preventDefault()
    let userInput = $('#textarea1').val();
    console.log(pumpkinReplacer(userInput));
  });


  var pumpkinReplacer = function (string){
     let temp = string.split();
     for (let i = 0; i < temp.length; i++){
       if (temp[i] === ' '){
         i = ':jack_o_lantern:';
       }
     }
     return temp.join('');
    let p1 = document.createElement('p')
    p1.innerHTML = $('#textarea1').val()
    document.getElementById('textdiv').appendChild(p1);
  }
