let textArea = document.querySelector('.message-text-area');
let warningForm = document.querySelector('.line-length');
let btnForm = document.querySelector('.btn-comment');

textArea.oninput = function () {
  if (textArea.value.length < '10') {
    warningForm.classList.remove('hidden')
    warningForm.textContent = 'Использовано меньше 10 символов, сейчас: ' + textArea.value.length;
  } else if (textArea.value.length > '200') {
    warningForm.textContent = 'Использовано больше 200 символов, сейчас: ' + textArea.value.length;
    warningForm.classList.remove('hidden');
  } else {
    btnForm.disabled = false;
    warningForm.classList.add('hidden');
    warningForm.classList.remove('warning-form')
    textArea.classList.remove('warning-form')
  }
  
}
  
btnForm.onclick = function () {
  if (textArea.value.length < '10' && textArea.value.length > '0') {
    btnForm.disabled = true;
    warningForm.classList.add('warning-form')
    textArea.classList.add('warning-form')
  } else if (textArea.value.length > '200') {
      btnForm.disabled = true;
      warningForm.classList.add('warning-form')
      textArea.classList.add('warning-form')
  }
}