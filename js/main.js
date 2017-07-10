document.addEventListener('DOMContentLoaded', function(event) {
  var signIn = document.querySelector('.signin');
  var modal = document.querySelector('.modal');
  var close = document.querySelector('.close');

  signIn.addEventListener('click',function(){
      modal.style.display = 'block';
  });

  close.addEventListener('click',function (){
    modal.style.display = 'none';
  });
});
