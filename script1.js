// Дз 1
// У вас на странице есть два поля для заполнения(input):
// 1) нужен для записи имени пользователя
// 2) для пароли.Пароль обязательно должен содержать сочетание букв и цифр
// Добавьте кнопку "сохранить" после которой на странице должно выходить сообщение:
// Если всё хорошо, то "Ваши данные записаны" иначе должно выйти сообщение 
// "пароль должен содержать сочетание букв и цифр"
// Доп задание: первый инпут должен принимать только латинские буквы.Для решения 
// воспользуйтесь этим - str.replace(/[A-Za-z]/, '')
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageElement = document.getElementById('message');
const btnSave = document.getElementById('btn-save');

btnSave.onclick = () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!/^[a-zA-Z]+$/.test(username)) {
    messageElement.textContent = "Имя пользователя должно содержать только латинские буквы";
    return;
  }

  if (!/[a-zA-Z0-9]+/.test(password)) {
    messageElement.textContent = "пароль должен содержать сочетание букв и цифр";
    return;
  }

  console.log(`Сохранение данных: ${username}, ${password}`);
  messageElement.textContent = "Ваши данные успешно записаны";
};




