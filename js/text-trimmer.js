let pElements = document.querySelectorAll('p');
pElements.forEach(function(p) {
    if (p.textContent.length > 250) {
        p.textContent = p.textContent.slice(0, 300) + '...';
    }
});