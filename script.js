const btn = document.querySelector('.share-btn');
const share = document.querySelector('.share-cont')
btn.addEventListener('click', function() {
    share.classList.toggle('hide');
});
