let btnLikes = document.querySelector('.btn-likes');
let numLikes = document.querySelector('.number-likes');

btnLikes.onclick = function() {
    numLikes.classList.toggle('style-likes');
    if (numLikes.classList.contains('style-likes')) {
        numLikes.textContent++;
       } else {
        numLikes.textContent--;
       };
};

