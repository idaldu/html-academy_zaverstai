let select = document.querySelector('.select-theme');
let articles = document.querySelectorAll('.articles');

select.onchange = function () {
  for (let article of articles) {
    if (article.dataset.tag !== select.value && select.value !== 'all')  {
      article.classList.add('hidden');
    } else {
      article.classList.remove('hidden');
    }
  }
}