document.addEventListener('DOMContentLoaded', function(event) {
  var signIn = document.querySelector('.signin');
  var modal = document.querySelector('.modal');

  signIn.addEventListener('click',function(){
      modal.style.display = 'block';
  });
});
