/* 1. Создание анимации перехода формы на панеле регистрации и входа.*/
const signInBtn = document.querySelector('.signin-btn');    // создаем переменную находя блок по классу
const signUpBtn = document.querySelector('.signup-btn');   //  создаем переменную находя блок по классу
const formBox = document.querySelector('.form-box');      //   создаем переменную находя блок по классу
const body = document.body;
/*
*1. Начало.
*2. Прописываем переменные, обозначающие кнопку регистрации и входа (создание переменных которые не будут меняться).
*3. Проверка условия (навешиваем слушатель событий на click по кнопкам регистрации и входа) (создание переменной, которая будет меняться).
*   3.1. Если мы нажимаем на кнопку регистрация ('signup-btn') блоку формы ('form-box') добавляется класс "active".
*      3.2. Если мы нажимаем на кнопку входа ('signin-btn') класс "active" удаляется из блока формы ('form-box').
* 4. Конец.
* Блок-схема: "/images/Block__diagram.png"
*/
signUpBtn.addEventListener('click', function () {       // навешиваем слушатель событий click на кнопку регистрации  и устанавливаем модификатор 'active' на элемент ('form-box')
    formBox.classList.add('active');
    body. classList.add('active')
});

signInBtn.addEventListener('click', function () {      // навешиваем слушатель событий click на кнопку входа и удаляем модификатор 'active' на элементе ('form-box')
    formBox.classList.remove('active');
    body. classList.remove('active')
});
