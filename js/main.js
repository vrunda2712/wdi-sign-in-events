document.addEventListener('DOMContentLoaded', function(event) {
  var signIn = document.querySelector('.signin');
  var modal = document.querySelector('.modal');
  var close = document.querySelector('.close');
  var submit = document.querySelector('.submit');
  var input = document.querySelectorAll('input');

  signIn.addEventListener('click',function(){
      modal.style.display = 'block';
  });

  close.addEventListener('click',function (){
    modal.style.display = 'none';
  });

  submit.addEventListener('click',function(){
    for(var i = 0;i < input.length; i++) {
      input[i].className = 'error';
    }
  })
});
