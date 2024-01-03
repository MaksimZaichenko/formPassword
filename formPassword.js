document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
    let el = document.getElementById('main-form')

    let name = el.name.value;
    let pass = el.pass.value;
    let repass = el.repass.value;
    let state = el.state.value
    let fail = "";


    if (name === "" || pass === "" || state === "")
        fail = "Заполните все поля"
    else if (name.length <= 1 || name.length > 50)
        fail = "Введите корректное имя";
    else if (pass !== repass)
        fail = "Пароли должны совпадать";
    else if (pass.split("&").length > 1)
        fail = "Некорректный пароль";
    if (fail !== "") {
        document.getElementById('error').innerHTML = fail;
    } else {
        alert("Все данные корректно заполнены");
        window.location = 'https://dzen.ru/?clid=2411725&yredirect=true';

    }
}