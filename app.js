function validateForm() {
    
    let nameValue = document.forms["feedBack__Form"]["form__Name"].value;
    let lastNameValue = document.forms["feedBack__Form"]["form__LastName"].value;
    let emailValue = document.forms["feedBack__Form"]["form__Email"].value;
    let commentsValue = document.forms["feedBack__Form"]["form__Comments"].value;

    if (nameValue == "" || lastNameValue == "" || emailValue == ""  || commentsValue == "" ) {
      alert("Todos los campos deben estar completos");
      return false;
    }
        alert("Comentarios enviados con éxito");
}

const questions = document.querySelectorAll('.question');

questions.forEach((question) => question.addEventListener('click', () => {
    if (question.parentNode.classList.contains('active')) {
        question.parentNode.classList.toggle('active');
    } else {
        questions.forEach((question) => question.parentNode.classList.remove('active'))
        question.parentNode.classList.add('active');
    }
}));