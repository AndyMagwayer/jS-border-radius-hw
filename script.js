document.getElementById('generate-btn').addEventListener('click', function()){
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const borderRadius = document.getElementById('border-radius').value;


    const gradientPreview = document.querySelector('.gradient-preview');
    gradientPreview.style.background = 'linear-gradient(to right, ' + color1 + ',' + color2 + ')';
    gradientPreview.style.borderRadius = borderRadius + 'px';

    
}