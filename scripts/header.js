const headerMenu = document.querySelector(".header__menu");

if(headerMenu) {
    const headerList = headerMenu.querySelector(".menu");
    
    const menuData = {
        link1: {
            link: '#',
            title: 'Главная',
        },
        link2: {
            link: '#',
            title: 'Уроки',
        },
        link3: {
            UrlLink: 'tests.html',
            title: 'Тесты',
        },
        link4: {
            link: '#',
            title: 'Домащняя работа',
        },
        link5: {
            link: '#',
            title: 'Контакты',
        }
    }
    const createLink = (Urllink, title) =>{
        const link = `
        <li class="menu__item"><a class="menu__link" href="${Urllink}" target="_blank"> ${title}</a></li>
        `;
        return link;
    }
    
    for (const linkItem in menuData) {
        const link = menuData[linkItem];
        const linkIndex = createLink(link.Urllink, link.title);
        headerList.insertAdjacentHTML('beforeend', linkIndex);
    }
}