const itemGrid = document.querySelectorAll('.entitats__grid--item');

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
