
const colorPicker = document.getElementById('colorPicker');
const colorValue = document.getElementById('colorValue');
const colorPreview = document.getElementById('colorPreview');


colorPicker.addEventListener('input', function() {

    const selectedColor = colorPicker.value;
  
    colorValue.textContent = selectedColor;
    colorPreview.style.backgroundColor = selectedColor;
});
