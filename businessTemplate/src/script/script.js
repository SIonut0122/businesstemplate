document.addEventListener('DOMContentLoaded', function() {
	  let navInputDiv   = document.querySelector('.nav_input_div'),
	  	  navInputInput = document.querySelector('.nav_input_input');
	
		// Check if search navbar input is empty, and hide it on scroll down. Otherwise return false.
	  document.addEventListener('scroll', function() {
	  		if(navInputInput.value.length === 0 ) {
	  			navInputDiv.classList.remove('nav_input_div_open');
	  		} else {
	  			return false;
	  		}
	  })	 
});