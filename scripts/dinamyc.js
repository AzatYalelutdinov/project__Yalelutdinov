/* Задание 3.5 часть 1*/
const cardsPrice = document.querySelector('.tests__section');
 
if(cardsPrice){
    const testsList =cardsPrice.querySelector('.tests__list');

    /*const cardsPriceData = {
        card1: {
            level: 'Начальный уровень',
            tasks: '100',
            description: 'заданий для выполнения',
            button: 'Пройти тест'

        },
        card2: {
            level: 'Средний уровень',
            tasks: '200',
            description: 'заданий для выполнения',
            button: 'Пройти тест'

        },
        card3: {
            level: 'Продвинутый уровень',
            tasks: '300',
            description: 'заданий для выполнения',
            button: 'Пройти тест'

        },
    }*/
    const createCard = (level, tasks, description, button) => {
        const card = `
    <li class="tests__item">
        <p class="tests__level">${level}</p>
        <p class="tests__tasks">${tasks}</p>
        <p class="tests__description">${description}</p>
        <button class="tests__button button">${button}</button>
    </li>
    `;
    return card;
    }

    /*for (const cardKey in cardsPriceData) {
        const card = cardsPriceData[cardKey];
        const cardElement = createCard(card.level, card.tasks, card.description, card.button);
        testsList.insertAdjacentHTML('beforeend', cardElement);
    }*/



 
const apiUrl = 'data.json';
fetch(apiUrl)
.then(response => response.json())
.then(data => {
    console.log(data); // Данные
    console.log(typeof (data)); // Тип полученных данных

    // for (const item in data) {
    //     const card = data[item];

    //     const cardElement = createCard(card.link, card.icon, card.iconAlt, card.iconWidth, card.iconHeight, card.title, card.description);
    //     cardList.insertAdjacentHTML('beforeend', cardElement);
    // }

    data.forEach(card => {
        const cardElement = createCard(card.level, card.tasks, card.description, card.button);
        testsList.insertAdjacentHTML('beforeend', cardElement);
    });
})
.catch(error => {
    console.error('Ошибка при загрузке данных:', error);
});
}