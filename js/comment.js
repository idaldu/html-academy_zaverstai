let wrappComments = document.querySelector('.wrapper-comments');
let commentForm = document.querySelector('.wrapper-form-comment');
let inputName = document.querySelector('.input-name');
let InputText = document.querySelector('.message-text-area');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();
    let newElement = document.createElement('li');
    let newCommentHeader = document.createElement('div');
    let newCommentName = document.createElement('p');
    let newCommentText = document.createElement('p');
    let newAvatar = document.createElement('img');

    newElement.append(newCommentHeader);
    newElement.append(newCommentText);
    newCommentHeader.append(newAvatar);
    newCommentHeader.append(newCommentName);

    newCommentHeader.classList.add('comment-header');

    newCommentName.textContent = inputName.value;
    newCommentText.textContent = InputText.value;
    newAvatar.setAttribute('src', '../img/unauthorized.png');

    wrappComments.append(newElement);
    InputText.value = "";
};
