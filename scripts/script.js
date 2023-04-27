// single line comments like this
/*
comment blocks
like this
*/
var box3 = document.getElementById('box-3');
box3.style.color = 'red';

function changeColor(colorToChangeTo) {
    box3.style.color = colorToChangeTo;
    console.log(colorToChangeTo);
}

changeColor('green');
changeColor('blue');
changeColor('black');
