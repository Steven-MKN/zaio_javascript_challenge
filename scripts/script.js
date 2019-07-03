function changeColor(color = ''){
    var right_side_div = document.getElementById('right_side');
    right_side_div.style.background = color;

    document.getElementById('color_text').innerHTML = 'hi, my name is ' + color;

    var sum = 0;
    for (let i = 0; i < color.length; i++) {
        sum += color.charCodeAt(i);
    }

    document.getElementById('calc_text').innerHTML = sum;
};