let fields = document.getElementsByClassName('form__input-text');
let errorMessages = {
    name: "Допускаются только русские буквы, пробелы и тире. Имя должно начинаться с буквы.",
    phone: "Номер телефона может содержать в себе только цифры, пробелы, \"-\" и ведущий \"+\"",
    email: "Введите адрес электронной почты в формате \"name.example.com\""

}

for (let element of fields) {
    element.addEventListener("input", function(event) {
        if (element.validity.patternMismatch || element.validity.typeMismatch) {
            element.setCustomValidity(errorMessages[element.name]);
        } else {
            element.setCustomValidity("");
        }
    });
}