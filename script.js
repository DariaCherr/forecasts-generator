const button = document.querySelector('.forecast-btn');
const forecastTemplate = document.querySelector('#forecast-item');
const forecastContainer = document.querySelector('.forecasts');
const forecastTitle = document.querySelector('.current-forecast h1');
const forecastChance = document.querySelector('.current-forecast p');


const firstForecast = 'Найдешь хорошую работу';
const secondForecast = 'Будет мир во всем мире';
const thirdForecast = 'Хорошие новости';
const fourthForecast = 'Все будет хорошо';
const fifthForecast = 'Грядут перемены к лучшему';

function generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function addForecast() {
    const newForecast = forecastTemplate.content;
    newForecast.querySelector('h3').textContent = forecastTitle.textContent;
    newForecast.querySelector('p').textContent = forecastChance.textContent;
    return newForecast;
}

button.addEventListener('click', function() {
    if (forecastTitle.textContent && forecastChance.textContent) {
        const newForecasts = addForecast();
        forecastContainer.prepend(newForecasts);
    }

    let random = generateRandomValue(0, 5);

    switch (random) {
        case 0:
            forecastTitle.textContent = firstForecast
            break;
        case 1:
            forecastTitle.textContent = secondForecast
            break;
        case 2:
            forecastTitle.textContent = thirdForecast
            break;
        case 3:
            forecastTitle.textContent = fourthForecast
            break;
        case 4:
            forecastTitle.textContent = fifthForecast
            break;
    }

    let amount = generateRandomValue(0, 100);
    forecastChance.textContent = 'Вероятность: ' + amount + '%';
})

/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */