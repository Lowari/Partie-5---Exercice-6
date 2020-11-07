 const inputs = document.querySelectorAll('input');

 for (var i = 0; i < inputs.length; i++) {
     var input = inputs[i];
     input.addEventListener('focus', function() {
         this.classList.toggle('black');
     })
     input.addEventListener('blur', function() {
         this.classList.toggle('black');
     })
 };
