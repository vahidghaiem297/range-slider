function updateTextInput() {
    
    
    
	var value1 = Number(document.getElementById("loanAmount").value);
    var value2 = "";

    if ( value1 === 0 ) {
        value2 = "نظر دهید : خیلی ضعیف";
        // Insert more code here for what you intend to do
    }
    else if ( value1 === 1 ) {
        value2 = "نظر دهید : ضعیف";
        // Insert more code here for what you intend to do
    }
    else if ( value1 === 2 ) {
        value2 = "نظر دهید : متوسط";
        // Insert more code here for what you intend to do
    }
    else if ( value1 === 3 ) {
        value2 = "نظر دهید : خوب";
        // Insert more code here for what you intend to do
    }
    else if ( value1 === 4 ) {
        value2 = "نظر دهید : خیلی خوب";
        // Insert more code here for what you intend to do
    }
    else if ( value1 === 5 ) {
        value2 = "نظر دهید : عالی";
        // Insert more code here for what you intend to do
    }
    else if ( value1 === 6 ) {
        value2 = "نظر دهید : بسیار عالی";
        // Insert more code here for what you intend to do
    }
    else if ( value1 === 7 ) {
        value2 = "نظر دهید : فوق العاده";
        // Insert more code here for what you intend to do
    }

	document.getElementById('value2').innerHTML = value2;
    
   
    
}

// const range = document.querySelector('.range')
// const thumb = document.querySelector('.thumb')
// const track = document.querySelector('.track-inner')

// const updateSlider = (value) => {
//   thumb.style.left = `${value}%`
//   thumb.style.transform = `translate(-${value}%, -50%)`
//   track.style.width = `${value}%`
// }

// range.oninput = (e) =>
//   updateSlider(e.target.value)

// updateSlider(50) // Init value


$(document).ready(function(){
	var $inputRange = $('input[type="range"]');
	
	$.fn.addCommas = function() {
		 return this.each(function(){ 
			  $(this).val( $(this).val().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
		 })
	}
	
	// Update <output> from range value
	function valueOutput($element) {
		// Get value from range slider
		var $value = $element.value;
		// Get output element(s)
		var $output = $($element).parent().children(".rangeslider__output")[0];		
		
		// Format output value
		$($output).val($value).addCommas();
		$($output).val("£" + $($output).val());
	}
	
	// Calculate output(s) for multiple range sliders
	for (var i = $inputRange.length - 1; i >= 0; i--) {
		valueOutput($inputRange[i]);
	};

	// Calculate output with range slider movement
	$(document).on('input', 'input[type="range"]', function(e) {
		valueOutput(e.target);
	});

	// Initialise rangeslide.js
	$inputRange.rangeslider({
		// Stop polyfill reverting when 
		// browser compatible with input[rangeslider]
		polyfill: false,
		
		// Run once user has finished adjusting range slider
		onSlideEnd: function() {
			console.log("Range slider changed");
		}
	});
	
	window.addEventListener('orientationchange', function(){
		$inputRange.rangeslider("update");
	});

	
});
