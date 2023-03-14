const itemGrid = document.querySelectorAll('.entitats__grid--item');
const itemTitle = document.querySelector('.entitats__grid--item span');
const itemAfterContent = document.querySelector('.entitats__grid--item span:after');

itemGrid.forEach( item => {
    item.addEventListener('mouseover', function() {
        item.classList.add('hover');
    })
})

itemGrid.forEach( item => {
    item.addEventListener('mouseout', function() {
        item.classList.remove('hover');
    })
})
