export const categories = [
    {
        name: 'Аренда',
    },
];

export const facilities = [
    {
        name: 'Интернет',
    },
    {
        name: 'Кондиционер',
    },
    {
        name: 'Холодильник',
    },
    {
        name: 'Плита',
    },
    {
        name: 'Микроволновая печь',
    },
    {
        name: 'Посудомоечная машина',
    },
    {
        name: 'Стиральная машина',
    },
    {
        name: 'Духовка',
    },
    {
        name: 'Кофеварка',
    },
    {
        name: 'Телевизор',
    },
    {
        name: 'Душевая кабина',
    },
    {
        name: 'Класическая ванна',
    },
    {
        name: 'Полотенца',
    },
    {
        name: 'Постельное бельё',
    },
    {
        name: 'Фен',
    },
    {
        name: 'Утюг',
    },
    {
        name: 'Сушилка',
    },
    {
        name: 'Лифт',
    },
    {
        name: 'Сейф',
    },
].map((obj, index) => ({ id: index + 1, ...obj }));

// export const flats = [
//     {
//         name: 'Квартира',
//         imageUrl: 'https://avatars.mds.yandex.net/i?id=dfa66914531b1f425d25a542eab460a2_l-4589571-images-thumbs&n=13',
//         price: 1000,
//         phone: '8 (800) 555-35-35',
//         address: 'г. Москва, ул. Ленина, д. 10, кв. 1',
//         categoryId: 1,
//         facilities: {
//             connect: facilities.slice(0, 5),
//             // connect: [{id: 1}, {id: 2}],
//         }
//     },
//     {
//         name: 'Квартира',
//         imageUrl: 'https://avatars.mds.yandex.net/i?id=dfa66914531b1f425d25a542eab460a2_l-4589571-images-thumbs&n=13',
//         price: 2000,
//         phone: '8 (800) 555-35-35',
//         address: 'г. Москва, ул. Ленина, д. 10, кв. 1',
//         categoryId: 1,
//         facilities: {
//             connect: facilities.slice(3, 8),
//             // connect: [{id: 1}, {id: 2}],
//         }
//     },
//     {
//         name: 'Квартира',
//         imageUrl: 'https://avatars.mds.yandex.net/i?id=dfa66914531b1f425d25a542eab460a2_l-4589571-images-thumbs&n=13',
//         price: 3000,
//         phone: '8 (800) 555-35-35',
//         address: 'г. Москва, ул. Ленина, д. 10, кв. 1',
//         categoryId: 1,
//         facilities: {
//             connect: facilities.slice(9, 12),
//             // connect: [{id: 1}, {id: 2}],
//         }
//     },
//     {
//         name: 'Квартира',
//         imageUrl: 'https://avatars.mds.yandex.net/i?id=dfa66914531b1f425d25a542eab460a2_l-4589571-images-thumbs&n=13',
//         price: 4000,
//         phone: '8 (800) 555-35-35',
//         address: 'г. Москва, ул. Ленина, д. 10, кв. 1',
//         categoryId: 1,
//         facilities: {
//             connect: facilities.slice(12, 15),
//             // connect: [{id: 1}, {id: 2}],
//         }
//     },
//     {
//         name: 'Квартира',
//         imageUrl: 'https://avatars.mds.yandex.net/i?id=dfa66914531b1f425d25a542eab460a2_l-4589571-images-thumbs&n=13',
//         price: 5000,
//         phone: '8 (800) 555-35-35',
//         address: 'г. Москва, ул. Ленина, д. 10, кв. 1',
//         categoryId: 1,
//         facilities: {
//             connect: facilities.slice(14, 17),
//             // connect: [{id: 1}, {id: 2}],
//         }
//     },
// ]