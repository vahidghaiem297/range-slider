function updateTextInput() {
    
    
    
	var value1 = Number(document.getElementById("range").value);
    var value2 = "";

    if ( value1 === 0 ) {
        value2 = "نظر دهید : خیلی ضعیف";
        // Insert more code here for what you intend to do
    }
    else if ( value1 === 14.2857 ) {
        value2 = "نظر دهید : ضعیف";
        // Insert more code here for what you intend to do
    }
    else if ( value1 === 28.5714 ) {
        value2 = "نظر دهید : متوسط";
        // Insert more code here for what you intend to do
    }
    else if ( value1 === 42.8571 ) {
        value2 = "نظر دهید : خوب";
        // Insert more code here for what you intend to do
    }
    else if ( value1 === 57.1428 ) {
        value2 = "نظر دهید : خیلی خوب";
        // Insert more code here for what you intend to do
    }
    else if ( value1 === 71.4285 ) {
        value2 = "نظر دهید : عالی";
        // Insert more code here for what you intend to do
    }
    else if ( value1 === 85.7142 ) {
        value2 = "نظر دهید : بسیار عالی";
        // Insert more code here for what you intend to do
    }
    else if ( value1 === 99.9999 ) {
        value2 = "نظر دهید : فوق العاده";
        // Insert more code here for what you intend to do
    }

	document.getElementById('value2').innerHTML = value2;
    
   
    
}
const range = document.querySelector('.range')
const thumb = document.querySelector('.thumb')
const track = document.querySelector('.track-inner')

const updateSlider = (value) => {
  thumb.style.left = `${value}%`
  thumb.style.transform = `translate(-${value}%, -50%)`
  track.style.width = `${value}%`
}

range.oninput = (e) =>
  updateSlider(e.target.value)

updateSlider(50) // Init value