export const ROOT = '/';
export const CATALOG = '/catalog';
export const CART = '/cart';
export const BLOG = '/blog';
export const VIEW_ONE = `{CATALOG}/:productID`;
export const ABOUT = '/about'
export const CONTACT = '/contact'

export const NAV = [
    {
        title: 'Главная',
        url: ROOT
    },
    {
        title: 'Каталог',
        url: CATALOG,
        children: {
            title: 'Посмотреть товар',
            url: VIEW_ONE

        }
    },
    {
        title: 'Корзина',
        url: CART
    },
    {
        title: 'Блог',
        url: BLOG
    },
    {
        title: 'О нас',
        url: ABOUT
    },
    {
        title: 'Контакты',
        url: CONTACT
    }
];
