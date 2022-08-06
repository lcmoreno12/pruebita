function validateForm() {

    let nameValue = document.forms["feedBack__Form"]["form__Name"].value;
    let lastNameValue = document.forms["feedBack__Form"]["form__LastName"].value;
    let emailValue = document.forms["feedBack__Form"]["form__Email"].value;
    let commentsValue = document.forms["feedBack__Form"]["form__Comments"].value;

    if (nameValue == "" || lastNameValue == "" || emailValue == "" || commentsValue == "") {
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

function subscribeNewsletter() {
    let emailValue = document.querySelector('#inputEmailInfo').value;
    const VALID_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailValue.match(VALID_REGEX)) {
        alert("Felicidades te has suscripto!😊");
    } else if (emailValue == "") {
        alert("⚠️El campo de mail debe estar completo para suscribirte!");
    } else {
        alert("El valor ingresado no es válido!☹️");
    }
}

function search() {
    alert("No se pudo encontrar la info solicitada☹️");
}


