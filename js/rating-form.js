let form = document.querySelector('.rating-form');
let labels = form.querySelectorAll('label');

form.addEventListener('input', () => {
    let checkedStar = form.querySelector('input:checked');
    let checkedIndex = Array.from(form.elements).indexOf(checkedStar);

    for(let i = 0; i <= checkedIndex; i++) {
        labels[i].firstElementChild.classList.add('active');
    }
    for(let i = checkedIndex + 1; i < labels.length; i++) {
        labels[i].firstElementChild.classList.remove('active');
    }
});
