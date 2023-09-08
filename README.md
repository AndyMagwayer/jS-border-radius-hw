# jS-border-radius-hw

![Image alt](https://github.com/AndyMagwayer/jS-border-radius-hw/blob/main/Screenshot%202023-09-08%20191929.png)

# Deploy: https://border-radius-hw-maga.netlify.app/

## about JS functions :
 `document.getElementById('generate-btn').addEventListener('click', function())`:
   - This line attaches a click event listener to the element with the ID 'generate-btn'. It listens for a click event on that element and executes the provided function when the event occurs.

2. `const color1 = document.getElementById('color1').value;`:
   - This line retrieves the value of the input element with the ID 'color1' and assigns it to the constant variable `color1`. It represents the value selected by the user for the first color.

3. `const color2 = document.getElementById('color2').value;`:
   - Similar to the previous line, this line retrieves the value of the input element with the ID 'color2' and assigns it to the constant variable `color2`. It represents the value selected by the user for the second color.

4. `const borderRadius = document.getElementById('border-radius').value;`:
   - This line retrieves the value of the input element with the ID 'border-radius' and assigns it to the constant variable `borderRadius`. It represents the value entered by the user for the border radius.

5. `const gradientPreview = document.querySelector('.gradient-preview');`:
   - This line uses the `document.querySelector()` method to select the element with the class 'gradient-preview' and assigns it to the constant variable `gradientPreview`. It represents the preview container where the gradient will be displayed.

6. `gradientPreview.style.background = 'linear-gradient(to right, ' + color1 + ',' + color2 + ')';`:
   - This line sets the `background` CSS property of the `gradientPreview` element to a linear gradient that starts with the color represented by `color1` and ends with the color represented by `color2`. The `to right` value specifies the direction of the gradient.

7. `gradientPreview.style.borderRadius = borderRadius + 'px';`:
   - This line sets the `borderRadius` CSS property of the `gradientPreview` element to the value represented by `borderRadius`. The `+ 'px'` portion appends the 'px' unit to the value to specify that it is in pixels.

This code calculates the gradient and border radius values based on the user's input and then applies those values to the preview container's style.
