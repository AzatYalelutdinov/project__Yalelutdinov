const headerMenu = document.querySelector('.header__menu');
if (headerMenu){
        const headerList = headerMenu.querySelector('.menu');

        const menuData = {
            link1: {
                UrlLink: '#',
                title: 'Главная',
            },
            link2: {
                UrlLink: 'tests.html',

                title: 'Тесты',
            },
            link3: {
                UrlLink: 'konst.html',
                title: 'Уроки',
            },
            link4: {
                UrlLink: 'hw.html',
                title: 'Домашняя работа',
            },
            link5: {
                link: '#',
                title: 'Контакты',
            }
        }

        const createLink = (UrlLink, title) =>{
            const link = `
            <li class="header__item"><a href="${UrlLink}" class="header__link">${title}</a></li>
            `;
            return link;
        }

        for (const linkItem in menuData) {
            const link = menuData[linkItem];
            const linkIndex = createLink(link.UrlLink, link.title);
            headerList.insertAdjacentHTML('beforeend', linkIndex);

        }
}
console.log('Навигацинное меню создано с помощью javascript!');