$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });

    $( "#tabs" ).tabs();
});

// EasterEgg

let text = document.querySelector('#text')
let close = document.querySelector('.close')
let count = 0

text.addEventListener('click', function() {
    if (count > 10) {
        clickEasterEgg()
        return count = 0
    }
    return count++
})

function clickEasterEgg() {
    document.querySelector('.hiddenBlock').classList.add('d-flex')
}

close.addEventListener('click', function() {
    document.querySelector('.hiddenBlock').classList.remove('d-flex')
})