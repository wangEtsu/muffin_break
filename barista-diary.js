

// set initial counts
localStorage.setItem("day", 20);
localStorage.setItem("dayCount", 0);

function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

console.log(localStorage.getItem("dayCount"));

// 4 shifts per day
if(parseInt(localStorage.getItem("dayCount")) == 4) {
    localStorage.setItem('day',parseInt(localStorage.getItem("day")) + 1);
    localStorage.setItem("dayCount", 0);
}

$('select[name^="month"]').val(8);
$('select[name^="day"]').val(localStorage.getItem("day"));
$('select[name^="year"]').val(2021);

// 2 hours shift
$($('.noPadding.question.checkable.multi-choice').find("input[name^='question'][value=2]")).trigger('click')

// tigger random checkboxes
for (let i = 0; i < 6; i++) {
    $($('.noPadding.question.checkable.tick-box').find("input[name^='question']")[getRandomArbitrary(1, 7)]).trigger('click')
}

// reset counter
localStorage.setItem("dayCount", parseInt(localStorage.getItem('dayCount')) + 1);

$('.next').trigger('click');