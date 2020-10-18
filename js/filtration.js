let select = document.querySelector('.select-theme');
let articles = document.querySelectorAll('.articles');
let articlesBig = document.querySelectorAll('.article-big');

select.onchange = function () {
  for (let article of articles) {
    if (article.dataset.tag !== select.value && select.value !== 'all')  {
      article.classList.add('hidden-block');
    } else if (select.value === 'all') {
        for (let articleBig of articlesBig) {
          articleBig.style.marginTop = '62' + 'px';
        };
        article.classList.remove('hidden-block');
    } else {
        article.classList.remove('hidden-block');
        article.style.marginTop = '0';
    }
  }
}